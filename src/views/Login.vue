<template>
    <div class="container">
     <LogoAndMenu/>
        <div class="user-registration">
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="alias">Alias:</label>
                    <input type="text">
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input type="password" >
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    </div>
</template>
<script>
import LogoAndMenu from "../components/LogoAndMenu.vue";

export default {
  name: 'Login',

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
  padding: 15px 10px;
  font-size: 22px;
  color: #3192c7;
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
  