<template>
  <div>
    <div class="card">
      <div class="card-header">Edad</div>
      <div class="card-body">
        <p class="card-text">
          Debe ingresar una edad para que el sistema determine que tipo de paciente es.
        </p>
        <input type="number" v-model="edad" />
      </div>
    </div>

    <registroNinno v-if="edad >= 1 && edad <= 16" :enviarEdad="edad"></registroNinno>
    <registroJoven v-if="edad >=17 && edad <= 40" :enviarEdad="edad"></registroJoven>
    <registroAnciano v-if="edad >= 41 && edad <=150" :enviarEdad="edad"></registroAnciano>

  </div>
</template>

<script>
import registroNinno from './registroNinno.vue';
import registroJoven from './registroJoven.vue';
import registroAnciano from './registroAnciano.vue'

export default {
  name: "registroPaciente",
  components: {
    registroNinno,
    registroJoven,
    registroAnciano
  },
  data() {
    return {
      edad: 0,
    };
  },
};
</script>

<style>
</style>