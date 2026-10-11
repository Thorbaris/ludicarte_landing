<template>
    <div class="flex w-full items-center justify-center px-4 py-6">
        <div data-solid class="pronto-container block-card flex flex-col items-center justify-center px-8 py-10">
            <span class="text-5xl" aria-hidden="true">🎨</span>
            <p class="mt-4 font-hand text-5xl font-bold text-brand-pink-ink">¡Próximamente!</p>
            <p class="mt-3 text-lg text-ink-soft">Este contenido llegará muy pronto, vuelve a visitarnos 😊</p>
        </div>
    </div>
</template>

<script setup>
// Este componente simplemente muestra un mensaje "Pronto".
</script>

<style scoped>
.pronto-container {
  --edge: var(--color-brand-orange);
  max-width: 28rem;
  text-align: center;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@media (prefers-reduced-motion: reduce) {
  .pronto-container {
    animation: none;
  }
}
</style>
