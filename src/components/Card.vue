<template>
  <div class="card-body">
    <p class="titulo">Titulo da tarefa</p>
    <div class="column">
      <button class="btn btn-sm">
        <i class="fa fa-fw fa-alert"></i> prioridade
      </button>
      <button class="btn btn-sm">
        <i class="fa fa-fw fa-alert>"></i>Data para Finalizar
      </button>
      <button class="btn btn-sm"><i class="fa fa-fw fa-alert>"></i>tag</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card-body {
  width: 90%;
  height: 10rem;
  border: 2px solid black;
  margin: auto;
}
.titulo {
  font-size: 20px;
  margin: 5px auto auto 20px;
  text-align: left;
}
.btn {
  border: 2px solid black;
  border-radius: 40px;
  text-align: center;
  margin: 6px auto 10px 10px;
}
.btn-sm {
  width: max-content;
  height: 30px;
}
.column {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
</style>