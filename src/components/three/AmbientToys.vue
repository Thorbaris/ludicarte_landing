<template>
  <TresGroup v-for="(toy, index) in toys" :key="index" :ref="(group) => (groups[index] = group as Group)">
    <Toy
      :rotation="toy.rotation"
      :scale="toy.size"
      :float="0.14"
      :float-speed="toy.floatSpeed"
      :spin="toy.spin"
      :delay="0.5 + index * 0.07"
      :hop="0.7"
    >
      <ToyShape :type="toy.type" :color="toy.color" />
    </Toy>
  </TresGroup>
</template>

<script setup lang="ts">
// Juguetes que flotan en los bordes de la página y se desplazan con el scroll (parallax).
import { useLoop, useTres } from '@tresjs/core'
import { MathUtils } from 'three'
import type { Group } from 'three'
import Toy from './Toy.vue'
import ToyShape from './models/ToyShape.vue'
import type { ToyShapeType } from './models/ToyShape.vue'

const props = defineProps<{
  /** Alto visible (en unidades de mundo) sobre el plano z = 0 */
  viewHeight: number
  /** Distancia de la cámara al plano z = 0 */
  distance: number
}>()

// Tonos suaves: a medio camino entre el color corporativo y su pastel, para no competir con el texto
const soft = ['#ffa8c8', '#ffc45a', '#7ad8fe', '#c5da65']
const types: ToyShapeType[] = ['cube', 'star', 'ball', 'heart', 'ring', 'crayon', 'arch']

// Los juguetes se reparten a lo largo de SPAN pantallas de alto y reaparecen al dar la vuelta
const SPAN = 2.6
// Ancho en píxeles que ocupa el contenido de la página: los juguetes quedan fuera de él
const CONTENT_WIDTH = 1216
const COUNT = 16

interface AmbientToy {
  type: ToyShapeType
  color: string
  side: -1 | 1
  /** Posición dentro del margen libre: 0 = borde de la pantalla, 1 = junto al contenido */
  inset: number
  /** Posición vertical inicial dentro del recorrido (0..1) */
  v: number
  z: number
  size: number
  speed: number
  spin: number
  floatSpeed: number
  rotation: [number, number, number]
}

// Pseudoaleatorio con semilla fija: la composición es siempre la misma
let seed = 7
function random() {
  seed = (seed * 16807) % 2147483647
  return (seed - 1) / 2147483646
}

const toys: AmbientToy[] = Array.from({ length: COUNT }, (_, index) => {
  const z = -3 - random() * 6
  return {
    type: types[index % types.length],
    color: soft[(index * 3 + 1) % soft.length],
    side: index % 2 === 0 ? -1 : 1,
    inset: 0.1 + random() * 0.75,
    v: (index + random() * 0.6) / COUNT,
    z,
    size: 0.7 + random() * 0.55,
    speed: (props.distance / (props.distance - z)) * 0.75,
    spin: (random() - 0.5) * 0.7,
    floatSpeed: 0.5 + random() * 0.6,
    rotation: [random() * 0.9 - 0.45, random() * Math.PI, random() * 0.9 - 0.45],
  }
})

const groups: Group[] = []
const { sizes } = useTres()

useLoop().onBeforeRender(() => {
  const width = sizes.width.value
  const height = sizes.height.value
  if (!width || !height) return

  const halfWidth = (props.viewHeight * (width / height)) / 2
  const travel = SPAN * props.viewHeight
  const scroll = window.scrollY * (props.viewHeight / height)
  const compact = halfWidth < 3.6
  // Margen libre a cada lado del contenido (ancho máximo de 76rem), como fracción del medio ancho
  const margin = Math.max(0, 1 - CONTENT_WIDTH / width)
  const sizeFactor = MathUtils.clamp(halfWidth / 5.5, 0.6, 1)

  toys.forEach((toy, index) => {
    const group = groups[index]
    if (!group) return
    // En pantallas angostas se muestra la mitad para no tapar el contenido
    group.visible = !(compact && index % 4 >= 2)
    const depth = (props.distance - toy.z) / props.distance
    const lap = MathUtils.euclideanModulo(toy.v + (scroll * toy.speed) / travel, 1)
    group.position.set(toy.side * halfWidth * (1.02 - margin * toy.inset) * depth, (lap - 0.5) * travel * depth, toy.z)
    group.scale.setScalar(sizeFactor)
  })
})
</script>
