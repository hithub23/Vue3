<template>
  <form @submit.prevent>
    <h4>Create your post</h4>
    <my-input 
    v-focus
    v-model="post.title"
    type="text" 
    placeholder="Write a title"
    />
    <my-input 
    v-model="post.body"
    type="text" 
    placeholder="Write a description"
    />
    <my-button
    style="align-self: flex-end; margin-top: 15px;"
    @click="createPosts"
    >
      Create
    </my-button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      createPosts() {
        this.post.id = Date.now();
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
    },
  }
</script>

<style  scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>