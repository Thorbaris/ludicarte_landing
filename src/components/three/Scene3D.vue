<template>
  <div v-if="supported" class="scene3d" aria-hidden="true">
    <TresCanvas
      :alpha="true"
      :clear-alpha="0"
      :antialias="true"
      :shadows="true"
      :tone-mapping="NoToneMapping"
      :dpr="[1, 2]"
      :style="{ pointerEvents: 'none', touchAction: 'auto' }"
    >
      <World />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
// Lienzo 3D único para todo el sitio: va fijo detrás del contenido.
import { TresCanvas } from '@tresjs/core'
import { NoToneMapping } from 'three'
import World from './World.vue'

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

const supported = hasWebGL()
</script>

<style scoped>
.scene3d {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* Alto máximo del viewport: evita que el lienzo se redimensione al ocultarse la barra del navegador móvil */
  height: 100lvh;
  z-index: -1;
  pointer-events: none;
}
</style>
