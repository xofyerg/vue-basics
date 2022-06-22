<template>
  <div class="app">
    <h4 class="app__title">Post creation</h4>
    <my-button @click="showDialog">Create posts:</my-button>

    <my-dialog v-model:show="dialogVisible" @hide="hideDialog">
      <post-form @create="createPost" v-model:show="dialogVisible" />
    </my-dialog>

    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Javascript", body: "Some info about JS" },
        { id: 2, title: "Capybara", body: "I love capybara" },
        { id: 3, title: "Vue", body: "What kind of animal is this Vue?" },
      ],
      dialogVisible: false,
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
</style>
