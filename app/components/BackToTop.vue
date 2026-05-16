<template>
  <button
    v-show="visible"
    type="button"
    class="fixed bottom-5 right-5 z-40 bg-black-coffee px-3 py-2 text-xs font-bold uppercase tracking-widest text-warm-white shadow-lg transition hover:bg-riesbach-rot focus:outline-none focus:ring-2 focus:ring-riesbach-rot focus:ring-offset-2 focus:ring-offset-warm-white"
    :aria-label="locale === 'en' ? 'Back to top' : 'Zurück nach oben'"
    @click="scrollToTop"
  >
    ↑ Top
  </button>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 600
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
