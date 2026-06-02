<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from "vue"

import NavigationElement from "@/models/navigation-element"

import Banner from "./components/banner.vue"
import Competitions from "./components/competitions.vue"
import RaceRoute from "./components/race-route.vue"
import Registration from "./components/registration.vue"
import Sponsors from "./components/sponsors.vue"

const competitionsSection = useTemplateRef<HTMLElement>("competitionsSection")
const raceRouteSection = useTemplateRef<HTMLElement>("raceRouteSection")
const registrationSection = useTemplateRef<HTMLElement>("registrationSection")
const sponsorsSection = useTemplateRef<HTMLElement>("sponsorsSection")
const scrollToTopButton = useTemplateRef<HTMLElement>("scrollToTopButton")

const scrollFunction = () => {
  const button = scrollToTopButton.value
  if (!button) {
    return
  }

  if (window.scrollY > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block"
  } else {
    button.style.display = "none"
  }
}

onMounted(() => {
  window.addEventListener("scroll", scrollFunction)
})

onUnmounted(() => {
  window.removeEventListener("scroll", scrollFunction)
})

const navigationElements: NavigationElement[] = [
  new NavigationElement("Bewerbe", competitionsSection),
  new NavigationElement("Informationen", registrationSection),
  new NavigationElement("Strecke", raceRouteSection),
  new NavigationElement("Sponsoren", sponsorsSection),
]

const backToTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

const scrolltoElement = (element: NavigationElement) => {
  element.section.value?.scrollIntoView({ behavior: "smooth" })
}
</script>

<template>
  <div class="container text-center mb-5">
    <div id="navigation" class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">City Run 2026</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li v-for="navigationElement in navigationElements" :key="navigationElement.name">
                <a class="nav-link" @click="scrolltoElement(navigationElement)">
                  {{ navigationElement.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <Banner />
    <div ref="competitionsSection"><Competitions /></div>
    <div ref="raceRouteSection"><RaceRoute /></div>
    <div ref="registrationSection"><Registration /></div>
    <div ref="sponsorsSection"><Sponsors /></div>
    <button
      ref="scrollToTopButton"
      id="btn-back-to-top"
      type="button"
      class="btn btn-floating btn-lg border-1 border-dark"
      @click="backToTop"
    >
      <font-awesome-icon :icon="['fa', 'angle-up']"></font-awesome-icon>
    </button>
  </div>
</template>

<style scoped>
#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
}
</style>
