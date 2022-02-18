<template>
  <div id="app">
<<<<<<< HEAD
    <router-view></router-view>
=======
    <Header></Header>
    <div class="flex">
      <BodyCards v-if="aberta > 0" :titulo="abertas" :cards="lodash.filter(cards, card => {return card.status === 'aberta'})" ></BodyCards> 
      <BodyCards v-if="fechada > 0" :titulo="fechadas" :cards="lodash.filter(cards, card => {return card.status === 'fechada'})"></BodyCards> 
    </div>
>>>>>>> 357f337bbb4949f69f5e87243c157625eea26d75
  </div>
</template>

<script>
export default {
  name: "App",
<<<<<<< HEAD
  components: {},
=======
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
>>>>>>> 357f337bbb4949f69f5e87243c157625eea26d75
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
