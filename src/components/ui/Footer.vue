<template>
  <footer data-solid class="relative mt-10 rounded-t-[2.5rem] bg-ink px-4 pb-6 pt-14 text-cream sm:px-6 lg:px-8">
    <span class="footer-stripe" aria-hidden="true"></span>

    <div class="mx-auto mb-10 grid max-w-6xl gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <a href="/" class="inline-flex items-center gap-3">
          <img src="/IsoLogo.png" alt="" width="302" height="180" class="h-11 w-auto" />
          <span class="font-display text-2xl font-semibold">Casa Ludicarte</span>
        </a>
        <ul class="mt-4 space-y-2 text-cream/70">
          <li>Educación divertida para niños.</li>
          <li>Los Faisanes 2682, Padre las Casas</li>
        </ul>
      </div>
      <div>
        <h4 class="mb-4 font-display text-lg font-semibold">Enlaces</h4>
        <ul class="space-y-2 text-cream/70">
          <li><a href="/" class="transition hover:text-white">Inicio</a></li>
          <li><a href="/nosotros" class="transition hover:text-white">Nosotros</a></li>
          <li><a href="/actividades" class="transition hover:text-white">Actividades</a></li>
          <li><a href="/horarios_actividades" class="transition hover:text-white">Horarios y edades</a></li>
          <li><a href="/#contacto" class="transition hover:text-white">Contacto</a></li>
        </ul>
      </div>
      <div>
        <h4 class="mb-4 font-display text-lg font-semibold">Contacto</h4>
        <ul class="space-y-2 text-cream/70">
          <li><a href="tel:+56965279494" class="transition hover:text-white">+56 9 6527 9494</a></li>
          <li>
            <a href="https://wa.me/56965279494" target="_blank" rel="noopener" class="transition hover:text-white">
              Escríbenos por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mx-auto max-w-6xl border-t border-cream/15 pt-5 text-center text-sm text-cream/60">
      <p>&copy; 2026 Casa Ludicarte. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
/* Franja con los cuatro colores del arcoíris */
.footer-stripe {
  position: absolute;
  top: 1.4rem;
  left: 50%;
  width: 7rem;
  height: 0.5rem;
  border-radius: 999px;
  transform: translateX(-50%);
  background: linear-gradient(
    90deg,
    var(--brand-pink) 0 25%,
    var(--brand-orange) 25% 50%,
    var(--brand-blue) 50% 75%,
    var(--brand-green) 75% 100%
  );
}
</style>
