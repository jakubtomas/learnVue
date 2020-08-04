<template>
  <div id="demo">

    <div>{{restaurants}}</div>
    <h1>{{name}}</h1>
    <h2>cats</h2>


    <div v-for="(cat,n) in cats" :key="n">
    <p>
    <span class="cat">{{cat.title}} # {{cat.contents}}</span> <button @click="removeCat(n)">Remove</button>
    </p>
  </div>


    <p>
    <!-- <input v-on:keyup.enter="addCat" v-model="newCat">-->
    
    
     <input v-model="title">  <br>
     <input v-model="contents">  <br>
     <button @click="createNode">Add Cat</button> 
  </p>

  </div>
</template>
 

<script>
import {bus} from '../main';
//import axios from "axios";
export default {
  data: function() {
    return {
      name: "page Local Storage",
      job: "",
      dataHtml: "<b> I am bold! </b>",
      cats: ['peter'],
      newCat: null,
      title: null,
      contents: null,
      restaurants: []
      
    };
  },

  mounted() {
    if (localStorage.getItem("cats")) { // when we have cats add into the value 
      try {
        this.cats = JSON.parse(localStorage.getItem("cats"));
      } catch (e) {
        localStorage.removeItem("cats");
      }
    }
  },
  watch : {
      
  },
  methods: {
    createNode(){
          const newNote = { title : this.title, contents : this.contents};
//          this.cats.push(newNote);
        this.addCat(newNote);
    },
    addCat(object) {
      // ensure they actually typed something
     // if(!this.newCat) return;
      this.cats.push(object);
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
      console.log(this.cats);
    }
  
  },

  created() {
    bus.$on('restaurants', (data) => {
      this.restaurants = data;
    })
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
