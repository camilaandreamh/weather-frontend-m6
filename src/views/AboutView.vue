<template>
  <main class="detalle-page">
    <div v-if="cargando" class="msg-cargando">
      <p>Conectando con el satélite de {{ $route.params.id }}...</p>
    </div>
    
    <div v-else-if="error" class="error-neon">
      <h2>¡Ups! Ciudad no encontrada</h2>
      <p>No logramos encontrar los datos de "{{ $route.params.id }}".</p>
      <router-link to="/" class="btn-back-neon">Volver a intentar</router-link>
    </div>

    <div v-else class="glass-card">
      <router-link to="/" class="back-link">← Volver a tus ciudades</router-link>
      
      <h1 class="city-title">{{ ciudad.name }}</h1>
      
      <div class="main-weather">
        <span class="temp-num">{{ Math.round(ciudad.main.temp) }}°C</span>
        <p class="status">{{ ciudad.weather[0].description }}</p>
      </div>
      
      <div class="info-grid">
        <div class="box">
          <small>Humedad</small>
          <p>{{ ciudad.main.humidity }}%</p>
        </div>
        <div class="box">
          <small>Viento</small>
          <p>{{ ciudad.wind.speed }} km/h</p>
        </div>
        <div class="box">
          <small>Sensación</small>
          <p>{{ Math.round(ciudad.main.feels_like) }}°C</p>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
// Desarrollado por Camila Andrea Molina Hernández — Módulo 6
export default {
  data() {
    return {
      ciudad: null,
      cargando: true,
      error: false,
      apiKey: 'c22f76991ecdeabe3084df1356af0ff0' 
    }
  },
  methods: {
    async fetchClima() {
      const nombreCiudad = this.$route.params.id.trim();
      
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad},CL&units=metric&lang=es&appid=${this.apiKey}`;

      try {
        this.cargando = true;
        this.error = false;
        const response = await fetch(url);
        
        if (response.ok) {
          this.ciudad = await response.json();
        } else {
          this.error = true;
        }
      } catch (err) {
        this.error = true;
      } finally {
        this.cargando = false;
      }
    }
  },
  mounted() {
    this.fetchClima();
  }
}
</script>

<style scoped>
.detalle-page { display: flex; justify-content: center; padding: 60px 20px; }

.glass-card {
  background: rgba(25, 10, 45, 0.7);
  padding: 50px;
  border-radius: 40px;
  border: 1px solid #8e44ad;
  box-shadow: 0 0 40px rgba(142, 68, 173, 0.4);
  text-align: center;
  width: 100%;
  max-width: 500px;
  backdrop-filter: blur(15px);
}

.back-link { 
  color: #f093fb; 
  text-decoration: none; 
  margin-bottom: 30px; 
  display: block; 
  font-weight: bold;
}

.city-title { font-size: 3rem; color: white; margin-bottom: 10px; }

.temp-num { 
  font-size: 6rem; 
  font-weight: 800; 
  background: linear-gradient(#fff, #f093fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.status { text-transform: capitalize; color: #a29bfe; font-size: 1.4rem; margin-top: -10px; }

.info-grid { 
  display: flex; 
  justify-content: space-around; 
  margin-top: 40px; 
  border-top: 1px solid rgba(255,255,255,0.1); 
  padding-top: 30px; 
}

.box small { color: #888; text-transform: uppercase; letter-spacing: 1px; }
.box p { font-size: 1.5rem; font-weight: bold; color: white; margin-top: 5px; }

.msg-cargando { color: #f093fb; font-size: 1.5rem; text-align: center; margin-top: 100px; }
</style>