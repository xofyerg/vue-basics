<template>
  <div class="post">
    <div>
      <div>
        Title: <strong>{{ post.title }}</strong>
      </div>
      <div>
        Info: <strong>{{ post.body }}</strong>
      </div>
    </div>
    <div class="post__buttons">
      <button class="post__delete-btn" @click="$emit('remove', post)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.post {
  padding: 15px;
  border: 2px solid #1698d9;
  border-radius: 5px;
  font-size: 24px;
}

.post__delete-btn {
  width: 80px;
  height: 26px;
  background: transparent;
  border: 1px solid #1698d9;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
}
</style>
