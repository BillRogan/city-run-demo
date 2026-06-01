<script setup lang="ts">
import Banner from "./components/banner.vue"
import Competitions from "./components/competitions.vue"
import RaceRoute from "./components/race-route.vue"
import Registration from "./components/registration.vue"
import Sponsors from "./components/sponsors.vue"
</script>

<template>
  <div class="container text-center mb-5">
    <Banner />
    <Competitions />
    <RaceRoute />
    <Registration />
    <Sponsors />
  </div>
</template>

<style scoped></style>
