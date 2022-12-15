<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const updateUrl = (tech?: string) => {
  if (tech) {
    router.replace({ query: { tech } });
  } else {
    router.replace("");
  }
};
</script>

<template>
  <div class="list">
    <div
      class="item"
      :class="{ selected: !route.query.tech }"
      @click="updateUrl()"
    >
      Tout
    </div>
    <div
      class="item"
      :class="{ selected: route.query.tech == 'javascript' }"
      @click="updateUrl('javascript')"
    >
      Javascript
    </div>
    <div
      class="item"
      :class="{ selected: route.query.tech == 'java' }"
      @click="updateUrl('java')"
    >
      Java
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selected {
  color: var(--primary);
}
</style>
