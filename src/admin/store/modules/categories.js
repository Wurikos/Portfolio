export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    ADD_CATEGORY: (state, skillCategory) => {
      state.categories.unshift(skillCategory);
    },
    GET_CATEGORIES: (state, data) => {
      state.categories = data;
    }
  },
  actions: {
    async addCategory({ commit }, categoryTitle) {
      try {
        const response = await this.$axios.post("/categories", {
          title: categoryTitle
        });
        commit("ADD_CATEGORY", response.data);
        return response;
      } catch (e) {}
    },
    async getCategories({ commit }) {
      try {
        const response = await this.$axios.get("/categories");
        commit("GET_CATEGORIES", response.data);
      } catch (e) {}
    }
  }
};