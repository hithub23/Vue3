<template>
  <button class="btn">
    <slot></slot> 
  </button>
</template>

<script>
  export default {
  name: 'my-button'    
  }
</script>

<style  scoped>
  .btn {
    padding: 10px 15px;
    background: none;
    border: 2px solid teal;
    color: teal;
    cursor: pointer;
    margin-left: 10px;
    }
  .btn:hover {
    content: '';
    border: 3px groove rgb(28, 201, 71);    
    color: rgb(24, 177, 204);
    }
    .toFlex {
    border: 2px solid teal;
    border-radius: 3px;
    padding: 10px 15px;
    /* background-color: #fff; */
    cursor: pointer;
  }
  .toFlex:hover {
    border: none;    
    padding: 10px 15px;
    background: linear-gradient(120deg, green 50%, transparent 50%), 
                linear-gradient(50deg, red 50%, transparent 50%), 
                linear-gradient(50deg, yellow 50%, transparent 50%), 
                linear-gradient(-50deg, rgb(199, 40, 67) 50%, transparent 50%);
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size: 16px 4px, 16px 4px, 4px 16px, 4px 16px;
    background-position: 0% 0%, 100% 100%, 0% 100%, 100% 0px;
    border-radius: 5px;
    animation: dash 2s linear infinite;
}

@keyframes dash {
    to {
        background-position: 100% 0%, 0% 100%, 0% 0%, 100% 100%;
    }
}
</style>