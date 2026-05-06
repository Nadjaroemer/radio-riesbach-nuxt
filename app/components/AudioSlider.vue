<template>
  <div class="space-y-8">
    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <AudioCard
        v-for="clip in visibleClips"
        :key="clip.id"
        :clip="clip"
        grid
        :expanded="expandedClipId === clip.id"
        @toggle-expand="toggleExpanded(clip.id)"
      />
    </div>

    <button
      v-if="clips.length > previewCount"
      class="inline-flex items-center justify-center border border-black-coffee px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-black-coffee transition-colors hover:bg-black-coffee hover:text-warm-white"
      @click="isExpanded = !isExpanded"
    >
      {{ isExpanded ? $t('audio.showLess') : $t('audio.listenAll') }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { AudioClip } from '~/data/audioClips'

const props = defineProps<{ clips: AudioClip[] }>()
const previewCount = 5

const expandedClipId = ref<string | null>(null)
const isExpanded = ref(false)
const visibleClips = computed(() => (isExpanded.value ? props.clips : props.clips.slice(0, previewCount)))

function toggleExpanded(id: string) {
  expandedClipId.value = expandedClipId.value === id ? null : id
}
</script>
