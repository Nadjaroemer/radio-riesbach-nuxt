<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
    <div
      v-for="(img, i) in images"
      :key="i"
      class="aspect-square overflow-hidden bg-black-coffee/10"
    >
      <img
        :src="img.src"
        :alt="img.alt || ''"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: { src: string; alt?: string }[]
}>()
</script>
