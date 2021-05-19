<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="InputNombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="InputNombre" v-model="Joven.nombre"/>
      </div>
      <div class="mb-3">
        <label for="InputHistorial" class="form-label">Numero Historial Clinico</label>
        <input type="text" class="form-control" id="InputHistorial" v-model="Joven.numeroHistoriasClinico"/>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="CheckFumador" v-model="Joven.esFumador">
        <label class="form-check-label" for="CheckFumador">Fuma</label>
      </div>
      <div class="mb-3" v-show="Joven.esFumador == true">
        <label for="InputTiempo" class="form-label">Tiempo fumando</label>
        <input type="number" class="form-control" id="InputTiempo" v-model="Joven.tiempoFumando"/>
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="postJoven">Registrar</button>
    </form>

    <div class="card card-margen" v-if="JovenPromesa != null">
      <div class="card-header">
        informacion de paciente registrado
      </div>
        <div class="card-body">
          <p class="card-text">nombre: {{JovenPromesa.nombre}}</p>
          <p class="card-text">edad: {{JovenPromesa.edad}}</p>
          <p class="card-text">N-historial: {{JovenPromesa.numeroHistoriasClinico}}</p>
          <p class="card-text">priridad: {{JovenPromesa.prioridad}}</p>
          <p class="card-text">riesgo: {{JovenPromesa.riesgo}}</p>
          <p class="card-text">fuma: {{JovenPromesa.esFumador}}</p>
          <p class="card-text">fuma: {{JovenPromesa.annosFumando}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name:'registroJoven',
    computed:{
        ...mapState(['Joven', 'JovenPromesa'])
    },
    props:{
        enviarEdad:String //este valor se revise desde el padre
    },
    mounted(){
        this.Joven.edad = this.enviarEdad;
    },
    methods:{
        ...mapActions(['postJoven'])
    }

}
</script>

<style>
.card-margen{
  margin-top: 3rem;
}
</style>