<template>
  <main class="min-h-screen bg-warm-white px-4 pb-6 pt-24 md:px-6 md:pb-12 md:pt-32">
    <div class="mx-auto flex min-h-[calc(100vh-7rem)] max-w-md items-start md:min-h-0 md:max-w-lg">
      <AudioCard
        v-if="clip"
        :clip="clip"
        grid
        :expanded="isExpanded"
        @toggle-expand="isExpanded = !isExpanded"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { audioClips } from '~/data/audioClips'

const route = useRoute()

const clip = computed(() => audioClips.find((entry) => entry.slug === route.params.slug))
const isExpanded = ref(false)

if (!clip.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Audio clip not found'
  })
}
</script>
