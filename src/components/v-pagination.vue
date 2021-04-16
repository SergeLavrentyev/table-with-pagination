<template>
  <div class="pagination mt-10 flex justify-center space-x-2" v-if="!isLoading">
    <button
      class="px-4 py-2 border border-black-900 rounded-full transition-colors ease-in-out foucs:outline-none"
      :class="page === pageNumber ? 'bg-black font-bold text-white' : ''"
      v-for="(page, i) in getPages"
      :key="i"
      @click="changePage(page)"
    >
      {{ page }}
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "v-pagination",
  computed: {
    ...mapGetters(["getPages"]),
    ...mapState(["pageNumber", "isLoading"]),
  },
  methods: {
    ...mapActions(["setPage"]),
    changePage(page) {
      this.setPage(page);
      if (this.$route.path !== `/page-${page}`)
        this.$router.push("/page-" + page.toString());
    },
  },
};
</script>