<script>
import { ref } from 'vue';
import LogoAndMenu from "../components/LogoAndMenu.vue";
export default {
    name: 'crear',

    components: {
        LogoAndMenu,
    },

    setup() {
const mostrandoModal = ref(false);
const entradaContraseña = ref('');

const mostrarModal = () => {
  mostrandoModal.value = true;
};
const cerrarModal = () => {
  mostrandoModal.value = false;
};
const verificarContraseña = () => {
  // Aquí puedes implementar la lógica para verificar la contraseña ingresada
  // Por ejemplo, puedes compararla con una contraseña predefinida.
  // Si la contraseña es correcta, puedes hacer alguna acción y luego cerrar el modal:
  // mostrandoModal.value = false;
  // Si es incorrecta, puedes mostrar un mensaje de error o hacer lo que consideres necesario.
  mostrandoModal.value = false; // Este código es solo para cerrar el modal en este ejemplo.
};
        return {
          LogoAndMenu,
          mostrarModal,
          cerrarModal,
          verificarContraseña
        }
    }
}

</script>

<template>
  <div class="container-nube">
   <LogoAndMenu />

    <input type="text" placeholder="Buscar palabra clave o id">
    <section>
      <button @click="mostrarModal">
        <article>
          <div class="GrupName">Grupo Familiar</div>

          <div class="GrupName" style="color: rgb(251, 147, 249);">
            Manager
          </div>
          <div style="color: #dd940d;">
            <font-awesome-icon icon="person" /> 3
          </div>

          <div>
            <font-awesome-icon style="color: #db5c7e;" icon="lock" />
            <!-- <font-awesome-icon icon="lock-open" /> -->
          </div>
        </article>
      </button>

      <router-link class="router" to="/Chat">
        <article>
          <div class="GrupName">Escuela de futbol</div>

          <div>
            <!-- <font-awesome-icon style="color: #db5c7e;" icon="lock" /> -->
            <!-- <font-awesome-icon style="color: #66e78d;" icon="lock-open" /> -->
          </div>
          <div style="color: rgb(71, 208, 238);">
            Visitor
          </div>
          <div style="color: #dd940d;">
            <font-awesome-icon icon="person" /> 8
          </div>
        </article>
      </router-link>
    </section>
      <!-- Modal -->
      <div v-if="mostrandoModal" class="modal">
      <div class="modal-contenido">
        <h2>Contraseña</h2>
        <input type="password" v-model="entradaContraseña" placeholder="Ingrese la contraseña">
        <div class="modal-botones">
          <button class="btn-aceptar" @click="verificarContraseña">Aceptar</button>
          <button class="btn-cancelar" @click="cerrarModal">Cancelar</button>
        </div>
      </div>
    </div>
    <!-- Fin del Modal -->
  </div>
</template>

<style scoped>

/* ... Estilos existentes ... */


.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-contenido {
  background-color: #074b6f;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
}

.modal h2 {
  margin-bottom: 10px;
  color: #FEFDFC;
}

.modal input {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #999;
  outline-color: #f8fdff;
}

.modal-botones {
  display: flex;
  justify-content: center;
}

.btn-aceptar {
  background-color: #0C1D25;
  color: #fff;
  margin-right: 10px;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-cancelar {
  background-color: #999;
  color: #0C1D25;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button{
  background-color: transparent;
  border:0;
  outline: 0;
  width: 100vw;
  color: #FEFDFC;  
}
.router {
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

h1 {
  padding: 10px;
  margin-top: 5px;
  font-size: 22px;
  color: #3192c7;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

label {
  margin-top: 5px;
  font-size: 12px;
  color: #FEFDFC;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

input {
  margin-top: 10px;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #999;
  outline-color: #f8fdff;
  background-color: transparent;
  color: #FEFDFC;

}

section {
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

section div {
  margin: 0 5px;


}

article {
  background-color: #074b6f;
  display: flex;
  margin-top: 3px;
  height: 20px;
  cursor: pointer;
  align-items: center;
}

section::-webkit-scrollbar {
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
</style>
