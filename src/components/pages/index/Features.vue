<template>
  <section id="programas" class="px-4 py-14 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <p class="eyebrow">Crecer jugando</p>
      <h2 class="titulo__seccion">¿Por qué elegir Casa Ludicarte?</h2>

      <ul class="flex flex-wrap justify-center gap-x-6 gap-y-8">
        <li
          v-for="program in programs"
          :key="program.id"
          data-solid
          class="feature block-card w-full max-w-xs p-7 text-center sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          :style="{ '--edge': `var(--brand-${program.color})`, '--tint': `var(--brand-${program.color}-pastel)` }"
        >
          <div class="feature__icon" aria-hidden="true">{{ program.icono }}</div>
          <h3 class="mt-5 font-display text-2xl font-semibold leading-tight text-balance">
            {{ program.name }}
          </h3>
          <p class="mt-4 flex justify-center gap-3 text-2xl" aria-hidden="true">
            <span v-for="emoji in program.emojis" :key="emoji">{{ emoji }}</span>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
  const programs = [
    {
      id: 1,
      icono: '🌿',
      name: 'Ambiente Cálido y Seguro', emojis: ['🏡', '🫰🏼' , '🌱'],
      color: 'green'
    },
    {
      id: 2,
      icono: '🎨',
      name: 'Enfoque Waldorf y Pedagogía lúdica', emojis: ['🪵', '🍃', '🧚🏼‍♀️'],
      color: 'pink'
    },
    {
      id: 3,
      icono: '🧠',
      name: 'Actividades Creativas y Artísticas', emojis: [ '🖍️', '🤸‍♂️', '🖌️'],
      color: 'blue'
    },
    {
      id: 4,
      icono: '💛',
      name: 'Acompañamiento Emocional', emojis: ['🌍', '🗣️'],
      color: 'orange'
    },
    {
      id: 5,
      icono: '📚',
      name: 'Apoyo Psicopedagógico', emojis: ['🌍', '🗣️'],
      color: 'green'
    },
  ];
</script>

<style scoped>
.feature {
  transition: transform 0.2s ease;
}

.feature:hover {
  transform: translateY(-6px) rotate(-1deg);
}

.feature:nth-child(even):hover {
  transform: translateY(-6px) rotate(1deg);
}

/* Mancha de pintura detrás del ícono */
.feature__icon {
  display: grid;
  place-items: center;
  width: 5.5rem;
  height: 5.5rem;
  margin: 0 auto;
  font-size: 2.6rem;
  background: var(--tint);
  border-radius: 46% 54% 58% 42% / 52% 44% 56% 48%;
  transition: border-radius 0.4s ease, transform 0.4s ease;
}

.feature:hover .feature__icon {
  border-radius: 56% 44% 42% 58% / 44% 56% 48% 52%;
  transform: scale(1.08) rotate(6deg);
}

@media (prefers-reduced-motion: reduce) {
  .feature,
  .feature__icon {
    transition: none;
  }
}
</style>
