<template>
  <TresPerspectiveCamera :position="[0, 0, DISTANCE]" :fov="FOV" :near="1" :far="80" />

  <TresHemisphereLight :args="['#ffffff', '#ffe4cc', 1.6]" />
  <TresDirectionalLight :position="[-6, 3, 9]" :intensity="0.55" color="#ffe9f1" />

  <!-- El ancla sigue en pantalla al elemento [data-stage] del DOM -->
  <TresGroup ref="anchor">
    <TresDirectionalLight ref="keyLight" :position="[3.4, 7.5, 5.5]" :intensity="2.1" color="#fff4e2" :cast-shadow="true" />
    <TresGroup ref="content">
      <TresGroup ref="tilt">
        <component :is="scene" v-if="scene" />
      </TresGroup>
    </TresGroup>
  </TresGroup>

  <AmbientToys :view-height="VIEW_HEIGHT" :distance="DISTANCE" />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, shallowRef } from 'vue'
import type { Component } from 'vue'
import { useLoop, useTres } from '@tresjs/core'
import { MathUtils, Raycaster, Vector2 } from 'three'
import type { DirectionalLight, Group, Material, Mesh } from 'three'
import AmbientToys from './AmbientToys.vue'
import ActividadesScene from './scenes/ActividadesScene.vue'
import CasaScene from './scenes/CasaScene.vue'
import EquipoScene from './scenes/EquipoScene.vue'
import HorariosScene from './scenes/HorariosScene.vue'
import { DESIGN, findToy, motion, pointer, toyRoots } from './lib/interaction'
import type { ToyHandle } from './lib/interaction'

const FOV = 26
const DISTANCE = 20
// Alto visible sobre el plano z = 0: permite convertir píxeles del DOM a unidades de mundo
const VIEW_HEIGHT = 2 * DISTANCE * Math.tan(MathUtils.degToRad(FOV / 2))

// Sobre estos elementos el puntero no "toca" los juguetes que quedan detrás
const UI_SELECTOR = 'a, button, input, select, textarea, label, [data-solid]'

const scenes: Record<string, Component> = {
  casa: CasaScene,
  equipo: EquipoScene,
  actividades: ActividadesScene,
  horarios: HorariosScene,
}

const scene = shallowRef<Component | null>(null)
const anchor = shallowRef<Group>()
const content = shallowRef<Group>()
const tilt = shallowRef<Group>()
const keyLight = shallowRef<DirectionalLight>()

const { camera, sizes } = useTres()
const raycaster = new Raycaster()
const ndc = new Vector2()

let stage: HTMLElement | null = null
let hovered: ToyHandle | null = null
let pointerMoved = false
let parallaxX = 0
let parallaxY = 0
let lastFit = 0
let shadowPasses = 0
let frame = 0

function findStage() {
  stage = document.querySelector<HTMLElement>('[data-stage]')
  scene.value = (stage && scenes[stage.dataset.stage ?? '']) || null
  // Las mallas se montan en los siguientes frames: se les activa la sombra durante unos cuantos
  shadowPasses = 30
}

function pick(clientX: number, clientY: number) {
  if (!camera.value) return null
  ndc.set((clientX / sizes.width.value) * 2 - 1, -(clientY / sizes.height.value) * 2 + 1)
  raycaster.setFromCamera(ndc, camera.value)
  const [hit] = raycaster.intersectObjects(toyRoots, true)
  return hit ? findToy(hit.object) : null
}

function isOverUi(target: EventTarget | null) {
  return target instanceof Element && !!target.closest(UI_SELECTOR)
}

function onPointerMove(event: PointerEvent) {
  pointer.clientX = event.clientX
  pointer.clientY = event.clientY
  pointer.overUi = isOverUi(event.target)
  if (event.pointerType === 'mouse') {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
  }
  pointerMoved = true
}

function onClick(event: MouseEvent) {
  if (isOverUi(event.target)) return
  pointer.clientX = event.clientX
  pointer.clientY = event.clientY
  pick(event.clientX, event.clientY)?.poke('tap')
}

onMounted(() => {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', findStage, { once: true })
  else findStage()
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('click', onClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('DOMContentLoaded', findStage)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('click', onClick)
})

function setupLight(light: DirectionalLight, parent: Group) {
  parent.add(light.target)
  light.shadow.mapSize.set(1536, 1536)
  light.shadow.bias = -0.0005
  light.shadow.radius = 4
}

// El ancla se escala con el tamaño del escenario, así que la cámara de sombras debe acompañarla
function fitShadow(light: DirectionalLight, fit: number) {
  const shadowCamera = light.shadow.camera
  const reach = 4.6 * fit
  shadowCamera.left = -reach
  shadowCamera.right = reach
  shadowCamera.top = reach
  shadowCamera.bottom = -reach
  shadowCamera.near = 0.5 * fit
  shadowCamera.far = 24 * fit
  shadowCamera.updateProjectionMatrix()
  light.shadow.normalBias = 0.04 * fit
}

function enableShadows(root: Group) {
  root.traverse((object) => {
    const mesh = object as Mesh
    if (!mesh.isMesh) return
    mesh.castShadow = !(mesh.material as Material).transparent
    mesh.receiveShadow = mesh.castShadow
  })
}

useLoop().onBeforeRender(({ delta, elapsed }) => {
  const width = sizes.width.value
  const height = sizes.height.value
  const anchorGroup = anchor.value
  const contentGroup = content.value
  const tiltGroup = tilt.value
  const light = keyLight.value
  if (!width || !height || !anchorGroup || !contentGroup || !tiltGroup || !light) return

  if (!light.target.parent) setupLight(light, anchorGroup)
  if (shadowPasses > 0) {
    shadowPasses--
    enableShadows(contentGroup)
  }

  // 1. Colocar la escena justo donde está su hueco en el DOM
  const rect = stage?.getBoundingClientRect()
  const pxToWorld = VIEW_HEIGHT / height
  const fit = rect ? Math.min(rect.width / DESIGN.width, rect.height / DESIGN.height) * pxToWorld : 0
  contentGroup.visible = !!rect && fit > 0 && rect.bottom > -80 && rect.top < height + 80
  if (rect && contentGroup.visible) {
    anchorGroup.position.set(
      (rect.left + rect.width / 2 - width / 2) * pxToWorld,
      -(rect.top + rect.height / 2 - height / 2) * pxToWorld,
      0,
    )
    anchorGroup.scale.setScalar(fit)
    if (fit !== lastFit) {
      lastFit = fit
      fitShadow(light, fit)
    }
  }

  // 2. Inclinación: vista 3/4, balanceo suave, puntero y giro al hacer scroll
  const ease = 1 - Math.exp(-Math.min(delta, 1 / 30) * 4)
  parallaxX += (pointer.x - parallaxX) * ease
  parallaxY += (pointer.y - parallaxY) * ease
  const sway = motion.reduced ? 0 : Math.sin(elapsed * 0.4) * 0.09
  const scrollTurn = motion.reduced ? 0 : Math.min(window.scrollY, 900) * 0.0007
  tiltGroup.rotation.set(0.36 - parallaxY * 0.06, parallaxX * 0.3 + sway + scrollTurn, 0)

  // 3. Juguete bajo el puntero
  if (pointerMoved) {
    pointerMoved = false
    const toy = pointer.overUi ? null : pick(pointer.clientX, pointer.clientY)
    if (toy !== hovered) {
      hovered = toy
      toy?.poke('hover')
    }
    if (stage) stage.style.cursor = toy ? 'pointer' : ''
  }

  // Tras los primeros frames ya hay imagen: se oculta el logo de respaldo del escenario
  if (++frame === 3) document.documentElement.classList.add('scene-ready')
})
</script>
