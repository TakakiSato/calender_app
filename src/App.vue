<template>
  <borad />
</template>

<script>
  import Borad from './components/Board'
  export default {
    components: {
      Borad
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

