import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 15
  },
  mutations: {
    INCREMENT(state, value)
    {
      state.score += value
    },
    DECREMENT(state, value)
    {
      state.score-= value
    }
  },
  actions: {
    increment(context){
      let rand = Math.floor(Math.random() *100)
      if (rand < 15) {
        console.log("oh no");
      }else{
        context.commit('INCREMENT', rand)
      }
    }

  },
  getters: {
    scoreButPretty(state)
    {
      return state.score
    }
  },
  modules: {}
});
