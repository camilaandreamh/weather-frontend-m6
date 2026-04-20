<template>
  <main class="container">
    <div v-if="lugar" class="detalle-clima">
      <router-link to="/" class="btn-back">
        <i class="fas fa-chevron-left"></i> Volver
      </router-link>
      
      <h1 class="hero-title">{{ lugar.nombre }}</h1>
      <div class="stats-grid">
        <div class="stat-card">
          <p>Temperatura Actual</p>
          <h2>{{ lugar.temperatura }}°C</h2>
        </div>
        <div class="stat-card">
          <p>Promedio Semanal</p>
          <p>20°C</p> </div>
      </div>
    </div>
    
    <div v-else class="mensaje-estado error">
      <p>Cargando información del lugar...</p>
    </div>
  </main>
</template>

<script>
export default {
  props: ['id'], // Recibe el ID desde la URL dinámica 
  data() {
    return {
      lugar: null,
     
      ciudades: [
        { id: 1, nombre: 'Santiago', temperatura: 22 },
        { id: 2, nombre: 'Coronel', temperatura: 18 },
        { id: 3, nombre: 'Concepción', temperatura: 17 },
        { id: 4, nombre: 'Valparaíso', temperatura: 20 },
        { id: 5, nombre: 'Antofagasta', temperatura: 24 }
      ]
    }
  },
  mounted() {
    // Buscamos el lugar específico según el ID de la ruta
    this.lugar = this.ciudades.find(c => c.id == this.id);
  }
}
</script>