<template>
  <div class="hello">
    <h1>{{hello }}</h1>
    <h2>Children</h2>
    <p>value of event bus  {{changeName}}</p>
    <h3>{{ msg }}</h3>
    <h1>{{ msg }}</h1>

    <h1>{{fullText}}</h1>

    <p>Text text text</p>

   
  </div>
</template>

<script>
export default {
  
  props: {
        msg: {
          type: String,
          required: true
          // default :"Default value okey "
        }
      },

  data: function() {
    return {
      name: "ahoj liska",
      changeName: '',
      title: "title value ",
      hello: "hello value ",

      
    };
  },
  // data(){
  //   return{
  //     title: "Vue NInjas"
  //   }
  // },
  computed: {
    fullText() {
      return this.msg + "Full texteeeeeeeee";
    }
  },
  created() {
    /* console.log('function created');
    this.$root.$on("changeIt", data => {
      this.header = data;
    }); */
    
  },
 mounted() {
    this.$root.$on('changeName', data => (this.changeName = data))
}

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
.hello {
  background-color: rgb(240, 133, 133);
  border: 5px solid red;
}
</style>
