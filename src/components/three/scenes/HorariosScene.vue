<template>
  <TresGroup :position="[0, -1.7, 0]" :scale="[1.3, 1.3, 1.3]">
    <Island :scale="0.74" />

    <House :position="[0.55, 0, -0.35]" :rotation="[0, -0.35, 0]" :scale="1.35" :delay="0.15" />
    <Tree :position="[-1.4, 0, 0.1]" :scale="1.2" :delay="0.45" />
    <PegDoll :color="brand.orange" :hat="brand.blue" :position="[-0.45, 0, 1.05]" :scale="1.3" :delay="0.6" />
    <PegDoll :color="brand.pink" :position="[0.35, 0, 1.3]" :scale="1.05" :delay="0.7" />

    <Sun :position="[-1.6, 2.35, -0.3]" :scale="1.35" :delay="0.9" />
    <Cloud :position="[1.65, 2.6, -0.2]" :scale="1.2" :delay="1" />
  </TresGroup>
</template>

<script setup lang="ts">
// Página "Horarios": la casita con el sol de la jornada.
import Cloud from '../models/Cloud.vue'
import House from '../models/House.vue'
import Island from '../models/Island.vue'
import PegDoll from '../models/PegDoll.vue'
import Sun from '../models/Sun.vue'
import Tree from '../models/Tree.vue'
import { brand } from '../lib/palette'
</script>
