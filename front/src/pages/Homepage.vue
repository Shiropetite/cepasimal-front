<script setup lang="ts">
import LessonCard from '@/components/LessonCard.vue';
</script>

<template>
  <div class="banner">
    Insérez un truc sympa
  </div>

  <div class="selection">

    <div class="row items-center justify-between">
      <div class="techlist">
        <div class="row items-center justify-between gap-12">
          <img src="../assets/tech-icon.svg" />
          Tout
        </div>
        <img src="../assets/down-arrow-icon.svg" />
      </div>
      <div class="searchbar">
        <img src="../assets/search-icon.svg" />
        <div>Rechercher</div>
      </div>
    </div>

    <div class="content">
      <div>
        <div class="title">Fiches</div>
        <LessonCard
          title="Environnement de travail (Eclipse)"
          desc="Lorem ipsum dolor sit amet"
          lastUpdate="A l'instant"
          duration="15min"
        />
        <div class="pagination">
          <img src="../assets/left-arrow-icon.svg" />
          <span style="color: #0586FF;">1</span> 2
          <img src="../assets/right-arrow-icon.svg" />
        </div>
      </div>

      <div>
        <div class="title">Projet / Exercices</div>
        <LessonCard
          title="Jeu tour par tour - Sprint 1"
          desc="Lorem ipsum dolor sit amet"
          lastUpdate="Il y a 1 mois"
          duration="1h 30min"
        />
        <div class="pagination">
          <img src="../assets/left-arrow-icon.svg" />
          <span style="color: #0586FF;">1</span> 2
          <img src="../assets/right-arrow-icon.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  color: #FFFFFF;
  background: #110E1A;
  font-weight: 700;
  font-size: 22px;
}

.selection {
  padding: 32px 40px;

  .techlist {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 202px;
    padding: 12px;
    color: #FFFFFF;
    background: #0586FF;
    border: 2px solid #0586FF;
    border-radius: 8px;
  }

  .searchbar {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 312px;
    padding: 12px;
    color: #110E1A;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;

    .title {
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 22px;
      color: #110E1A;
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    padding-top: 22px;
    font-weight: 700;
    font-size: 16px;
  }
}
</style>
