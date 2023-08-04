<script>

import { computed } from 'vue'
import { useStore } from 'vuex';
import SidebarMenu from './SidebarMenu.vue';
export default {
  components: {
    SidebarMenu,
  },
 
    name: 'ChatPlantillas',
    setup() {
        const store = useStore();
        const modoNocturno = computed(() => store.state.modoNocturno);

        return {
            modoNocturno,
            SidebarMenu
        }
    }
}
</script>

<template>
    <div  :class="modoNocturno?'nocturno':'dia'">
    
    <section class="panel-sup">
        <div class="panel-sup-phote">
            <router-link to="/">
                <font-awesome-icon id="icon" icon="arrow-left" />
            </router-link>
            <img src="../assets/messi-perfil.jpg" alt="">
        </div>
        <div class="panel-sup-name">
            <h3>Lionel Messi </h3>
        </div>
    </section>
    <section class="panel-body">
        <div class="messages-container">
            <div class="fecha">
                <p>12 de Julio de 2023</p>
            </div>
            <div class="msj-me">
                <img src="../assets/messi-perfil.jpg" alt="">

                <div class="nodo">
                    <h3>Lionel Messi</h3>
                    <p>
                        Hola Leonardo , Me cominucaba para saber cuanto sale un sito web.
                    </p>
                    <span>20:30</span>

                </div>

            </div>
            <div class="fecha">
                <p>Ayer</p>
            </div>
            <div class="msj-me">
                <img src="../assets/messi-perfil.jpg" alt="">
                <div class="nodo">
                    <h3>Lionel Messi</h3>
                    <p>
                        Hola
                    </p>
                    <span>20:30</span>

                </div>
            </div>
            <div class="fecha">
                <p>Hoy</p>
            </div>
            <div class="msj-you">
                <div class="nodo">

                    <h3>Lionel Messi</h3>
                    <p>
                        Hola
                    </p>
                    <span>20:30</span>
                </div>
                <div class="float">
                    <img src="../assets/messi-perfil.jpg" alt="">
                    <font-awesome-icon id="icon" icon="trash" />
                </div>

            </div>
            <div class="msj-you">
                <div class="nodo">

                    <h3>Lionel Messi</h3>
                    <p>
                        Hola Leonardo , Me cominucaba para saber cuanto sale un sito web.
                    </p>
                    <span>20:30</span>

                </div>
                <div class="float">
                    <img src="../assets/messi-perfil.jpg" alt="">
                    <font-awesome-icon id="icon" icon="trash" />
                </div>
            </div>
        </div>
    </section>
    <section class="panel-inf">
        <input type="text" placeholder="Mensaje">
        <button>
            <font-awesome-icon id="icon" icon="paper-plane" />
        </button>
    </section>
</div>
</template>

<style scoped>
/* nocturno */
.float {
    display: flex;
    flex-direction: column;
}

.fecha {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.nocturno .fecha p {
    background-color: #232D36;
    text-align: right;
    color: #7d7985;
    font-size: 13px;

    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding: 5px;
    border-radius: 10px;
}


.nocturno .panel-body {
    background-color: #0C1D25;
    height: 100vh;
    width: 100%;
    padding: 80px 7px;
    overflow-y: hidden;
    overflow-y: scroll;
}
.messages-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    /* Alineamos los mensajes a la izquierda */
}

.msj-you,
.msj-me {
    display: flex;
}

.nocturno .msj-you #icon {
    color: #fa2e64;
    background-color: #232D36;
    border-radius: 100%;
    font-size: 16px;
    padding: 7px;
    margin-top: 10px;
    cursor: pointer;
}

.msj-you {
    width: 100%;
    justify-content: end;
}

.nocturno .msj-you span {
    width: 100%;
    text-align: right;
    color: #798185;
    font-size: 13px;
}

.nocturno .msj-me span {
    width: 100%;
    text-align: right;
    color: #e3eaee;
    font-size: 13px;

}

.nocturno .msj-me .nodo {

    display: flex;
    /* justify-content: center; */
    padding: 10px;
    max-width: 70%;
    margin-left: 9px;
    margin-right: 10px;
    background-color: #074b6f;
    border-radius: 10px;
    flex-direction: column;
    color: #7dade9;
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.nocturno .msj-you .nodo {
    display: flex;
    align-items: start;
    flex-direction: column;
    padding: 7px;
    max-width: 70%;
    margin-right: 9px;
    margin-left: 20%;
    padding: 10px;
    background-color: #232D36;
    border-radius: 10px;
    color: #fa2e64;
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.nocturno .panel-body .msj-me p {
    margin-top: 5px;

    font-size: 15px;
    color: #FEFDFC;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.nocturno .panel-body .msj-you p {
    margin-top: 5px;

    font-size: 15px;

    color: #FEFDFC;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.nocturno .panel-sup {
    width: 100%;
    height: 70px;
    background-color: #232D36;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
}

.nocturno .panel-inf {
    width: 100%;
    height: 65px;
    background-color: #0C1D25;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nocturno .panel-inf input {
    background-color: #232D36;
    width: 90%;
    padding: 15px 10px;
    border-radius: 30px;
    color: #FEFDFC;
    outline: 0;
    border: 0;
}

button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: 0;
}

.nocturno button:focus #icon {
    color: #01896B;
}

.nocturno .panel-sup #icon {
    font-size: 20px;
    font-weight: 300;
    color: #FEFDFC;
    padding: 15px;
    padding-right: 5px;

}

.nocturno .panel-inf #icon {
    font-size: 20px;
    font-weight: 300;
    color: #FEFDFC;
    padding: 5px;
}

.nocturno .panel-sup-name h3 {
    font-size: 17px;
    color: #FEFDFC;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-left: 10px;
    font-weight: 300;
}

.panel-sup img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;

}

.panel-body img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;


}


.nocturno .panel-body::-webkit-scrollbar {
    width: 8px;
    /* Ancho de la barra */
    background-color: #0C1D25;
    /* Color de fondo de la barra */
}

.nocturno .panel-body::-webkit-scrollbar-thumb {
    background-color: #074b6f;
    /* Color de la barra en sí */
    border-radius: 10px;
    /* Borde redondeado */
}

.nocturno .panel-body::-webkit-scrollbar-thumb:hover {
    background-color: #074b6f;
    /* Color de la barra en sí al pasar el cursor sobre ella */
}
/* dia */
.dia .fecha p {
    background-color: #ffffff;
    text-align: right;
    color: #7d7985;
    font-size: 13px;

    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding: 5px;
    border-radius: 10px;
}

.dia .panel-body {
    background-color: #EFEAE2;
    height: 100vh;
    width: 100%;
    padding: 80px 7px;
    overflow-y: hidden;
    overflow-y: scroll;
}

.messages-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    /* Alineamos los mensajes a la izquierda */
}

.msj-you,
.msj-me {
    display: flex;
}

.dia .msj-you #icon {
    color: #074b6f;
    background-color: #fff;
    border-radius: 100%;
    font-size: 16px;
    padding: 7px;
    margin-top: 10px;
    cursor: pointer;
}

.msj-you {
    width: 100%;
    justify-content: end;
}

.dia .msj-you span {
    width: 100%;
    text-align: right;
    color: #798185;
    font-size: 13px;
}

.dia .msj-me span {
    width: 100%;
    text-align: right;
    color: #fff;
    font-size: 13px;

}

.dia .msj-me .nodo {

    display: flex;
    /* justify-content: center; */
    padding: 10px;
    max-width: 70%;
    margin-left: 9px;
    margin-right: 10px;
    background-color: #fff;
    border-radius: 10px;
    flex-direction: column;
    color: #06D0C1;
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.dia .msj-you .nodo {
    display: flex;
    align-items: start;
    flex-direction: column;
    padding: 7px;
    max-width: 70%;
    margin-right: 9px;
    margin-left: 20%;
    padding: 10px;
    background-color: #d3f5fd;
    border-radius: 10px;
    color: #05beb1;
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.dia .panel-body .msj-me p {
    margin-top: 5px;

    font-size: 15px;
    color: #333;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.dia .panel-body .msj-you p {
    margin-top: 5px;

    font-size: 15px;

    color: #232D36;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.dia .panel-sup {
    width: 100%;
    height: 70px;
    background-color: #074b6f;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
}

.dia .panel-inf {
    width: 100%;
    height: 65px;
    background-color: #EFEAE2;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dia .panel-inf input {
    background-color: #FEFDFC;
    width: 90%;
    padding: 15px 10px;
    border-radius: 30px;
    color: #232D36;
    outline: 0;
    border: 0;
}

button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: 0;
}

.dia button:focus #icon {
    color: #01896B;
}
.dia .panel-sup #icon {
    font-size: 20px;
    font-weight: 300;
    color: #f6fbff;
    padding: 15px;
    padding-right: 5px;

}

.dia .panel-inf #icon {
    font-size: 20px;
    font-weight: 300;
    color: #074b6f;
    padding: 5px;
}

.dia .panel-sup-name h3 {
    font-size: 17px;
    color: #f6fbff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-left: 10px;
    font-weight: 500;
}

.panel-sup img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;

}

.panel-body img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;

}


.dia .panel-body::-webkit-scrollbar {
    width: 8px;
    /* Ancho de la barra */
    background-color: #fff;
    /* Color de fondo de la barra */
}

.dia .panel-body::-webkit-scrollbar-thumb {
    background-color: #074b6f;
    /* Color de la barra en sí */
    border-radius: 10px;
    /* Borde redondeado */
}

.dia .panel-body::-webkit-scrollbar-thumb:hover {
    background-color: #fff;
    /* Color de la barra en sí al pasar el cursor sobre ella */
}
</style>
