<template>
  <section id="contacto" class="px-4 py-14 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-[1fr_1.15fr]">
      <div class="text-center lg:pt-6 lg:text-left">
        <p class="eyebrow lg:text-left">Conversemos</p>
        <h2 class="font-display text-4xl font-semibold leading-tight sm:text-5xl">¡Contáctanos!</h2>
        <p class="mt-4 text-lg text-ink-soft">Estamos aquí para responder todas tus preguntas</p>

        <ul class="mt-8 inline-flex flex-col gap-4 text-left">
          <li class="contact-item">
            <span class="contact-item__icon bg-brand-pink-pastel" aria-hidden="true">📍</span>
            <span>Los Faisanes 2682,<br />Padre Las Casas</span>
          </li>
          <li class="contact-item">
            <span class="contact-item__icon bg-brand-blue-pastel" aria-hidden="true">📞</span>
            <a href="tel:+56965279494" class="font-bold underline-offset-4 hover:underline">+56 9 6527 9494</a>
          </li>
          <li class="contact-item">
            <span class="contact-item__icon bg-brand-orange-pastel" aria-hidden="true">🕗</span>
            <span>Mañana 08:00 a 13:00<br />Tarde 14:00 a 19:00</span>
          </li>
        </ul>
      </div>

      <form @submit.prevent="handleSubmit" data-solid class="contact-card block-card space-y-5 p-6 sm:p-9">
        <!-- Nombre del Padre/Madre -->
        <div>
          <label for="parentName" class="field-label">Nombre del Padre/Madre *</label>
          <input
            id="parentName"
            v-model="formData.parentName"
            type="text"
            required
            autocomplete="name"
            class="field"
            placeholder="Tu nombre completo"
          />
        </div>

        <div class="grid gap-5 sm:grid-cols-[1fr_11rem]">
          <!-- Nombre del Niño/a -->
          <div>
            <label for="childName" class="field-label">Nombre del Niño/a</label>
            <input
              id="childName"
              v-model="formData.childName"
              type="text"
              class="field"
              placeholder="Nombre de tu hijo/a"
            />
          </div>

          <!-- Edad del Niño/a -->
          <div>
            <label for="childAge" class="field-label">Edad del Niño/a</label>
            <select id="childAge" v-model="formData.childAge" class="field">
              <option value="">Selecciona</option>
              <option v-for="age in ages" :key="age" :value="age">{{ age }} años</option>
            </select>
          </div>
        </div>

        <!-- Mensaje -->
        <div>
          <label for="message" class="field-label">Mensaje</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="4"
            class="field resize-none"
            placeholder="¿Tienes alguna pregunta o comentario?"
          ></textarea>
        </div>

        <!-- Botón de Envío -->
        <button type="submit" :disabled="isSubmitting" class="btn btn-whatsapp w-full text-xl">
          <span>{{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}</span>
          <WhatsappIcon class="h-8 w-8" aria-hidden="true" />
        </button>
        <p class="text-center text-sm text-ink-soft">Se abrirá WhatsApp con tu mensaje listo para enviar.</p>

        <!-- Mensaje de éxito -->
        <div
          v-if="showSuccess"
          role="status"
          class="rounded-2xl bg-brand-green-pastel p-4 text-center font-bold text-brand-green-ink"
        >
          ¡Mensaje enviado con éxito! Te contactaremos pronto 🎉
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import WhatsappIcon from '@/assets/svg/whatsapp.svg?component'

const formData = ref({
  parentName: '',
  email: '',
  phone: '',
  childName: '',
  childAge: '',
  selectedInterests: [],
  message: ''
})

const ages = [4, 5, 6, 7, 8, 9, 10]


const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  // Construir mensaje para WhatsApp
  const phoneNumber = '56965279494'
  let message = `¡Hola! Me contacto desde la web de Ludicarte.\n\n`
  message += `*Nombre del padre/madre:* ${formData.value.parentName}\n`

  if (formData.value.childName) {
    message += `*Nombre del niño/a:* ${formData.value.childName}\n`
  }

  if (formData.value.childAge) {
    message += `*Edad del niño/a:* ${formData.value.childAge} años\n`
  }

  if (formData.value.message) {
    message += `\n*Mensaje:*\n${formData.value.message}`
  }

  // Codificar mensaje para URL
  const encodedMessage = encodeURIComponent(message)

  // Abrir WhatsApp con el mensaje
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')

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

<style scoped>
.contact-card {
  --edge: var(--color-brand-pink);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-size: 1.1rem;
  line-height: 1.4;
}

.contact-item__icon {
  display: grid;
  flex: none;
  place-items: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.4rem;
  border-radius: 46% 54% 58% 42% / 52% 44% 56% 48%;
}

.field-label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.95rem;
  font-weight: 700;
}

.field {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--color-cream-deep);
  border-radius: 1rem;
  background: var(--color-cream);
  color: var(--color-ink);
  transition: border-color 0.15s ease, background-color 0.15s ease;
}

.field::placeholder {
  color: #a08e82;
}

.field:focus {
  outline: none;
  border-color: var(--color-brand-blue);
  background: #ffffff;
}
</style>
