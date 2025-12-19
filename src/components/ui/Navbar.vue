<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-slate-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between relative">
      <div class="flex items-center gap-6">
        <a href="/">
          <img src="/LogoBG.png" alt="Ludicarte Logo" class="h-24 my-auto" />
        </a>
      </div>

      <nav class="hidden md:flex gap-8 items-center">
        <a href="/nosotros" class="text-slate-600 hover:text-primary transition">Nosotros</a>
        <a href="/actividades" class="text-slate-600 hover:text-primary transition">Actividades</a>
        <a href="/horarios_actividades" class="text-slate-600 hover:text-primary transition">Horarios y edades</a>
      </nav>

      <div class="flex items-center gap-3">

        <button class="bg-linear-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition" @click="goToContact">
          Contactar
        </button>
        <!-- Mobile hamburger -->
        <button
          class="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 shadow-sm bg-white text-slate-700 hover:bg-slate-50 transition"
          :aria-expanded="isMenuOpen"
          aria-label="Abrir menú"
          @click="toggleMenu"
        >
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <transition name="fade-slide">
        <div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm md:hidden" @click="closeMenu"></div>
      </transition>

      <transition name="fade-slide">
        <div
          v-if="isMenuOpen"
          class="fixed top-24 inset-x-4 z-50 bg-white border border-slate-200 rounded-2xl shadow-xl md:hidden overflow-hidden"
        >
          <div class="flex flex-col p-4 gap-3">
            <a href="/" class="text-slate-700 hover:text-primary transition" @click="closeMenu">Inicio</a>
            <a href="/nosotros" class="text-slate-700 hover:text-primary transition" @click="closeMenu">Nosotros</a>
            <a href="/actividades" class="text-slate-700 hover:text-primary transition" @click="closeMenu">Actividades</a>
            <a href="/horarios_actividades" class="text-slate-700 hover:text-primary transition" @click="closeMenu">Horarios y edades</a>

          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleEscape = (event) => {
  if (event.key === 'Escape') closeMenu();
};

const goToIndex = () => {
  window.location.href = '/';
};

const goToContact = () => {
  const contactSection = document.getElementById('contacto');
  
  // Si estamos en la página principal y el elemento existe, hacer scroll
  if (window.location.pathname === '/' && contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Si estamos en otra página, navegar a la principal con el hash
    window.location.href = '/#contacto';
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
:root {
  --primary: rgb(34 197 94);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 150ms ease, transform 150ms ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>