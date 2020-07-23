
<template>
  <div id="apps">
    <h1>{{name}}</h1>
    <h2>{{$store.state.score}}</h2>
    <h2>{{$store.getters.scoreButPretty}}</h2>
    <p>
      <button @click="$store.dispatch('increment')">plus</button>
      <button @click="$store.commit('DECREMENT')">MINUS</button>

      <button v-on:click="readRefs">readRefs</button>
    </p>
    <a href="http://google.com"></a>
    <a v-bind:href="website">this is the link on website</a>

    <p v-html="webTag"></p>
    <div>
      <input type="text" ref="input" /> 
      <p>ref sluzi na manipulovanie DOM ,</p>
      <button v-on:click="readRefs">readRefs</button>
    </div>
    <h3>-----------------------------------</h3>
    <!-- 
      <h2>Hello this is for refs man!</h2>
      <p>You have counted {{this.counter}} times</p>
      <input type="text" ref="input" />
      <button @click="submit">Add 1 to counter</button>
    -->
  </div>
</template>
 

<script>
export default {
  data: function() {
    return {
      counter: 0,
      name: "Data from vuex ",
      website: "http://google.com",
      webTag: '<a href="http://google.com">link na google</a>',
      array: [],
      info: null
    };
  },
  mounted() {},

  methods: {
    submit() {
      console.log("function submit");
      this.counter++;
      console.log(this.ref);
    },
    readRefs: function() {
      console.log("run function");
      console.log(this.$refs);
    }
  },

  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.redcolor {
  color: red;
}
</style>
