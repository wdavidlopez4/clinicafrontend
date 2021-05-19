<template>
  <div>

    <form>
        <div class="form-group">
            <label for="exampleFormControlSelect1">seleccione el tipo de paciente</label>
            <select class="form-control" id="exampleFormControlSelect1" v-model="seleccionado">
            <option value="0">Niño</option>
            <option value="1">Joven</option>
            <option value="2">Anciano</option>
            </select>
        </div>
    </form>

    <urgenciaNinno v-if="seleccionado == 0"></urgenciaNinno>
    <urgenciaJoven v-if="seleccionado == 1"></urgenciaJoven>
    <urgenciaAnciano v-if="seleccionado == 2"></urgenciaAnciano>
  </div>
</template>

<script>
import urgenciaNinno from './urgenciaNinno.vue'
import urgenciaJoven from './urgenciaJoven.vue'
import urgenciaAnciano from './urgenciaAnciano.vue'

export default {
    name: 'urgencia',
    components:{
        urgenciaNinno,
        urgenciaJoven,
        urgenciaAnciano
    },
    data(){
        return{
            seleccionado: 0
        }
    }
}
</script>

<style>

</style>