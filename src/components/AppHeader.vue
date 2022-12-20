<template>
  <div class="header row justify-center">
    <div class="container page row justify-between items-center">
      <a href="/"><div class="title">Cépasimal</div></a>

      <div class="row items-center justify-between gap-28">
        <toggle-button label="Dark mode" />
        <button class="admin">
          <img class="svg" src="/icons/admin.svg" />
          Admin
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  background-color: var(--background);
  height: 80px;

  .container {
    padding: 0 20px;
  }

  .title {
    font-weight: 700;
    font-size: 16px;
    padding: 16px;
    border-radius: 8px;
    transition: all linear 0.2s;

    &:hover {
      background-color: var(--background-hover);
    }
  }

  .admin {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 8px 20px 8px 8px;
    color: var(--text-color);
    background: var(--background-card);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 30px;
    font-weight: 700;
    font-size: 14px;
  }

  .admin:hover {
    background-color: var(--background-hover);
  }
}
</style>
