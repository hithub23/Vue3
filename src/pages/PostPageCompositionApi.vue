<template>
  <div >
    <h1>Page with Posts</h1>
    <my-input
      v-model="searchQuery"
      placeholder='Search'
      v-focus
    />
    <div class="app__btns">
      <my-button
      @click="showDialog"
      >      
      Create a post
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>    
    <my-dialog v-model:show="dialogVisible">
      <post-form
        @create="createPosts"
      />
    </my-dialog>
    <post-list 
      :posts="sortedAndSearchPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div class="load"  v-else>Loading... <span class="spinner"><img src="https://www.vkf-renzel.com/out/pictures/generated/product/1/650_650_75/r4014142-01i/fidget-spinner-in-bright-colours-13953-1.jpg" alt=""></span></div>      
    
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import MyButton from "@/components/UI/MyButton"
import axios from 'axios'
import MySelect from '@/components/UI/MySelect'
import MyInput from '@/components/UI/MyInput'
import { ref } from 'vue'
import {usePosts} from '@/hooks/usePosts'
import useSortedPosts from '@/hooks/useSortedPosts'
import useSortedAndSearchPosts from '@/hooks/useSortedAndSearchPosts'

  export default {
    components: {
        MyInput,
        MySelect,
        MyButton,
        PostList, PostForm
    },
    data() {
      return {
        dialogVisible: false,
        sortOptions: [
          {value:'title', name:'With Title'},
          {value:'body', name:'With Description'},
        ]        
      } 
    },
    methods: {
      createPosts(post) {
        this.posts.push(post)
        this.dialogVisible = false
      },
      showDialog() {
        this.dialogVisible = true
      },
      removePost(post) {
        this.posts = this.posts.filter(e => e.id !== post.id)
      }
    },
    setup(props) {
      const {posts, totalPages, isPostLoading} = usePosts(10)
      const {sortedPosts, selectedSort} = useSortedPosts(posts)
      const {searchQuery, sortedAndSearchPosts} = useSortedAndSearchPosts(sortedPosts)
      console.log(selectedSort)

      return {
        posts,
        totalPages,
        isPostLoading,
        sortedPosts,
        selectedSort,
        searchQuery,
        sortedAndSearchPosts
      }
    }
  }
</script>

<style>
 
  .load {
    margin-top: 10px;
    display: flex;
  }
  .spinner {
    height: 30px;
    width: 30px;
    animation: spin 0.5s linear infinite;
  }
  .spinner img {
    width: 20px;
    height: 20px;
  }
  @keyframes spin {
    to {transform: rotate(360deg);}
  }
  .app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
  }
  
  .page__wrapper {
    display: flex;
    margin-top: 15px;
  }
  .page { 
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;
  }

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background-color: aqua;
}
</style>