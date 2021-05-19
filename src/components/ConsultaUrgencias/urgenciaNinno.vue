<template>
  <div>
    <form>
      <div class="form-group">
        <label for="exampleInputPassword1">introdusca el numero clinico</label>
        <input type="text" class="form-control" id="exampleInputPassword1" v-model="historiaClinica.valor"/>
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="postNinosUrgencia">enviar</button>
    </form>

    <div v-bind:Key="ninno.numeroHistoriasClinico" v-for="ninno in listaNinosUrgente">
      <div class="card card-margen">
        <div class="card-body">
          <h5 class="card-title">Niños</h5>
          <h6 class="card-subtitle mb-2 text-muted">prioridad:{{ninno.prioridad}}</h6>
          <p class="card-text">
            Nombre: {{ninno.nombre}},  
            Edad:{{ninno.edad}},  
            Riesgo:{{ninno.riesgo}}, 
            Numero:{{ninno.numeroHistoriasClinico}}</p>
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
  name: "urgenciaNinno",
  computed:{
    ...mapState(['historiaClinica', 'listaNinosUrgente'])
  },
  methods:{
    ...mapActions(['postNinosUrgencia',])
  }

};
</script>

<style scoped>
.card-margen {
  margin-top: 3rem;
}
</style>