<template>
  <main class="container">
    <header class="hero-section">
      <h1 class="main-title">Bienvenido a Clima Click</h1>
      <p class="main-sub">Desde norte a sur, el clima de Chile en un solo lugar.</p>
    </header>

    <div class="search-box">
      <input 
        v-model="busqueda" 
        @keyup.enter="buscarCiudad"
        type="text" 
        class="input-neon" 
        placeholder="Busca cualquier ciudad chilena..."
      />
      <button @click="buscarCiudad" class="btn-neon-search">Buscar</button>
    </div>

    <h2 class="grid-title">Ciudades destacadas</h2>
    <div class="cities-grid">
      <div v-for="ciudad in ciudadesChilenas" :key="ciudad" class="city-card">
        <span class="cl-tag">CL</span>
        <h3>{{ ciudad }}</h3>
        <router-link :to="'/detalle/' + ciudad" class="btn-detail-neon">
          Ver detalle
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      busqueda: '',
      ciudadesChilenas: [
        'Arica', 'Iquique', 'Antofagasta', 'La Serena', 'Valparaíso', 
        'Santiago', 'Coronel', 'Concepción', 'Temuco', 'Puerto Montt'
      ]
    }
  },
  methods: {
    buscarCiudad() {
      if (this.busqueda.trim()) {
        this.$router.push('/detalle/' + this.busqueda.trim());
      }
    }
  }
}
</script>

<style scoped>
.container { max-width: 1100px; margin: 0 auto; padding: 50px 20px; }
.hero-section { text-align: left; margin-bottom: 40px; }
.main-title { font-size: 3.5rem; font-weight: 800; color: white; margin: 0; }
.main-sub { font-size: 1.2rem; color: #a29bfe; margin-top: 10px; }

.search-box { display: flex; gap: 15px; margin-bottom: 60px; max-width: 500px; }
.input-neon {
  flex: 1; background: rgba(255,255,255,0.05); border: 1px solid #8e44ad;
  padding: 15px; border-radius: 15px; color: white; outline: none;
}
.btn-neon-search {
  background: #9b59b6; border: none; padding: 0 25px; border-radius: 15px;
  color: white; font-weight: bold; cursor: pointer; box-shadow: 0 0 15px rgba(155, 89, 182, 0.4);
}

.grid-title { text-align: left; color: #eee; margin-bottom: 25px; font-size: 1.4rem; }
.cities-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }

.city-card {
  background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(155, 89, 182, 0.2);
  padding: 30px; border-radius: 20px; text-align: left; transition: 0.3s;
}


.btn-detail-neon {
  display: inline-block;
  margin-top: 15px;
  text-decoration: none;
  background: linear-gradient(90deg, #9b59b6, #8e44ad);
  color: white;
  padding: 10px 25px;
  border-radius: 12px;
  font-weight: bold;
  /* El secreto del Neón: */
  box-shadow: 0 0 15px rgba(155, 89, 182, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: 0.3s all ease;
}

.btn-detail-neon:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 0 25px rgba(155, 89, 182, 1);
  background: linear-gradient(90deg, #a29bfe, #9b59b6);
}
</style>