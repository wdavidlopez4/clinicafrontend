<template>
<div>
  <div v-bind:Key="fumador.numeroHistoriasClinico" v-for="fumador in fumadores">
    <div class="card">
      <div class="card-header">Fumador</div>
      <div class="card-body">
        <h5 class="card-title">Urgencia: {{fumador.prioridad}}</h5>
        <p class="card-text">
            Nombre: {{fumador.nombre}},  
            Edad: {{fumador.edad}},  
            Riesgo: {{fumador.riesgo}}, 
            Numero: {{fumador.numeroHistoriasClinico}}</p>
        <a href="#" class="btn btn-primary">Atender.</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "fumadoresUrgentes",
  computed:{
      ...mapState(['fumadores'])
  },
  methods:{
      ...mapActions(['postFumadoresUrgentes'])
  },
  mounted(){
      this.postFumadoresUrgentes();
  }
};
</script>

<style>
</style>