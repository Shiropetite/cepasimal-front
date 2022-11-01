<script setup lang="ts">
defineProps<{
  title: string,
  desc: string,
  lastUpdate: string,
  timeToRead: string
}>()
</script>

<template>
  <div class="card">
    <div class="illustration"></div>
    <div class="infos">
      <div>
        <div class="title">{{ title }}</div>
        <div>{{ desc }}</div>
      </div>
      <div class="row items-center gap-28 mt-12">
        <div class="row items-center gap-8">
          <img src="../assets/update-icon.svg" />
          {{ lastUpdate }}
        </div>
        <div class="row items-center gap-8">
          <img src="../assets/duration-icon.svg" />
          {{ timeToRead }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  width: 550px;
  height: 86px;
  background: var(--background-card);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  transition: all linear 0.1s;

  .illustration {
    width: 128px;
    height: 86px;
    background-color: var(--accent);
  }

  .infos {
    padding: 8px 24px;

    .title {
      font-weight: 700;
      font-size: 16px;
    }
  }
}

.card:hover {
  background-color: var(--background-hover);
}
</style>