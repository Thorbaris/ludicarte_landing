<template>
    <div  id="contacto" style="margin-top: -100px;" class="absolute"></div>
  <div class="w-full max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-xl my-12">
    <div class="mb-8 text-center">
      <h2 class="text-4xl font-bold mb-2">
        <span class="text-green-600">¡Contáctanos!</span>
      </h2>
      <p class="text-gray-600">Estamos aquí para responder todas tus preguntas</p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Nombre del Padre/Madre -->
      <div>
        <label for="parentName" class="block text-sm font-semibold text-gray-700 mb-2">
          Nombre del Padre/Madre *
        </label>
        <input
          id="parentName"
          v-model="formData.parentName"
          type="text"
          required
          class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 transition-colors"
          placeholder="Tu nombre completo"
        />
      </div>

      <!-- Nombre del Niño/a -->
      <div>
        <label for="childName" class="block text-sm font-semibold text-gray-700 mb-2">
          Nombre del Niño/a
        </label>
        <input
          id="childName"
          v-model="formData.childName"
          type="text"
          class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 transition-colors"
          placeholder="Nombre de tu hijo/a"
        />
      </div>

      <!-- Edad del Niño/a -->
      <div>
        <label for="childAge" class="block text-sm font-semibold text-gray-700 mb-2">
          Edad del Niño/a
        </label>
        <select
          id="childAge"
          v-model="formData.childAge"
          class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 transition-colors"
        >
          <option value="">Selecciona una edad</option>
          <option v-for="age in ages" :key="age" :value="age">{{ age }} años</option>
        </select>
      </div>      

      <!-- Mensaje -->
      <div>
        <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="4"
          class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 transition-colors resize-none"
          placeholder="¿Tienes alguna pregunta o comentario?"
        ></textarea>
      </div>

      <!-- Botón de Envío -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full py-4 px-6 rounded-xl font-bold text-white text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        :class="isSubmitting ? 'bg-gray-400' : 'bg-linear-to-r from-pink-500 via-blue-500 to-green-500'"
      >
        {{ isSubmitting ? 'Enviando...' : '✉️ Enviar Mensaje' }}
      </button>

      <!-- Mensaje de éxito -->
      <div
        v-if="showSuccess"
        class="p-4 bg-green-100 border-2 border-green-400 rounded-xl text-green-700 text-center font-semibold animate-bounce"
      >
        ¡Mensaje enviado con éxito! Te contactaremos pronto 🎉
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  parentName: '',
  email: '',
  phone: '',
  childName: '',
  childAge: '',
  selectedInterests: [],
  message: ''
})

const ages = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const interests = [
  { value: 'artes', label: '🎨 Artes', color: 'pink' },
  { value: 'deportes', label: '⚽ Deportes', color: 'blue' },
  { value: 'aprendizaje', label: '📚 Aprendizaje', color: 'green' },
  { value: 'ingles', label: '🗣️ Inglés', color: 'orange' }
]

const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simular envío del formulario
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  console.log('Datos del formulario:', formData.value)
  
  isSubmitting.value = false
  showSuccess.value = true
  
  // Resetear formulario después de 3 segundos
  setTimeout(() => {
    formData.value = {
      parentName: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      selectedInterests: [],
      message: ''
    }
    showSuccess.value = false
  }, 3000)
}
</script>