<template>
<div v-if="posts.length > 0">
  <h3>Post's list</h3>
  <transition-group name="post-list">
    <postitem 
      v-for="post in posts" 
      :post="post"  
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </transition-group>  
</div>
<h2 v-else style="color: red">
  List of Post is empty
</h2>
      
</template>

<script>
import Postitem from '@/components/Postitem.vue'
  export default {
  components: { Postitem },
    props: {
      posts: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.32s ease-out;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.post-list-move {
  transition: all 0.3s ease-in;
}


</style>