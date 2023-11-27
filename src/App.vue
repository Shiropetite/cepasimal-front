<script setup lang="ts">
import AppHeader from 'src/components/AppHeader.vue';
import AppFooter from 'src/components/AppFooter.vue';
</script>

<template>
  <app-header />
  <router-view class="inside" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <app-footer />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.inside {
  padding-top: 80px;
}
</style>
