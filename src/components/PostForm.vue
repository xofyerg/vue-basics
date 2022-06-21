<template>
  <form class="post-form" @submit.prevent>
    <h4 class="post-form__title">Post creation</h4>
    <input
      class="post-form__input"
      v-model="post.title"
      type="text"
      placeholder="Title"
    />
    <input
      class="post-form__input"
      v-model="post.body"
      type="text"
      placeholder="Info"
    />
    <button class="post-form__btn" @click="createPost">Create post</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
.post-form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 45px;
}

.post-form__title {
  font-size: 38px;
}

.post-form__input {
  width: 100%;
  height: 40px;
  padding-left: 8px;
  font-size: 16px;
  border: 1px solid #1698d9;
  border-radius: 5px;
}

.post-form__btn {
  width: 150px;
  height: 40px;
  background: transparent;
  border: 1px solid #1698d9;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}
</style>
