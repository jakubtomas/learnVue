<template>
  <div id="apps">
    <h1>{{name}}</h1>

    <form>
      <input type="text" v-model="msg" @keyup="demo" />
    </form>
  </div>
</template>
 

<script>
export default {
  el: "#apps",
  data: function() {
    return {
      id: 1,
      name: "Peter",
      dataHtml: "<b> I am bold! </b>",
      msg: "",
      msg2: "",
      isTrue: false
    };
  },
  methods: {
    demo: function() {
    
    this.name = "function demo run";

      fetch("https://swapi.dev/api/species/")
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.redcolor {
  color: red;
}
</style>
