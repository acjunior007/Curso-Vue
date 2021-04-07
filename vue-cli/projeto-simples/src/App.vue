<template>
  <div id="app">
    Aula132112 vue.js {{titulo}} <br />
    <button @click="titulo += '#'">Alterar Texto</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: "Usando vue.js"
    }
  }
}
</script>

<style scoped>
  #app{
    background-color: rgb(255, 187, 0);
    color: #000;
  }
</style>