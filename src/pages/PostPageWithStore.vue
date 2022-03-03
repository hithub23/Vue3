<template>
  <div >
    <h1>Page with Posts</h1>
    <my-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
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
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
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
      <div v-intersection="loadMorePosts" class="observer"></div>
      <div class="page__wrapper">
        <div 
          v-for="pageNumber in totalPages" 
          :key="pageNumber"
          class="page"
          :class= "{
            'current-page': page == pageNumber
          }"
          @click="changePage(pageNumber)"
          > 
          {{ pageNumber }}
        </div>
      </div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import axios from 'axios'
import MySelect from '@/components/UI/MySelect'
import MyInput from '@/components/UI/MyInput'
import MyButton from '../components/UI/MyButton'
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';

  export default {
    components: {
        MyInput,
        MySelect,
        PostList, PostForm,
        MyButton
    },
    data() {
      return {
        dialogVisible: false,    
      } 
    },
    methods: {
      ...mapMutations({
        setPage: 'post/setPage',
        setSearchQuery: 'post/setSearchQuery',
        setSelectedSort: 'post/setSelectedSort'
      }),
      ...mapActions({
        loadMorePosts: 'post/loadMorePosts',
        fetchPosts: 'post/fetchPosts'
      }),
      createPosts(post) {
        this.posts.push(post)
        this.dialogVisible = false
      },
      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
      },
      showDialog() {
        this.dialogVisible = true
      },
    },
    mounted() {
      this.fetchPosts();
    },
    computed: {
      ...mapState({
        posts: state => state.post.posts,
        isPostLoading: state => state.post.isPostLoading,
        selectedSort: state => state.post.selectedSort,
        searchQuery: state => state.post.searchQuery,
        page: state => state.post.page,
        limit: state => state.post.limit,
        totalPages: state => state.post.totalPages,
        sortOptions: state => state.post.sortOptions 
      }),
      ...mapGetters({
        sortedPosts: 'post/sortedPosts',
        sortedAndSearchPosts: 'post/sortedAndSearchPosts'
      })
    }
  }
</script>

<style >
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