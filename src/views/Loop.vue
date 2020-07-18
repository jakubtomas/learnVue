<template>
  <div class="about">
    <h1>LOOP V-FOR</h1>
      <h1>--------- Next example ----------</h1>

      <form @submit.prevent="submitForm(users)">  
        <input  @keyup.esc="removeInput2()" type="text" v-model="users" >
        <button  v-on:click="say()" >submit</button>
      </form>

      <h1> {{users}}</h1>

      <h1> {{errors.length}}</h1>
      <p>
      <b>Please correct the following error(s):</b>
    <ul>
            <li v-for="(error,index) in errors" :key="index">
            {{ index }}  {{ error }} <button v-on:click="removeValue()">Remove</button>
            </li>
    </ul>
      </p>

      <br>
      <h1>--------- Next example ----------</h1>
      <p>
        <ul>                            <!--  you have also acces to variable parrentMessageand erros array  -->          
              <li v-for="(item,index) in items" :key="index">        
                   {{ errors }}    {{ index }}  {{ item }}
              </li>
        </ul>
      </p>


    <br> <br> <br>
    <h1>--------- -------------------</h1>
    <h1>V-for with object</h1>

      <ul id="v-for-object" class="demo">
        <li v-for="value in object" v-bind:key="value">
              {{ value }}
  </li>
</ul>
    <h1>--------- -------------------</h1>

    <ul >
      <li v-for="(task,index) in tasks"  :key="index">
            {{task.task}}
      </li>
    </ul>

  </div>
</template>


<script>
export default {
  
    data: function() {
    return {
      users : "",
      errors: ["hello", "ahoj", "today"],
      parrentMessage:"parent",
       items: [
      { message: 'Foo' },
      { message: 'Bar' },
      { message: 'Foor' }
    ],

     object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    },

    tasks:[
       { isCompleted: true, task:" buy" },
       { isCompleted: true, task:"pay" },
       { isCompleted: false, task:" buy" }
    ]


    };
  },

   methods :{
    // this work 
     removeInput: function () {
      // `this` inside methods points to the Vue instance
       this.users = "";
    },

      removeInput2(){
       this.users = "";
      },



     submitForm(name){
       // here of course you can write validation data from form

      if( name != ""){
        this.errors.push(name + " hello ");  

      }
     }
   } 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
