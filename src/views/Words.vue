<template>
  <div id="demo">
    <div>
      <h2>Post request</h2>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="name" />
        <br />
        <input type="text" v-model="job" />
        <button type="submit">Send Post</button>
      </form>


    </div>

    <h1 class="word">{{name}}</h1>
    <p class="text">{{job}}</p>

    <form>
      <input type="text" v-model="msg" />
    </form>

    <button v-on:click="demo">run function</button>
    <button v-on:click="createAPIwords">createAPIwords</button>

    <h2>{{msg}}</h2>

    <h2>---------------------------------------------------------</h2>

    <div v-for="(film, index) in films" :key="index" class="single-film">
      <router-link v-bind:to="'/films/' + parseInt(index+1) ">
        <div v:bind:id="1">{{film.title}}</div>
      </router-link>
    </div>

    <h2>---------------------------------------------------------</h2>
    <div>
      <ul>
        <li v-for="(item, index) in info" :key="index">{{ item.definition }}</li>
        <!--   
        <li v-repeat="info" >{{info.list}}</li>
        -->
      </ul>

      <h3>----------------------------------------------</h3>
    </div>
  </div>
</template>
 

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      name: "Peter",
      job: "",
      dataHtml: "<b> I am bold! </b>",
      msg: "",
      msg2: "",
      isTrue: false,
      films: [],
      id: "",
      words: [],
      item: "",
      info: [],
      headers: {
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key": "fc019a7f02mshe0e79ccdaf772bap1af5eajsn25aa61df62ef"
      }
    };
  },
  methods: {
    submitForm: function() {
      axios
        .put("https://reqres.in/api/users", {
          name: this.name,
          job: this.job
        })
        .then(function(response) {
          console.log(response);
        });
    },

    demo: function() {
      this.name = "function demo run";

      /* write data into console */
      //fetch("https://wordsapiv1.p.mashape.com/words/apple")
      //.then(response => console.log(response)) //dont use this line
      //.then(response => response.json())
      //.then(result => console.log(result));

      fetch(
        "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" +
          this.msg,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "mashape-community-urban-dictionary.p.rapidapi.com",
            "x-rapidapi-key":
              "fc019a7f02mshe0e79ccdaf772bap1af5eajsn25aa61df62ef"
          }
        }
      )
        .then(response => response.json())
        .then(json => {
          this.info = json.list;
        });
    },

    /*Create   */
    createAPIwords: function() {
      //axios
      // .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      //   .then(response => (this.info = response.data.bpi));

      fetch(
        "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=apple",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "mashape-community-urban-dictionary.p.rapidapi.com",
            "x-rapidapi-key":
              "fc019a7f02mshe0e79ccdaf772bap1af5eajsn25aa61df62ef"
          }
        }
      )
        .then(response => response.json())
        //  .then(results => (this.info = results);
        .then(json => {
          this.info = json.list;
        });
    }
  },

  created() {
    fetch("https://swapi.dev/api/films/");
    //.then(response => response.json())
    //.then(data => {
    // this.films = data.results;
    // });

    /* 
    fetch(
      "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=apple",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "mashape-community-urban-dictionary.p.rapidapi.com",
          "x-rapidapi-key": "fc019a7f02mshe0e79ccdaf772bap1af5eajsn25aa61df62ef"
        }
      }
    )
      .then(response => response.json())
      //  .then(results => (this.info = results);
      .then(json => {
        this.info = json.list;
      }); */
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.redcolor {
  color: red;
}

.word{
  background-color:#4dbeff;
  padding: 20px 0px;
  display: inline-block;
  min-width: 50%;
}
.text{
  background-color:#bde26e;
  padding: 20px 0px;
}
</style>
