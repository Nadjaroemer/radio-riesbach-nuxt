<template>
  <section class="relative h-[100svh] min-h-[32rem] w-full overflow-hidden md:h-screen">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <div
      v-else
      class="absolute inset-0 bg-black-coffee"
    />

    <div class="absolute inset-0 bg-black/20" />

    <div
      class="absolute bottom-6 left-4 flex max-w-[calc(100%-2rem)] items-end gap-4 sm:bottom-8 sm:left-8 sm:gap-6 md:bottom-12 md:left-12"
    >
      <img
        src="/images/logo-white.png"
        alt="Radio Riesbach"
        class="hero-logo-motion w-[min(36vw,15.5rem)] min-w-24 shrink-0 sm:w-[min(42vw,15.5rem)] sm:min-w-32"
      />
      <p
        class="mb-3 bg-black-coffee px-2.5 py-1.5 text-[9px] leading-none tracking-[0.02em] text-warm-white shadow-[0_1px_0_rgba(255,255,255,0.18)] sm:mb-5 sm:px-4 sm:py-2 sm:text-sm md:mb-6 md:px-5 md:py-2.5 md:text-base"
      >
        Das erste Quartierradio der Schweiz
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
}>()
</script>

<style scoped>
.hero-logo-motion {
  animation: hero-logo-drift 7s ease-in-out infinite;
  transform-origin: 28% 82%;
}

@keyframes hero-logo-drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(-1deg);
  }

  35% {
    transform: translate3d(0.35rem, -0.45rem, 0) rotate(1deg);
  }

  70% {
    transform: translate3d(-0.2rem, -0.15rem, 0) rotate(-0.4deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-logo-motion {
    animation: none;
  }
}
</style>
