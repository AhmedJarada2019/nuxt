<script setup lang="ts">
const { t } = useI18n()
const appName = t('app_name')

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appName}` : appName
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: t('app_description'),
    },
  ],
})
const { $gsap } = useNuxtApp()
// const { $ScrollTrigger } = useNuxtApp()
const { $ScrollToPlugin } = useNuxtApp()
// const { $Observer } = useNuxtApp()
// const { $TextPlugin } = useNuxtApp()
// const { $ExpoScaleEase } = useNuxtApp()
// const { $SlowMo } = useNuxtApp()

onMounted(() => {
  // $gsap.to(window, { duration: 2, scrollTo: 50 })
  // $gsap.to('.title', { rotation: 1, x: 100, duration: 1 })
  // $gsap.effects.fade('.title')
  // $gsap.effects.slideIn('#title')
})
</script>

<template>
  <Html lang="en" />
  <NuxtLoadingIndicator id="smooth-wrapper" />
  <NuxtLayout>
    <NuxtPage id="smooth-content" class="title" />
  </NuxtLayout>
</template>
