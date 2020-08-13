<template>
  <div id="app">
    <p>Helloii {{message}}</p>

    <!-- <datetime
      type="date"
      v-model="formData.testDate"
      input-class="form-control"
      :format="{ year: 'numeric', month: 'long', day: 'numeric' }"
    ></datetime>-->

    <p>----------------------</p>
    <div>
      <datetime
        type="datetime"
        v-model="formData.testDate"
        input-class="form-control"
        :format="{ year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }"
        :phrases="{ok: 'Continue', cancel: 'Exit'}"
        :hour-step="1"
        :minute-step="10"
        :min-datetime="minDatetime"
        :max-datetime="maxDatetime"
        :week-start="7"
        use24-hour
        auto
      ></datetime>
      <button @click.prevent="addDate()">send data</button>
    </div>

    <h4>---------------</h4>
    <div>{{datetz}}</div>
  </div>
</template>
 

<script>
import { Datetime } from "vue-datetime";
export default {
  components: {
    datetime: Datetime
  },
  data: function() {
    return {
      formData: {
        testDate: ""
      },
      message: "hello peter",
      minDatetime: "2020-08-08",
      maxDatetime: "2020-12-10",
      date:[],
      
    };
  },
    methods: {
    addDate() {
      console.log("date is " + this.formData.testDate);
      this.date.push(this.formData.testDate);
     },
    
  },


};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
