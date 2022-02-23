<template>
  <div>
    <Header></Header>
    <div class="flex">
      <Task class="absolute" @addTasks="newTasks()"></Task>
      <BodyCards
        v-if="aberta > 0"
        :titulo="abertas"
        :cards="lodash.filter(cards, (card) => card.status === 'aberta')"
      ></BodyCards>
      <BodyCards
        v-if="fechada > 0"
        :titulo="fechadas"
        :cards="lodash.filter(cards, (card) => card.status === 'fechada')"
      ></BodyCards>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import BodyCards from "../components/BodyCards.vue";
import Task from "../components/inputs/Task.vue";
export default {
  name: "PaginaInicial",
  components: { Header, BodyCards, Task },
  data() {
    return {
      abertas: "Abertas",
      fechadas: "Fechadas",
    };
  },
  computed: {
    aberta: function () {
      let contagem = [];
      this.cards.forEach((card) => {
        if (card.status == "aberta") {
          contagem.push(card);
        }
      });
      console.log("aberta:" + contagem.length);
      return contagem.length;
    },
    fechada: function () {
      let response = this.lodash.countBy(this.cards, (card) => {
        return card.status === "fechada";
      });
      console.log("fechadas:" + response);
      return response.true;
    },
    cards() {
      return this.$store.state.cards;
    },
  },
};
</script>

<style>
</style>