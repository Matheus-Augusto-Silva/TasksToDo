<template>
  <div>
    <Task
      v-if="titulo === 'Abertas'"
      class="absolute"
      @addTasks="newTasks()"
    ></Task>
    <div class="container">
      <h1  >{{ titulo }}</h1> 
      <div v-for="card in cards" :key="card.id">
<<<<<<< HEAD
        <Card> </Card>
=======
        <Card/>
        {{card}}
>>>>>>> 357f337bbb4949f69f5e87243c157625eea26d75
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./inputs/Task.vue";
import Card from "./Card.vue";
export default {
  name: "BodyCards",
<<<<<<< HEAD
  components: { Card, Task },
  props: ["titulo", "cards"],
=======
  components: { Task, Card },
  props: ["titulo", "cards"]
>>>>>>> 357f337bbb4949f69f5e87243c157625eea26d75
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