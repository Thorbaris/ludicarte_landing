<template>
  <TresMesh v-if="type === 'cube'" :geometry="cube">
    <TresMeshStandardMaterial :color="color" v-bind="matte" />
  </TresMesh>

  <TresMesh v-else-if="type === 'ball'">
    <TresSphereGeometry :args="[0.42, 32, 24]" />
    <TresMeshStandardMaterial :color="color" v-bind="matte" />
  </TresMesh>

  <TresMesh v-else-if="type === 'ring'">
    <TresTorusGeometry :args="[0.34, 0.15, 20, 40]" />
    <TresMeshStandardMaterial :color="color" v-bind="matte" />
  </TresMesh>

  <TresMesh v-else-if="type === 'star'" :geometry="star">
    <TresMeshStandardMaterial :color="color" v-bind="matte" />
  </TresMesh>

  <TresMesh v-else-if="type === 'heart'" :geometry="heart">
    <TresMeshStandardMaterial :color="color" v-bind="matte" />
  </TresMesh>

  <TresMesh v-else-if="type === 'arch'" :geometry="arch" :position="[0, -0.25, 0]">
    <TresMeshStandardMaterial :color="color" v-bind="matte" />
  </TresMesh>

  <!-- Crayón -->
  <TresGroup v-else>
    <TresMesh>
      <TresCylinderGeometry :args="[0.13, 0.13, 0.8, 20]" />
      <TresMeshStandardMaterial :color="color" v-bind="matte" />
    </TresMesh>
    <TresMesh :position="[0, 0.53, 0]">
      <TresConeGeometry :args="[0.13, 0.26, 20]" />
      <TresMeshStandardMaterial :color="color" v-bind="matte" />
    </TresMesh>
    <TresMesh :position="[0, 0.12, 0]">
      <TresCylinderGeometry :args="[0.136, 0.136, 0.3, 20]" />
      <TresMeshStandardMaterial :color="extra.cream" v-bind="matte" />
    </TresMesh>
  </TresGroup>
</template>

<script setup lang="ts">
// Piezas sueltas: se usan flotando en el fondo y en las escenas de las páginas interiores.
import { archGeometry, heartGeometry, roundedBox, starGeometry } from '../lib/geometry'
import { extra, matte } from '../lib/palette'

export type ToyShapeType = 'cube' | 'ball' | 'ring' | 'star' | 'heart' | 'arch' | 'crayon'

defineProps<{
  type: ToyShapeType
  color: string
}>()

const cube = roundedBox(0.7, 0.7, 0.7, 0.09)
const star = starGeometry(0.5, 0.24)
const heart = heartGeometry(0.42, 0.26)
const arch = archGeometry(0.55, 0.3, 0.4, 0.04)
</script>
