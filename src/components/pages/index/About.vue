<template>
  <section class="px-4 py-14 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
      <div class="relative mx-auto w-full max-w-md">
        <div class="about-photo block-card" data-solid>
          <img
            src="/nino_1.jpg"
            alt="Niño en casa Ludicarte"
            width="1280"
            height="720"
            loading="lazy"
            class="aspect-4/3 w-full rounded-3xl object-cover"
          />
        </div>
        <span class="about-tape" aria-hidden="true"></span>
      </div>

      <div class="text-center md:text-left">
        <p class="eyebrow md:text-left">Hola, somos</p>
        <h2 class="font-display text-4xl font-semibold leading-tight text-balance">
          Casa Ludicarte
        </h2>
        <p class="mt-5 text-lg leading-relaxed text-ink-soft">
          Un espacio dedicado a fomentar la creatividad y el aprendizaje a través
          de actividades lúdicas y artísticas para niños y niñas. Nuestro equipo combina
          experiencia educativa y pasión por las artes para crear programas seguros y
          estimulantes.
        </p>
        <a href="/nosotros" class="btn btn-white mt-7">Conoce al equipo</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-photo {
  --edge: var(--color-brand-blue);
  padding: 0.75rem;
  transform: rotate(-2.5deg);
}

/* Trozo de cinta adhesiva sobre la foto */
.about-tape {
  position: absolute;
  top: -0.9rem;
  left: 50%;
  width: 7rem;
  height: 1.9rem;
  border-radius: 0.25rem;
  background: rgb(255 209 224 / 0.9);
  box-shadow: 0 2px 4px rgb(59 42 34 / 0.12);
  transform: translateX(-50%) rotate(-6deg);
}
</style>
