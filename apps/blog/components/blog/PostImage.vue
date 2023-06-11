<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
}>()
</script>

<template>
  <img class="hover:scale-110" :src="src" :alt="alt">
</template>
