import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/Homepage.vue")
    },
    {
      path: "/lesson/:id",
      name: "lesson",
      component: () => import("@/pages/LessonPage.vue")
    }
  ],
});

export default router;