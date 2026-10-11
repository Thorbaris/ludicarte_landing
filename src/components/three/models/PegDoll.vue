<template>
  <Toy :hop="1.15">
    <TresMesh :geometry="body">
      <TresMeshStandardMaterial :color="color" v-bind="matte" />
    </TresMesh>
    <TresMesh :position="[0, 0.635, 0]">
      <TresSphereGeometry :args="[0.175, 28, 20]" />
      <TresMeshStandardMaterial :color="wood.light" v-bind="matte" />
    </TresMesh>
    <!-- Gorro de fieltro -->
    <TresMesh v-if="hat" :position="[0, 0.9, -0.02]" :rotation="[-0.16, 0, 0.1]">
      <TresConeGeometry :args="[0.178, 0.36, 28]" />
      <TresMeshStandardMaterial :color="hat" :roughness="1" />
    </TresMesh>
  </Toy>
</template>

<script setup lang="ts">
// Muñeco de madera sin rostro, al estilo de los juguetes Waldorf.
import Toy from '../Toy.vue'
import { pegBodyGeometry } from '../lib/geometry'
import { matte, wood } from '../lib/palette'

defineProps<{
  color: string
  hat?: string
}>()

const body = pegBodyGeometry()
</script>
