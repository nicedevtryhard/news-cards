<template>
  <header>
    <nav class="header__nav sticky">
      <img src="../../assets/logo.png" alt="" />
      <div class="contacts">
        <div class="contacts__phone"><span>8 800 000 00 00</span></div>
        <div class="contacts__mail"><span>sales@logo.ru</span></div>
      </div>
    </nav>
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
        <div class="carousel-cell__ratio"></div>
        <div class="carousel-cell-content">
          <h1 class="carousel-cell-content__title">
            IT-инфраструктура для бизнеса
          </h1>
          <h4 class="carousel-cell-content__text">
            Мы предлагаем комплексные решения для всех уровней бизнеса: от
            индивидуальных предпринимателей до крупных международных компаний.
            Более 20 000 клиентов по всему миру доверяют нам.
          </h4>
        </div>
      </div>
      <div class="carousel-cell">
        <div class="carousel-cell__ratio"></div>
        <div class="carousel-cell-content">
          <h2 class="carousel-cell-content__title">
            IT-инфраструктура для бизнеса
          </h2>
          <h4 class="carousel-cell-content__text">
            Мы предлагаем комплексные решения для всех уровней бизнеса: от
            индивидуальных предпринимателей до крупных международных компаний.
            Более 20 000 клиентов по всему миру доверяют нам.
          </h4>
        </div>
      </div>
      <div class="carousel-cell">
        <div class="carousel-cell__ratio"></div>
        <div class="carousel-cell-content">
          <h2 class="carousel-cell-content__title">
            IT-инфраструктура для бизнеса
          </h2>
          <h4 class="carousel-cell-content__text">
            Мы предлагаем комплексные решения для всех уровней бизнеса: от
            индивидуальных предпринимателей до крупных международных компаний.
            Более 20 000 клиентов по всему миру доверяют нам.
          </h4>
        </div>
      </div>
    </flickity>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Flickity from "vue-flickity/src/flickity.vue";

export default defineComponent({
  components: {
    Flickity,
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        contain: true,
        prevNextButtons: false,
        pageDots: true,
        draggable: true,
        freeScroll: false,
      },
    };
  },
  setup() {},
});
</script>

<style lang="scss">
.header__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 320px;
  background: #ffffff;

  .contacts {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__phone {
      margin-right: 45px;
    }
  }
}
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 101;
}
.carousel-cell {
  width: 100%; /* full width */
  height: 546px;
  &__ratio {
    padding-top: 56.25%;
  }
  &-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: 255px;
    background: url(@/assets/Background.png) no-repeat center;
    background-size: cover;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    &__title {
      font-size: 32px;
      margin-bottom: 25px;
    }
    &__text {
      font-size: 16px;
      max-width: 453px;
      margin-bottom: 100px;
    }
  }
}
.flickity-page-dots {
  position: absolute;
  width: 100%;
  bottom: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  line-height: 1;
  .dot {
    display: inline-block;
    width: 16px;
    height: 3px;
    margin: 0 4px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 1px;
    opacity: 0.25;
    cursor: pointer;
  }
}
.flickity-page-dots .dot.is-selected {
  background: #ffffff;
  width: 24px;
}
</style>
