<template>
  <div id="app">
    <Header></Header>
    <div class="flex">
      <BodyCards v-if="aberta > 0" :titulo="abertas" :cards="lodash.filter(cards, card => {return card.status === 'aberta'})" ></BodyCards> 
      <BodyCards v-if="fechada > 0" :titulo="fechadas" :cards="lodash.filter(cards, card => {return card.status === 'fechada'})"></BodyCards> 
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
      cards: [
        { id: 1, titulo: "Card1", prioridade: true, status: "aberta" },
        { id: 2, titulo: "Card1", prioridade: true, status: "aberta" },
        { id: 2, titulo: "Card1", prioridade: true, status: "fechada" },
      ]
    };
  },
  computed: {
    aberta () {
      let res = this.lodash.countBy(this.cards, card => { return card.status === 'aberta'})
      return res.true
    },
    fechada () {
      let res = this.lodash.countBy(this.cards, card => { return card.status === 'fechada'})
      return res.true
    },
  }
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
