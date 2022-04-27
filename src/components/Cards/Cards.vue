<template>
  <div class="cards">
    <card v-for="card in news" :card="card" :key="card.id"></card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "../Card/Card.vue";
// @ts-ignore
import { useNews } from "@/hooks/useNews";

export default defineComponent({
  components: { Card },
  setup(props) {
    const { news } = useNews();
    console.log(news);
    return { news };
  },
});
</script>

<style lang="scss" scoped></style>
