<template>
  <div ref="container" class="relative w-full">
    <img
      :src="mapSrc"
      alt="Karte Zürich Seefeld"
      class="w-full h-auto block"
    />

    <!-- Dots -->
    <button
      v-for="dot in dots"
      :key="dot.id"
      class="absolute -translate-x-1/2 -translate-y-1/2 group z-10"
      :style="{ left: `${dot.x}%`, top: `${dot.y}%` }"
      :aria-label="dot.label"
      @click="selectDot(dot, $event)"
    >
      <span
        class="flex items-center justify-center w-7 h-7 rounded-full bg-riesbach-rot border-2 border-warm-white shadow-md text-warm-white text-xs font-bold group-hover:scale-110 transition-transform"
        :class="activeDot?.id === dot.id ? 'scale-110 ring-2 ring-white ring-offset-1 ring-offset-riesbach-rot' : ''"
      >
        {{ dot.clipId }}
      </span>
    </button>

    <!-- Floating card (desktop) -->
    <Transition name="pop">
      <div
        v-if="activeDot && activeClip && !isMobile"
        class="absolute z-20 w-72 bg-warm-white border border-black-coffee/20 shadow-xl"
        :style="cardStyle"
      >
        <AudioPopup :clip="activeClip" @close="close" />
      </div>
    </Transition>

    <!-- Full screen overlay (mobile) -->
    <Transition name="slide-up">
      <div
        v-if="activeDot && activeClip && isMobile"
        class="fixed inset-0 z-50"
      >
        <AudioCard :clip="activeClip" fullscreen @close="close" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { MapDot } from '~/data/mapDots'
import type { AudioClip } from '~/data/audioClips'
import { audioClips } from '~/data/audioClips'

const props = defineProps<{
  mapSrc: string
  dots: MapDot[]
}>()

const container = ref<HTMLElement | null>(null)
const activeDot = ref<MapDot | null>(null)
const isMobile = ref(false)

const activeClip = computed<AudioClip | undefined>(() =>
  activeDot.value ? audioClips.find(c => c.id === activeDot.value!.clipId) : undefined
)

// Position the card to the right of the dot, flipping left if near the right edge
const cardStyle = computed(() => {
  if (!activeDot.value) return {}
  const { x, y } = activeDot.value
  const flipX = x > 65
  const flipY = y > 70

  return {
    left: flipX ? `calc(${x}% - 20rem)` : `calc(${x}% + 1.5rem)`,
    top: flipY ? `calc(${y}% - 12rem)` : `calc(${y}% - 1rem)`,
  }
})

function selectDot(dot: MapDot) {
  activeDot.value = activeDot.value?.id === dot.id ? null : dot
}

function close() {
  activeDot.value = null
}

function checkMobile() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.pop-enter-active { transition: opacity 0.15s, transform 0.15s; }
.pop-leave-active { transition: opacity 0.1s, transform 0.1s; }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: scale(0.95); }

.slide-up-enter-active { transition: transform 0.25s ease-out; }
.slide-up-leave-active { transition: transform 0.2s ease-in; }
.slide-up-enter-from, .slide-up-leave-to { transform: translateY(100%); }
</style>
