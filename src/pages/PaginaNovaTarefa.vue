<template>
  <!-- nome -->
  <div class="main">
    <h1 class="title">Cadastro de tarefa</h1>
    <div class="form-task">
      <label for="name" class="name label" style="font-weight: bold"
        >Nome da tarefa</label
      >
      <input type="text" name="name" id="name" class="name" v-model="titulo" />
    </div>
    <button class="btn btn-info" @click="addTask()">Adicionar</button>
    <button class="btn back" @click="$router.push('/')">Voltar</button>
  </div>
</template>
<script>
export default {
  data() {
    return { titulo: "", id: 0 };
  },
  methods: {
    addTask() {
      this.verificaId();
      this.$store.commit("addCards", {
        id: this.id,
        titulo: this.titulo,
        prioridade: true,
        status: "aberta",
      });
      if (this.titulo != "") {
        this.$router.push({ path: "/" });
      }
    },
    verificaId() {
      let id = this.$store.state.cards;
      this.id = id.length + 1;
    },
  },
};
</script>
<style scoped>
.main {
  display: grid;
  gap: 20px;
}

.title {
  margin: auto;
  color: #007bff;
}
.form-task {
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: auto;
}
.name {
  width: 300px;
  outline: 0;
  height: 30px;
  border-radius: 5px;
  font-size: 18px;
}

.name:focus {
  border: 2px solid #007bff;
}

.label {
  text-align: left;
  color: #007bff;
}
.btn:hover {
  cursor: pointer;
  top: 30px;
  right: 30px;
  opacity: 0.9;
}

.btn {
  width: 100px;
  height: 35px;
  border-radius: 3px;
  position: absolute;
  top: 30px;
  right: 30px;
}

.back {
  width: 100px;
  height: 35px;
  border-radius: 3px;
  position: absolute;
  top: 30px;
  left: 30px;
  border: none;
}

.btn-info {
  background-color: #007bff;
  color: #ffffff;
  border: none;
}
</style>