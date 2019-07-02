import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skill: {
      id: null,
      name: null,
    },
    headerActive: '1',
  },
  mutations: {
    setSkillId(state, id) {
      state.skill.id = id;
    },
    setSkillName(state, name) {
      state.skill.name = name;
    },
    setHeaderActive(state, num) {
      state.headerActive = num.toString();
    },
  },
  actions: {

  },
});
