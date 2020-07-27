<template>
  <div class="home">
    <h1>Parent</h1>
    <p>{{this.text}}</p>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

  <!-- include component hello world -->
    <HelloWorld :msg="text" />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components:{
    HelloWorld
  },
  name: "Home",

  data: () => ({
      text: "This is message "
  }),

  /*components: {
    HelloWorld
  }*/
};
</script>

<style >

.home{
  background-color : rgb(181, 176, 185);
  border: 5px solid black;
}

</style>