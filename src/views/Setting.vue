<template>
    <div class="container">
        <router-link class="router" to="/">
            <h1>
                ch<font-awesome-icon id="icon" icon="comments" />tea
            </h1>
        </router-link>
        <div class="user-registration">
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="email">Correo Electrónico:</label>
                    <input type="email" id="email" v-model="user.email" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" v-model="user.password" required>
                </div>
                <div class="form-group">
                    <label for="alias">Alias:</label>
                    <input type="text" id="alias" v-model="user.alias" required>
                </div>
                <div class="form-group">
                    <label for="photo">Foto de Perfil:</label>
                    <input type="file" id="photo" @change="handlePhotoChange" accept="image/*" required>
                </div>
                <button type="submit">Actualizar Datos</button>
            </form>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            user: {
                email: '',
                password: '',
                alias: '',
                photo: null
            }
        };
    },
    methods: {
        handlePhotoChange(event) {
            const file = event.target.files[0];
            this.user.photo = file;
        },
        submitForm() {
            console.log("Datos de usuario actualizados:", this.user);
            // Puedes enviar this.user al servidor usando una solicitud HTTP para actualizar los datos del usuario.
            // Por ejemplo, usando axios:
            // axios.put('/api/actualizar-usuario', this.user).then(response => {
            //     console.log('Datos de usuario actualizados exitosamente');
            // }).catch(error => {
            //     console.error('Error al actualizar los datos del usuario:', error);
            // });
        }
    },
    mounted() {
        // Supongamos que has obtenido los datos existentes del usuario desde el servidor y los has almacenado en el objeto existingUser.
        // Puedes entonces llenar los campos del formulario con los datos existentes del usuario.
        const existingUser = {
            email: 'usuarioexistente@example.com',
            password: 'contraseñaexistente',
            alias: 'aliasexistente',
            photo: null, // Si el usuario ya tiene una foto de perfil, puedes establecerla aquí.
        };
        this.user = { ...existingUser };
    }
};
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
    border: 1px solid #ccc;
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
    font-weight: bold;
    color: #FEFDFC;
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
    background-color: #074b6f;
    color: #FEFDFC;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

}
</style>
  
