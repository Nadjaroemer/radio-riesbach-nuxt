<template>
  <div class="relative inline-block w-full">
    <img
      :src="mapSrc"
      alt="Karte Zürich Seefeld"
      class="w-full h-auto block"
      @load="onImageLoad"
    />

    <button
      v-for="dot in dots"
      :key="dot.id"
      class="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 group"
      :style="{ left: `${dot.x}%`, top: `${dot.y}%` }"
      :aria-label="dot.label"
      @click="selectDot(dot)"
    >
      <span
        class="block w-4 h-4 rounded-full bg-riesbach-rot border-2 border-warm-white shadow-md group-hover:scale-125 transition-transform"
        :class="activeDot?.id === dot.id ? 'scale-125 ring-2 ring-riesbach-rot ring-offset-2' : ''"
      />
      <span class="absolute left-5 top-0 bg-black-coffee text-warm-white text-xs px-2 py-0.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {{ dot.label }}
      </span>
    </button>

    <!-- Audio popup -->
    <Transition name="fade">
      <div
        v-if="activeDot && activeClip"
        class="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-warm-white border border-black-coffee/20 p-4 shadow-lg"
      >
        <div class="flex items-start justify-between gap-2 mb-3">
          <div>
            <p class="text-xs text-black-coffee/40 tracking-widest uppercase">{{ activeClip.id }}</p>
            <h4 class="font-bold text-sm mt-0.5">{{ activeClip.title }}</h4>
          </div>
          <button
            class="text-black-coffee/40 hover:text-riesbach-rot transition-colors text-lg leading-none mt-0.5"
            :aria-label="$t('map.close')"
            @click="close"
          >
            ×
          </button>
        </div>

        <p class="text-xs text-black-coffee/70 leading-relaxed mb-3">{{ activeClip.description }}</p>

        <div class="flex items-center gap-2">
          <button
            class="flex items-center justify-center w-8 h-8 border border-black-coffee/30 hover:bg-black-coffee hover:text-warm-white transition-colors text-xs"
            @click="togglePlay"
          >
            <span v-if="!isPlaying">&#9654;</span>
            <span v-else>&#9646;&#9646;</span>
          </button>
          <button
            class="flex items-center justify-center w-8 h-8 border border-black-coffee/30 hover:bg-black-coffee hover:text-warm-white transition-colors text-xs"
            @click="stop"
          >
            &#9646;
          </button>
          <div class="flex-1 h-1 bg-black-coffee/10 cursor-pointer" @click="seek">
            <div class="h-full bg-riesbach-rot transition-all" :style="{ width: `${progress}%` }" />
          </div>
        </div>

        <audio ref="audioEl" :src="activeClip.src" preload="auto" @timeupdate="onTimeUpdate" @ended="onEnded" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { MapDot } from '~/data/mapDots'
import type { AudioClip } from '~/data/audioClips'
import { audioClips } from '~/data/audioClips'

defineProps<{
  mapSrc: string
  dots: MapDot[]
}>()

const activeDot = ref<MapDot | null>(null)
const activeClip = computed<AudioClip | undefined>(() =>
  activeDot.value ? audioClips.find(c => c.id === activeDot.value!.clipId) : undefined
)

const audioEl = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const progress = ref(0)

function selectDot(dot: MapDot) {
  stop()
  activeDot.value = dot
  nextTick(() => {
    audioEl.value?.load()
  })
}

function close() {
  stop()
  activeDot.value = null
}

function togglePlay() {
  if (!audioEl.value) return
  if (isPlaying.value) {
    audioEl.value.pause()
    isPlaying.value = false
  } else {
    audioEl.value.play()
    isPlaying.value = true
  }
}

function stop() {
  if (!audioEl.value) return
  audioEl.value.pause()
  audioEl.value.currentTime = 0
  isPlaying.value = false
  progress.value = 0
}

function onTimeUpdate() {
  if (!audioEl.value?.duration) return
  progress.value = (audioEl.value.currentTime / audioEl.value.duration) * 100
}

function onEnded() {
  isPlaying.value = false
  progress.value = 0
}

function seek(e: MouseEvent) {
  if (!audioEl.value?.duration) return
  const bar = e.currentTarget as HTMLElement
  const rect = bar.getBoundingClientRect()
  audioEl.value.currentTime = ((e.clientX - rect.left) / rect.width) * audioEl.value.duration
}

function onImageLoad() {}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
