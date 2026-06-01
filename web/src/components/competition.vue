<script setup lang="ts">
import { computed } from "vue"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import CompetitionType from "@/models/competition"

const props = defineProps<{
  competition: CompetitionType
}>()

const backgroundImageUrl = computed(() => {
  const url = new URL(`../assets/images/${props.competition.background}`, import.meta.url).href

  return url
})
</script>
<style lang="css" scoped>
.competition {
  position: relative;
  overflow: hidden;
}

.competition-bg-image {
  opacity: 0.4;
  position: absolute;
  left: 0;
  top: 0;
  height: 120%; /*ugly hack to get image to cover the entire container */
}

.competition-details {
  position: relative;
  z-index: 1;
}
</style>
<template>
  <div class="container border rounded p-3 h-100 competition">
    <img :src="backgroundImageUrl" class="competition-bg-image" />
    <div class="competition-details">
      <h1>{{ competition.name }}</h1>
      <p><font-awesome-icon :icon="competition.icon" /></p>
      <p>{{ competition.distance }}</p>
    </div>
  </div>
</template>
