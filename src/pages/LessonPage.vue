<script setup lang="ts">
import LessonNav from 'src/components/LessonNav.vue';
</script>

<template>
  <div class="row justify-center" style="background-color: var(--background-hover); height: 100%">
    <div class="page row">
      <lesson-nav />
      <div class="col">
        <div class="banner">Environnement de travail</div>
        <div class="content">
          <div>
            <div class="title">Introduction</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit impedit. Adipisci placeat earum
              hic natus deserunt alias asperiores accusamus rem, totam, laudantium ab facilis corporis nesciunt, non
              deleniti odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit impedit. Adipisci
              placeat earum hic natus deserunt alias asperiores accusamus rem, totam, laudantium ab facilis corporis
              nesciunt, non deleniti odio!
            </div>
          </div>

          <div>
            <div class="title">Setup</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita, vel corrupti dolorum voluptatem
              eum at molestiae vitae delectus esse iure aliquam optio quia id tempore, blanditiis ea sapiente. Eius.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit impedit. Adipisci placeat earum
              hic natus deserunt alias asperiores accusamus rem, totam, laudantium ab facilis corporis nesciunt, non
              deleniti odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit impedit. Adipisci
              placeat earum hic natus deserunt alias asperiores accusamus rem, totam, laudantium ab facilis corporis
              nesciunt, non deleniti odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit
              impedit. Adipisci placeat earum hic natus deserunt alias asperiores accusamus rem, totam, laudantium ab
              facilis corporis nesciunt, non deleniti odio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, velit impedit. Adipisci placeat earum hic natus deserunt alias asperiores accusamus rem, totam,
              laudantium ab facilis corporis nesciunt, non deleniti odio! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Provident, velit impedit. Adipisci placeat earum hic natus deserunt alias asperiores
              accusamus rem, totam, laudantium ab facilis corporis nesciunt, non deleniti odio! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Provident, velit impedit. Adipisci placeat earum hic natus deserunt
              alias asperiores accusamus rem, totam, laudantium ab facilis corporis nesciunt, non deleniti odio!
            </div>
          </div>

          <div>
            <div class="title">Architecture</div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A molestiae ducimus commodi fugiat autem sed vel
              nam reprehenderit similique doloribus quis earum saepe necessitatibus sit hic illum, quas ab ipsam? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Provident, velit impedit. Adipisci placeat earum hic
              natus deserunt alias asperiores accusamus rem, totam, laudantium ab facilis corporis nesciunt, non
              deleniti odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit impedit. Adipisci
              placeat earum hic natus deserunt alias asperiores accusamus rem, totam, laudantium ab facilis corporis
              nesciunt, non deleniti odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit
              impedit. Adipisci placeat earum hic natus deserunt alias asperiores accusamus rem, totam, laudantium ab
              facilis corporis nesciunt, non deleniti odio! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, velit impedit. Adipisci placeat earum hic natus deserunt alias asperiores accusamus rem, totam,
              laudantium ab facilis corporis nesciunt, non deleniti odio! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Provident, velit impedit. Adipisci placeat earum hic natus deserunt alias asperiores
              accusamus rem, totam, laudantium ab facilis corporis nesciunt, non deleniti odio! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Provident, velit impedit. Adipisci placeat earum hic natus deserunt
              alias asperiores accusamus rem, totam, laudantium ab facilis corporis nesciunt, non deleniti odio! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Provident, velit impedit. Adipisci placeat earum hic
              natus deserunt alias asperiores accusamus rem, totam, laudantium ab facilis corporis nesciunt, non
              deleniti odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit impedit. Adipisci
              placeat earum hic natus deserunt alias asperiores accusamus rem, totam, laudantium ab facilis corporis
              nesciunt, non deleniti odio!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 160px;
  color: white;
  background: var(--accent);
  font-weight: 700;
  font-size: 22px;
}

.content {
  background-color: var(--background);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px 0;

  .title {
    font-weight: 700;
    font-size: 22px;
  }
}
</style>
