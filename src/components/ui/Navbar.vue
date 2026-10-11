<template>
  <div class="sticky top-0 z-50">
    <!-- Overlay para cerrar menú al hacer clic fuera -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-ink/25 backdrop-blur-sm md:hidden"
        @click="closeMenu"
      ></div>
    </transition>

    <header class="relative px-3 pt-3 sm:px-6">
      <div
        data-solid
        class="mx-auto flex h-[4.75rem] max-w-6xl sm:h-[5.5rem] items-center justify-between gap-3 rounded-full border-2 border-white bg-white/85 pl-5 pr-3 shadow-[0_14px_34px_-18px_rgb(59_42_34/0.45)] backdrop-blur-md sm:pl-7"
      >
        <a href="/" class="flex shrink-0 items-center" aria-label="Casa Ludicarte — Inicio">
          <img src="/LogoBG.png" alt="Casa Ludicarte After School" width="382" height="270" class="h-[3.75rem] w-auto sm:h-[4.5rem]" />
        </a>

        <nav class="hidden items-center gap-1 md:flex" aria-label="Principal">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="nav-link"
            :class="{ 'nav-link--active': isActive(link.href) }"
            :aria-current="isActive(link.href) ? 'page' : undefined"
          >
            {{ link.label }}
          </a>
        </nav>

        <div class="flex items-center gap-2">
          <a href="/#contacto" class="btn btn-sm" @click="closeMenu">Contactar</a>
          <!-- Mobile hamburger -->
          <button
            class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-ink transition hover:bg-cream-deep md:hidden"
            :aria-expanded="isMenuOpen"
            :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
            @click.stop="toggleMenu"
          >
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu dropdown -->
      <transition name="fade-slide">
        <nav
          v-if="isMenuOpen"
          data-solid
          class="absolute inset-x-3 top-full mt-2 overflow-hidden rounded-3xl border-2 border-white bg-white p-3 shadow-xl sm:inset-x-6 md:hidden"
          aria-label="Principal"
        >
          <a
            v-for="link in [home, ...links]"
            :key="link.href"
            :href="link.href"
            class="nav-link block"
            :class="{ 'nav-link--active': isActive(link.href) }"
            :aria-current="isActive(link.href) ? 'page' : undefined"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </nav>
      </transition>
    </header>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps({
  // Ruta actual, para resaltar el enlace activo
  pathname: {
    type: String,
    default: '/'
  }
});

const home = { href: '/', label: 'Inicio' };

const links = [
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/actividades', label: 'Actividades' },
  { href: '/horarios_actividades', label: 'Horarios y edades' },
];

const isActive = (href) => (props.pathname.replace(/\/$/, '') || '/') === href;

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

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
.nav-link {
  padding: 0.55rem 1rem;
  border-radius: 999px;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--color-ink-soft);
  transition: background-color 150ms ease, color 150ms ease;
}

.nav-link:hover {
  color: var(--color-ink);
  background: var(--color-cream);
}

.nav-link--active {
  color: var(--color-ink);
  background: var(--color-brand-orange-pastel);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
