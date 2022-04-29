<template>
  <footer>
    <img src="@/assets/Info.png" alt="" class="footer-logo" />
    <img
      src="@/assets/footer-logo-small.png"
      alt=""
      class="footer-logo-small"
    />
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
    <div class="footer__copyright">
      <p>© ООО «Лого», 2008—2022</p>
      <p>Лицензия на телематические услуги № 176267</p>
    </div>
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
  max-width: 1440px;
  margin: 0 auto;
  background: #092433;
  padding: 80px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footer-logo-small {
    display: none;
  }
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
  .footer__copyright {
    display: none;
  }
}
@media screen and(max-width: 768px) {
  footer .footer__nav {
    padding-right: 0;
  }
}
@media screen and (max-width: 425px) {
  footer {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 25px 15px;
    .social {
      order: -1;
      padding: 14px 0 32px;
    }

    .footer__nav {
      flex-basis: auto;
      justify-content: space-between;
    }

    .links {
      max-width: 257px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      li {
        margin-bottom: 12px;
      }
    }
    .footer__copyright {
      display: block;
      margin-top: 36px;
      color: #ffffff;
      font-size: 12px;
      opacity: 0.5;
    }
    .footer-logo {
      display: none;
    }
    .footer-logo-small {
      display: inline;
      height: 50px;
      width: 93.75px;
    }
  }
}
</style>
