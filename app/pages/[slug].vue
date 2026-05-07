<template>
  <main class="min-h-screen px-6 pb-20 pt-40 md:px-12">
    <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
      <aside class="hidden lg:block">
        <div class="sticky top-32 space-y-5">
          <h2 class="headline-strip headline-strip--section">
            {{ $t('audioDetail.contents') }}
          </h2>
          <nav aria-label="Contents">
            <ul class="space-y-3 text-sm leading-relaxed">
              <li v-for="section in sections" :key="section.id">
                <a :href="`#${section.id}`" class="text-black-coffee hover:text-riesbach-rot">
                  {{ section.label }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <div>
      <h1 class="headline-strip headline-strip--page mb-10">
        {{ clip.title }}
      </h1>

      <section
        v-for="section in textSections"
        :id="section.id"
        :key="section.id"
        class="mb-14 scroll-mt-32"
      >
        <h2 class="headline-strip headline-strip--subsection mb-5">
          {{ section.label }}
        </h2>
        <p class="max-w-3xl text-base leading-relaxed text-black-coffee/80 md:text-lg">
          {{ $t('audioDetail.lorem') }}
        </p>
      </section>

      <section id="reinhoeren" class="scroll-mt-32">
        <h2 class="headline-strip headline-strip--subsection mb-8">
          {{ $t('audioDetail.listen') }}
        </h2>

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
      </section>
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

const sections = computed(() => [
  { id: 'begruessung', label: locale.value === 'en' ? 'Introduction' : 'Begrüssung' },
  { id: 'quartier', label: locale.value === 'en' ? 'A Radio From The Neighborhood' : 'Ein Radio aus dem Quartier' },
  { id: 'aufnehmen', label: locale.value === 'en' ? 'Recording And Broadcasting' : 'Aufnehmen und senden' },
  { id: 'radioversuch', label: locale.value === 'en' ? 'The Swiss Radio Experiment' : 'Der Schweizer Radioversuch' },
  { id: 'reinhoeren', label: locale.value === 'en' ? 'Listen' : 'Reinhören' },
  { id: 'abschiedssendung', label: locale.value === 'en' ? 'Farewell Broadcast Of March 24, 1991' : 'Abschiedssendung vom 24. März 1991' }
])

const textSections = computed(() => sections.value.filter((section) => section.id !== 'reinhoeren'))
</script>
