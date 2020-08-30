<template>
  <div id="app">
    <bingo-generator/>
    <footer class="text-center mb-4">
      Zabingo by Merun
    </footer>
  </div>
</template>

<script>
import BingoGenerator from './components/BingoGenerator.vue'
import '@/styles/main.scss'

export default {
  name: 'App',
  components: {
    BingoGenerator
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
