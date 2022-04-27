<template>
  <div class="card">
    <div class="card__title">
      <h3>{{ card.title }}</h3>
      <p class="card__decription">{{ card.description }}</p>
      <span class="card__autor">{{ card.author }}</span>
      <span class="card__date">{{ card.publishedAt }}</span>
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
    return {};
  },
});
</script>

<style lang="scss" scoped>
.card {
  &__title {
    color: rgba(0, 0, 0, 0.65);
  }
}
</style>
