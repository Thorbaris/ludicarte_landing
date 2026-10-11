<template>
  <section id="equipo" class="px-4 py-14 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-5xl">
      <h2 class="subtitulo__seccion">Nuestro Equipo</h2>
      <ul class="grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
        <li
          v-for="member in team"
          :key="member.name"
          data-solid
          class="member block-card mx-auto w-full max-w-xs px-6 pb-7 pt-8 text-center"
          :style="{ '--edge': `var(--brand-${member.color})`, '--tint': `var(--brand-${member.color}-pastel)` }"
        >
          <img
            :src="member.photo"
            :alt="member.name"
            width="168"
            height="168"
            loading="lazy"
            class="member__photo"
          />
          <h3 class="mt-5 font-display text-2xl font-semibold">{{ member.name }}</h3>
          <p class="member__role">{{ member.role }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const team = [
  { name: 'Juanita Jaramillo', role: 'Sostenedora', photo: '/juani.jpg', color: 'pink' },
  { name: 'Fernanda Garrido', role: 'Directora', photo: '/Fernanda.jpg', color: 'blue' },
  { name: 'Alexa Parra', role: 'Monitora', photo: '/alexa.jpg', color: 'green' },
];
</script>

<style scoped>
.member__photo {
  width: 10.5rem;
  height: 10.5rem;
  margin: 0 auto;
  border-radius: 999px;
  object-fit: cover;
  border: 6px solid var(--tint);
  box-shadow: 0 0 0 4px var(--edge);
}

.member__role {
  display: inline-block;
  margin-top: 0.6rem;
  padding: 0.25rem 0.9rem;
  border-radius: 999px;
  font-weight: 700;
  background: var(--tint);
}
</style>
