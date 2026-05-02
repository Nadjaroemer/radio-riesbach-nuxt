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
          >
            {{ rt(item) }}
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
</script>
