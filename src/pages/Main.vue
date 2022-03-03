<template>
  <div>
    <h1>Welcome to Vue 3</h1>
  </div>
  <my-button 
  @click="showDialog"
  >
  Click Here to see info
  </my-button>
</template>

<script>
import MyButton from '@/components/UI/MyButton'
  export default {
    components: {
      MyButton
    }
  }
</script>

<style scoped>
    .app {
    margin: 20px;
    font-size: 17px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



</style>