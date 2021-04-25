<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <StudioProgressChart />
  <UserProgressChart />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import StudioProgressChart from './components/StudioProgressChart.vue'
import UserProgressChart from './components/UserProgressChart.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    StudioProgressChart,
    UserProgressChart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
