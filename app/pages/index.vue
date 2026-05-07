<template>
  <main>
    <TheHero src="/images/hero.png" :alt="$t('hero.subtitle')" />

    <section id="begruessung" class="px-6 py-20 md:px-12">
      <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
        <div class="max-w-4xl scroll-mt-32 space-y-10">
          <p
            v-for="(paragraph, index) in introParagraphs"
            :key="index"
            class="text-[20px] leading-[1.75] tracking-[0.01em] text-black-coffee"
          >
            {{ paragraph }}
          </p>
        </div>

        <aside class="mt-12 lg:mt-0">
          <div class="space-y-5 lg:sticky lg:top-32">
            <h2 class="headline-strip headline-strip--section">
              {{ contentsLabel }}
            </h2>
            <nav aria-label="Contents">
              <ul class="space-y-3 text-right text-sm leading-relaxed">
                <li v-for="section in homeSections" :key="section.id">
                  <a :href="`#${section.id}`" class="text-black-coffee hover:text-riesbach-rot">
                    {{ section.label }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </section>

    <section
      v-for="section in introSections"
      :id="section.id"
      :key="section.id"
      class="px-6 py-12 md:px-12"
    >
      <div class="mx-auto max-w-3xl scroll-mt-32">
        <h2 class="headline-strip headline-strip--subsection mb-5">
          {{ section.label }}
        </h2>
        <p class="text-base leading-relaxed text-black-coffee/80 md:text-lg">
          {{ sectionLorem }}
        </p>
      </div>
    </section>

    <section id="reinhoeren" class="px-6 py-12 overflow-hidden md:px-12">
      <h2 class="headline-strip headline-strip--section mb-8">
        {{ audioHeading }}
      </h2>
      <div class="space-y-8">
        <div class="max-w-3xl">
          <h3 class="headline-strip headline-strip--subsection mb-4">
            {{ audioTitle }}
          </h3>
          <p class="text-base leading-relaxed text-black-coffee/80">
            {{ audioBody }}
          </p>
        </div>

        <AudioSlider :clips="audioClips" />
      </div>
    </section>

    <section id="abschiedssendung" class="px-6 py-12 md:px-12">
      <div class="mx-auto max-w-3xl scroll-mt-32">
        <h2 class="headline-strip headline-strip--subsection mb-5">
          {{ farewellLabel }}
        </h2>
        <p class="text-base leading-relaxed text-black-coffee/80 md:text-lg">
          {{ sectionLorem }}
        </p>
      </div>
    </section>

    <section class="px-6 md:px-12 py-16">
      <h2 class="headline-strip headline-strip--section mb-8">
        {{ videoHeading }}
      </h2>
      <div class="space-y-8">
        <div class="max-w-3xl">
          <h3 class="headline-strip headline-strip--subsection mb-4">
            {{ videoTitle }}
          </h3>
          <p class="text-base leading-relaxed text-black-coffee/80">
            {{ videoBody }}
          </p>
        </div>

        <div class="overflow-hidden bg-black-coffee/10">
          <video controls playsinline preload="metadata" class="block w-full h-auto">
            <source :src="videoSrc" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
import { audioClips } from "~/data/audioClips";

const videoSrc = "/video/radio_riesbach_compressed.mp4";

const homeSections = computed(() => [
  { id: 'begruessung', label: locale.value === 'en' ? 'Introduction' : 'Begrüssung' },
  { id: 'quartier', label: locale.value === 'en' ? 'A Radio From The Neighborhood' : 'Ein Radio aus dem Quartier' },
  { id: 'aufnehmen', label: locale.value === 'en' ? 'Recording And Broadcasting' : 'Aufnehmen und senden' },
  { id: 'radioversuch', label: locale.value === 'en' ? 'The Swiss Radio Experiment' : 'Der Schweizer Radioversuch' },
  { id: 'reinhoeren', label: locale.value === 'en' ? 'Listen' : 'Reinhören' },
  { id: 'abschiedssendung', label: locale.value === 'en' ? 'Farewell Broadcast Of March 24, 1991' : 'Abschiedssendung vom 24. März 1991' }
])

const introSections = computed(() => homeSections.value.filter((section) =>
  ['quartier', 'aufnehmen', 'radioversuch'].includes(section.id)
))

const farewellLabel = computed(() =>
  locale.value === 'en' ? 'Farewell Broadcast Of March 24, 1991' : 'Abschiedssendung vom 24. März 1991'
)

const contentsLabel = computed(() =>
  locale.value === 'en' ? 'Contents' : 'Inhalte'
)

const sectionLorem = computed(() =>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
)

const audioHeading = computed(() =>
  locale.value === 'en' ? 'Listen' : 'Reinhören'
)

const audioTitle = computed(() =>
  locale.value === 'en' ? 'A Glimpse Into The Archive' : 'Ein Blick ins Archiv'
)

const audioBody = computed(() =>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
)

const videoHeading = computed(() =>
  'Video'
)

const videoTitle = computed(() =>
  locale.value === 'en' ? 'A Glimpse Into The Archive' : 'Ein Blick ins Archiv'
)

const videoBody = computed(() =>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
)

const introParagraphs = computed(() => {
  return locale.value === 'en'
    ? [
        'Welcome to Radio Riesbach! This was Switzerland’s first neighborhood radio station, broadcasting from 1984 to 1991 from the first floor of the Gemeinschaftszentrum Riesbach in Zurich.',
        'We’d like to give you a glimpse into this unique neighborhood station and shed some light on the era in which it emerged and the people who shaped it. About a third of the 709 programs produced by Radio Riesbach have been preserved to this day.',
        'The links on this page take you directly to excerpts from selected programs. This will give you a sense of what the radio station and the neighborhood sounded like in the 1980s. You’ll also find a link to the Sozialarchiv Zürich website, where the entire preserved program archive is available.'
      ]
    : [
        'Herzlich willkommen bei Radio Riesbach! Das war das erste Quartierradio der Schweiz und es sendete zwischen 1984 und 1991 aus dem ersten Stock des Gemeinschaftszentrums Riesbach in Zürich.',
        'Wir möchten Ihnen einen Einblick in diesen besonderen Quartiersender geben und zeigen, in welcher Zeit er entstand und welche Menschen ihn prägten. Etwa ein Drittel der insgesamt 709 Radio Riesbach produzierten Sendungen sind bis heute erhalten geblieben.',
        'Über die Links auf dieser Seite gelangen Sie direkt zu Ausschnitten aus ausgewählten Beiträgen. So erhalten Sie einen Eindruck, wie sich das Radio und auch das Quartier in den 1980er-Jahren anhörte. Dazu finden Sie immer auch den Link zur Seite des Sozialarchivs, wo das gesamte erhaltene Sendungearchiv zugänglich sind.'
      ]
})
</script>
