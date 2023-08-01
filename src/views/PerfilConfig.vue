<template>
    <div class="container">
        <LogoAndMenu />
        <div class="user-registration">
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="customImageInput" id="customImageLabel">
                        <font-awesome-icon class="img1" icon="camera" />
                        <img src="../assets/messi-perfil.jpg" class="img2"  alt="Imagen Personalizada">
                    </label>
                    <input type="file" id="customImageInput" style="display: none;">
                </div>
              
                
                
                <div class="form-group">
                    <label for="">Correo Electronico</label>
                    <input type="email" id="email" placeholder="Correo Electronico">
                </div>
                <div class="form-group">
                    <label for="">Contraseña</label>
                    <input type="password" id="password" placeholder="Contraseña">
                </div>
                <div class="form-group">
                    <label for="">Alias</label>
                    <input type="text" id="alias" placeholder="Alias">
                </div>

                <button type="submit">Actualizar Datos</button>
            </form>
        </div>
    </div>
</template>
  
<script>
import LogoAndMenu from '../components/LogoAndMenu.vue';
export default {
    name: 'PerfilConfig',

    components: {
        LogoAndMenu,
    },

    setup() {

        return {
        }
    }
}
</script>
  
<style scoped>
.router {
    text-decoration: none;
    color: #FEFDFC;
}


h1 {
    padding: 10px;
    font-size: 22px;
    color: #074b6f;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.container {
    background-color: #0C1D25;
    height: 100vh;
}

.user-registration {
    font-family: Arial, sans-serif;
    width: 80%;
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border-radius: 5px;
    background-color: #0C1D25;
    margin-top: 10%;
}

h2 {
    color: #FEFDFC;
}

.form-group {
    margin: 15px;
}

label {
    display: block;
    font-size: 15px;
    margin: 5px 0;
    color: #3192c7;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: start;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="file"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #999;
    border-radius: 5px;
    background-color: transparent;
    color: #FEFDFC;
}

button {
    background-color: transparent;
    color: #3192c7;
    padding: 10px 20px;
    border: 1px solid #3192c7;
    border-radius: 5px;
    cursor: pointer;
    margin:0 14px;

}

#customImageLabel {
    /* Estilo para el contenedor de la imagen personalizada */
    cursor: pointer;
    /* Asegúrate de establecer el tamaño adecuado para la imagen personalizada */
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 2px solid #ccc;
    display: inline-block;
}

#customImageLabel .img1 {
    /* Asegúrate de que la imagen personalizada se ajuste correctamente al contenedor */
   
    object-fit: cover;
    position: relative;
    bottom: -69%;
    right: -73%;
    border-radius: 100%;
    z-index: 999;
    background-color: #074b6f;
    font-size: 16px;
    padding: 7px;

}
#customImageLabel .img2 {
    /* Asegúrate de que la imagen personalizada se ajuste correctamente al contenedor */
    width: 100%;
    height: 100%;
    object-fit: cover;
  border-radius: 100%;
  position: relative;
  top: -32px;
  z-index: 9;

}
</style>
  
