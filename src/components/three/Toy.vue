<template>
  <TresGroup :position="position" :rotation="rotation" :scale="[scale, scale, scale]">
    <TresGroup ref="inner">
      <slot />
    </TresGroup>
  </TresGroup>
</template>

<script setup lang="ts">
// Envoltorio de cada juguete: aparece con rebote, flota y salta/se aplasta al tocarlo.
import { onBeforeUnmount, onMounted, shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'
import type { Group } from 'three'
import { motion, registerToy, unregisterToy } from './lib/interaction'
import type { PokeKind } from './lib/interaction'

const props = withDefaults(defineProps<{
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  /** Segundos de espera antes de aparecer */
  delay?: number
  /** Amplitud de la flotación (0 = apoyado en el suelo) */
  float?: number
  floatSpeed?: number
  /** Giro continuo en rad/s */
  spin?: number
  /** Multiplicador de la altura del salto */
  hop?: number
  interactive?: boolean
}>(), {
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: 1,
  delay: 0,
  float: 0,
  floatSpeed: 1,
  spin: 0,
  hop: 1,
  interactive: true,
})

const emit = defineEmits<{ tap: [] }>()

const inner = shallowRef<Group>()
const phase = Math.random() * Math.PI * 2

let time = 0
let pop = motion.reduced ? 1 : 0
let popVelocity = 0
let squash = 0
let squashVelocity = 0
let height = 0
let heightVelocity = 0

function poke(kind: PokeKind) {
  if (kind === 'tap') emit('tap')
  if (pop < 0.5 || height > 0.02) return
  heightVelocity = (kind === 'hover' ? 2.3 : 3.6) * props.hop
  squashVelocity += 2.5
}

defineExpose({ poke })

onMounted(() => {
  if (props.interactive && inner.value) registerToy(inner.value, { poke })
})

onBeforeUnmount(() => {
  if (inner.value) unregisterToy(inner.value)
})

const { onBeforeRender } = useLoop()

onBeforeRender(({ delta, elapsed }) => {
  const group = inner.value
  if (!group) return
  const dt = Math.min(delta, 1 / 30)
  time += dt

  if (time >= props.delay && pop !== 1) {
    popVelocity += ((1 - pop) * 170 - popVelocity * 14) * dt
    pop += popVelocity * dt
    if (Math.abs(1 - pop) < 0.001 && Math.abs(popVelocity) < 0.01) pop = 1
  }

  if (height > 0 || heightVelocity > 0) {
    heightVelocity -= 15 * dt
    height += heightVelocity * dt
    if (height <= 0) {
      squashVelocity -= Math.min(5, -heightVelocity) * 0.9
      height = 0
      heightVelocity = 0
    }
  }

  squashVelocity += (-squash * 220 - squashVelocity * 11) * dt
  squash += squashVelocity * dt

  const bob = props.float && !motion.reduced ? Math.sin(elapsed * props.floatSpeed + phase) * props.float : 0
  group.position.y = height + bob
  if (props.spin && !motion.reduced) group.rotation.y += props.spin * dt

  const size = Math.max(pop, 0.0001)
  group.visible = pop > 0.001
  group.scale.set(size * (1 - squash * 0.5), size * (1 + squash), size * (1 - squash * 0.5))
})
</script>
