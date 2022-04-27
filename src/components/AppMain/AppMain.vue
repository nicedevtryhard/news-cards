<template>
  <main>
    <div class="user-filters">
      <div class="user-filters__author">
        <input type="text" placeholder="Выберите автора" />
        <img src="@/assets/userIcon.png" alt="" class="user-filters__icon" />
      </div>
      <div class="user-filters__date">
        <input type="text" placeholder="От" />
        <input type="text" placeholder="~   До" />
      </div>
    </div>
    <cards></cards>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cards from "../Cards/Cards.vue";

export default defineComponent({
  components: {
    Cards,
  },
  setup() {},
  mounted() {
    window.addEventListener("scroll", function () {
      let filters = this.document.getElementsByClassName("user-filters")[0];
      if (this.scrollY >= 595) {
        filters.classList.add("user-filters__sticky");
      } else {
        filters.classList.remove("user-filters__sticky");
      }
    });
  },
});
</script>

<style lang="scss" scoped>
main {
  padding: 60px 257px 3000px;

  .user-filters {
    background: #ffffff;
    display: flex;
    justify-content: flex-start;
    margin: 16px 0;

    &__sticky {
      position: fixed;
      top: 65px;
      left: 0;
      right: 0;
      padding: 0 490px;
      z-index: 102;
    }
    &__item {
      position: relative;
    }
    &__author {
      position: relative;
    }
    &__author input {
      width: 330px;
      padding: 10px;
      border: 1px solid #e8e8e8;
      box-sizing: border-box;
      border-radius: 4px;
      outline: none;
    }
    &__icon {
      position: absolute;
      top: 14px;
      right: 10px;
    }
    &__date {
      margin-left: 20px;
      border: 1px solid #e8e8e8;
      box-sizing: border-box;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      min-width: 330px;
    }
    &__date input {
      border: none;
      background: none;
      outline: none;
      padding: 10px;
    }
  }
}
</style>
