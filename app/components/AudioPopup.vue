<template>
  <div class="flex flex-col" :class="fullscreen ? 'h-full justify-between' : ''">

    <!-- Image -->
    <div :class="fullscreen ? 'flex-1 overflow-hidden' : 'aspect-video overflow-hidden bg-black-coffee/5'">
      <img
        :src="clip.image || '/images/placeholder_audioplayer_radio.png'"
        :alt="clip.title"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Body -->
    <div class="p-4 flex flex-col gap-3" :class="fullscreen && !clip.image ? 'flex-1' : ''">

      <!-- Title row -->
      <div class="flex items-start justify-between gap-2">
        <div>
          <span class="text-xs text-black-coffee/40 tracking-widest uppercase">{{ clip.id }}</span>
          <h4 class="font-bold leading-snug mt-0.5" :class="fullscreen ? 'text-xl' : 'text-sm'">{{ clip.title }}</h4>
        </div>
        <button
          class="text-black-coffee/40 hover:text-riesbach-rot transition-colors text-2xl leading-none flex-shrink-0"
          :aria-label="$t('map.close')"
          @click="$emit('close')"
        >
          ×
        </button>
      </div>

      <!-- Description -->
      <p v-if="clip.description" class="text-sm text-black-coffee/70 leading-relaxed">
        {{ clip.description }}
      </p>

      <!-- Controls -->
      <div class="flex items-center gap-2">
        <button
          class="flex-shrink-0 flex items-center justify-center border border-black-coffee/30 hover:bg-black-coffee hover:text-warm-white transition-colors"
          :class="fullscreen ? 'w-12 h-12 text-base' : 'w-8 h-8 text-xs'"
          :aria-label="isPlaying ? $t('audio.pause') : $t('audio.play')"
          @click="togglePlay"
        >
          <span v-if="!isPlaying">&#9654;</span>
          <span v-else>&#9646;&#9646;</span>
        </button>

        <button
          class="flex-shrink-0 flex items-center justify-center border border-black-coffee/30 hover:bg-black-coffee hover:text-warm-white transition-colors"
          :class="fullscreen ? 'w-12 h-12 text-base' : 'w-8 h-8 text-xs'"
          :aria-label="$t('audio.stop')"
          @click="stop"
        >
          &#9646;
        </button>

        <div class="flex-1 h-1 bg-black-coffee/10 cursor-pointer" @click="seek">
          <div class="h-full bg-riesbach-rot" :style="{ width: `${progress}%` }" />
        </div>

        <span class="flex-shrink-0 text-xs text-black-coffee/40 tabular-nums w-10 text-right">
          {{ formattedTime }}
        </span>
      </div>

      <!-- Original link -->
      <a
        v-if="clip.originalUrl && clip.originalUrl !== '#'"
        :href="clip.originalUrl"
        target="_blank"
        rel="noopener"
        class="text-xs tracking-widest uppercase text-riesbach-rot hover:underline"
      >
        {{ $t('audio.original') }} →
      </a>
    </div>

    <audio ref="audioEl" :src="clip.src" preload="auto" @timeupdate="onTimeUpdate" @ended="onEnded" />
  </div>
</template>

<script setup lang="ts">
import type { AudioClip } from '~/data/audioClips'

const props = defineProps<{
  clip: AudioClip
  fullscreen?: boolean
}>()

defineEmits<{ close: [] }>()

const audioEl = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const progress = ref(0)
const currentTime = ref(0)

const formattedTime = computed(() => {
  const m = Math.floor(currentTime.value / 60)
  const s = Math.floor(currentTime.value % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
})

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
  currentTime.value = 0
}

function onTimeUpdate() {
  if (!audioEl.value?.duration) return
  currentTime.value = audioEl.value.currentTime
  progress.value = (audioEl.value.currentTime / audioEl.value.duration) * 100
}

function onEnded() {
  isPlaying.value = false
  progress.value = 0
  currentTime.value = 0
}

function seek(e: MouseEvent) {
  if (!audioEl.value?.duration) return
  const bar = e.currentTarget as HTMLElement
  const rect = bar.getBoundingClientRect()
  audioEl.value.currentTime = ((e.clientX - rect.left) / rect.width) * audioEl.value.duration
}

onUnmounted(() => stop())
</script>
