import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/HomePage.vue"),
    },
    {
      path: "/lessons/:id",
      name: "lessons",
      component: () => import("@/pages/LessonPage.vue"),
    },
    {
      path: "/practices/:id",
      name: "practices",
      component: () => import("@/pages/LessonPage.vue"),
    },
  ],
});

export default router;
