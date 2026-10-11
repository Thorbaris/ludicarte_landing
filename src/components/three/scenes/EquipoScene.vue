<template>
  <TresGroup :position="[0, -1.7, 0]" :scale="[1.3, 1.3, 1.3]">
    <Island :scale="0.74" />

    <Rainbow :position="[0, 0, -0.75]" :scale="0.9" :delay="0.15" />

    <PegDoll :color="brand.blue" :hat="brand.orange" :position="[-1.05, 0, 0.55]" :scale="1.75" :delay="0.6" />
    <PegDoll :color="brand.pink" :position="[0, 0, 0.95]" :scale="1.6" :delay="0.72" />
    <PegDoll :color="brand.green" :hat="brand.pink" :position="[1.05, 0, 0.55]" :scale="1.75" :delay="0.84" />

    <Toy :position="[1.85, 2.5, 0]" :rotation="[0, 0, -0.2]" :float="0.1" :spin="0.5" :delay="1">
      <ToyShape type="heart" :color="brand.pink" />
    </Toy>
    <Cloud :position="[-1.8, 2.8, -0.4]" :delay="1.1" />
  </TresGroup>
</template>

<script setup lang="ts">
// Página "Nosotros": un muñeco por cada integrante del equipo.
import Toy from '../Toy.vue'
import Cloud from '../models/Cloud.vue'
import Island from '../models/Island.vue'
import PegDoll from '../models/PegDoll.vue'
import Rainbow from '../models/Rainbow.vue'
import ToyShape from '../models/ToyShape.vue'
import { brand } from '../lib/palette'
</script>
