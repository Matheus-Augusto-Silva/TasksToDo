<template>
  <button class="btn btn-info" @click="newTask">+ Tarefa</button>
</template>

<script>
export default {
  methods: {
    newTask() {
      this.$emit("addTasks");
    },
  },
};
</script>
<style scoped>
.btn {
  margin-bottom: 20px;
  width: 100px;
  height: 45px;
  border-radius: 8px;
  font-size: 16px;
  margin-left: 30px;
  align-items: center !important;
}
.btn-info {
  background-color: #007bff;
  color: #ffffff;
  border: none;
}
</style>