<template>
  <Toy :hop="0.8">
    <TresMesh :position="[0, 0.18, 0]">
      <TresCylinderGeometry :args="[0.06, 0.08, 0.36, 16]" />
      <TresMeshStandardMaterial :color="wood.dark" v-bind="matte" />
    </TresMesh>
    <template v-if="variant === 'cone'">
      <TresMesh :position="[0, 0.62, 0]">
        <TresConeGeometry :args="[0.38, 0.66, 28]" />
        <TresMeshStandardMaterial :color="color" v-bind="matte" />
      </TresMesh>
      <TresMesh :position="[0, 0.98, 0]">
        <TresConeGeometry :args="[0.28, 0.52, 28]" />
        <TresMeshStandardMaterial :color="color" v-bind="matte" />
      </TresMesh>
    </template>
    <TresMesh v-else :position="[0, 0.7, 0]" :scale="[1, 1.08, 1]">
      <TresSphereGeometry :args="[0.4, 28, 20]" />
      <TresMeshStandardMaterial :color="color" v-bind="matte" />
    </TresMesh>
  </Toy>
</template>

<script setup lang="ts">
import Toy from '../Toy.vue'
import { brand, matte, wood } from '../lib/palette'

withDefaults(defineProps<{
  variant?: 'cone' | 'round'
  color?: string
}>(), {
  variant: 'cone',
  color: brand.green,
})
</script>
