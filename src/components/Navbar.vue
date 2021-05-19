<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Clinica</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link to="/" tag="li" active-class="nav-item">
                <a class="nav-link active" aria-current="page">Home</a>
            </router-link>
            <router-link to="/registroPaciente" tag="li" active-class="nav-item">
                <a class="nav-link">Registrar Paciente</a>
            </router-link>
            <router-link to="/registrarConsultaClinica" tag="li" active-class="nav-item">
              <a class="nav-link">Registrar Consultas</a>
            </router-link>
            <router-link to="/urgencia" tag="li" active-class="nav-item">
              <a class="nav-link">Urgencias</a>
            </router-link>
            <router-link to="/fumadoresUrgentes" tag="li" active-class="nav-item">
              <a class="nav-link">Fumadores</a>
            </router-link>
            <router-link to="/edadMayor" tag="li" active-class="nav-item">
              <a class="nav-link">longevos</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Navbar'
};
</script>

<style>
</style>