<template>
  <section class="px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
    <div class="mx-auto grid max-w-6xl items-center gap-4 lg:grid-cols-[1fr_1.15fr] lg:gap-2">
      <div class="text-center lg:text-left">
        <p class="chip">
          <span aria-hidden="true">🌈</span>
          After school · niños y niñas de 4 a 10 años
        </p>
        <h1 class="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
          <span class="text-brand-green-ink">Educación</span>
          <span class="block text-brand-blue-ink">divertida</span>
          <span class="text-brand-orange-ink">para niños</span>
        </h1>
        <p class="mx-auto mt-6 max-w-md text-xl leading-relaxed text-ink-soft lg:mx-0">
          Un espacio donde tus hijos aprenden, juegan y crecen felices.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
          <a href="/#contacto" class="btn">Contáctanos</a>
          <a href="/horarios_actividades" class="btn btn-white">Ver horarios</a>
        </div>
        <ul class="mt-9 flex flex-wrap justify-center gap-2 lg:justify-start">
          <li v-for="fact in facts" :key="fact.text" class="chip">
            <span aria-hidden="true">{{ fact.icon }}</span>
            {{ fact.text }}
          </li>
        </ul>
      </div>

      <div class="relative order-first lg:order-last">
        <Stage
          scene="casa"
          class="mx-auto aspect-[6.4/5] w-full max-w-md lg:max-w-none"
          label="Mundo de juguetes de madera en 3D: el arcoíris de Casa Ludicarte, una casita, árboles y muñecos"
        />
        <p class="hero-note" aria-hidden="true">
          ¡Toca los juguetes!
          <svg viewBox="0 0 60 40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 30c14 6 32 2 44-18" />
            <path d="M38 12l11-1 1 11" />
          </svg>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import Stage from '@/components/ui/Stage.vue';

const facts = [
  { icon: '☀️', text: 'Mañana 08:00 a 13:00' },
  { icon: '🌤️', text: 'Tarde 14:00 a 19:00' },
  { icon: '📍', text: 'Padre Las Casas' },
];
</script>
