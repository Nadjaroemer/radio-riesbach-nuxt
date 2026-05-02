<template>
  <main class="min-h-screen pt-40 pb-20 px-6 md:px-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="headline-strip headline-strip--page mb-6">
        {{ $t("map.heading") }}
      </h1>
      <p class="text-lg tracking-wide text-black-coffee mb-12">
        {{ $t("map.intro") }}
      </p>

      <MapInteractive map-src="/images/map.png" :dots="mapDots" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { mapDots } from "~/data/mapDots";

definePageMeta({ navAlwaysVisible: true });
</script>
