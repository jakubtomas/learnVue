<template>
  <div id="demo">
    <h1>{{name}}</h1>
    <h2>cats</h2>


    <div v-for="(cat,n) in cats" :key="n">
    <p>
    <span class="cat">{{cat}}</span> <button @click="removeCat(n)">Remove</button>
    </p>
  </div>


    <p>
    <input v-on:keyup.enter="addCat" v-model="newCat">
    <!-- <input v-model="newCat">  -->
    <!-- <button @click="addCat">Add Cat</button> -->
  </p>

  </div>
</template>
 

<script>
//import axios from "axios";
export default {
  data: function() {
    return {
      name: "page Local Storage",
      job: "",
      dataHtml: "<b> I am bold! </b>",
      cats: ['peter'],
      newCat: null
    };
  },

  mounted() {
    if (localStorage.getItem("cats")) {
      try {
        this.cats = JSON.parse(localStorage.getItem("cats"));
      } catch (e) {
        localStorage.removeItem("cats");
      }
    }
  },
  methods: {
    
    addCat() {
      // ensure they actually typed something
      if(!this.newCat) return;
      this.cats.push(this.newCat);
      this.newCat = '';
      this.saveCats();
    },
    removeCat(x) {
      this.cats.splice(x,1);
      this.saveCats();
    },
    saveCats() {
      let parsed = JSON.stringify(this.cats);
      localStorage.setItem('cats', parsed);
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

.word {
  background-color: #4dbeff;
  padding: 20px 0px;
  display: inline-block;
  min-width: 50%;
}
.text {
  background-color: #bde26e;
  padding: 20px 0px;
}
</style>
