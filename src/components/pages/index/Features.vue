<template>
  <section id="programas" class="py-16 px-4 ">
    <div class="max-w-10/12 flex flex-col mx-auto">
      <h2 class="titulo__seccion"> ¿Por qué elegir Casa Ludicarte?</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center">
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
      icono: '🌿',
      name: 'Ambiente Cálido y Seguro', emojis: ['🏡', '🫰🏼' , '🌱'],
      // description: [
      //   'Espacio preparado para los niños',
      //   'Materiales naturales y sensoriales',
      //   'Estimula la exploración libre y curiosidad',
      // ],
      color: 'orange-pink'
    },    
    { 
      id: 2, 
      icono: '🎨',
      name: 'Enfoque Waldorf y Pedagogía lúdica', emojis: ['🪵', '🍃', '🧚🏼‍♀️'],
      // description: ['Programas de educación física que fomentan la salud, coordinación y trabajo en equipo.'],
      color: 'blue-purple'
    },    
    { 
      id: 3,
      icono: '🧠',
      name: 'Actividades Creativas y Artísticas', emojis: [ '🖍️', '🤸‍♂️', '🖌️'],
      // description: ['Métodos pedagógicos innovadores que hacen del aprendizaje una experiencia divertida.'],
      color: 'green-teal'
    },
    { 
      id: 4, 
      icono: '💛',
      name: 'Acompañamiento Emocional', emojis: ['🌍', '🗣️'],
      // description: ['Clases de inglés que combinan juego y aprendizaje para una mejor comprensión.'],
      color: 'yellow-red'
    },
    { 
      id: 5, 
      icono: '📚',
      name: 'Apoyo Psicopedagógico', emojis: ['🌍', '🗣️'],
      // description: ['Clases de inglés que combinan juego y aprendizaje para una mejor comprensión.'],
      color: 'yellow-red'
    },
  ];
</script>