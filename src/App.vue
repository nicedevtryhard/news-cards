<template>
  <app-header></app-header>
  <app-main></app-main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader/AppHeader.vue";
import AppMain from "@/components/AppMain/AppMain.vue";

export default defineComponent({
  components: { AppHeader, AppMain },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope&display=swap");
* {
  padding: 0;
  margin: 0;
  font-family: "Manrope", sans-serif;
}
body {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
