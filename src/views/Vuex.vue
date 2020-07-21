
<template>
  <div id="apps">
      <h1>{{name}}</h1>
      <h2> {{$store.state.score}}</h2>
      <h2> {{$store.getters.scoreButPretty}}</h2>
      <p>
        <button @click="$store.dispatch('increment')"> plus</button>
        <button @click="$store.commit('DECREMENT')"> MINUS</button>
      </p>
  </div>
</template>
 

<script>

export default {
  data: function() {
    return {
      name: "Data from vuex ",
      array: [],
      info: null
    };
  },
  mounted() {},

  methods: {},

  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.redcolor {
  color: red;
}
</style>
