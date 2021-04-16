<template>
  <div id="app">
    <router-view />
    <v-pagination />
  </div>
</template>

<script>
import vPagination from "./components/v-pagination.vue";
export default {
  components: { vPagination },
  name: "App",
};
</script>

<style>
#app {
  @apply font-mono flex flex-col items-center w-screen h-screen py-20;
}
</style>

