<template>
  <div id="app">
    <p>{{change}}</p>

    <div v-if="header">{{header}}</div>
    <h1>  Hello World, I am {{name}}</h1>
    <h2>cats</h2>

    <div v-for="(cat,n) in cats" :key="n">
      <p>
        <span class="cat">{{cat.title}} # {{cat.contents}}</span>
        <button @click="removeCat(n)">Remove</button>
      </p>
    </div>

    <p>
      <!-- <input v-on:keyup.enter="addCat" v-model="newCat">-->

      <input v-model="title" />
      <br />
      <input v-model="contents" />
      <br />
      <button @click="createNode">Add Cat</button>
    </p>
  </div>
</template>
 

<script>
//import { bus } from "../main";
//import axios from "axios";
export default {
  data: function() {
    return {
      name: "Ferooo",

      job: "",
      dataHtml: "<b> I am bold! </b>",
      cats: ["peter"],
      newCat: null,
      title: null,
      contents: null,
      header: null,
      change: null
    };
  },

  mounted() {
    console.log("function created mounted ");
    this.$root.$on("changeIt", data => (this.header = data));

    if (localStorage.getItem("cats")) {
      // when we have cats add into the value
      try {
        this.cats = JSON.parse(localStorage.getItem("cats"));
      } catch (e) {
        localStorage.removeItem("cats");
      }
    }

    //this.$root.$on("changeName", data => (this.change = data));
  },
  watch: {},
  methods: {
    createNode() {
      const newNote = { title: this.title, contents: this.contents };
      //          this.cats.push(newNote);
      this.addCat(newNote);
    },
    addCat(object) {
      // ensure they actually typed something
      // if(!this.newCat) return;
      this.cats.push(object);
      this.newCat = "";
      this.saveCats();
    },
    removeCat(x) {
      this.cats.splice(x, 1);
      this.saveCats();
    },
    saveCats() {
      let parsed = JSON.stringify(this.cats);
      localStorage.setItem("cats", parsed);
      console.log(this.cats);
    },
    changeName(name) {
      // name will be automatically transported to the parameter.
      this.name = name;
    }
  },

  created() {
    /* console.log('function created');
    this.$root.$on("changeIt", data => {
      this.header = data;
    }); */
    console.log("function created ");
    this.$eventHub.$on("change-name", data => (this.name = data));
  },
  beforeDestroy() {
    this.$eventHub.$off("change-name");
  }
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
