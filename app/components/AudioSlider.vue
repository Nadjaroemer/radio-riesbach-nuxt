<template>
  <div class="relative">
    <button
      v-if="canScrollLeft"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black-coffee text-warm-white flex items-center justify-center hover:bg-riesbach-rot transition-colors -translate-x-5"
      aria-label="Previous"
      @click="scrollLeft"
    >
      &#8592;
    </button>

    <div
      ref="track"
      class="flex gap-6 overflow-x-auto scroll-smooth pb-4"
      style="scrollbar-width: none; -ms-overflow-style: none;"
      @scroll="onScroll"
    >
      <AudioCard v-for="clip in clips" :key="clip.id" :clip="clip" />
    </div>

    <button
      v-if="canScrollRight"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black-coffee text-warm-white flex items-center justify-center hover:bg-riesbach-rot transition-colors translate-x-5"
      aria-label="Next"
      @click="scrollRight"
    >
      &#8594;
    </button>
  </div>
</template>

<script setup lang="ts">
import type { AudioClip } from '~/data/audioClips'

defineProps<{ clips: AudioClip[] }>()

const track = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

function onScroll() {
  if (!track.value) return
  canScrollLeft.value = track.value.scrollLeft > 0
  canScrollRight.value = track.value.scrollLeft + track.value.clientWidth < track.value.scrollWidth - 1
}

function scrollLeft() {
  track.value?.scrollBy({ left: -300, behavior: 'smooth' })
}

function scrollRight() {
  track.value?.scrollBy({ left: 300, behavior: 'smooth' })
}

onMounted(() => {
  nextTick(onScroll)
})
</script>
