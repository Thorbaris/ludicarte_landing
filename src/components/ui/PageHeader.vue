<template>
  <!-- Cabecera de las páginas interiores: título + escena 3D -->
  <section class="px-4 pb-6 pt-6 sm:px-6 lg:px-8 lg:pt-10">
    <div class="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[1.25fr_1fr] md:gap-4">
      <div class="text-center md:text-left">
        <h1 class="font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {{ title }}
        </h1>
        <span class="page-header__stripe" aria-hidden="true"></span>
        <div class="mt-6 text-lg leading-relaxed text-ink-soft">
          <slot />
        </div>
      </div>
      <Stage :scene="scene" class="order-first mx-auto aspect-[6.4/5] w-full max-w-xs md:order-last md:max-w-md" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Stage from '@/components/ui/Stage.vue'

defineProps<{
  title: string
  scene: 'casa' | 'equipo' | 'actividades' | 'horarios'
}>()
</script>

<style scoped>
.page-header__stripe {
  display: inline-block;
  width: 6.5rem;
  height: 0.5rem;
  margin-top: 1rem;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    var(--brand-pink) 0 25%,
    var(--brand-orange) 25% 50%,
    var(--brand-blue) 50% 75%,
    var(--brand-green) 75% 100%
  );
}
</style>
