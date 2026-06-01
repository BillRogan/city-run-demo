<script setup lang="ts">
import Competition from "@/components/competition.vue"
import CompetitionType from "@/models/competition"

const competitions: CompetitionType[] = [
  new CompetitionType("10k", "10 km", "fa-person-running", "page-0-out-image-2-Image2.jpg"),
  new CompetitionType("3,5k", "3,5 km", "fa-person-running", "run-bg.jpg"),
  new CompetitionType("Kinderläufe", "230 - 1.800m", "fa-person-running", "kids-bg.jpg"),
  new CompetitionType("Nordic Walking", "3,5 km", "fa-person-hiking", "walkers-bg.jpg"),
]
</script>
<style scoped lang="css"></style>
<template>
  <div class="container">
    <h2>Unsere Bewerbe im Überblick</h2>
    <div class="row">
      <div
        v-for="competition in competitions"
        :key="competition.name"
        class="col-lg-3 col-md-6 col-sm-12 mb-4"
      >
        <Competition :competition="competition" />
      </div>
    </div>
    <div class="mb-5">&nbsp;</div>
  </div>
</template>
