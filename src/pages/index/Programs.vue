<template>
  <section id="programas" class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">Nuestros Programas</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="program in programs"
          :key="program.id"
          class="rounded-xl p-6 text-white hover:shadow-lg transition cursor-pointer"
          :style="{ backgroundColor: program.color }"
        >
          <div class="text-3xl mb-4">{{ program.emoji }}</div>
          <h3 class="text-xl font-bold mb-2">{{ program.name }}</h3>
          <p class="text-sm opacity-90">{{ program.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const programs = [
  { id: 1, name: 'Artes', emoji: '🎨', description: 'Pintura, dibujo y manualidades', color: '#22c55e' },
  { id: 2, name: 'Deportes', emoji: '⚽', description: 'Fútbol, baloncesto y más', color: '#ff6b6b' },
  { id: 3, name: 'Música', emoji: '🎵', description: 'Clases de música y canto', color: '#fb9260' },
  { id: 4, name: 'Inglés', emoji: '🌍', description: 'Aprende inglés jugando', color: '#3b82f6' },
];
</script>
