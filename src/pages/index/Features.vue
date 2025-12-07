<template>
  <section id="programas" class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">Por que elegir Casa Ludicarte?</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="program in programs"
          :key="program.id"
          class="feature-card p-8 border-4 border-(--brand-green-dark) hover:border-(--brand-blue) bg-card hover:shadow-2xl transition-all transform hover:scale-105 hover:-rotate-1 rounded-3xl"
          :style="{ backgroundColor: 'var(--soft-1)', borderColor: program.color }"
        >
          <div class="flex mb-3">
            <div class="text-3xl me-3">{{ program.emoji }}</div>
            <h3 class="font-bold text-2xl mb-3 text-card-foreground">{{ program.name }}</h3>
          </div> 
          <p class="text-base text-muted-foreground leading-relaxed font-medium">{{ program.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const programs = [
  { id: 1, name: 'Artes', emoji: '🎨', description: 'Actividades diseñadas para desarrollar la imaginación y expresión artística de cada niño.', color: 'var(--brand-pink-dark)' },
  { id: 2, name: 'Deportes', emoji: '⚽', description: 'Programas de educación física que fomentan la salud, coordinación y trabajo en equipo.', color: 'var(--brand-orange-dark)' },
  { id: 3, name: 'Aprendizaje', emoji: '🎵', description: 'Métodos pedagógicos innovadores que hacen del aprendizaje una experiencia divertida.', color: 'var(--brand-blue-dark)' },
  { id: 4, name: 'Inglés', emoji: '🌍', description: 'Clases de inglés que combinan juego y aprendizaje para una mejor comprensión.', color: 'var(--brand-green-dark)' },
];
</script>

<style scoped>
.feature-card {
  transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
}

@keyframes cardHover {
  from {
    transform: rotate(0deg) scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    border-color: inherit;
  }
  to {
    transform: rotate(-1deg) scale(1.05);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-color: var(--brand-blue);
  }
}

@media (max-width: 768px) {
  @supports (animation-timeline: view()) {
    .feature-card {
      animation-name: cardHover;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: both;
      animation-timeline: view();
      /* Activa el estado hover cuando el centro de la tarjeta cruza el centro de la pantalla */
      animation-range: cover 45% cover 55%;
    }
  }
}
</style>
