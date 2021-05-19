import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        Ninno:{
            nombre:"",
            edad:0,
            numeroHistoriasClinico:"",
            relacionPesoEstatura:0
        },
        NinnoPromesa:null,
        Joven:{
            nombre:"",
            edad:0,
            numeroHistoriasClinico:"",
            esFumador:false,
            tiempoFumando:0
        },
        JovenPromesa:null,
        Anciano:{
            nombre:"",
            edad:0,
            numeroHistoriasClinico:"",
            dieta:false
        },
        AncianoPromesa:null,
        ConsultaClinica:{
            tipoConsulta: "ninguna",
            estado: "ninguna",
            nombreEspecialista:''
        },
        ConsultaClinicaPromesa:null,
        historiaClinica:{
            valor:""
        },
        listaNinosUrgente:{

        },
        listaJovenUrgente:{

        },
        listaAncianoUrgente:{

        },
        fumadores:{

        },
        mayores:{

        }
    },
    mutations:{
        registrarNinno(state){
            console.log(state.Ninno)
            Axios.post(
                'http://localhost:50390/api/Pacientes/Ninno',
                {
                    "Nombre": state.Ninno.nombre,
                    "Edad": parseInt(state.Ninno.edad),
                    "NumeroHistoriasClinico": state.Ninno.numeroHistoriasClinico,
                    "RelacionPesoEstatura": parseInt(state.Ninno.relacionPesoEstatura)
                }).then((respuesta) => {
                    state.NinnoPromesa = respuesta.data
                }).catch(function (error) {
                    console.log(error);
                  });
        },
        registrarJoven(state){
            Axios.post(
                'http://localhost:50390/api/Pacientes/Joven',
                {
                    "Nombre": state.Joven.nombre,
                    "Edad": parseInt(state.Joven.edad),
                    "NumeroHistoriasClinico": state.Joven.numeroHistoriasClinico,
                    "EsFumador": state.Joven.esFumador,
                    "AnnosFumando": parseInt(state.Joven.tiempoFumando)
                }
            ).then((respuesta) => {
                state.JovenPromesa = respuesta.data
            }).catch(function(error){
                console.log(error);
            });
            
            console.log(state.Joven)
        },
        registrarAnciano(state){
            Axios.post(
                'http://localhost:50390/api/Pacientes/Anciano',
                {
                    "Nombre": state.Anciano.nombre,
                    "Edad": parseInt(state.Anciano.edad),
                    "NumeroHistoriasClinico": state.Anciano.numeroHistoriasClinico,
                    "TieneDieta": state.Anciano.dieta
                }
            ).then((respuetsa) => {
                state.AncianoPromesa = respuetsa.data
            }).catch((error) => {
                console.log(error)
            });

            console.log(state.Anciano)
        },
        registrarConsultaClinica(state){
            console.log(state.ConsultaClinica)
            Axios.post(
                'http://localhost:50390/api/Clinica/Consulta',
                {
                    "TipoConsulta": parseInt(state.ConsultaClinica.tipoConsulta),
                    "Estado": parseInt(state.ConsultaClinica.estado),
                    "NombreEspecialista": state.ConsultaClinica.nombreEspecialista
                }
            ).then((r) => {
                state.ConsultaClinicaPromesa = r.data
            }).catch((error) => {
                console.log(error)
            });
        },
        consultarNinosUrgencias(state){
            console.log(state.historiaClinica.valor)
            Axios.post(
                'http://localhost:50390/api/Clinica/NinnosUrgentes',
                {
                    "NumeroHistoriasClinico" : state.historiaClinica.valor
                }
            ).then((x) => {
                console.log(x.data)
                state.listaNinosUrgente = x.data
            }).catch((error) => {
                console.log(error)
            });
        },
        consultarJovenUrgencias(state){
            console.log(state.historiaClinica.valor)
            Axios.post(
                'http://localhost:50390/api/Clinica/JovenUrgentes',
                {
                    "NumeroHistoriasClinico" : state.historiaClinica.valor
                }
            ).then((x) => {
                console.log(x.data)
                state.listaJovenUrgente = x.data
            }).catch((error) => {
                console.log(error)
            });
        },
        consultarAncianoUrgencias(state){
            console.log(state.historiaClinica.valor)
            Axios.post(
                'http://localhost:50390/api/Clinica/AncianoUrgentes',
                {
                    "NumeroHistoriasClinico" : state.historiaClinica.valor
                }
            ).then((x) => {
                console.log(x.data)
                state.listaAncianoUrgente = x.data
            }).catch((error) => {
                console.log(error)
            });
        },
        consultarFumadoresUrgentes(state){
            console.log('entro')
            Axios.post(
                'http://localhost:50390/api/Clinica/FumadoresUrgentes',{}
            ).then((x) => {
                console.log(x.data)
                state.fumadores = x.data
            }).catch((error) => {
                console.log(error)
            });
        },
        consultarMayores(state){
            Axios.post(
                'http://localhost:50390/api/Clinica/Mayores',{}
            ).then((x) => {
                console.log(x.data)
                state.mayores = x.data
            }).catch((error) => {
                console.log(error)
            });
        }
    },
    actions:{
        postNinno(context){
            context.commit('registrarNinno')
        },
        postJoven(context){
            context.commit('registrarJoven')
        },
        postAnciano(context){
            context.commit('registrarAnciano')
        },
        postConsultaClinica(context){
            context.commit('registrarConsultaClinica')
        },
        postNinosUrgencia(context){
            context.commit('consultarNinosUrgencias')
        },
        postJovenUrgencia(context){
            context.commit('consultarJovenUrgencias')
        },
        postAncianoUrgencia(context){
            context.commit('consultarAncianoUrgencias')
        },
        postFumadoresUrgentes(contex){
            contex.commit('consultarFumadoresUrgentes')
        },
        postMayores(contex){
            contex.commit('consultarMayores')
        }
    }
})