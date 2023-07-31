<template>
  <div class="principal">
    <header>
      <router-link class="router" to="/">
            <h1>
                ch<font-awesome-icon id="icon" icon="comments" />tea
            </h1>
        </router-link>
      <SidebarMenu />
    </header>
    <div class="img">
      <p>
        ch<font-awesome-icon id="icon" icon="comments" />tea
      </p>
    </div>
    <!-- <div class="form-unirse">
      <label for="">Identifica tu chat</label>
      <input type="text" placeholder="Abre hilo, nombra un grupo, etc">
      <label for=""></label>
      <input type="text" placeholder="Contraseña opcional">
      <div>
        <button>
          Crear
        </button>
      </div>

    </div> -->
  </div>
</template>
<script>
import SidebarMenu from "../components/SidebarMenu.vue";
export default {
  name: 'crear',

  components: {
    SidebarMenu,
  },

  setup() {

    return {
    }
  }
}
</script>
  
<style scoped>
h1 {
  padding: 10px;
  font-size: 22px;
  color: #3192c7;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: start;
}
.form-unirse {
  background-color: transparent;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-radius: 10px;
  width: 80%;
  height: 130px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
}

.form-unirse div {
  display: flex;
  justify-content: space-around;
}

label {
  margin-top: 5px;
  font-size: 12px;
  color: #FEFDFC;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.form-unirse input {
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #999;
  outline-color: #f8fdff;
  background-color: transparent;
  color: #FEFDFC;

}

.form-unirse button {
  margin-top: 10px;
  padding: 5px;
  border-radius: 10px;
  background-color: transparent;
  color: #FEFDFC;
  font-size: 15px;
  border: 0;
  cursor: pointer;
}

.principal {
  background-color: #0C1D25;
  height: 100vh;
}

header {
  display: flex;
  justify-content: space-around;
}

.principal header .router {
  margin-top: 5px;
  font-size: 22px;
  color: #FEFDFC;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-decoration: none;
}

.principal .img {
  margin-top: 33%;

  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-decoration: none;
  text-align: center;
  display: flex;

}

.img p {
  margin: auto;
  font-size: 88px;
  color: #3192c7;
  /* background-color: #232D36; */


}
</style>
  
