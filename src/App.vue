<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <div class="flex">
      <BodyCards v-if="aberta > 0" :titulo="abertas" :cards="lodash.filter(cards, card => {return card.status === 'aberta'})" ></BodyCards> 
      <BodyCards v-if="fechada > 0" :titulo="fechadas" :cards="lodash.filter(cards, card => {return card.status === 'fechada'})"></BodyCards>  -->
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
