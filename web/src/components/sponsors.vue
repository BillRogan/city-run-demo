<script setup lang="ts">
import SponsorType from "@/models/sponsor"

const sponsorImageUrl = (filename: string) => {
  const url = new URL(`../assets/images/${filename}`, import.meta.url).href

  return url
}

const sponsors: SponsorType[] = [
  new SponsorType(
    "Salzburger Sparkasse ",
    "https://www.sparkasse.at/salzburg/privatkunden",
    sponsorImageUrl("SalzburgerSparkasse.png"),
  ),
  new SponsorType(
    "Stadtgemeinde Mattighofen",
    "https://www.mattighofen.at/",
    sponsorImageUrl("MattighofenKaufmannschaft.png"),
  ),
  new SponsorType(
    "Oberösterreichische Nachrichten",
    "https://www.nachrichten.at/",
    sponsorImageUrl("ooenachrichten.jpg"),
  ),
  new SponsorType(
    "Bäckerei Sailer",
    "https://www.baeckerei-sailer.at/",
    sponsorImageUrl("sailer.jpg"),
  ),
  new SponsorType(
    "Autohaus Büchl",
    "https://www.autohaus-buechl.at/",
    sponsorImageUrl("buechl.jpg"),
  ),
  new SponsorType(
    "Eurospar",
    "https://www.spar.at/standorte/eurospar-mattighofen-5230-braunauer-strasse-4",
    sponsorImageUrl("eurospar.jpg"),
  ),
]
</script>
<style scoped lang="css">
.sponsor-image {
  max-height: 150px;
  max-width: 300px;
}
</style>
<template>
  <div class="container">
    <h2>Sponsoren</h2>
    <div id="sponsorCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="row">
        <div class="carousel-inner" style="height: 150px">
          <div
            v-for="(sponsor, index) in sponsors"
            :key="sponsor.name"
            :class="['carousel-item', { active: index === 0 }, 'col-3']"
            data-bs-interval="3000"
          >
            <a :href="sponsor.url" target="_blank" rel="noopener noreferrer">
              <img :src="`${sponsor.image}`" :alt="sponsor.name" class="sponsor-image" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-5">&nbsp;</div>
  </div>
</template>
