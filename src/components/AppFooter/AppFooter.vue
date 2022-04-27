<template>
  <footer>
    <img src="@/assets/Info.png" alt="" />
    <nav class="footer__nav">
      <ul class="links">
        <li><a href="#">Решения</a></li>
        <li><a href="#">Оборудование</a></li>
        <li><a href="#">О компании</a></li>
        <li><a href="#">Блог</a></li>
      </ul>
      <div class="social">
        <a href=""><img src="@/assets/telegram.png" alt="" /></a>
        <a href=""><img src="@/assets/vk.png" alt="" /></a>
        <a href=""><img src="@/assets/tweet.png" alt="" /></a>
        <a href=""><img src="@/assets/social-h.png" alt="" /></a>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
footer {
  background: #092433;
  padding: 80px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .footer__nav {
    flex-basis: 675px;
    padding-right: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      list-style: none;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .social {
    padding-top: 120px;
    a {
      padding-right: 20px;
      &:nth-child(4) {
        padding-right: 0;
      }
    }
  }
}
</style>
