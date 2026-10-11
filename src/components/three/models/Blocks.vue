<template>
  <Toy>
    <TresMesh
      v-for="(block, index) in blocks"
      :key="index"
      :geometry="cube"
      :position="[block.x, SIZE / 2 + index * SIZE, 0]"
      :rotation="[0, block.turn, 0]"
    >
      <TresMeshStandardMaterial :color="block.color" v-bind="matte" />
    </TresMesh>
  </Toy>
</template>

<script setup lang="ts">
// Torre de cubos de madera pintada
import Toy from '../Toy.vue'
import { roundedBox } from '../lib/geometry'
import { brand, matte } from '../lib/palette'

const SIZE = 0.38
const cube = roundedBox(SIZE, SIZE, SIZE, 0.045)

const blocks = [
  { color: brand.orange, x: 0, turn: 0.1 },
  { color: brand.blue, x: 0.03, turn: 0.55 },
  { color: brand.pink, x: -0.02, turn: -0.2 },
]
</script>
