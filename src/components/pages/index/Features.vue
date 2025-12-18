<template>
  <section id="programas" class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">Por que elegir Casa Ludicarte?</h2>

      <div class="flex gap-6">
        <Card
          v-for="program in programs"
          :title="program.name"
          :description="program.description"
          :emojis="program.emojis"
          :color-scheme="program.color"
          :icon="program.icono"
        >
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Card from '@/components/ui/Card.vue';
  import IconoLibro from '@/assets/svg/book_icon.svg?component';
  import IconoPaleta from '@/assets/svg/palette_icon.svg?component';
  
  const programs = [
    { 
      id: 1, 
      icono: '🎨',
      name: 'Artes', emojis: ['🎨', '🎵'],
      description: 'Actividades diseñadas para desarrollar la imaginación y expresión artística de cada niño.',
      color: 'orange-pink'
    },    
    { 
      id: 2, 
      icono: '⚽',
      name: 'Deportes', emojis: ['⚽'],
      description: 'Programas de educación física que fomentan la salud, coordinación y trabajo en equipo.',
      color: 'blue-purple'
    },    
    { 
      id: 3,
      icono: '📚',
      name: 'Aprendizaje', emojis: [ '📚', '🧾'],
      description: 'Métodos pedagógicos innovadores que hacen del aprendizaje una experiencia divertida.',
      color: 'green-teal'
    },
    { 
      id: 4, 
      icono: '🌍',
      name: 'Inglés', emojis: ['🌍', '🗣️'],
      description: 'Clases de inglés que combinan juego y aprendizaje para una mejor comprensión.',
      color: 'yellow-red'
    },
  ];
</script>