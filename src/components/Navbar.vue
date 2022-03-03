<template>
  <div class="navbar">
    <div @click="$router.push('/')" style="cursor: pointer">Vue 3</div>
    <div class="navbar__btn">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/store')" style="margin-left: 20px;">Store</my-button>
      <my-button @click="$router.push('/composition')" style="margin-left: 20px;">Composition</my-button>
      <my-button class="toFlex" @click="$router.push('/flexbox')" style="margin-left: 20px;">FlexBox</my-button>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .navbar {
    display: flex;
    background-color: darkgray;
    height: 50px;
    box-shadow: 2px 2px 4px gray;
    align-items: center;
    padding: 0 10px;
  }
  .navbar__btn {
    margin-left: auto;
}

</style>