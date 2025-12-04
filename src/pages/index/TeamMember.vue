<template>
  <div class="text-center">
    <div class="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
      {{ initials }}
    </div>
    <h3 class="text-xl font-bold text-slate-900">{{ name }}</h3>
    <p class="text-slate-600">{{ role }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  role: string
  initials: string
}>()
</script>
