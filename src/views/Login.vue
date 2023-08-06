<template>
    <div :class="modoNocturno ? 'container' : 'container2'">
        <LogoAndMenu />
        <div class="user-registration">
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="alias">Alias o Correo:</label>
                    <input v-model="alias" type="text">
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input v-model="contrasena" type="password">
                </div>
                <button @click="entrar" type="submit">Entrar</button>
            </form>
        </div>
    </div>
</template>
<script>
import LogoAndMenu from "../components/LogoAndMenu.vue";
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'Login',

    components: {
        LogoAndMenu,
    },

    setup() {
        const router = useRouter()
        const alias = ref('')
        const contrasena = ref('')

        const store = useStore();
        const modoNocturno = computed(() => store.state.modoNocturno);
        const usuarios = computed(() => store.state.usuarios);
        let estado = []
        onMounted(async () => {
            await store.dispatch('fetchUsuarios')
        })
        const entrar = () => {
            estado = usuarios.value.filter(val => { 
                return (
                   (val.value.alias === alias.value && val.value.contrasena === contrasena.value)||
                   (val.value.correo === alias.value && val.value.contrasena === contrasena.value)
                    
                    )})
            if(estado != ''){
               store.dispatch('setConexion')
               router.push('/');
            }


        }
        return {
            modoNocturno,
            entrar,
            alias,
            contrasena

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
    padding: 15px 10px;
    font-size: 22px;
    color: #3192c7;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.container {
    background-color: #0C1D25;
    height: 100vh;
}

.container2 {
    background-color: #fff;
    height: 100vh;
}

.container .user-registration {
    font-family: Arial, sans-serif;
    width: 80%;
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border-radius: 5px;
    background-color: #0C1D25;
    margin-top: 10%;
}

.container2 .user-registration {
    font-family: Arial, sans-serif;
    width: 80%;
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
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

.container2 input{
    width: 100%;
    padding: 10px;
    border: 1px solid #999;
    border-radius: 5px;
    background-color: transparent;
    color: #3192c7;
}
.container input{
    width: 100%;
    padding: 10px;
    border: 1px solid #999;
    border-radius: 5px;
    background-color: transparent;
    color: #999;
}

button {
    background-color: transparent;
    color: #3192c7;
    padding: 10px 20px;
    border: 1px solid #3192c7;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 14px;

}
</style>
  