<template>
    <svg class="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <rect x="50" y="100" width="80" height="80" fill="#10b981" opacity="0.1" class="animate-float" />
        <rect x="900" y="200" width="100" height="100" fill="#f59e0b" opacity="0.1" class="animate-float-delay-1" />
        <circle cx="150" cy="600" r="60" fill="#ef4444" opacity="0.08" class="animate-float-delay-2" />
        <circle cx="1050" cy="500" r="50" fill="#3b82f6" opacity="0.08" class="animate-float-delay-3" />
        <polygon points="600,50 650,150 550,150" fill="#ec4899" opacity="0.1" class="animate-float-delay-4" />
        <rect x="300" y="650" width="70" height="70" fill="#06b6d4" opacity="0.1" class="animate-float-delay-5" />
        <circle cx="800" cy="100" r="40" fill="#8b5cf6" opacity="0.08" class="animate-float" />
    </svg>
</template>

<script setup lang="ts">
</script>
<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(5deg); }
}

@keyframes float-delay-1 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-40px) rotate(-8deg); }
}

@keyframes float-delay-2 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-25px) rotate(3deg); }
}

@keyframes float-delay-3 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-35px) rotate(-5deg); }
}

@keyframes float-delay-4 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(8deg); }
}

@keyframes float-delay-5 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-45px) rotate(-3deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delay-1 {
  animation: float-delay-1 8s ease-in-out infinite 1s;
}

.animate-float-delay-2 {
  animation: float-delay-2 7s ease-in-out infinite 2s;
}

.animate-float-delay-3 {
  animation: float-delay-3 9s ease-in-out infinite 0.5s;
}

.animate-float-delay-4 {
  animation: float-delay-4 7.5s ease-in-out infinite 1.5s;
}

.animate-float-delay-5 {
  animation: float-delay-5 8.5s ease-in-out infinite 0.8s;
}
</style>