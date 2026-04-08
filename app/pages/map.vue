<template>
  <main class="min-h-screen pt-24 pb-20 px-6 md:px-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-4">
        {{ $t('map.heading') }}
      </h1>
      <p class="text-sm tracking-wide text-black-coffee/60 mb-10">
        {{ $t('map.intro') }}
      </p>

      <MapInteractive map-src="/images/map.png" :dots="mapDots" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { mapDots } from '~/data/mapDots'
</script>
