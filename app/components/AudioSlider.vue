<template>
  <div class="space-y-8">
    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <AudioCard
        v-for="clip in visibleClips"
        :key="clip.id"
        :clip="clip"
        grid
        :expanded="expandedClipId === clip.id"
        :mobile-active="isMobile"
        @toggle-expand="toggleExpanded(clip.id)"
        @open-mobile-player="openMobilePlayer(clip)"
      />
    </div>

    <button
      v-if="clips.length > previewCount"
      class="inline-flex items-center justify-center border border-black-coffee px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-black-coffee transition-colors hover:bg-black-coffee hover:text-warm-white"
      @click="isExpanded = !isExpanded"
    >
      {{ isExpanded ? $t('audio.showLess') : $t('audio.listenAll') }}
    </button>

    <Teleport to="body">
      <div
        v-if="mobilePlayerClip"
        class="fixed inset-0 z-[70] bg-warm-white p-4 sm:hidden"
      >
        <div class="mx-auto flex h-full w-full max-w-md flex-col">
          <AudioPopup
            :clip="mobilePlayerClip"
            fullscreen
            autoplay
            @close="closeMobilePlayer"
          />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type { AudioClip } from '~/data/audioClips'

const props = defineProps<{ clips: AudioClip[] }>()
const previewCount = 5

const expandedClipId = ref<string | null>(null)
const isExpanded = ref(false)
const isMobile = ref(false)
const mobilePlayerClip = ref<AudioClip | null>(null)
const visibleClips = computed(() => (isExpanded.value ? props.clips : props.clips.slice(0, previewCount)))

function toggleExpanded(id: string) {
  expandedClipId.value = expandedClipId.value === id ? null : id
}

function updateIsMobile() {
  isMobile.value = window.innerWidth < 640
  if (!isMobile.value) {
    mobilePlayerClip.value = null
  }
}

function openMobilePlayer(clip: AudioClip) {
  if (!isMobile.value) return
  mobilePlayerClip.value = clip
}

function closeMobilePlayer() {
  mobilePlayerClip.value = null
}

watch(mobilePlayerClip, (clip) => {
  if (import.meta.client) {
    document.body.style.overflow = clip ? 'hidden' : ''
  }
})

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
  document.body.style.overflow = ''
})
</script>
