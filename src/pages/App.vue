<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="../images/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <todo></todo>
  </div>
</template>

<script>
// import HelloWorld from 'components/HelloWorld.vue'
import todo from 'components/Todo.vue'

export default {
  name: 'app',
  components: {
    todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
