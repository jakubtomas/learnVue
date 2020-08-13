<template>
  <div id="app">
    <h2>Restaurants</h2>
    <h1>set data emit data</h1>
    <div>
      <input type="text" v-model="newName" />
      <button @click.prevent="changeName()">send data</button>
    </div>
    <h1 v-on:click="changeHeader">{{name}}</h1>
    <h2>{{header}}</h2>
    <!-- 
    <div>{{restaurants}}</div>-->

    <div class="restaurant">
      <h2>name of restuarant</h2>
      <p>description about the resutad;flaskdfjasfd</p>
      <i>citu kosive</i>
    </div>

    <div v-for="(restaurant,index) in restaurants" :key="index" class="restaurant">
      <h2>{{restaurant.name}}</h2>
      <p>{{restaurant.description}}</p>
      <i>{{restaurant.city}}</i>
      <br />
      <a>{{restaurant.price}}</a>
    </div>
  </div>
</template>
 

<script>
//import axios from "axios";

//import { bus } from "../main";
export default {
  data: function() {
    return {
      name: "page Local Storage",
      newName: "",
      restaurants: [
        {
          name: "aliho restuarant",
          city: "kosice",
          description: "lorem ipsum ssssss",
          price: 10
        },
        {
          name: "pekiho ",
          city: "kosice",
          description: "lorem ipsum ssssss",
          price: 9
        },
        {
          name: "adamsonovona ",
          city: "kosice",
          description: "lorem ipsum ssssss",
          price: 6
        },
        {
          name: "Hello ",
          city: "kosice",
          description: "lorem ipsum ssssss",
          price: 15
        },
        {
          name: "Hello ",
          city: "presov",
          desšcription: "lorem ipsum ssssss",
          price: 16
        }
      ],
      header: null
    };
  },

  mounted() {},
  watch: {},
  methods: {
    /* createRestaurants () {
      bus.$emit('restaurants', 'name restaurants')
    } */

    changeHeader() {
      console.log("run function changeHeader");
      //this.header = "changed header";
      //this.$root.$emit("changeIt", "changed header");
    },
    changeName() {
      console.log("function change name create evenhub " + this.newName);
      this.$eventHub.$emit("change-name", this.newName);
    }
  },

  created() {
    //  bus.$emit("restaurants", "restaurantslalala");
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
.restaurant {
  display: inline-block;
  background-color: #bde26e;
  min-width: 50%;
  /* padding: 20px 20px; */
  margin: 8px 0px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
