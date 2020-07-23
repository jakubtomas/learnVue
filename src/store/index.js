import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  score: 15
}

const mutations = { // mutacie su operacie ktoreo meni state , nemalo by obsahovat vypočty prepočty iba jeden riadok
  INCREMENT(state, value)
  {
    state.score += value

  },
  DECREMENT(state, value = 1)
  {
    state.score -= value
  }
}
 
const actions = {  // actions pises ked potrebujes nejaku vvypocet alebo upravu 
  increment(context)
  {
    let rand = Math.floor(Math.random() * 100)
    if (rand < 15)
    {
      console.log("oh no");
    } else
    {
      context.commit('INCREMENT', rand)
    }
  }
}

const getters = { // getters sa pouziva na vypisanie hodnoty  v kode 
  scoreButPretty(state)
  {
    return state.score
  }
}

const modules = {}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
// exportovanie hodnot
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules

});
