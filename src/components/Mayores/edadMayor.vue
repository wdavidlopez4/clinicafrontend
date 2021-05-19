<template>
<div>
  <div v-bind:Key="mayor.numeroHistoriasClinico" v-for="mayor in mayores">
    <div class="card">
      <div class="card-header">Fumador</div>
      <div class="card-body">
        <h5 class="card-title">Urgencia: {{mayor.prioridad}}</h5>
        <p class="card-text">
            Nombre: {{mayor.nombre}},  
            Edad: {{mayor.edad}},  
            Riesgo: {{mayor.riesgo}}, 
            Numero: {{mayor.numeroHistoriasClinico}}</p>
        <a href="#" class="btn btn-primary">Atender.</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "edadMayor",
  computed:{
      ...mapState(['mayores'])
  },
  methods:{
      ...mapActions(['postMayores'])
  },
  mounted(){
      this.postMayores();
  }
};
</script>

<style>
</style>