<template>
  <div id="apps" >
      <h1>{{name}}</h1>

      <h1>{{name.split("").reverse().join("")}}</h1>
      <h1>{{name.split("").reverse()}}</h1>

      <span v-html="dataHtml"></span>
      <br>  <!--  -->
      <span :id="id">{{name}}</span> <!--  	assigning id id from return data  -->

      <h1>-----------------------</h1>

       <form>  
        <input type="text" v-model="msg" @keyup="demo" >
      </form>

      <h2>{{msg}}</h2>
      <h2>{{msg2}}</h2>

      <h1>-----------------------</h1>

      <div v-if="isTrue"> Show this if is true </div>
      <div v-else> neije to true</div>

      <div v-if="!isTrue"> Show this if isnt true</div>

      <h1>-----------------------</h1>
      <p :class="{redcolor: !isTrue}">Hellow world </p>  <!-- pridanie class na zaklade true false variable isTrue -->



  </div>
</template>
 

<script>

export default {
     el: "#apps", 
     data: function() { 
    return {
        id : 1 , 
        name : "Peter",
        dataHtml: "<b> I am bold! </b>",
        msg: "",
        msg2:"",
        isTrue: false,
        }
      },
      methods : {
        demo: function () {
      // `this` inside methods points to the Vue instance
       this.msg2 = this.msg
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.redcolor{
  color: red;

}
</style>
