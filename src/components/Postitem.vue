<template>
  <div class="post">
    <div>
      <div >{{ post.id }}</div>
      <div><strong>Name:</strong> {{ post.title }} </div>
      <div> <strong> Description:</strong> {{ post.body }} </div>
    </div>
     <div class="post__btns">
       <my-button style="margin-right: 5px"
         @click="$router.push(`/posts/${post.id}`)"
          >
          Open
       </my-button>

       <my-button
       @click="$emit('remove', post)"
       >
       Delete</my-button>
     </div>
  </div>
</template>

<script>
  export default {   
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style  scoped>
 .post {
    border: 2px solid teal;
    padding: 20px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn-Del {
    cursor: pointer;
    padding: 10px 15px;
    background: none;
    border: 1px solid teal;
    color: teal;
  }
  .post__btns {
    display: flex;
  }
</style>