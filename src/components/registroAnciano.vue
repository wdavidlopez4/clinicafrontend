<template>
  <div>
      <form>
      <div class="mb-3">
        <label for="InputNombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="InputNombre" v-model="Anciano.nombre"/>
      </div>
      <div class="mb-3">
        <label for="InputHistorial" class="form-label">Numero Historial Clinico</label>
        <input type="text" class="form-control" id="InputHistorial" v-model="Anciano.numeroHistoriasClinico"/>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="CheckDieta" v-model="Anciano.dieta">
        <label class="form-check-label" for="CheckDieta">Dieta</label>
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="postAnciano">Registrar</button>
    </form>

    <div class="card card-margen" v-if="AncianoPromesa != null">
      <div class="card-header">
        informacion de paciente registrado
      </div>
        <div class="card-body">
          <p class="card-text">nombre: {{AncianoPromesa.nombre}}</p>
          <p class="card-text">edad: {{AncianoPromesa.edad}}</p>
          <p class="card-text">N-historial: {{AncianoPromesa.numeroHistoriasClinico}}</p>
          <p class="card-text">priridad: {{AncianoPromesa.prioridad}}</p>
          <p class="card-text">riesgo: {{AncianoPromesa.riesgo}}</p>
          <p class="card-text">dieta: {{AncianoPromesa.TieneDieta}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name:'registroAnciano',
    computed:{
        ...mapState(['Anciano', 'AncianoPromesa'])
    },
    props:{
        enviarEdad:String
    },
    mounted(){
        this.Anciano.edad = this.enviarEdad
    },
    methods:{
        ...mapActions(['postAnciano'])
    }

}
</script>

<style scoped>
.card-margen{
  margin-top: 3rem;
}
</style>