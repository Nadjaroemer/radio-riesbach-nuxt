<template>
  <section class="relative h-screen w-full overflow-hidden">
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

    <div class="absolute inset-0 bg-black/30" />

    <div class="absolute bottom-12 left-8 right-8">
      <h1 class="headline-strip headline-strip--hero">
        Radio Riesbach
      </h1>
      <p class="text-warm-white/80 text-lg tracking-widest mt-3 uppercase">
        {{ $t('hero.subtitle') }}
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
