<template>
  <div class="card">
    <h3 class="card__title">{{ card.title }}</h3>
    <div class="card__text">
      <p class="card__decription">{{ card.description }}</p>
      <div class="card__user-data">
        <span class="card__author">{{ card.author || "Аноним" }}</span>
        <span class="card__date">{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const d = new Date(props.card.publishedAt);
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    const day = d.getDate();
    const monthName = months[d.getMonth()];
    const year = d.getFullYear();
    const date = `${day} ${monthName} ${year}`;
    return { date };
  },
});
</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  width: 295px;
  height: 258px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  font-size: 14px;
  margin-bottom: 20px;
  &__decription {
    height: 119px;
    overflow: hidden;
    padding: 20px 25px 0;
  }
  &__title {
    box-sizing: border-box;
    padding: 10px 25px 0;
    height: 59px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.65);
    border-bottom: 1px solid #e8e8e8;
  }
  &__author,
  &__date {
    display: inline-block;
    border-radius: 10px;
    padding: 0 8px;
    width: 100px;
    height: 20px;
    text-align: center;
  }
  &__user-data {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    font-size: 12px;
    margin-top: 10px;
  }
  &__author {
    background: #092433;
    border: 1px solid #092433;
    color: #ffffff;
  }
  &__date {
    border: 1px solid #e8e8e8;
    margin-left: 10px;
  }
}
@media screen and(max-width: 425px) {
  .card {
    margin-bottom: 10px;
  }
}
</style>
