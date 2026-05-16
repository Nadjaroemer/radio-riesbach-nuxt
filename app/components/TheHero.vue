<template>
  <section class="relative aspect-[1200/725] w-full overflow-hidden md:h-screen md:aspect-auto">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="absolute inset-0 w-full h-full object-cover"
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
        class="w-[min(36vw,15.5rem)] min-w-24 shrink-0 sm:w-[min(42vw,15.5rem)] sm:min-w-32"
      />
      <p
        class="mb-3 bg-black-coffee px-2.5 py-1.5 text-[9px] leading-none tracking-[0.02em] text-warm-white shadow-[0_1px_0_rgba(255,255,255,0.18)] sm:mb-5 sm:px-3 sm:text-xs md:mb-6 md:px-4 md:py-2 md:text-sm"
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
