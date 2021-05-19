<template>
  <div>
    <form>
      <div class="form-group">
        <label for="exampleInputPassword1">introdusca el numero clinico</label>
        <input type="text" class="form-control" id="exampleInputPassword1" v-model="historiaClinica.valor"/>
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="postJovenUrgencia">enviar</button>
    </form>

    <div v-bind:Key="joven.numeroHistoriasClinico" v-for="joven in listaJovenUrgente">
      <div class="card card-margen">
        <div class="card-body">
          <h5 class="card-title">Joven</h5>
          <h6 class="card-subtitle mb-2 text-muted">prioridad:{{joven.prioridad}}</h6>
          <p class="card-text">
            Nombre: {{joven.nombre}},  
            Edad:{{joven.edad}},  
            Riesgo:{{joven.riesgo}}, 
            Numero:{{joven.numeroHistoriasClinico}}</p>
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
    name: 'urgenciaJoven',
    computed:{
    ...mapState(['historiaClinica', 'listaJovenUrgente'])
  },
  methods:{
    ...mapActions(['postJovenUrgencia',])
  }
}
</script>

<style scoped>
.card-margen{
  margin-top: 3rem;
}
</style>