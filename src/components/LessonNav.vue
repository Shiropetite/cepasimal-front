<script setup lang="ts">
</script>

<template>
  <div class="nav">
    <div class="title">Fiches</div>
    <div class="navlink">Environnement de travail</div>
    <div class="navlink">Classes et attributs</div>
    <div class="navlink">Méthodes</div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;
  padding: 28px;
  color: var(--text-color);
  background: var(--background-card);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .title {
    font-weight: 700;
    font-size: 22px;
  }

  .navlink {
    font-weight: 400;
    font-size: 12px;
  }
}
</style>