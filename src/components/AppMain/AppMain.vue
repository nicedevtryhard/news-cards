<template>
  <main>
    <div class="user-filters">
      <div class="user-filters__author">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Выберите автора"
        />
        <img src="@/assets/userIcon.png" alt="" class="user-filters__icon" />
      </div>
      <div class="user-filters__date">
        <span class="user-filters__toggle">
          <span class="user-filters__toggle-button">От</span>
          <input type="date" class="user-filters__toggle-min" />
        </span>
        <span class="user-filters__toggle">
          <span class="user-filters__toggle-button">~ До</span>
          <input type="date" class="user-filters__toggle-max" />
        </span>
      </div>
    </div>
    <cards :cards="searchedAndSortedNews"></cards>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cards from "../Cards/Cards.vue";
// @ts-ignore
import useSearchedAndSortedNews from "@/hooks/useSearchedAndSortedNews";
// @ts-ignore
import useNews from "@/hooks/useNews";
// @ts-ignore
import useSortedNews from "@/hooks/useSortedNews";

export default defineComponent({
  components: {
    Cards,
  },
  setup() {
    const { news } = useNews();
    const { searchQuery, searchedAndSortedNews } =
      useSearchedAndSortedNews(news);
    const { setDateQuery } = useSortedNews(news);
    return {
      news,
      searchQuery,
      searchedAndSortedNews,
      setDateQuery,
    };
  },
  mounted() {
    window.addEventListener("scroll", function () {
      let sticky = this.document.getElementsByClassName("header__nav")[0];
      let filters = this.document.getElementsByClassName("user-filters")[0];
      if (this.scrollY >= 50) {
        sticky.classList.add("sticky");
      } else {
        sticky.classList.remove("sticky");
      }
      if (this.scrollY >= 500) {
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
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  padding: 60px 0;
  .user-filters {
    background: #ffffff;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-width: 1440px;
    padding: 16px 0 0 18.3%;

    &__sticky {
      position: fixed;
      top: 65px;
      left: 0;
      right: 0;
      z-index: 102;
      padding: 16px 0 16px 32.2%;
    }
    &__item {
      position: relative;
    }
    &__author {
      position: relative;
      min-width: 295px;
      padding: 10px;
      border: 1px solid #e8e8e8;
      box-sizing: border-box;
      border-radius: 4px;
    }
    &__author input {
      border: none;
      outline: none;
      &::placeholder {
        color: rgba(0, 0, 0, 0.65);
      }
    }
    &__icon {
      position: absolute;
      top: 14px;
      right: 10px;
    }
    &__date {
      position: relative;
      margin-left: 20px;
      border: 1px solid #e8e8e8;
      box-sizing: border-box;
      border-radius: 4px;
      display: flex;
      align-items: center;
      min-width: 295px;
    }
    &__toggle {
      display: inline-block;
      position: relative;
      width: 45%;
      height: 30px;

      input::placeholder {
        color: rgba(0, 0, 0, 0.01);
      }
    }
    &__toggle-button {
      position: absolute;
      left: 5px;
      top: 4px;
      width: 100%;
      height: 100%;
      color: rgba(0, 0, 0, 0.65);
    }
    &__toggle-min,
    &__toggle-max {
      position: absolute;
      text-align: center;
      top: 0;
      width: 60%;
      height: 100%;
      opacity: 1;
      outline: none;
      cursor: pointer;
      box-sizing: border-box;
      border: none;
    }
    &__toggle-min {
      left: 30px;
    }
    &__toggle-max {
      left: 50px;
    }
    &__toggle input::-webkit-calendar-picker-indicator {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      opacity: 0;
      cursor: pointer;
    }
  }
}
@media screen and(min-width: 1441px) {
  main .user-filters {
    padding: 16px 0 0 17.9%;
  }
  main .user-filters__sticky {
    padding: 20px 17.9%;
  }
}
@media screen and(max-width: 1440px) {
  main .user-filters {
    padding: 16px 0 0 17.9%;
  }
  main .user-filters__sticky {
    padding: 20px 17.9%;
  }
}
@media screen and(max-width: 1024px) {
  main .user-filters {
    padding: 16px 0 0 5%;
  }
  main .user-filters__sticky {
    padding: 20px 5%;
  }
}
@media screen and(max-width: 768px) {
  main .user-filters {
    padding: 16px 0 0 5.6%;
  }
  main .user-filters__sticky {
    padding: 20px 5.6%;
  }
}
@media screen and(max-width: 425px) {
  main .user-filters {
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    &__date {
      margin: 0;
      box-sizing: border-box;
      padding: 4px 10px;
    }
  }
  main .user-filters__sticky {
    padding: 10px 15px;
  }
  .user-filters__author,
  .user-filters__date {
    margin: 15px 15px 7px;
  }
}
@media screen and(max-width: 375px) {
  main .user-filters {
    padding: 0;
  }
  main .user-filters__sticky {
    padding: 0;
  }
  .user-filters__author,
  .user-filters__date {
    margin: 15px 0 7px;
  }
}
</style>
