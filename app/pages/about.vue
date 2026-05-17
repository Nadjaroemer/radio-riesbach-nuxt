<template>
  <main class="min-h-screen pt-40 pb-20 px-6 md:px-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="headline-strip headline-strip--page mb-12">
        {{ $t('about.heading') }}
      </h1>
      <div class="max-w-3xl space-y-6 text-lg leading-relaxed">
        <p
          v-for="(paragraph, index) in aboutIntro"
          :key="index"
        >
          {{ rt(paragraph) }}
        </p>
      </div>

      <section class="mt-12">
        <h2 class="headline-strip headline-strip--section mb-6">
          {{ $t('about.thanksHeading') }}
        </h2>
        <ul class="max-w-3xl space-y-4 text-lg leading-relaxed list-disc pl-6">
          <li
            v-for="(item, index) in aboutThanks"
            :key="index"
            v-html="linkThanksItem(rt(item))"
          >
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const { rt, tm } = useI18n()

const aboutIntro = computed(() => tm('about.intro') as unknown[])
const aboutThanks = computed(() => tm('about.thanks') as unknown[])

const thanksLinks: Record<string, string> = {
  'Sozialarchiv Zürich': 'https://www.sozialarchiv.ch/',
  'GZ Riesbach': 'https://gz-zh.ch/gz-riesbach/',
  'Quartierverein Riesbach': 'https://8008.ch/',
  'Druckerei Eichholz Druck + Kopie AG': 'https://eichholzerdruck.ch/'
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function linkThanksItem(value: string) {
  let output = escapeHtml(value)

  for (const [label, href] of Object.entries(thanksLinks)) {
    output = output.replaceAll(
      label,
      `<a href="${href}" target="_blank" rel="noopener" class="underline underline-offset-2">${label}</a>`
    )
  }

  return output
}
</script>
