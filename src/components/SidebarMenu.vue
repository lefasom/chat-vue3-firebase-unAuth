<template>
  <div :class="modoNocturno ? 'barside' : 'barside2'">

    <button class="menu" @click="toggleDropdown">
      <font-awesome-icon icon="bars" />
    </button>

    <ul v-if="usuarioConexion" :class="{ show: isOpen }">
      <div class="flex">
        <button @click="toggleDropdown">X</button>
      </div>
      <li>
        <router-link :class="modoNocturno ? 'router' : 'router'" to="/Descubre">
          <font-awesome-icon id="icon" icon="globe" />
          <p>Descubre</p>
        </router-link>
      </li>
      <li>
        <router-link :class="modoNocturno ? 'router' : 'router'" to="/CreateChat">
          <font-awesome-icon id="icon" icon="comments" />
          <p>Crear</p>
        </router-link>
      </li>
      <li>
        <router-link :class="modoNocturno ? 'router' : 'router'" to="/PerfilConfig">
          <font-awesome-icon id="icon" icon="gear" />
          <p>Perfil</p>
        </router-link>
      </li>
      <li>
        <router-link :class="modoNocturno ? 'router' : 'router'" to="/Amigos">

          <font-awesome-icon id="icon" icon="person" />
          <p>Amigos</p>
        </router-link>
      </li>
      <li>
        <div :class="modoNocturno ? 'router' : 'router'" @click="cerrarSesion">

          <font-awesome-icon id="icon" icon="right-from-bracket" />
          <p>Cerrar sesión</p>
        </div>
      </li>
      <div class="modo">

        <Switch :modo="modoNocturno" @click="modo" />
      </div>
    </ul>
    <ul v-if="!usuarioConexion" :class="{ show: isOpen }">
      <div class="flex">
        <button @click="toggleDropdown">X</button>
      </div>
      <li>
        <router-link :class="modoNocturno ? 'router' : 'router'" to="/Descubre">
          <font-awesome-icon id="icon" icon="globe" />
          <p>Descubre</p>
        </router-link>
      </li>
      <li>
        <router-link :class="modoNocturno ? 'router' : 'router'" to="/CreateUser">
          <font-awesome-icon id="icon" icon="user-plus" />
          <p>Nuevo usuario</p>
        </router-link>
      </li>
      <li>
        <router-link :class="modoNocturno ? 'router' : 'router'" to="/Login">
          <font-awesome-icon id="icon" icon="right-to-bracket" />
          <p>iniciar sesión</p>
        </router-link>
      </li>
      <div class="modo">
        <Switch :modo="modoNocturno" @click="modo" />
      </div>
    </ul>

  </div>
</template>
  
<script>
import { ref } from 'vue';
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

import Switch from './Switch.vue';
export default {
  name: 'sidebarMenu',
  components: {
    Switch
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const modoNocturno = computed(() => store.state.modoNocturno);
    const usuarioConexion = computed(() => store.state.conexion);

    const isOpen = ref(true)

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value
    }
    const modo = async () => {
      store.dispatch('modificoModoNocturno', modoNocturno);
    }
    const cerrarSesion = async () => {
      store.dispatch('setConexion')
      router.push('/')
    }

    onMounted(() => {
      // console.log(usuarioConexion.value)
    })

    return {
      isOpen,
      toggleDropdown,
      usuarioConexion,
      modoNocturno,
      modo,
      cerrarSesion
    };
  },
  components: { Switch }
};
</script>
  
<style scoped>
/* Estilos de ejemplo para el menú desplegable */
/* Estilos para el interruptor cuando está activado */

.barside,
.barside2 {
  position: absolute;
  z-index: 999999999;
}

.modo {


  margin-left: 11px;
  margin-top: 10px;
}

.flex {
  display: flex;
  justify-content: end;

}

.barside .router {
  color: #FEFDFC;
  text-decoration: none;
  padding: 0 5px;
  display: flex;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.barside2 .router {
  color: #444;
  text-decoration: none;
  padding: 0 5px;
  display: flex;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.router p {
  margin: 0 20px;
}

.menu {
  position: fixed;
  background-color: transparent;
  color: #3192c7;
  font-size: 27px;
  border: 0;
  padding: 10px;
  right: 0;
  cursor: pointer;
}

ul button {
  background-color: transparent;
  color: #3192c7;
  font-size: 23px;
  border: 0;
  padding: 10px;
  cursor: pointer;

}

.barside ul {
  list-style: none;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #0C1D25;
  padding: 0;
  margin: 0;
  width: 60%;
  height: 100%;
  transition: 0.5s ease-out;
  border-left: 1px solid #ccc;

}

.barside2 ul {
  list-style: none;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #ffffff;
  padding: 0;
  margin: 0;
  width: 60%;
  height: 100%;
  transition: 0.5s ease-out;

}

.barside2 #icon {
  color: #3192c7;

}

ul li {
  padding: 8px;
  cursor: pointer;
  z-index: 9999999;
}

.barside ul li:hover {
  background-color: #3192c7;
}

.barside2 ul li:hover {
  background-color: #2d3133;
}

.barside2 ul li:hover .router {
  color: #f8f7f6;

}

ul.show {
  display: block;
  position: fixed;
  top: 0;
  right: -60%;
  transition: 0.5s ease-out;

}
</style>
  