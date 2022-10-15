<template>
  <div class="header">
    <div class="title">Cépasimal</div>

    <div class="row items-center justify-between gap-28">
      <dark-mode-toggle />
      <button class="admin">
        <img src="../assets/admin-icon.svg" />
        Admin
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 80px;

  .title {
    font-weight: 700;
    font-size: 16px;
  }

  .admin {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 8px 20px 8px 8px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 30px;
    font-weight: 700;
    font-size: 14px;
  }
}
</style>