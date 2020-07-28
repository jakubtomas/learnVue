<template>
  <div id="demo">
    <h1>{{name}}</h1>

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
        <li v-for="(item, index) in info" :key="index">{{ item }}</li>
        <!--   
        <li v-repeat="info" >{{info.list}}</li>
        -->
      </ul>

      <h3>----------------------------------------------</h3>
      <div>
        <ul >
          <li v-repeat="info.list" > {{info.definition}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
 

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      name: "Peter",
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
    demo: function() {
      this.name = "function demo run";

      /* write data into console */
      //fetch("https://wordsapiv1.p.mashape.com/words/apple")
      //.then(response => console.log(response)) //dont use this line
      //.then(response => response.json())
      //.then(result => console.log(result));

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
        .then(results => console.log(results));
    },

    /*Create   */
    createAPIwords: function() {
      //axios
      // .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      //   .then(response => (this.info = response.data.bpi));

      const options = {
        url:
          "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=apple",
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "mashape-community-urban-dictionary.p.rapidapi.com",
          "x-rapidapi-key": "fc019a7f02mshe0e79ccdaf772bap1af5eajsn25aa61df62ef"
        }
      };
      axios(options).then(response => (this.info = response));
    }
  },

  created() {
    fetch("https://swapi.dev/api/films/");
    //.then(response => response.json())
    //.then(data => {
    // this.films = data.results;
    // });

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
      .then(results => {
        this.info = results;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.redcolor {
  color: red;
}
</style>
