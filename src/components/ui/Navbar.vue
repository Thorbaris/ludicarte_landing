<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm h-22">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-around items-center">
      <!-- <div class="flex justify-between items-center h-16"> -->
        <div class="flex items-center gap-2">
          <img src="/Logo.jpg" alt="Ludicarte Logo" class="w-28" />
        </div>
        <nav class="hidden md:flex gap-8">
          <a href="#inicio" class="text-slate-600 hover:text-primary transition">Inicio</a>
          <a href="#programas" class="text-slate-600 hover:text-primary transition">Nosotros</a>
          <a href="#equipo" class="text-slate-600 hover:text-primary transition">Actividades</a>
          <a href="#contacto" class="text-slate-600 hover:text-primary transition">Horarios y edades</a>
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