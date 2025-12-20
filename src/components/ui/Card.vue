<template>
  <div class="relative group w-fit my-4" >
    <!-- Card principal -->
    <div 
      class="relative p-2 rounded-[2.5rem] shadow-2xl transform transition-all duration-300 hover:scale-105 hover:rotate-1"
      :class="gradientBorderClass"
    >
      <div class="bg-white rounded-4xl p-8 w-80">
        <!-- Icono decorativo con animación -->
        <div class="flex justify-center mb-6">
          <div class="relative">
            <!-- Círculo de fondo animado -->
            <div 
              class="absolute inset-0 rounded-full animate-pulse blur-xl opacity-70"
              :class="iconGlowClass"
            ></div>

            <!-- Icono -->
            <div 
              class="relative w-24 h-24 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:rotate-360 text-5xl"
              :class="iconBgClass"
            >
                  <!-- Si es string (emoji), mostrar directamente -->
                  <template v-if="typeof icon === 'string'">
                    {{ icon }}
                  </template>
                  <!-- Si es componente, renderizar dinámicamente -->
                  <component v-else :is="icon" class="w-12 h-12 text-white" />

              <!-- Estrellas decorativas -->
              <div v-if="showStars" class="absolute -top-2 -right-2 text-yellow-400 animate-bounce">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <div v-if="showStars" class="absolute -bottom-1 -left-2 text-green-400 animate-bounce [animation-delay:150ms]">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Título con efecto divertido -->
        <h2 
          class="text-2xl font-black text-center mb-4 bg-clip-text text-transparent leading-tight"
          :class="titleGradientClass"
        >
          {{ title }}
        </h2>

        <!-- Línea decorativa -->
        <div v-if="showDots" class="flex justify-center gap-2 mb-6">
          <div 
            v-for="(color, index) in dotColors" 
            :key="index"
            class="w-3 h-3 rounded-full animate-bounce"
            :class="[color, `[animation-delay:${index * 100}ms]`]"
          ></div>
        </div>

        <!-- Descripción -->
        <!-- <div class="text-gray-700 text-center text-lg leading-relaxed font-medium">
          <slot>
            <ul class="list-disc list-inside text-left">
              <li v-for="(line, index) in description" :key="index">{{ line }}</li>
            </ul>
          </slot>
        </div> -->

        <!-- Emojis decorativos -->
        <div v-if="emojis.length > 0" class="flex justify-center gap-4 mt-6 text-3xl">
          <span 
            v-for="(emoji, index) in emojis" 
            :key="index"
            class="animate-bounce"
            :class="`[animation-delay:${index * 100}ms]`"
          >
            {{ emoji }}
          </span>
        </div>
      </div>
    </div>

    <!-- Sombra decorativa -->
    <div 
      class="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-50 -z-10 group-hover:opacity-70 transition-opacity"
      :class="shadowClass"
    ></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: Array,
    default: []
  },
  emojis: {
    type: Array,
    default: () => []
  },
  icon: {
    default: '⭐'
  },
  colorScheme: {
    type: String,
    default: 'orange-pink',
    validator: (value) => ['orange-pink', 'blue-purple', 'green-teal', 'yellow-red'].includes(value)
  },
  showStars: {
    type: Boolean,
    default: true
  },
  showDots: {
    type: Boolean,
    default: true
  }
})

const colorSchemes = {
  'orange-pink': {
    gradientBorder: 'bg-gradient-to-br from-orange-400 to-pink-500',
    iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600',
    iconGlow: 'bg-gradient-to-br from-blue-400 to-purple-500',
    titleGradient: 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600',
    shadow: 'bg-gradient-to-br from-orange-300 to-pink-400',
    dots: ['bg-yellow-400', 'bg-pink-400', 'bg-blue-400']
  },
  'blue-purple': {
    gradientBorder: 'bg-gradient-to-br from-blue-400 to-purple-500',
    iconBg: 'bg-gradient-to-br from-indigo-400 to-purple-600',
    iconGlow: 'bg-gradient-to-br from-blue-300 to-indigo-500',
    titleGradient: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600',
    shadow: 'bg-gradient-to-br from-blue-300 to-purple-400',
    dots: ['bg-blue-400', 'bg-indigo-400', 'bg-purple-400']
  },
  'green-teal': {
    gradientBorder: 'bg-gradient-to-br from-green-400 to-teal-500',
    iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-600',
    iconGlow: 'bg-gradient-to-br from-green-300 to-teal-500',
    titleGradient: 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600',
    shadow: 'bg-gradient-to-br from-green-300 to-teal-400',
    dots: ['bg-green-400', 'bg-emerald-400', 'bg-teal-400']
  },
  'yellow-red': {
    gradientBorder: 'bg-gradient-to-br from-yellow-400 to-red-500',
    iconBg: 'bg-gradient-to-br from-orange-400 to-red-600',
    iconGlow: 'bg-gradient-to-br from-yellow-300 to-orange-500',
    titleGradient: 'bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600',
    shadow: 'bg-gradient-to-br from-yellow-300 to-red-400',
    dots: ['bg-yellow-400', 'bg-orange-400', 'bg-red-400']
  }
}

const gradientBorderClass = computed(() => colorSchemes[props.colorScheme].gradientBorder)
const iconBgClass = computed(() => colorSchemes[props.colorScheme].iconBg)
const iconGlowClass = computed(() => colorSchemes[props.colorScheme].iconGlow)
const titleGradientClass = computed(() => colorSchemes[props.colorScheme].titleGradient)
const shadowClass = computed(() => colorSchemes[props.colorScheme].shadow)
const dotColors = computed(() => colorSchemes[props.colorScheme].dots)
</script>
