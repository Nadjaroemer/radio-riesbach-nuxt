<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'"
  >
    <div class="bg-black-coffee px-6 py-4 flex items-center justify-between">
      <NuxtLink :to="localePath('/')" class="no-underline">
        <img src="/images/logo.png" alt="Radio Riesbach" class="h-10 w-auto brightness-0 invert" />
      </NuxtLink>

      <div class="flex items-center gap-8">
        <NuxtLink
          :to="localePath('/about')"
          class="text-warm-white text-sm tracking-widest uppercase no-underline hover:text-riesbach-rot transition-colors"
        >
          {{ $t('nav.about') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/map')"
          class="text-warm-white text-sm tracking-widest uppercase no-underline hover:text-riesbach-rot transition-colors"
        >
          {{ $t('nav.map') }}
        </NuxtLink>

        <div class="flex items-center text-sm tracking-widest">
          <template v-for="(loc, i) in locales" :key="loc.code">
            <button
              class="transition-colors"
              :class="locale === loc.code ? 'text-riesbach-rot' : 'text-warm-white hover:text-riesbach-rot'"
              @click="setLocale(loc.code as 'de' | 'en')"
            >
              {{ loc.name }}
            </button>
            <span v-if="i < locales.length - 1" class="mx-2 text-warm-white/30">/</span>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 80
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
