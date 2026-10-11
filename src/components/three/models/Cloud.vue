<template>
  <Toy :float="0.09" :float-speed="0.8" :hop="0.5">
    <TresMesh v-for="(puff, index) in puffs" :key="index" :position="puff.position" :scale="[1, 0.9, 0.9]">
      <TresSphereGeometry :args="[puff.radius, 24, 18]" />
      <TresMeshStandardMaterial :color="extra.cloud" :roughness="1" />
    </TresMesh>
  </Toy>
</template>

<script setup lang="ts">
import Toy from '../Toy.vue'
import { extra } from '../lib/palette'

const puffs: { position: [number, number, number], radius: number }[] = [
  { position: [0, 0, 0], radius: 0.34 },
  { position: [-0.38, -0.07, 0], radius: 0.25 },
  { position: [0.38, -0.06, 0.02], radius: 0.27 },
  { position: [0.14, 0.17, -0.05], radius: 0.26 },
]
</script>
