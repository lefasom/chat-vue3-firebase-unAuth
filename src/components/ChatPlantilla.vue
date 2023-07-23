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

        <p class="msj-me">
            Hola Leonardo , Me cominucaba para saber cuanto sale un sito web.
        </p>
        <br>
        <p class="msj-you">
            Hola como estas, Te gustaria realizar algun trabajo con nosotros te recomiendo que visitesnuestro sitio web ,
            Saludos.
        </p>
        <br>

        <p class="msj-me">
            cuanto sale un sito web.
        </p>
        <br>

        <p class="msj-you">
            Hola como estas, Te gustaria realizar algun trabajo con nosotros te recomiendo que visitesnuestro sitio web ,
            Saludos.
        </p>
        <br>

        <p class="msj-me">
            Hola Leonardo , Me cominucaba para saber cuanto sale un sito web.
        </p>
        <br>
        <p class="msj-you">
            Hola
        </p>
        <br>
        <p class="msj-me">
            Hola Leonardo , Me cominucaba para saber cuanto sale un sito web.
        </p>
        <br>
        <p class="msj-you">
            Hola como estas, Te gustaria realizar algun trabajo con nosotros te recomiendo que visitesnuestro sitio web ,
            Saludos.
        </p>
        </div>
    </section>
    <section class="panel-inf">
        <input type="text" placeholder="Mensaje">
        <font-awesome-icon id="icon" icon="paper-plane" />
    </section>
</template>

<style scoped>
.panel-body {
  background-color: #0C1D25;
  height: 100vh;
  width: 100%;
  padding: 70px 0;
  overflow-y: hidden;
  overflow-y: scroll;
}

.messages-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start; /* Alineamos los mensajes a la izquierda */
}

.panel-body .msj-me {
  max-width: 70%;
  margin-left: auto;
  margin-right: 10px;
  padding: 10px;
  background-color: #01AF9C;
  border-radius: 10px;
  color: #FEFDFC;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.panel-body .msj-you {
  max-width: 70%;
  margin-right: auto;
  margin-left: 10px;
  padding: 10px;
  background-color: #232D36;
  border-radius: 10px;
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
.panel-body::-webkit-scrollbar {
  width: 8px; /* Ancho de la barra */
  background-color: #0C1D25; /* Color de fondo de la barra */
}

.panel-body::-webkit-scrollbar-thumb {
  background-color: #01AF9C; /* Color de la barra en sí */
  border-radius: 10px; /* Borde redondeado */
}

.panel-body::-webkit-scrollbar-thumb:hover {
  background-color: #01896B; /* Color de la barra en sí al pasar el cursor sobre ella */
}
</style>
