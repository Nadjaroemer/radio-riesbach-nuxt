<template>
  <div class="relative">
    <button
      v-if="canScrollLeft"
      class="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-5 -translate-y-1/2 items-center justify-center bg-black-coffee text-warm-white transition-colors hover:bg-riesbach-rot"
      aria-label="Previous"
      @click="scrollLeft"
    >
      &#8592;
    </button>

    <div
      ref="track"
      class="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory overscroll-x-contain pb-4 pr-6 touch-pan-x md:pr-0"
      style="scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch;"
      @scroll="onScroll"
    >
      <AudioCard
        v-for="clip in clips"
        :key="clip.id"
        :clip="clip"
        :expanded="expandedClipId === clip.id"
        :mobile-active="activeClipId === clip.id"
        @toggle-expand="toggleExpanded(clip.id)"
        @play-state="setActiveClip(clip.id, $event)"
      />
    </div>

    <button
      v-if="canScrollRight"
      class="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-5 -translate-y-1/2 items-center justify-center bg-black-coffee text-warm-white transition-colors hover:bg-riesbach-rot"
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
const expandedClipId = ref<string | null>(null)
const activeClipId = ref<string | null>(null)

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

function toggleExpanded(id: string) {
  expandedClipId.value = expandedClipId.value === id ? null : id
}

function setActiveClip(id: string, playing: boolean) {
  activeClipId.value = playing ? id : activeClipId.value === id ? null : activeClipId.value

  if (playing) {
    nextTick(() => {
      const activeCard = track.value?.querySelector(`[data-clip-id="${id}"]`)
      activeCard?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    })
  }
}

onMounted(() => {
  nextTick(onScroll)
})
</script>
