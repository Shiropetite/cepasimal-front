import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('src/pages/home-page/HomePage.vue'),
    },
    {
      path: '/lessons/:id',
      name: 'lessons',
      component: () => import('src/pages/LessonPage.vue'),
    },
    {
      path: '/practices/:id',
      name: 'practices',
      component: () => import('src/pages/LessonPage.vue'),
    },
    {
      path: '/hello',
      component: () => import('src/pages/HelloPage.vue'),
    },
  ],
});

export default router;
