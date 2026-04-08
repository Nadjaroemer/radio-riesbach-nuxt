<template>
  <main>
    <TheHero src="/images/hero.png" :alt="$t('hero.subtitle')" />

    <section class="max-w-2xl mx-auto px-6 py-20">
      <p class="text-lg leading-relaxed">
        {{ $t('home.intro') }}
      </p>
    </section>

    <section class="px-6 md:px-12 py-12 overflow-hidden">
      <h2 class="text-xs tracking-widest uppercase text-black-coffee/40 mb-8">
        {{ $t('home.audioHeading') }}
      </h2>
      <AudioSlider :clips="audioClips" />
    </section>

    <section class="px-6 md:px-12 py-16">
      <h2 class="text-xs tracking-widest uppercase text-black-coffee/40 mb-8">
        {{ $t('home.imagesHeading') }}
      </h2>
      <ImageGallery :images="galleryImages" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { audioClips } from '~/data/audioClips'

const galleryImages = [
  { src: '/images/gallery/img-01.jpg', alt: 'Radio Riesbach Studio' },
  { src: '/images/gallery/img-02.jpg', alt: 'Sendemasten' },
  { src: '/images/gallery/img-03.jpg', alt: 'Redaktion' },
  { src: '/images/gallery/img-04.jpg', alt: 'Moderatorin' },
  { src: '/images/gallery/img-05.jpg', alt: 'Technik' },
  { src: '/images/gallery/img-06.jpg', alt: 'Archiv' }
]
</script>
