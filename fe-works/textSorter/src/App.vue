<template>
  <div id="app">
    <h1>Mluti-Line Text Sorter</h1>
    <inout></inout>
  </div>
</template>

<script>
import InOut from './components/InOut';

export default {
  name: 'app',
  components: {
    inout: InOut,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: px;*/
  padding: 5px 40px;
}
</style>
