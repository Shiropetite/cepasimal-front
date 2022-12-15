<script setup lang="ts">
import { useRoute } from "vue-router";

defineProps<{
  label: string;
  iconLeft?: string;
  iconRight?: string;
  to?: string;
  href?: string;
  target?: string;
  isPrimary?: boolean;
  isDropdown?: boolean;
}>();

const route = useRoute();
</script>

<template>
  <router-link
    class="cep-button"
    :class="{
      'bg-primary': isPrimary,
      dropdown: isDropdown,
    }"
    :to="to ?? route.fullPath"
    :href="href"
    :target="target"
  >
    <div class="row items-center">
      <img v-if="iconLeft" class="icon-left" :src="iconLeft" />
      <span v-if="label">{{ label }}</span>
    </div>
    <img v-if="iconRight" class="icon-right" :src="iconRight" />
  </router-link>
</template>

<style lang="scss" scoped>
.cep-button {
  cursor: pointer;
  transition: all linear 0.1s;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-size: 16px;
  text-transform: capitalize;

  &:hover {
    background-color: #f7f7f7;
  }
}

.icon-left {
  padding-right: 8px;
}

.icon-right {
  padding-left: 8px;
}

.bg-primary {
  background-color: var(--primary);
  color: white;

  &:hover {
    background-color: #2b98ff;
  }
}

.dropdown {
  width: 180px;
  display: flex;
  justify-content: space-between;
}
</style>
