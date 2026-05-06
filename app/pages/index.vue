<template>
  <main>
    <TheHero src="/images/hero.png" :alt="$t('hero.subtitle')" />

    <section class="max-w-2xl mx-auto px-6 py-20">
      <p class="text-lg leading-relaxed text-black-coffee">
        {{ $t("home.intro") }}
      </p>
    </section>

    <section class="px-6 md:px-12 py-12 overflow-hidden">
      <h2 class="headline-strip headline-strip--section mb-8">
        {{ $t("home.audioHeading") }}
      </h2>
      <div class="space-y-8">
        <div class="max-w-3xl">
          <h3 class="headline-strip headline-strip--subsection mb-4">
            {{ $t("home.audioTitle") }}
          </h3>
          <p class="text-base leading-relaxed text-black-coffee/80">
            {{ $t("home.audioBody") }}
          </p>
        </div>

        <AudioSlider :clips="audioClips" />
      </div>
    </section>

    <section class="px-6 md:px-12 py-16">
      <h2 class="headline-strip headline-strip--section mb-8">
        {{ $t("home.videoHeading") }}
      </h2>
      <div class="space-y-8">
        <div class="max-w-3xl">
          <h3 class="headline-strip headline-strip--subsection mb-4">
            {{ $t("home.videoTitle") }}
          </h3>
          <p class="text-base leading-relaxed text-black-coffee/80">
            {{ $t("home.videoBody") }}
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
import { audioClips } from "~/data/audioClips";

const videoSrc = "/video/radio_riesbach_compressed.mp4";
</script>
