
<template>
  <div id="apps">
    <h1>{{name}}</h1>
    {{ info }}
    <h1>------------------------</h1>

    <h1>Bitcoin Price Index</h1>
    <div v-for="currency in info" :key="currency.id" :class="currency">
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span>
        {{ currency.rate_float | currencydecimal }}
      </span>

      <h2>{{currency.code}}</h2>
      <h1>------------------------</h1>
    </div>
    <p>
      axios.request(config)
      <br />axios.get(url[, config])
      <br />axios.delete(url[, config])
      <br />axios.head(url[, config])
      <br />axios.options(url[, config])
      <br />axios.post(url[, data[, config]])
      <br />axios.put(url[, data[, config]])
      <br />axios.patch(url[, data[, config]])
    </p>

    <button v-on:click="createAPIwords">createAPIwords</button>
  </div>
</template>
 

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "Axioss",
      array: [],
      info: null
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    }
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response.data.bpi));
  },

  methods: {
    createAPIwords: function() {
      this.name = "function createAPIwords run";

      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(json => console.log(json)); 
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
