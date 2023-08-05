<script>
import { computed } from 'vue'
import { useStore } from 'vuex';
import { ref } from 'vue';
import LogoAndMenu from "../components/LogoAndMenu.vue";
export default {
  name: 'crear',

  components: {
    LogoAndMenu,
  },

  setup() {
    const store = useStore();
    const modoNocturno = computed(() => store.state.modoNocturno);

    const array = [
      {
        "id": 1,
        "grupo": "Grupo de motos"
      },
      {
        "id": 2,
        "grupo": "Apoyo escolar"
      },
      {
        "id": 3,
        "grupo": "Grupo familiar"
      },
      {
        "id": 4,
        "grupo": "Parque "
      },
      {
        "id": 5,
        "grupo": "Grupo familiar"
      },
      {
        "id": 6,
        "grupo": "Facultad"
      },
      {
        "id": 7,
        "grupo": "Grupo de motos"
      },
      {
        "id": 8,
        "grupo": "Apoyo escolar"
      },
      {
        "id": 9,
        "grupo": "Grupo familiar"
      },
      {
        "id": 10,
        "grupo": "Parque "
      },
      {
        "id": 11,
        "grupo": "Grupo familiar"
      },
      {
        "id": 12,
        "grupo": "Facultad"
      },
      {
        "id": 13,
        "grupo": "Grupo de motos"
      },
      {
        "id": 14,
        "grupo": "Apoyo escolar"
      },
      {
        "id": 15,
        "grupo": "Grupo familiar"
      },
      {
        "id": 16,
        "grupo": "Parque "
      },
      {
        "id": 17,
        "grupo": "Grupo familiar"
      },
      {
        "id": 18,
        "grupo": "Facultad"
      },
      {
        "id": 19,
        "grupo": "Grupo de motos"
      },
      {
        "id": 20,
        "grupo": "Apoyo escolar"
      },
      {
        "id": 21,
        "grupo": "Grupo familiar"
      },
      {
        "id": 22,
        "grupo": "Parque "
      },
      {
        "id": 23,
        "grupo": "Grupo familiar"
      },
      {
        "id": 24,
        "grupo": "Facultad"
      },
    ]

    return {
      LogoAndMenu,
      modoNocturno,
      array
    }
  }
}

</script>

<template>
  <div :class="modoNocturno ? 'container-nube' : 'container2-nube'">
    <LogoAndMenu />

    <input type="text" placeholder="Buscar palabra clave o id">
    <section>
      <div v-for="arra in array" :key="arra.id">
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
    </section>
  </div>
</template>
<style scoped>

.container-nube .btn-cancelar {
  background-color: #999;
  color: #0C1D25;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.container-nube button {
  background-color: transparent;
  border: 0;
  outline: 0;
  width: 100vw;
  color: #FEFDFC;
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
  margin-top: 10px;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #999;
  outline-color: #f8fdff;
  background-color: transparent;
  color: #FEFDFC;

}

.container-nube section {
  border: 1px solid #FEFDFC;
  width: 90%;
  height: 70vh;
  margin: auto;
  margin-top: 20px;
  color: #FEFDFC;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  overflow: hidden;
  overflow-y: scroll;
}

.container-nube section div {
  margin: 0 5px;


}

.container-nube article {
  background-color: #074b6f;
  display: flex;
  margin-top: 3px;
  height: 20px;
  cursor: pointer;
  align-items: center;
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

.container2-nube button {
  background-color: transparent;
  border: 0;
  outline: 0;
  width: 100vw;
  color: #FEFDFC;
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
  margin-top: 10px;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #999;
  outline-color: #0C1D25;
  background-color: transparent;
  color: #0C1D25;

}

.container2-nube section {
  border: 1px solid #0C1D25;
  width: 90%;
  height: 70vh;
  margin: auto;
  margin-top: 20px;
  color: #0C1D25;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  overflow: hidden;
  overflow-y: scroll;
  background-color: #ccc;
}

.container2-nube article {
  background-color: #f8fdff;
  display: flex;
  margin-top: 3px;
  height: 20px;
  cursor: pointer;
  align-items: center;
}

section div {
  margin: 0 5px;


}
</style>
