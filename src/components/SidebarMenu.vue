<template>
  <div class="barside">
  
      <button class="menu" @click="toggleDropdown">
        <font-awesome-icon icon="bars" />
      </button>

    <ul v-if="session" :class="{ show: isOpen }">
      <div class="flex">
        <button @click="toggleDropdown">X</button>
      </div>
      <li>
        <router-link class="router" to="/Nube">
          <font-awesome-icon icon="globe" />
          <p>Descubre</p>
        </router-link>
      </li>
      <li>
        <router-link class="router" to="/Chat">
          <font-awesome-icon icon="comments" />
          <p>Crear</p>
        </router-link>
      </li>
      <li>
        <router-link class="router" to="/Chat">
          <font-awesome-icon icon="gear" />
          <p>Perfil</p>
        </router-link>
      </li>
      <li>
        <router-link class="router" to="/Chat">
          <font-awesome-icon icon="person" />
          <p>Amigos</p>
        </router-link>
      </li>
      <li>
        <router-link class="router" to="/Chat">
          <font-awesome-icon icon="right-from-bracket" />
          <p>Cerrar sesión</p>
        </router-link>
      </li>
    </ul>
    <ul v-if="!session" :class="{ show: isOpen }">
      <div class="flex">
        <button @click="toggleDropdown">X</button>
      </div>
      <li>
        <router-link class="router" to="/Nube">
          <font-awesome-icon icon="globe" />
          <p>Descubre</p>
        </router-link>
      </li>
      <li>
        <router-link class="router" to="/Chat">
          <font-awesome-icon icon="user-plus" />
          <p>Nuevo usuario</p>
        </router-link>
      </li>
      <li>
        <router-link class="router" to="/Chat">
          <font-awesome-icon icon="right-to-bracket" />
          <p>iniciar sesión</p>
        </router-link>
      </li>

    </ul>

  </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);
    const session = ref(false);


    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleDropdown,
      session
    };
  },
};
</script>
  
<style>
/* Estilos de ejemplo para el menú desplegable */
.flex{
  display: flex;
  justify-content: end;

}
.router {
  color: #FEFDFC;
  text-decoration: none;
  padding: 0 5px;
  display: flex;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.router p {
  margin: 0 20px;
}

.barside .menu {
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

ul {
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

}

ul li {
  padding: 8px;
  cursor: pointer;
}

ul li:hover {
  background-color: #3192c7;
}

ul.show {
  display: block;
  position: fixed;
  top: 0;
  right: -60%;
  transition: 0.5s ease-out;

}
</style>
  