<template>
<div class = "flex">
    <h1>Lista de Tarefas</h1>
    <Search></Search>
    <Task></Task>
</div>
</template>
<script>
import Search from './inputs/Search.vue'
import Task from './inputs/Task.vue';
export default {
  name: 'Header',
  components: {
    Search,
    Task
  }
};
</script>
<style>
  .flex{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>