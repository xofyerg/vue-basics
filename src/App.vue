<template>
  <div class="app">
    <h4 class="app__title">Post creation</h4>
    <div class="app__btns">
      <my-button @click="showDialog">Create posts</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible" @hide="hideDialog">
      <post-form @create="createPost" v-model:show="dialogVisible" />
    </my-dialog>

    <post-list :posts="posts" @remove="removePost" v-if="!isPostsLoading" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "by title" },
        { value: "body", name: "by body" },
        { value: "id", name: "by id" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    hideDialog() {
      this.dialogVisible = false;
    },
    async fetchPosts() {
      this.isPostsLoading = true;
      this.posts = await axios
        .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((res) => res.data)
        .catch((err) => err.data);
      this.isPostsLoading = false;
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

input,
textarea,
button {
  font-family: inherit;
}

body {
  font-family: "Source Serif Pro", serif;
}

.app {
  margin: 15px;
}

.app__title {
  font-size: 38px;
}

.app__btns {
  display: flex;
  justify-content: space-between;
  width: 30%;
}
</style>
