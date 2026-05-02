<template>
  <div>
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'"
    >
      <div class="bg-black-coffee px-6 py-4 flex items-center justify-between">
        <NuxtLink :to="localePath('/')" class="no-underline" @click="closeMenu">
          <img src="/images/logo.png" alt="Radio Riesbach" class="h-10 w-auto brightness-0 invert" />
        </NuxtLink>

        <button
          class="flex items-center md:hidden"
          :aria-label="mobileMenuOpen ? $t('nav.close') : $t('nav.menu')"
          :aria-expanded="mobileMenuOpen"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span class="flex flex-col gap-1.5">
            <span class="h-0.5 w-6 bg-warm-white transition-transform duration-300" :class="mobileMenuOpen ? 'translate-y-2 rotate-45' : ''" />
            <span class="h-0.5 w-6 bg-warm-white transition-opacity duration-300" :class="mobileMenuOpen ? 'opacity-0' : 'opacity-100'" />
            <span class="h-0.5 w-6 bg-warm-white transition-transform duration-300" :class="mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''" />
          </span>
        </button>

        <div class="hidden items-center gap-8 md:flex">
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
                @click="setLocaleAndClose(loc.code as 'de' | 'en')"
              >
                {{ loc.name }}
              </button>
              <span v-if="i < locales.length - 1" class="mx-2 text-warm-white/30">/</span>
            </template>
          </div>
        </div>
      </div>
    </nav>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-40 bg-black-coffee pt-24 md:hidden"
      >
        <div class="flex h-full flex-col items-center justify-center gap-10 px-6 text-center">
          <NuxtLink
            :to="localePath('/about')"
            class="text-warm-white text-2xl tracking-[0.22em] uppercase no-underline hover:text-riesbach-rot transition-colors"
            @click="closeMenu"
          >
            {{ $t('nav.about') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/map')"
            class="text-warm-white text-2xl tracking-[0.22em] uppercase no-underline hover:text-riesbach-rot transition-colors"
            @click="closeMenu"
          >
            {{ $t('nav.map') }}
          </NuxtLink>
          <div class="flex items-center text-lg tracking-[0.22em] uppercase">
            <template v-for="(loc, i) in locales" :key="loc.code">
              <button
                class="transition-colors"
                :class="locale === loc.code ? 'text-riesbach-rot' : 'text-warm-white hover:text-riesbach-rot'"
                @click="setLocaleAndClose(loc.code as 'de' | 'en')"
              >
                {{ loc.name }}
              </button>
              <span v-if="i < locales.length - 1" class="mx-3 text-warm-white/30">/</span>
            </template>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const homePath = computed(() => localePath('/'))
const alwaysVisible = computed(() => route.path !== homePath.value)
const visible = computed(() => alwaysVisible.value || scrolled.value)

function onScroll() {
  scrolled.value = window.scrollY > 80
}

function closeMenu() {
  mobileMenuOpen.value = false
}

function setLocaleAndClose(code: 'de' | 'en') {
  setLocale(code)
  closeMenu()
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

watch(() => route.path, closeMenu)

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
