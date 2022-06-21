<template>
  <div class="app">
    <post-form @create="createPost" />
    <post-list :posts="posts" />
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
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    deletePost(postId) {
      this.posts = this.posts.filter((item) => item !== postId);
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
</style>
