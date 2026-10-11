<template>
  <!-- La escena 3D de Scene3D.vue se dibuja exactamente sobre este hueco -->
  <div class="stage" :data-stage="scene" role="img" :aria-label="label">
    <img src="/IsoLogo.png" alt="" class="stage__fallback" width="302" height="180" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  scene: 'casa' | 'equipo' | 'actividades' | 'horarios'
  label?: string
}>(), {
  label: 'Juguetes de madera en 3D con el arcoíris de Casa Ludicarte',
})
</script>
