<template>
  <footer class="bg-black-coffee text-warm-white px-6 md:px-12 pt-10 pb-6">
    <!-- Top row -->
    <div class="flex items-start justify-between gap-8">
      <!-- Left: logo + name + years -->
      <div class="flex items-center gap-4">
        <img src="/images/logo-white.png" alt="Radio Riesbach" class="h-14 w-auto opacity-90 flex-shrink-0" />
        <div>
          <p class="font-bold text-lg leading-snug">Radio Riesbach</p>
          <p class="text-warm-white/50 text-sm mt-0.5">{{ $t('footer.years') }}</p>
        </div>
      </div>

      <!-- Right: credits -->
      <div class="text-right text-sm leading-relaxed">
        <p>{{ $t('footer.project') }}</p>
        <p class="text-warm-white/50 mt-1">{{ $t('footer.archive') }}</p>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-warm-white/20 mt-8 mb-5" />

    <!-- Copyright -->
    <p class="text-center text-sm text-warm-white/50">{{ $t('footer.copyright') }}</p>
  </footer>
</template>
