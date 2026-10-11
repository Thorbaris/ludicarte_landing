<template>
  <Toy :float="0.07" :float-speed="0.6" :hop="0.5">
    <TresMesh>
      <TresSphereGeometry :args="[0.42, 32, 24]" />
      <TresMeshStandardMaterial :color="extra.sun" :emissive="extra.sun" :emissive-intensity="0.3" v-bind="matte" />
    </TresMesh>
    <TresGroup ref="rays">
      <TresMesh
        v-for="ray in RAYS"
        :key="ray"
        :position="[Math.cos(angle(ray)) * 0.66, Math.sin(angle(ray)) * 0.66, 0]"
        :rotation="[0, 0, angle(ray) - Math.PI / 2]"
      >
        <TresConeGeometry :args="[0.085, 0.22, 16]" />
        <TresMeshStandardMaterial :color="brand.orange" :emissive="brand.orange" :emissive-intensity="0.2" v-bind="matte" />
      </TresMesh>
    </TresGroup>
  </Toy>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'
import type { Group } from 'three'
import Toy from '../Toy.vue'
import { motion } from '../lib/interaction'
import { brand, extra, matte } from '../lib/palette'

const RAYS = 9
const angle = (ray: number) => (ray / RAYS) * Math.PI * 2

const rays = shallowRef<Group>()

useLoop().onBeforeRender(({ delta }) => {
  if (rays.value && !motion.reduced) rays.value.rotation.z += delta * 0.35
})
</script>
