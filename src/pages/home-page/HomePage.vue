<script setup lang="ts">
import { watch, ref, type Ref } from "vue";
import { useRoute } from "vue-router";

import LessonCard from "@/components/LessonCard.vue";
import TechMenu from "./components/TechMenu.vue";

import { getLessonsByTech, getPracticesByTech } from "@/services/LessonService";
import type { ApiOutput } from "@/models/ApiOutput";

const route = useRoute();

const responseLessons: Ref<ApiOutput | undefined> = ref();
const responsePractices: Ref<ApiOutput | undefined> = ref();

watch(
  () => route.query.tech,
  async (value) => {
    responseLessons.value = await getLessonsByTech(value as string | undefined);
    responsePractices.value = await getPracticesByTech(
      value as string | undefined
    );
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <div class="banner">
      Le {{ route.query.tech ?? "dev" }}, c'est pas si mal (promis)
    </div>

    <div class="selection row justify-center">
      <div class="page">
        <div class="row items-center justify-between">
          <cep-dropdown-button
            :label="route.query.tech ?? 'Tout'"
            icon-left="/icons/tech.svg"
            is-primary
          >
            <tech-menu />
          </cep-dropdown-button>

          <div class="searchbar">
            <img src="/icons/search.svg" />
            <div>Rechercher</div>
          </div>
        </div>

        <div class="content wrap">
          <div class="column col-md-6" style="gap: 16px">
            <div class="title">Fiches</div>
            <a
              :href="`/lessons/${index}`"
              v-for="(lesson, index) in responseLessons?.lessons"
              :key="index"
            >
              <LessonCard
                :title="lesson.title"
                :desc="lesson.description"
                :lastUpdated="lesson.lastUpdated"
                :timeToRead="lesson.timeToRead"
              />
            </a>
            <div
              class="no-content"
              v-if="responseLessons?.lessons.length === 0"
            >
              Aucune fiches disponibles
            </div>

            <div class="pagination" v-if="responseLessons?.count">
              <img
                v-if="route.query.pageL && Number.parseInt(route.query.pageL as string) > 1"
                class="svg"
                src="/icons/left-arrow.svg"
              />
              <span
                v-for="(page, index) in responseLessons?.pages"
                :key="page"
                :class="{
                  selected: (route.query.pageP && Number.parseInt(route.query.pageP as string) === (index + 1)) || index === 0
                }"
                >{{ index + 1 }}</span
              >
              <img
                v-if="route.query.pageL && Number.parseInt(route.query.pageL as string) === responseLessons?.pages"
                class="svg"
                src="/icons/right-arrow.svg"
              />
            </div>
          </div>

          <div class="column col-md-6" style="gap: 16px">
            <div class="title">Projet / Exercices</div>
            <a
              :href="`/practices/${index}`"
              v-for="(practice, index) in responsePractices?.lessons"
              :key="index"
            >
              <LessonCard
                :title="practice.title"
                :desc="practice.description"
                :lastUpdated="practice.lastUpdated"
                :timeToRead="practice.timeToRead"
              />
            </a>
            <div
              class="no-content"
              v-if="responsePractices?.lessons.length === 0"
            >
              Aucune fiches disponibles
            </div>

            <div class="pagination" v-if="responsePractices?.count">
              <img
                v-if="route.query.pageP && Number.parseInt(route.query.pageP as string) > 1"
                class="svg"
                src="/icons/left-arrow.svg"
              />
              <span
                v-for="(page, index) in responsePractices?.pages"
                :key="page"
                :class="{
                  selected: (route.query.pageP && Number.parseInt(route.query.pageP as string) === (index + 1)) || index === 0
                }"
                >{{ index + 1 }}</span
              >
              <img
                v-if="route.query.pageP && Number.parseInt(route.query.pageP as string) === responsePractices?.pages"
                class="svg"
                src="/icons/right-arrow.svg"
              />
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

.no-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  font-size: 16px;
}

.selected {
  color: var(--primary);
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
