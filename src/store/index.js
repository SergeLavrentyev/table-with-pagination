import Vue from "vue";
import Vuex from "vuex";
import defaultList from "../default-list";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: defaultList,
    sortFlag: true,
    sortName: true,
    sortDate: true,
    pageNumber: 1,
    itemsPerPage: 5,
    isLoading: true,
  },
  getters: {
    getPages(state) {
      return Math.ceil(state.list.list.length / state.itemsPerPage);
    },
  },
  mutations: {
    SET_LOADING(state) {
      state.isLoading ? (state.isLoading = false) : "";
    },
    SET_PAGE(state, page) {
      state.pageNumber = page;
    },
    SORT_LIST_BY_A_NAME(state) {
      state.list.list.sort((a, b) => a.name.localeCompare(b.name));
      state.sortName = false;
    },
    SORT_LIST_BY_Z_NAME(state) {
      state.list.list.sort((a, b) => a.name.localeCompare(b.name)).reverse();
      state.sortName = true;
    },
    SORT_LIST_BY_ACTIVE_FLAG(state) {
      state.list.list.sort((a, b) => a.isActive - b.isActive).reverse();
      state.sortFlag = false;
    },
    SORT_LIST_BY_INACTIVE_FLAG(state) {
      state.list.list.sort((a, b) => a.isActive - b.isActive);
      state.sortFlag = true;
    },
    SORT_LIST_BY_LAST_DATE(state) {
      state.list.list
        .sort(
          (a, b) =>
            a.lastSeen
              .split("/")
              .reverse()
              .join("") -
            b.lastSeen
              .split("/")
              .reverse()
              .join("")
        )
        .reverse();
      state.sortDate = false;
    },
    SORT_LIST_BY_EARLY_DATE(state) {
      state.list.list.sort(
        (a, b) =>
          a.lastSeen
            .split("/")
            .reverse()
            .join("") -
          b.lastSeen
            .split("/")
            .reverse()
            .join("")
      );
      state.sortDate = true;
    },
  },
  actions: {
    setLoading({ commit }) {
      commit("SET_LOADING");
    },
    setPage({ commit }, page) {
      commit("SET_PAGE", page);
    },
    sortListByAName({ commit }) {
      commit("SORT_LIST_BY_A_NAME");
    },
    sortListByZName({ commit }) {
      commit("SORT_LIST_BY_Z_NAME");
    },
    sortListByActiveFlag({ commit }) {
      commit("SORT_LIST_BY_ACTIVE_FLAG");
    },
    sortListByInactiveFlag({ commit }) {
      commit("SORT_LIST_BY_INACTIVE_FLAG");
    },
    sortListByLastDate({ commit }) {
      commit("SORT_LIST_BY_LAST_DATE");
    },
    sortListByEarlyDate({ commit }) {
      commit("SORT_LIST_BY_EARLY_DATE");
    },
  },
});
