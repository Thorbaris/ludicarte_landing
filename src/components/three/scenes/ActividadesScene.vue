<template>
  <TresGroup :position="[0, -1.7, 0]" :scale="[1.3, 1.3, 1.3]">
    <Island :scale="0.74" />

    <Blocks :position="[-0.95, 0, -0.25]" :rotation="[0, 0.3, 0]" :scale="1.9" :delay="0.15" />

    <Toy
      v-for="(crayon, index) in crayons"
      :key="crayon.color"
      :position="crayon.position"
      :rotation="[0, 0, crayon.lean]"
      :scale="1.35"
      :delay="0.45 + index * 0.1"
    >
      <TresGroup :position="[0, 0.4, 0]">
        <ToyShape type="crayon" :color="crayon.color" />
      </TresGroup>
    </Toy>

    <Toy :position="[0.15, 0, 1.15]" :delay="0.8" :hop="1.3">
      <TresMesh :position="[0, 0.32, 0]">
        <TresSphereGeometry :args="[0.32, 28, 20]" />
        <TresMeshStandardMaterial :color="brand.orange" v-bind="matte" />
      </TresMesh>
    </Toy>
    <Toy :position="[-1.4, 0, 1.0]" :delay="0.9">
      <TresGroup :position="[0, 0.16, 0]" :rotation="[Math.PI / 2, 0, 0]">
        <ToyShape type="ring" :color="brand.pink" />
      </TresGroup>
    </Toy>

    <Toy :position="[1.75, 2.5, 0]" :float="0.1" :spin="0.6" :delay="1.05">
      <ToyShape type="star" :color="extra.sun" />
    </Toy>
    <Cloud :position="[-1.75, 2.8, -0.4]" :delay="1.15" />
  </TresGroup>
</template>

<script setup lang="ts">
// Página "Actividades": bloques, crayones y pelota.
import Toy from '../Toy.vue'
import Blocks from '../models/Blocks.vue'
import Cloud from '../models/Cloud.vue'
import Island from '../models/Island.vue'
import ToyShape from '../models/ToyShape.vue'
import { brand, extra, matte } from '../lib/palette'

const crayons: { color: string, position: [number, number, number], lean: number }[] = [
  { color: brand.pink, position: [0.75, 0, -0.45], lean: 0.1 },
  { color: brand.blue, position: [1.2, 0, -0.2], lean: -0.08 },
  { color: brand.green, position: [1.55, 0, 0.25], lean: -0.2 },
]
</script>
