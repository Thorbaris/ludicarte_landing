<template>
  <TresGroup :position="position" :rotation="rotation" :scale="[scale, scale, scale]">
    <Toy
      v-for="(arc, index) in arcs"
      :key="arc.color"
      :ref="(toy) => (toys[index] = toy as ToyInstance)"
      :delay="delay + index * 0.12"
      :hop="1 - index * 0.08"
      @tap="celebrate(index)"
    >
      <TresMesh :geometry="arc.geometry">
        <TresMeshStandardMaterial :color="arc.color" v-bind="matte" />
      </TresMesh>
    </Toy>
  </TresGroup>
</template>

<script setup lang="ts">
// El arcoíris del logo, convertido en el clásico arcoíris apilable de madera.
import Toy from '../Toy.vue'
import { archGeometry } from '../lib/geometry'
import { motion, pointer } from '../lib/interaction'
import { brand, matte } from '../lib/palette'

type ToyInstance = InstanceType<typeof Toy>

withDefaults(defineProps<{
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  delay?: number
}>(), {
  position: () => [0, 0, 0],
  rotation: () => [0, 0, 0],
  scale: 1,
  delay: 0,
})

const DEPTH = 0.72

const arcs = [
  { color: brand.pink, geometry: archGeometry(1.6, 1.28, DEPTH) },
  { color: brand.orange, geometry: archGeometry(1.23, 0.91, DEPTH) },
  { color: brand.blue, geometry: archGeometry(0.86, 0.54, DEPTH) },
  { color: brand.green, geometry: archGeometry(0.49, 0.17, DEPTH) },
]

const toys: ToyInstance[] = []

function celebrate(tapped: number) {
  toys.forEach((toy, index) => {
    if (index !== tapped) setTimeout(() => toy?.poke('jump'), Math.abs(index - tapped) * 90)
  })

  if (motion.reduced) return
  import('canvas-confetti').then(({ default: confetti }) => {
    confetti({
      particleCount: 70,
      spread: 80,
      startVelocity: 34,
      scalar: 0.9,
      colors: Object.values(brand),
      origin: {
        x: pointer.clientX / window.innerWidth,
        y: pointer.clientY / window.innerHeight,
      },
    })
  })
}
</script>
