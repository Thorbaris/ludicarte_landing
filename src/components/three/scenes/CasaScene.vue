<template>
  <TresGroup :position="[0, -1.25, 0]">
    <Island />

    <House :position="[-1.7, 0, -0.6]" :rotation="[0, 0.5, 0]" :scale="1.15" :delay="0.15" />
    <Rainbow :position="[0.55, 0, -0.45]" :rotation="[0, -0.12, 0]" :delay="0.3" />

    <Tree :position="[-2.25, 0, 0.75]" :scale="0.9" :delay="0.75" />
    <Tree variant="round" :color="extra.grassDark" :position="[2.05, 0, -1.2]" :scale="1.15" :delay="0.85" />
    <Tree :position="[2.45, 0, -0.35]" :scale="0.75" :delay="0.95" />

    <PegDoll :color="brand.blue" :hat="brand.orange" :position="[-0.95, 0, 1.2]" :scale="1.1" :delay="1.05" />
    <PegDoll :color="brand.pink" :position="[-0.25, 0, 1.7]" :scale="0.85" :delay="1.15" />
    <PegDoll :color="brand.green" :hat="brand.pink" :position="[1.2, 0, 1.3]" :delay="1.25" />

    <Blocks :position="[2.05, 0, 0.6]" :rotation="[0, -0.3, 0]" :delay="1.35" />
    <Toy :position="[0.5, 0, 1.9]" :delay="1.45" :hop="1.3">
      <TresMesh :position="[0, 0.2, 0]">
        <TresSphereGeometry :args="[0.2, 28, 20]" />
        <TresMeshStandardMaterial :color="brand.orange" v-bind="matte" />
      </TresMesh>
    </Toy>

    <Sun :position="[-2.35, 2.85, -1.2]" :delay="1.6" />
    <Cloud :position="[2.2, 2.9, -0.9]" :scale="1.15" :delay="1.7" />
    <Cloud :position="[-0.2, 3.35, -1.6]" :scale="0.8" :delay="1.8" />
  </TresGroup>
</template>

<script setup lang="ts">
// Escena principal: la "Casa Ludicarte" como un mundo de juguetes de madera.
import Toy from '../Toy.vue'
import Blocks from '../models/Blocks.vue'
import Cloud from '../models/Cloud.vue'
import House from '../models/House.vue'
import Island from '../models/Island.vue'
import PegDoll from '../models/PegDoll.vue'
import Rainbow from '../models/Rainbow.vue'
import Sun from '../models/Sun.vue'
import Tree from '../models/Tree.vue'
import { brand, extra, matte } from '../lib/palette'
</script>
