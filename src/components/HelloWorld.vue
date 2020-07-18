<template>
  <div class="hello">
    <h2>Child </h2>

    <h1>{{ msg }}</h1>

    <h1>{{fullText}}</h1>

    <p> Text text text  </p>

    <h4 v-on:click= "changeTitle"> {{title}}</h4>
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  props: {
    msg: {
      type : String,
      required: true,
      // default :"Default value okey "
    }
  },
  // data(){
  //   return{
  //     title: "Vue NInjas"
  //   }
  // },
  computed:{
    fullText() {
      return this.msg + "Full text";
    }
  },
  // methods:{
  //   changeTitle: function(){
  //     this.title = " Succesfully changed vue ninjas ";
  //   }
  // }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  background-color: rgb(240, 133, 133);
  border: 5px solid red;
}
</style>
