<template>
    <div class="w-full flex items-center justify-center sm:px-6 lg:px-8 p-3">

            
            
            <div class="pronto-container flex flex-col items-center justify-center p-8 bg-linear-to-br from-pink-200 via-yellow-100 to-blue-200 rounded-2xl border-4 border-pink-300 shadow-lg">
                <svg class="w-16 h-16 text-pink-500 mb-4 animate-bounce" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z" />
                </svg>
                <p class="text-xl font-bold text-pink-600">¡Próximamente!</p>
                <p class="mt-2 text-center text-pink-700">Este contenido llegará muy pronto, vuelve a visitarnos 😊</p>
            </div>

    </div>
</template>

<script setup>
// Este componente simplemente muestra un mensaje "Pronto".
</script>

<style scoped>
.pronto-container {
  max-width: 28rem;
  text-align: center;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
</style>
