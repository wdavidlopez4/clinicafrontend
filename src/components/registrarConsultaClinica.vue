<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="InputNombre" class="form-label">Nombre especialista</label>
        <input type="text" class="form-control" id="InputNombre" v-model="ConsultaClinica.nombreEspecialista"/>
      </div>
      
      <div class="mb-3">
        <select class="form-control" aria-label="Default select example" v-model="ConsultaClinica.tipoConsulta">
            <option value="ninguna" selected>Seleccione el tipo de consulta</option>
            <option value="0">Pediatria</option>
            <option value="1">Urgencias</option>
            <option value="2">MedicinaGeneral</option>
        </select>
      </div>

      <div class="mb-3">
        <select class="form-control" aria-label="Default select example" v-model="ConsultaClinica.estado">
            <option value="ninguna" selected>Seleccione el estado que se encuentra la consulta</option>
            <option value="0">Ocupado</option>
            <option value="1">Desocupado</option>
            <option value="2">En Espera</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary" v-on:click="postConsultaClinica" 
        v-show="ConsultaClinica.tipoConsulta != 'ninguna' && ConsultaClinica.estado != 'ninguna' ">
          Registrar
      </button>
    </form>

    <div class="card card-margen" v-if="ConsultaClinicaPromesa != null">
      <div class="card-header">
        informacion de la consulta
      </div>
        <div class="card-body">
          <p class="card-text">cantidad de pacientes: {{ConsultaClinicaPromesa.cantidadPacientes}}</p>
          <p class="card-text">tipo: {{ConsultaClinicaPromesa.tipoConsulta}}</p>
          <p class="card-text">estado: {{ConsultaClinicaPromesa.estado}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
    name:'registrarConsultaClinica',
    computed:{
        ...mapState(['ConsultaClinica', 'ConsultaClinicaPromesa'])
    },
    methods:{
        ...mapActions(['postConsultaClinica'])
    }
}
</script>

<style scoped>
.card-margen{
  margin-top: 3rem;
}
</style>