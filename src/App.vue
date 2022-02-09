<template>
  <div id="app">
    <Header></Header>
    <div class="flex">
      <BodyCards :titulo="abertas"></BodyCards>
      <BodyCards :titulo="fechadas"></BodyCards>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import BodyCards from "./components/BodyCards.vue";

export default {
  name: "App",
  components: {
    Header,
    BodyCards,
  },
  data() {
    return {
      abertas: "Abertas",
      fechadas: "Fechadas",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 80%;
  margin: 40px auto auto;
}
.flex {
  display: flex;
  justify-content: space-around;
}
</style>
