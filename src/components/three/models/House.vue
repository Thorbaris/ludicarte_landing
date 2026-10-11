<template>
  <Toy :hop="0.6">
    <!-- Muros -->
    <TresMesh :geometry="walls" :position="[0, 0.4, 0]">
      <TresMeshStandardMaterial :color="extra.cream" v-bind="matte" />
    </TresMesh>
    <!-- Techo -->
    <TresMesh :geometry="roof" :position="[0, 0.78, 0]">
      <TresMeshStandardMaterial :color="brand.pink" v-bind="matte" />
    </TresMesh>
    <!-- Chimenea -->
    <TresMesh :geometry="chimney" :position="[0.36, 1.12, -0.22]">
      <TresMeshStandardMaterial :color="wood.dark" v-bind="matte" />
    </TresMesh>
    <!-- Puerta -->
    <TresMesh :geometry="door" :position="[-0.24, 0.23, 0.475]">
      <TresMeshStandardMaterial :color="brand.blue" v-bind="matte" />
    </TresMesh>
    <!-- Ventana -->
    <TresMesh :geometry="windowFrame" :position="[0.26, 0.44, 0.475]">
      <TresMeshStandardMaterial :color="wood.mid" v-bind="matte" />
    </TresMesh>
    <TresMesh :geometry="windowPane" :position="[0.26, 0.44, 0.5]">
      <TresMeshStandardMaterial :color="extra.sun" :emissive="extra.sun" :emissive-intensity="0.25" v-bind="matte" />
    </TresMesh>
    <!-- Corazón en el frontón -->
    <TresMesh :geometry="heart" :position="[0, 1.0, 0.56]">
      <TresMeshStandardMaterial :color="extra.cream" v-bind="matte" />
    </TresMesh>
  </Toy>
</template>

<script setup lang="ts">
import Toy from '../Toy.vue'
import { heartGeometry, roofGeometry, roundedBox } from '../lib/geometry'
import { brand, extra, matte, wood } from '../lib/palette'

const walls = roundedBox(1.15, 0.8, 0.95, 0.06)
const roof = roofGeometry(1.5, 0.66, 1.12)
const chimney = roundedBox(0.17, 0.34, 0.17, 0.03)
const door = roundedBox(0.28, 0.44, 0.06, 0.025)
const windowFrame = roundedBox(0.34, 0.34, 0.05, 0.025)
const windowPane = roundedBox(0.24, 0.24, 0.04, 0.02)
const heart = heartGeometry(0.085, 0.06)
</script>
