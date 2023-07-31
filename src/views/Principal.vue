<template>
  <div class="principal">
  <LogoAndMenu />
    <div class="img">
      <p>
        ch<font-awesome-icon id="icon" icon="comments" />tea
      </p>
    </div>
   
  </div>
</template>
<script>
import LogoAndMenu from "../components/LogoAndMenu.vue";

export default {
  name: 'crear',

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

h1 {
  padding: 10px;
  font-size: 22px;
  color: #3192c7;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: start;
}


.principal {
  background-color: #0C1D25;
  height: 100vh;
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
  
