<template>
  <main class="min-h-screen px-6 pb-20 pt-40 md:px-12">
    <div class="mx-auto max-w-4xl">
      <h1 class="headline-strip headline-strip--page mb-10">
        {{ clip.title }}
      </h1>

      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div class="overflow-hidden bg-black-coffee/10">
          <img
            :src="clip.image || '/images/placeholder_audioplayer_radio.png'"
            :alt="clip.title"
            class="h-full w-full object-cover"
          >
        </div>

        <div class="space-y-6">
          <p
            v-if="localizedDescription"
            class="text-base leading-relaxed text-black-coffee/80 md:text-lg"
          >
            {{ localizedDescription }}
          </p>

          <audio
            :src="clip.src"
            controls
            preload="metadata"
            class="w-full"
          />

          <a
            v-if="clip.originalUrl && clip.originalUrl !== '#'"
            :href="clip.originalUrl"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center text-xs tracking-widest uppercase text-riesbach-rot hover:underline"
          >
            {{ $t('audio.original') }} →
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { audioClips } from '~/data/audioClips'

const route = useRoute()
const { locale } = useI18n()

const clip = computed(() => audioClips.find((entry) => entry.slug === route.params.slug))

if (!clip.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Audio clip not found'
  })
}

const localizedDescription = computed(() =>
  locale.value === 'en' ? clip.value?.descriptionEn || clip.value?.description : clip.value?.description
)
</script>
