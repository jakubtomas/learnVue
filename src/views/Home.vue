<template>
  <div id="app" class="home">
    <h1>Parent</h1>
    <p>{{text}}</p>

    <div>
      <input type="text" v-model="newName" />
      <button @click.prevent="changeName()">button</button>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

    <!-- include component hello world -->
    <HelloWorld :msg="text" />

    <h2>hello</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  },
  name: "Home",

  data: () => ({
    text: "This is message ",
    newName: ""
  }),

  methods: {
     changeName() {
      console.log('function change name create evenhub ' + this.newName);
      this.$root.$emit('changeName', this.newName)
    }
  }

  /*components: {
    HelloWorld
  }*/
};
</script>

<style >
.home {
  background-color: rgb(181, 176, 185);
  border: 5px solid black;
}
</style>