<template>
  <table class="table-fixed border border-green-900 w-3/4 mx-auto mt-10 shadow-sm">
    <thead>
      <tr class="bg-purple-700">
        <td class="border border-green-900 p-4 w-1/2">
          <div class="flex justify-between items-center">
            <span class="text-white">ФИО</span>
            <button
              v-if="sortName"
              class="border border-black rounded bg-white px-5 py-2"
              @click="sortListByAName"
            >
              <font-awesome-icon icon="angle-down"></font-awesome-icon>
              А-Я
            </button>
            <button
              v-else
              class="border border-black rounded bg-white px-5 py-2"
              @click="sortListByZName"
            >
              <font-awesome-icon icon="angle-up"></font-awesome-icon>
              Я-А
            </button>
          </div>
        </td>
        <td class="p-4 border border-green-900 w-1/4">
          <div class="flex justify-between items-center">
            <span class="text-white">Статус</span>
            <button
              v-if="sortFlag"
              class="border border-black rounded bg-white px-5 py-2"
              @click="sortListByActiveFlag"
            >
              <font-awesome-icon icon="angle-down"></font-awesome-icon>
              Активные
            </button>
            <button
              v-else
              class="border border-black rounded bg-white px-5 py-2"
              @click="sortListByInactiveFlag"
            >
              <font-awesome-icon icon="angle-up"></font-awesome-icon>
              Неактивные
            </button>
          </div>
        </td>
        <td class="p-4 border border-green-900 w-1/4">
          <div class="flex justify-between items-center">
            <span class="text-white"> Был активен </span>
            <button
              v-if="sortDate"
              class="border border-black rounded bg-white px-5 py-2"
              @click="sortListByLastDate"
            >
              <font-awesome-icon icon="angle-down"></font-awesome-icon>
            </button>
            <button
              v-else
              class="border border-black rounded bg-white px-5 py-2"
              @click="sortListByEarlyDate"
            >
              <font-awesome-icon icon="angle-up"></font-awesome-icon>
            </button>
          </div>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in slicePages" :key="i">
        <td class="w-1/2 p-4 border border-green-600">{{ item.name }}</td>
        <td class="w-1/6 p-4 border border-green-600">
          <div
            class="w-5 h-5 border rounded-full"
            :class="item.isActive ? 'bg-green-600' : 'bg-red-600'"
          ></div>
        </td>
        <td class="w-5/6 p-4 border border-green-600">{{ item.lastSeen }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "v-table",
  created() {
    this.setLoading()
  },
  computed: {
    ...mapState([
      "list",
      "sortFlag",
      "sortName",
      "sortDate",
      "pageNumber",
      "itemsPerPage",
    ]),
    slicePages() {
      const from = (this.pageNumber - 1) * this.itemsPerPage;
      const to = from + this.itemsPerPage;
      return this.list.list.slice(from, to);
    },
  },
  methods: {
    ...mapActions([
      "setLoading",
      "sortListByAName",
      "sortListByZName",
      "sortListByActiveFlag",
      "sortListByInactiveFlag",
      "sortListByLastDate",
      "sortListByEarlyDate",
    ]),
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>