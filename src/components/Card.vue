<template>
  <div class="card-body">
    <div class="flex">
      <p class="titulo">Titulo da tarefa</p>
      <i class="fa fa-pen"></i>
    </div>
    <div class="flex">
      <div class="column">
        <button class="btn btn-sm">
          <i class="fa fa-fw fa-exclamation-triangle"></i> prioridade
        </button>
        <button class="btn btn-sm">
          <i class="fa fa-calendar-day"></i>
          Data para Finalizar
        </button>
        <button class="btn btn-sm">
          <i class="fa fa-tag"></i>
          tag
        </button>
      </div>
      <div class="btn-group-actions">
        <button class="btn-actions btn-success">
          <i class="fa fa-check"></i> Concluir
        </button>
        <button class="btn-actions btn-outline-danger">
          <i class="fa fa-trash"></i> Cancelar
        </button>
      </div>
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
  width: 80%;
  overflow: hidden;
  height: 10rem;
  border-radius: 9px;
  margin: auto;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.74);
  box-shadow: 0px 0px 12px -4px rgba(0, 0, 0, 0.74);
}
.titulo {
  font-size: 20px;
  margin: 5px auto auto 20px;
  text-align: left;
}
.btn {
  border: none;
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
.flex {
  display: flex;
}
.btn-actions {
  margin-bottom: 20px;
  width: 100px;
  height: 45px;
  border-radius: 8px;
  font-size: 16px;
  margin-left: 30px;
  align-items: center !important;
  /* padding: 10px 10px; */
}
.btn-group-actions {
  margin-top: 30px;
}
.fa-pen {
  margin-top: 10px;
}
.btn-success {
  background-color: #28a745;
  color: #ffffff;
  border: none;
}
.btn-outline-danger {
  color: #dc3545;
  background-color: white;
  border: none;
}
</style>