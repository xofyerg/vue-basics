<template>
  <form class="form" @submit.prevent>
    <h4 class="form__title">Post creation</h4>
    <my-input v-model="post.title" type="text" placeholder="Title" />
    <my-input v-model="post.body" type="text" placeholder="Info" />
    <div class="form__buttons">
      <my-button @click="createPost">Create post</my-button>
      <my-button @click="hideDialog">Back</my-button>
    </div>
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
      this.$emit("create", this.post);
      this.post.id = Date.now();
      this.post = {
        title: "",
        body: "",
      };
    },
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__title {
  font-size: 38px;
}

.form__buttons {
  display: flex;
  gap: 8px;
}
</style>
