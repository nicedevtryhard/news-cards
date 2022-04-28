<template>
  <div class="cards">
    <card v-for="card in cards" :card="card" :key="card.id"></card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "../Card/Card.vue";

export default defineComponent({
  components: { Card },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 25px;
}
</style>
