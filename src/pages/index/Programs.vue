<template>
  <section id="programas" class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">Nuestros Programas</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="program in programs"
          :key="program.id"
          class="p-8 border-4 border-(--brand-green-dark) hover:border-(--brand-blue) bg-card hover:shadow-2xl transition-all transform hover:scale-105 hover:-rotate-1 rounded-3xl"
          :style="{ backgroundColor: 'var(--soft-1)', borderColor: program.color }"
        >
          <div class="inline-flex p-4 rounded-2xl mb-4">
            <div class="text-3xl mb-4">{{ program.emoji }}</div>
          </div>
          <h3 class="font-bold text-2xl mb-3 text-card-foreground">{{ program.name }}</h3>
          <p class="text-base text-muted-foreground leading-relaxed font-medium">{{ program.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const programs = [
  { id: 1, name: 'Artes', emoji: '🎨', description: 'Pintura, dibujo y manualidades', color: 'var(--brand-pink-dark)' },
  { id: 2, name: 'Deportes', emoji: '⚽', description: 'Fútbol, baloncesto y más', color: 'var(--brand-orange-dark)' },
  { id: 3, name: 'Música', emoji: '🎵', description: 'Clases de música y canto', color: 'var(--brand-blue-dark)' },
  { id: 4, name: 'Inglés', emoji: '🌍', description: 'Aprende inglés jugando', color: 'var(--brand-green-dark)' },
];
</script>
