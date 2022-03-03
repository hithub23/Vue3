<template>
  <div>
  <button class="pageClick"><router-link to='/other' target="_blank" class="pageClick__link"> Click here to see other page </router-link></button>
    <h1>Huge someone </h1>
    <div class="fuck">
      <div class="container">
        <div class="fuck__pussy">
          <div class="fuck__lyrics">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptatum?</p>
          </div>
          <div class="fuck__menu">
            <ul>
              <li class="fuck__active">Menu</li>
              <li><a class="Router__link" to="/composition">Composition</a></li>
              <li><a class="Router__link" to="/Time">Time</a></li>
              <li><a class="Router__link" to="/Link">Link</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang = "scss">
@import '@/styles/AboutPage.scss';

</style>