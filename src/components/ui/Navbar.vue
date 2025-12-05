<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-slate-200 shadow-sm h-28 align-center flex items-center justify-around">
    <div class="w-8/12 mx-auto px-4 sm:px-6 lg:px-8 flex justify-around items-center">
      <!-- <div class="flex justify-between items-center h-16"> -->

        <img src="/LogoBG.png" alt="Ludicarte Logo" class="h-24 my-auto" />

        <nav class="hidden md:flex gap-8">
          <a href="/" class="text-slate-600 hover:text-primary transition">Inicio</a>
          <a href="/nosotros" class="text-slate-600 hover:text-primary transition">Nosotros</a>
          <a href="/actividades" class="text-slate-600 hover:text-primary transition">Actividades</a>
          <a href="/horarios_actividades" class="text-slate-600 hover:text-primary transition">Horarios y edades</a>
        </nav>
        <button class="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
          Inscribirse
        </button>
      <!-- </div> -->
    </div>
  </header>
</template>

<style scoped>
  :root {
    --primary: rgb(34 197 94);
  }
</style>