import home from './components/Home.vue'
import registroPaciente from './components/RegistroPaciente.vue'
import registrarConsultaClinica from './components/registrarConsultaClinica.vue'
import urgencia from './components/ConsultaUrgencias/urgencia'
import fumadoresUrgentes from './components/FumadorUrgente/fumadoresUrgentes.vue'
import edadMayor from './components/Mayores/edadMayor.vue'

export const ruters = [
    {path:'/', component:home},
    {path:'/registroPaciente', component:registroPaciente},
    {path:'/registrarConsultaClinica', component:registrarConsultaClinica},
    {path:'/urgencia', component:urgencia},
    {path:'/fumadoresUrgentes', component:fumadoresUrgentes},
    {path:'/edadMayor', component:edadMayor}
]