<template>
  <main class="mt-3 px-5">
    <Navbar />
    <RouterView />
  </main>
</template>








<script >
//import Formulario from './Formulario/index.vue'
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router'





export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>







