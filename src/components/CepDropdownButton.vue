<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  label?: string;
  to?: string;
  href?: string;
  target?: string;
  iconLeft?: string;
  isPrimary?: boolean;
}>();

const showDropdown = ref(false);
</script>

<template>
  <div class="cep-dropdown-button">
    <cep-button
      icon-right="/icons/down-arrow.svg"
      :label="label"
      :to="to"
      :href="href"
      :target="target"
      :icon-left="iconLeft"
      :is-primary="isPrimary"
      @click="showDropdown = !showDropdown"
      is-dropdown
    />

    <transition name="fade">
      <div
        v-if="showDropdown"
        class="dropdown-menu"
        @click="showDropdown = !showDropdown"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.cep-dropdown-button {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  background-color: white;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  box-shadow: -4px -4px 16px rgba(0, 0, 0, 0.1);
  z-index: 2;
  width: 100%;
  padding: 8px 0;
}
</style>
