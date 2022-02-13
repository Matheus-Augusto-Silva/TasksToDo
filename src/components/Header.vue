<template>
  <div class="flex">
    <h1>Lista de Tarefas</h1>
    <Search></Search>
  </div>
</template>
<script>
import Search from "./inputs/Search.vue";
export default {
  name: "Header",
  components: {
    Search,
  },
};
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>