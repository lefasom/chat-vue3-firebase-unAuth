<template>
  <div class="principal">
    <header>
      <router-link class="router" to="/">Unirse</router-link>
      <router-link class="router" to="/Chat">Anfitrión</router-link>
    </header>
    <div class="img">
     <p>
       ch<font-awesome-icon id="icon" icon="comments" />tea
     </p>
    </div>
  </div>
</template>

<style scoped>
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
.img p{
  margin: auto;
  font-size: 88px;
  color: #074b6f;
  /* background-color: #232D36; */


}
</style>
  
<script>
</script>
  