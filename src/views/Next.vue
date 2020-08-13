<template>
  <div id="apps">
    <h1>{{name}}</h1>

    <h1>{{name.split("").reverse().join("")}}</h1>
    <h1>{{name.split("").reverse()}}</h1>

    <span v-html="dataHtml"></span>
    <br />
    <!--  -->
    <span :id="id">{{name}}</span>
    <!--  	assigning id id from return data  -->

    <h1>-----------------------</h1>

    <form>
      <input type="text" v-model="msg" @keyup="demo" />
    </form>

    <h2>{{msg}}</h2>
    <h2>{{msg2}}</h2>

    <h1>-----------------------</h1>

    <div v-if="isTrue">Show this if is true</div>
    <div v-else>neije to true</div>

    <div v-if="!isTrue">Show this if isnt true</div>

    <h1>-----------------------</h1>
    <p :class="{redcolor: !isTrue}">Hellow world</p>
    <!-- pridanie class na zaklade true false variable isTrue -->

    <h1>------------------------</h1>

    <!--  <form @submit.prevent="submitForm">
      <label for="birthdaytime">Birthday (date and time):</label>
      <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
      <input type="submit" />
    </form>-->

    <datetime
      v-model="date"
      type="datetime"
      input-format="DD-MM-YYYY HH:mm"
      wrapper-class="my-wrapper-class"
      input-class="my-input-class"
      placeholder="Select date"
      moment-locale="es"
      :i18n="{ok:'De acuerdo', cancel:'Cancelar'}"
      :disabled-dates="['2017-09-07', ['2017-09-25', '2017-10-05']]"
      max-date="2017-12-10"
      min-date="2017-07-10"
      monday-first
      auto-continue
      auto-close
      required
    ></datetime>
  </div>
</template>
 

<script>
import { Datetime } from "vue-datetime";

export default {
  template: "...",
  components: {
    Datetime
  },
  el: "#apps",
  data: function() {
    return {
      id: 1,
      date: null,
      name: "Peter",
      dataHtml: "<b> I am bold! </b>",
      msg: "",
      msg2: "",
      isTrue: false
    };
  },
  methods: {
    demo: function() {
      // `this` inside methods points to the Vue instance
      this.msg2 = this.msg;
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
