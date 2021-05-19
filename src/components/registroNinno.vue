<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="InputNombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="InputNombre" v-model="Ninno.nombre"/>
      </div>
      <div class="mb-3">
        <label for="InputHistorial" class="form-label">Numero Historial Clinico</label>
        <input type="text" class="form-control" id="InputHistorial" v-model="Ninno.numeroHistoriasClinico"/>
      </div>
      <div class="mb-3">
        <label for="InputPE" class="form-label">Peso-Estatura</label>
        <input type="number" class="form-control" id="InputPE" v-model="Ninno.relacionPesoEstatura"/>
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="postNinno">Registrar</button>
    </form>

    <div class="card card-margen" v-if="NinnoPromesa != null">
      <div class="card-header">
        informacion de paciente registrado
      </div>
        <div class="card-body">
          <p class="card-text">nombre: {{NinnoPromesa.nombre}}</p>
          <p class="card-text">edad: {{NinnoPromesa.edad}}</p>
          <p class="card-text">N-historial: {{NinnoPromesa.numeroHistoriasClinico}}</p>
          <p class="card-text">priridad: {{NinnoPromesa.prioridad}}</p>
          <p class="card-text">riesgo: {{NinnoPromesa.riesgo}}</p>
          <p class="card-text">peso-estatura: {{NinnoPromesa.relacionPesoEstatura}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "registroNinno",
  computed:{
      ...mapState(['Ninno', 'NinnoPromesa'])
  },
  methods:{
      ...mapActions(['postNinno'])
  },
  props:{
    enviarEdad:String //este valor lo resivo del componente padre
  },
  mounted(){
      this.Ninno.edad = this.enviarEdad;
  }

};
</script>

<style scoped>
.card-margen{
  margin-top: 3rem;
}
</style>