<template>
  <footer class="bg-black-coffee px-6 py-12 text-warm-white md:px-12 md:py-14">
    <div class="grid gap-12 md:grid-cols-[0.9fr_1.3fr_1.4fr] md:gap-10 lg:gap-16">
      <div class="space-y-6">
        <img src="/images/logo-white.png" alt="Radio Riesbach" class="h-32 w-auto opacity-90" />
        <div>
          <p class="text-xl leading-snug">Radio Riesbach</p>
          <p class="mt-2 text-xl leading-snug">93.0 FM</p>
          <p class="mt-2 text-xl leading-snug">{{ $t('footer.years') }}</p>
        </div>
      </div>

      <div class="space-y-8 text-lg leading-relaxed">
        <div>
          <h3 class="mb-2 font-bold">{{ projectHeading }}</h3>
          <p v-for="person in projectPeople" :key="person">{{ person }}</p>
        </div>

        <div>
          <h3 class="mb-2 font-bold">{{ $t('footer.contactHeading') }}</h3>
          <a href="mailto:kontakt@radio-riesbach.ch" class="underline underline-offset-2 transition-opacity hover:opacity-80">
            kontakt@radio-riesbach.ch
          </a>
        </div>

        <div>
          <h3 class="mb-2 font-bold">{{ $t('footer.archiveHeading') }}</h3>
          <p v-for="item in archiveItems" :key="item">{{ item }}</p>
        </div>
      </div>

      <div class="text-lg leading-relaxed">
        <h3 class="mb-4 font-bold">{{ $t('footer.supportHeading') }}</h3>
        <div class="space-y-6">
          <a
            v-for="supporter in supporters"
            :key="supporter.label"
            :href="supporter.href"
            target="_blank"
            rel="noopener"
            class="block underline underline-offset-2 transition-opacity hover:opacity-80"
          >
            {{ supporter.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const projectHeading = computed(() =>
  locale.value === 'en' ? 'A project by' : 'Ein Projekt von'
)

const projectPeople = computed(() => [
  'Lucia Herrmann',
  'Nadja Hesselbjerg',
  'Carl G. Winthereik'
])

const archiveItems = computed(() =>
  locale.value === 'en'
    ? ['Sozialarchiv Zurich', 'Swiss Federal Archives', 'Private collection of Liz Mennel']
    : ['Sozialarchiv Zürich', 'Schweizerisches Bundesarchiv', 'Privatbesitz Liz Mennel']
)

const supporters = computed(() =>
  locale.value === 'en'
    ? [
        { label: 'Sozialarchiv Zurich', href: 'https://www.sozialarchiv.ch/' },
        { label: 'Quartierverein Riesbach', href: 'https://www.qv-riesbach.ch/' },
        { label: 'GZ Riesbach', href: 'https://gz-zh.ch/gz-riesbach/' },
        { label: 'Eichholzer Druck + Kopie AG', href: 'https://www.eichholzer.ch/' }
      ]
    : [
        { label: 'Sozialarchiv Zürich', href: 'https://www.sozialarchiv.ch/' },
        { label: 'Quartierverein Riesbach', href: 'https://www.qv-riesbach.ch/' },
        { label: 'GZ Riesbach', href: 'https://gz-zh.ch/gz-riesbach/' },
        { label: 'Eichholzer Druck + Kopie AG', href: 'https://www.eichholzer.ch/' }
      ]
)
</script>
