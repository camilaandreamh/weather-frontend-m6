<template>
  <div class="app-wrapper">
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="logo">Clima Click</router-link>
      </div>
    </nav>

    <router-view />

    <footer class="footer">
  <p>© 2026 Clima Click. Todos los derechos reservados.</p>
  <p class="author"> <strong>Camila Andrea Molina Hernández</strong></p>
</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'Camila Andrea Molina Hernández'
    }
  }
}
</script>

<style>
/* Estilos Globales para todo el sitio */
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }

body {
  background: radial-gradient(circle at top, #2d0b4d 0%, #120422 100%);
  color: white;
  min-height: 100vh;
}

.navbar {
  background: rgba(20, 20, 20, 0.7);
  padding: 15px 50px;
  backdrop-filter: blur(10px);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo { color: white; text-decoration: none; font-weight: bold; font-size: 1.5rem; }

.nav-links { display: flex; gap: 20px; align-items: center; }

.nav-link { color: #ccc; text-decoration: none; }

.btn-login { background: transparent; border: none; color: #ccc; cursor: pointer; }

.btn-register {
  background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.footer {
  text-align: center;
  padding: 40px;
  color: #666; 
  font-size: 0.9rem;
}

.author {
  margin-top: 10px;
  color: #888;
}

.author strong {
  color: #f093fb; 
  font-weight: 600;
}
</style>