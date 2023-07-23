<script>
export default {
    name: 'ChatPlantillas',
    setup() {
        return {
        }
    }
}
</script>

<template>
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
            <div class="msj-me">
                <img src="../assets/messi-perfil.jpg" alt="">
                <div>
                    <h3>Lionel Messi</h3>
                    <p>
                        Hola Leonardo , Me cominucaba para saber cuanto sale un sito web.
                    </p>
                    <span>20:30</span>

                </div>

            </div>
            <div class="msj-me">
                <img src="../assets/messi-perfil.jpg" alt="">
                <div>
                    <h3>Lionel Messi</h3>
                    <p>
                        Hola
                    </p>
                    <span>20:30</span>

                </div>
            </div>
            <div class="msj-you">
                <div>
                    <h3>Lionel Messi</h3>
                    <p>
                        Hola
                    </p>
                    <span>20:30</span>
                </div>
                <img src="../assets/messi-perfil.jpg" alt="">
            </div>
            <div class="msj-you">
                <div>
                    <h3>Lionel Messi</h3>
                    <p>
                        Hola Leonardo , Me cominucaba para saber cuanto sale un sito web.
                    </p>
                    <span>20:30</span>

                </div>
                <img src="../assets/messi-perfil.jpg" alt="">
            </div>
        </div>
    </section>
    <section class="panel-inf">
        <input type="text" placeholder="Mensaje">
        <button>
            <font-awesome-icon id="icon" icon="paper-plane" />
        </button>
    </section>
</template>

<style scoped>
.panel-body {
    background-color: #0C1D25;
    height: 100vh;
    width: 100%;
    padding: 80px 0;
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

.msj-you {
    width: 100%;
    justify-content: end;
}

.msj-you span {
    width: 100%;
    text-align: right;
    color: #798185;
    font-size: 13px;
}

.msj-me span {
    width: 100%;
    text-align: right;
    color: #e3eaee;
    font-size: 13px;

}

.msj-me div {
    background-color: #01AF9C;
    display: flex;
    /* justify-content: center; */
    padding: 10px;
    max-width: 70%;
    margin-left: 9px;
    margin-right: 10px;
    background-color: #01AF9C;
    border-radius: 10px;
    flex-direction: column;
    color: #484585;
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.msj-you div {
    display: flex;
    align-items: flex-end;
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

.panel-body .msj-me p {
    margin-top: 5px;

    font-size: 15px;
    color: #FEFDFC;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.panel-body .msj-you p {
    margin-top: 5px;

    font-size: 15px;

    color: #FEFDFC;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.panel-sup {
    width: 100%;
    height: 70px;
    background-color: #232D36;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
}

.panel-inf {
    width: 100%;
    height: 65px;
    background-color: #0C1D25;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.panel-inf input {
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
button:focus #icon {
    color: #01896B;
}

.panel-sup #icon {
    font-size: 20px;
    font-weight: 300;
    color: #FEFDFC;
    padding: 15px;
    padding-right: 5px;

}

.panel-inf #icon {
    font-size: 20px;
    font-weight: 300;
    color: #FEFDFC;
    padding: 5px;
}

.panel-sup-name h3 {
    font-size: 20px;
    color: #FEFDFC;
    font-family: 'Arial Narrow', sans-serif;
    font-weight: 300;
    width: 250px;
    text-align: center;
}

.panel-sup img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    object-fit: cover;

}

.panel-body img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;

}


.panel-body::-webkit-scrollbar {
    width: 8px;
    /* Ancho de la barra */
    background-color: #0C1D25;
    /* Color de fondo de la barra */
}

.panel-body::-webkit-scrollbar-thumb {
    background-color: #01AF9C;
    /* Color de la barra en sí */
    border-radius: 10px;
    /* Borde redondeado */
}

.panel-body::-webkit-scrollbar-thumb:hover {
    background-color: #01896B;
    /* Color de la barra en sí al pasar el cursor sobre ella */
}</style>
