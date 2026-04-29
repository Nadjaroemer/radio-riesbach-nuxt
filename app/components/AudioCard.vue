<template>
  <div
    class="border border-black-coffee/20 bg-warm-white flex flex-col"
    :class="fullscreen ? 'w-full h-full' : 'flex-shrink-0 w-72'"
  >
    <!-- Close button (fullscreen only) -->
    <div v-if="fullscreen" class="flex justify-end p-3 pb-0">
      <button
        class="text-black-coffee/40 hover:text-riesbach-rot transition-colors text-2xl leading-none"
        :aria-label="$t('map.close')"
        @click="$emit('close')"
      >
        ×
      </button>
    </div>

    <div class="w-full overflow-hidden bg-black-coffee/10" :class="fullscreen ? 'flex-1' : 'aspect-square'">
      <img
        :src="clip.image || '/images/placeholder_audioplayer_radio.png'"
        :alt="clip.title"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="p-4 flex flex-col gap-3 flex-1">
      <div>
        <span class="text-xs text-black-coffee/40 tracking-widest uppercase">{{ clip.id }}</span>
        <h3 class="font-bold text-base mt-0.5 leading-snug">{{ clip.title }}</h3>
        <div v-if="clip.description" class="mt-1">
          <p
            class="text-sm text-black-coffee/70 leading-relaxed overflow-hidden transition-all duration-300"
            :class="expanded ? '' : 'line-clamp-3'"
          >
            {{ clip.description }}
          </p>
          <button
            class="text-xs text-riesbach-rot mt-1 hover:underline"
            @click="expanded = !expanded"
          >
            {{ expanded ? '▲ weniger' : '▼ mehr' }}
          </button>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-2 mt-auto">
        <button
          class="flex items-center justify-center w-9 h-9 border border-black-coffee/30 hover:bg-black-coffee hover:text-warm-white transition-colors text-sm"
          :aria-label="isPlaying ? $t('audio.pause') : $t('audio.play')"
          @click="togglePlay"
        >
          <span v-if="!isPlaying">&#9654;</span>
          <span v-else>&#9646;&#9646;</span>
        </button>

        <button
          class="flex items-center justify-center w-9 h-9 border border-black-coffee/30 hover:bg-black-coffee hover:text-warm-white transition-colors text-sm"
          :aria-label="$t('audio.stop')"
          @click="stop"
        >
          &#9646;
        </button>

        <div class="flex-1 h-1 bg-black-coffee/10 relative cursor-pointer" @click="seek">
          <div
            class="h-full bg-riesbach-rot transition-all"
            :style="{ width: `${progress}%` }"
          />
        </div>

        <span class="text-xs text-black-coffee/40 tabular-nums min-w-[3rem] text-right">
          {{ formattedTime }}
        </span>
      </div>

      <a
        :href="clip.originalUrl"
        target="_blank"
        rel="noopener"
        class="text-xs tracking-widest uppercase text-riesbach-rot hover:underline"
      >
        {{ $t('audio.original') }} →
      </a>
    </div>

    <audio ref="audioEl" :src="clip.src" preload="none" @timeupdate="onTimeUpdate" @ended="onEnded" />
  </div>
</template>

<script setup lang="ts">
import type { AudioClip } from '~/data/audioClips'

const props = defineProps<{ clip: AudioClip; fullscreen?: boolean }>()
defineEmits<{ close: [] }>()

const audioEl = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const expanded = ref(false)
const progress = ref(0)
const currentTime = ref(0)

const formattedTime = computed(() => {
  const t = currentTime.value
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60)
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
  if (!audioEl.value) return
  currentTime.value = audioEl.value.currentTime
  if (audioEl.value.duration) {
    progress.value = (audioEl.value.currentTime / audioEl.value.duration) * 100
  }
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
  const ratio = (e.clientX - rect.left) / rect.width
  audioEl.value.currentTime = ratio * audioEl.value.duration
}
</script>
