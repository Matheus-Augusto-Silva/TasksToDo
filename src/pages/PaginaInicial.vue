<template>
  <div>
    <Header></Header>
    <div class="flex">
      {{ aberta }}
      {{ fechada }}

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
export default {
  name: "PaginaInicial",
  components: { Header, BodyCards },
  data() {
    return {
      abertas: "Abertas",
      fechadas: "Fechadas",
      cards: [
        { id: 1, titulo: "Card1", prioridade: true, status: "aberta" },
        { id: 2, titulo: "Card1", prioridade: true, status: "aberta" },
        { id: 3, titulo: "Card1", prioridade: true, status: "fechada" },
      ],
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
  },
};
</script>

<style>
</style>