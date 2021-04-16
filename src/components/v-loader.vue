<template>
  <div class="loader mx-auto my-auto text-center">
    <font-awesome-layers class="fa-4x">
      <font-awesome-icon icon="spinner" spin pulse class="text-purple-500" />
    </font-awesome-layers>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "v-loader",
  created() {
    setTimeout(() => {
      this.$router.push("/page-1");
      this.setLoading()
    }, 5000);
  },
  methods: {
    ...mapActions(['setLoading'])
  }
};
</script>