<template>
  <TresGroup :scale="[scale, scale, scale]">
    <!-- Sombra de contacto sobre la página -->
    <TresMesh :position="[0, -0.46, 0.25]" :rotation="[-Math.PI / 2, 0, 0]" :scale="[8.4, 8.4, 1]" :render-order="-1">
      <TresPlaneGeometry :args="[1, 1]" />
      <TresMeshBasicMaterial :map="shadow" :transparent="true" :depth-write="false" :opacity="0.7" />
    </TresMesh>
    <!-- Base de madera -->
    <TresMesh :geometry="base" :position="[0, -0.4, 0]">
      <TresMeshStandardMaterial :color="wood.mid" v-bind="matte" />
    </TresMesh>
    <!-- Tapete de fieltro verde: su cara superior queda en y = 0 -->
    <TresMesh :geometry="grass" :position="[0, -0.18, 0]">
      <TresMeshStandardMaterial :color="extra.grass" :roughness="1" />
    </TresMesh>
  </TresGroup>
</template>

<script setup lang="ts">
import { discGeometry, softShadowTexture } from '../lib/geometry'
import { extra, matte, wood } from '../lib/palette'

withDefaults(defineProps<{ scale?: number }>(), { scale: 1 })

const base = discGeometry(2.95, 0.24, 0.09)
const grass = discGeometry(2.84, 0.18, 0.07)
const shadow = softShadowTexture()
</script>
