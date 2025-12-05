<template>
  <section class="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Formas geométricas de fondo -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none -z-5" preserveAspectRatio="none">
      <circle cx="15%" cy="20%" r="120" fill="rgba(34, 197, 94, 0.1)" />
      <circle cx="85%" cy="80%" r="150" fill="rgba(255, 107, 107, 0.1)" />
      <rect x="70%" y="10%" width="150" height="150" fill="rgba(251, 146, 60, 0.08)" opacity="0.8" />
    </svg>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-5xl md:text-6xl font-bold mb-6">
            <span class="text-(--brand-green-dark)">Educación</span>
            <span class="block text-(--brand-blue-dark)">Divertida</span>
            <span class="text-(--brand-orange-dark)">para Niños</span>
          </h2>
          <p class="text-xl text-slate-600 mb-8">
            Un espacio donde tus hijos aprenden, juegan y crecen felices
          </p>
          <div class="flex gap-4">
            <button class="border-2 border-(--brand-orange) text-(--brand-orange) px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">
              Contactanos
            </button>
          </div>
        </div> 
        <div class="relative">
          <img 
            src="/ninos_jugando.jpg" 
            alt="Niños aprendiendo" 
            class="rounded-2xl shadow-2xl"
          />
          <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-300 rounded-full opacity-40 blur-xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>