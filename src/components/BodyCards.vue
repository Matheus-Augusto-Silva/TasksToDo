<template>
  <div>
    <div class="container">
      <h1>{{ titulo }}</h1>
      <div v-for="card in cards" :key="card.id">
        <Card :card="card"> </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "BodyCards",
  components: { Card },
  props: ["titulo", "cards"],
};
</script>

<style>
.container {
  width: 80%;
  height: auto;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.74);
  box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.74);
  padding-bottom: 10px;
}
.absolute {
  position: absolute;
  right: 120px;
  top: 40px;
}
</style>