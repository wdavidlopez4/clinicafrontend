<template>
<div>
    <form>
      <div class="form-group">
        <label for="exampleInputPassword1">introdusca el numero clinico</label>
        <input type="text" class="form-control" id="exampleInputPassword1" v-model="historiaClinica.valor"/>
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="postAncianoUrgencia">enviar</button>
    </form>

    <div v-bind:Key="anciano.numeroHistoriasClinico" v-for="anciano in listaAncianoUrgente">
      <div class="card card-margen">
        <div class="card-body">
          <h5 class="card-title">Anciano</h5>
          <h6 class="card-subtitle mb-2 text-muted">prioridad:{{anciano.prioridad}}</h6>
          <p class="card-text">
            Nombre: {{anciano.nombre}},  
            Edad:{{anciano.edad}},  
            Riesgo:{{anciano.riesgo}}, 
            Numero:{{anciano.numeroHistoriasClinico}}</p>
          <a href="#" class="card-link">atender</a>
          <!--falta por desarrollar -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: 'urgenciaAnciano',
    computed:{
    ...mapState(['historiaClinica', 'listaAncianoUrgente'])
    },
    methods:{
      ...mapActions(['postAncianoUrgencia'])
    }
}
</script>

<style scoped>
.card-margen{
  margin-top: 3rem;
}
</style>