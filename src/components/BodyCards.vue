<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <div v-for="card in cards" :key="card.id">
      <p
        v-if="
          titulo === 'Abertas'
            ? card.status === 'aberta'
            : card.status === 'fechada'
        "
      >
        <Card></Card>
      </p>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "BodyCards",
  components: { Card },
  props: ["titulo"],
  data() {
    return {
      cards: [
        { id: 1, titulo: "Card1", prioridade: true, status: "aberta" },
        { id: 2, titulo: "Card1", prioridade: true, status: "aberta" },
        { id: 3, titulo: "Card1", prioridade: true, status: "fechada" },
        { id: 1, titulo: "Card1", prioridade: true, status: "aberta" },
        { id: 2, titulo: "Card1", prioridade: true, status: "aberta" },
        { id: 3, titulo: "Card1", prioridade: true, status: "fechada" },
      ],
    };
  },
};
</script>

<style>
.container {
  width: 30%;
  height: max-content;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 12px -4px rgba(0,0,0,0.74); 
  box-shadow: 0px 0px 12px -4px rgba(0,0,0,0.74);
}
</style>