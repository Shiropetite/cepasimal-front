<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import LessonCard from "@/components/LessonCard.vue";
import { getLessonsByTech, getPracticesByTech } from "@/services/LessonService";
import type { Lesson } from "@/models/Lesson";

const lessons: Ref<Lesson[]> = ref([]);
const practices: Ref<Lesson[]> = ref([]);

onMounted(async () => {
  lessons.value = await getLessonsByTech("java", 0);
  practices.value = await getPracticesByTech("java", 0);
});
</script>

<template>
  <div>
    <div class="banner">Le java c'est pas si mal (promis)</div>

    <div class="selection row justify-center">
      <div class="page">
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

        <div class="content wrap">
          <div class="column col-md-6" style="gap: 16px">
            <div class="title">Fiches</div>
            <a
              :href="`/lessons/${index}`"
              v-for="(lesson, index) in lessons"
              :key="index"
            >
              <LessonCard
                :title="lesson.title"
                :desc="lesson.description"
                :lastUpdated="lesson.lastUpdated"
                :timeToRead="lesson.timeToRead"
              />
            </a>
            <div class="pagination">
              <img class="svg" src="../assets/left-arrow-icon.svg" />
              <span style="color: #0586ff">1</span> 2
              <img class="svg" src="../assets/right-arrow-icon.svg" />
            </div>
          </div>

          <div class="column col-md-6" style="gap: 16px">
            <div class="title">Projet / Exercices</div>
            <a
              :href="`/practices/${index}`"
              v-for="(practice, index) in practices"
              :key="index"
            >
              <LessonCard
                :title="practice.title"
                :desc="practice.description"
                :lastUpdated="practice.lastUpdated"
                :timeToRead="practice.timeToRead"
              />
            </a>
            <div class="pagination">
              <img class="svg" src="../assets/left-arrow-icon.svg" />
              <span style="color: #0586ff">1</span> 2
              <img class="svg" src="../assets/right-arrow-icon.svg" />
            </div>
          </div>
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
  color: white;
  background: var(--accent);
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
    color: white;
    background: $primary;
    border: 2px solid $primary;
    border-radius: 8px;
  }

  .searchbar {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 312px;
    padding: 12px;
    background: var(--background-card);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  .content {
    display: flex;
    gap: 0 58px;
    margin-top: 16px;

    .title {
      font-weight: 700;
      font-size: 22px;
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
