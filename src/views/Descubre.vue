<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex';
import { ref } from 'vue';
import LogoAndMenu from "../components/LogoAndMenu.vue";
export default {
  name: 'crear',

  components: {
    LogoAndMenu,
  },

  setup() {
    const tabla = ref(true)
    const store = useStore();
    const modoNocturno = computed(() => store.state.modoNocturno)
    const usuarios = computed(() => store.state.usuarios)
    const filteredResults = ref([]);
    const search = ref('')

    const array2 = [{ "id": 1, "grupo": "Lucas Vargas" }, { "id": 2, "grupo": "Mike Huaman" }, { "id": 3, "grupo": "Pedro perez" }, { "id": 4, "grupo": "Franco Echegaray" }, { "id": 5, "grupo": "Ignacio Herrera" }, { "id": 6, "grupo": "Lisandro Tamola" }, { "id": 7, "grupo": "Renzo Perez" }, { "id": 8, "grupo": "Dylan Sombra" }, { "id": 9, "grupo": "Diego Sanfurgo" }, { "id": 10, "grupo": "Jose Lagos" }, { "id": 11, "grupo": "Nicolas Estalles" }, { "id": 12, "grupo": "Eros Silva" }];
    const array = [{ "id": 1, "grupo": "Grupo de motos" }, { "id": 2, "grupo": "Apoyo escolar" }, { "id": 3, "grupo": "Grupo familiar" }, { "id": 4, "grupo": "Parque " }, { "id": 5, "grupo": "Grupo familiar" }, { "id": 6, "grupo": "Facultad" }, { "id": 7, "grupo": "Grupo de motos" }, { "id": 8, "grupo": "Apoyo escolar" }, { "id": 9, "grupo": "Grupo familiar" }, { "id": 10, "grupo": "Parque " }, { "id": 11, "grupo": "Grupo familiar" }, { "id": 12, "grupo": "Facultad" }, { "id": 13, "grupo": "Grupo de motos" }, { "id": 14, "grupo": "Apoyo escolar" }, { "id": 15, "grupo": "Grupo familiar" }, { "id": 16, "grupo": "Parque " }, { "id": 17, "grupo": "Grupo familiar" }, { "id": 18, "grupo": "Facultad" }, { "id": 19, "grupo": "Grupo de motos" }, { "id": 20, "grupo": "Apoyo escolar" }, { "id": 21, "grupo": "Grupo familiar" }, { "id": 22, "grupo": "Parque " }, { "id": 23, "grupo": "Grupo familiar" }, { "id": 24, "grupo": "Facultad" }];

    const changeTable = () => {
      tabla.value = !tabla.value
    }

    const buscador = () => {
      const users_search = usuarios.value.filter((val) => {
        return (val.value.alias.toLowerCase().includes(search.value.toLowerCase()))
      })
      filteredResults.value = users_search;
    }

    onMounted(async () => {
      await store.dispatch('fetchUsuarios')
      await store.dispatch('fetchMensajes')
    })

    return {
      LogoAndMenu,
      modoNocturno,
      array,
      array2,
      changeTable,
      buscador,
      tabla,
      filteredResults,
      search,
      usuarios
    }
  }
}

</script>

<template>
  <div :class="modoNocturno ? 'container-nube' : 'container2-nube'">
    <LogoAndMenu />
    <div class="img">
      <p>
        ch<font-awesome-icon id="icon" icon="comments" />tea
      </p>
    </div>
    <input v-model="search" @input="buscador" type="text" placeholder="Buscar palabra clave o id">
    <button v-if="tabla" class="button2" @click="changeTable">
      <font-awesome-icon icon="arrow-right-rotate" />
      Grupos
    </button>
    <button v-if="!tabla" class="button2" @click="changeTable">
      <font-awesome-icon icon="arrow-right-rotate" />
      Amigos
    </button>
    <section>
      <div v-if="!tabla" v-for="arra in array" :key="arra.id">
        <article>
          <div class="GrupName">{{ arra.grupo }}</div>
          <div class="GrupName" style="color:#3192c7">
            Manager
          </div>
          <div :style="modoNocturno ? 'color:#dd940d' : 'color:#dd940d'">
            <font-awesome-icon icon="person" /> 3
          </div>
          <div>
            <font-awesome-icon style="color: #db5c7e;" icon="lock" />
          </div>
        </article>
      </div>
      <div v-if="tabla && search.value != ''" v-for="user in filteredResults" :key="user.id">
        <article>
          <img :src="user.value.foto" alt="">
          <div :class="user.value.conexion ? 'circuloGreen' : 'circuloRed'"></div>
          <div class="alias">{{ user.value.alias }}</div>
          <router-link class="button" :to="`/Chat/${user.id}`">
            <font-awesome-icon id="icon" icon="comments" /> Chat
          </router-link>
        </article>
      </div>
      <div v-if="tabla && search == ''" v-for="user in usuarios" :key="user.id">
        <article>
          <img :src="user.value.foto" alt="">

          <div :class="user.value.conexion ? 'circuloGreen' : 'circuloRed'"></div>
          <div class="alias">{{ user.value.alias }}</div>
          <router-link class="button" :to="`/Chat/${user.id}`">
            <font-awesome-icon id="icon" icon="comments" /> Chat
          </router-link>
        </article>
      </div>
    </section>
  </div>
</template>
<style scoped>
.img p {
  margin: auto;
  font-size: 88px;
  color: #3192c7;
  /* background-color: #232D36; */
  text-align: center;
  margin: 20px;
}

.alias {
  text-decoration: none;
  position: relative;
  left: -13px;
}

.container-nube .alias {
  color: #f8fdff;
}

.container2-nube .alias {
  color: #0C1D25;
}

.circuloRed {
  position: relative;
  left: -14px;
  top: 11px;
  height: 7px;
  width: 7px;
  background-color: red;
  border-radius: 100%;
}

.circuloGreen {
  position: relative;
  left: -14px;
  top: 11px;
  height: 7px;
  width: 7px;
  background-color: green;
  border-radius: 100%;

}

.button2 {
  background-color: transparent;
  border: 1px solid #3192c7;
  color: #3192c7;
  width: 80px;
  cursor: pointer;
  margin-left: 5%;
  padding: 7px;
  border-radius: 10px;
}

img {
  height: 30px;
  width: 30px;
  margin: 2px;
  border-radius: 100%;
  object-fit: cover;

}

.container-nube .button {
  background-color: transparent;
  border: 1px solid #3192c7;
  padding: 5px;
  border-radius: 10px;
  outline: 0;
  color: #3192c7;
  cursor: pointer;
  text-decoration: none;
}

.container-nube .router {
  text-decoration: none;
  color: #FEFDFC;
}

.container-nube {
  background-color: #0C1D25;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.container-nube h1 {
  padding: 10px;
  margin-top: 5px;
  font-size: 22px;
  color: #3192c7;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.container-nube label {
  margin-top: 5px;
  font-size: 12px;
  color: #FEFDFC;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.container-nube input {
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #999;
  outline-color: #f8fdff;
  background-color: transparent;
  color: #FEFDFC;

}

.container-nube section {
  border: 1px solid #0C1D25;
  width: 90%;
  height: 40vh;
  margin: auto;
  margin-top: 20px;
  color: #FEFDFC;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  overflow: hidden;
  overflow-y: scroll;
  background-color: #074b6f;
}

.container-nube section div {
  margin: 0 5px;


}

.container-nube article {
  background-color: #0C1D25;
  display: flex;
  margin-top: 3px;
  align-items: center;
  cursor: pointer;
  padding: 5px;
}

.container-nube section::-webkit-scrollbar {
  width: 8px;
  /* Ancho de la barra */
  background-color: #0C1D25;
  /* Color de fondo de la barra */
}

section::-webkit-scrollbar-thumb {
  background-color: #074b6f;
  /* Color de la barra en sí */
  border-radius: 10px;
  /* Borde redondeado */
}

section::-webkit-scrollbar-thumb:hover {
  background-color: #074b6f;
  /* Color de la barra en sí al pasar el cursor sobre ella */
}

.container2-nube .btn-cancelar {
  background-color: #999;
  color: #0C1D25;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.container2-nube .button {
  background-color: transparent;
  border: 1px solid #3192c7;
  padding: 5px;
  border-radius: 10px;
  outline: 0;
  color: #3192c7;
  left: 190px;
  text-decoration: none;
}

.container2-nube .router {
  text-decoration: none;
  color: #FEFDFC;
}

.container2-nube {
  background-color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.container2-nube h1 {
  padding: 10px;
  margin-top: 5px;
  font-size: 22px;
  color: #3192c7;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.container2-nube label {
  margin-top: 5px;
  font-size: 12px;
  color: #FEFDFC;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.container2-nube input {
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #999;
  outline-color: #0C1D25;
  background-color: transparent;
  color: #0C1D25;

}

.container2-nube section {
  border: 1px solid #f8fdff;
  width: 90%;
  height: 40vh;
  margin: auto;
  margin-top: 20px;
  color: #0C1D25;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  overflow: hidden;
  overflow-y: scroll;
  background-color: #074b6f;
}

.container2-nube article {
  background-color: #f8fdff;
  display: flex;
  margin-top: 3px;
  align-items: center;
  cursor: pointer;
  padding: 5px;
}

section div {
  margin: 0 5px;


}
</style>
