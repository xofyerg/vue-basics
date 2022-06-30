<template>
  <div class="post">
    <div class="post__body">
      <div>
        ID: <strong>{{ post.id }}</strong>
      </div>
      <div>
        Title: <strong>{{ post.title }}</strong>
      </div>
      <div>
        Info: <strong>{{ post.body }}</strong>
      </div>
    </div>
    <div class="post__btns">
      <my-button class="post__btn" @click="$router.push(`/posts/${post.id}`)"
        >Open</my-button
      >
      <my-button class="post__btn" @click="$emit('remove', post)">
        Delete
      </my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  components: {
    MyButton,
  },
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
  font-size: 18px;
}

.post__body {
  margin-bottom: 10px;
}

.post__btns {
  display: flex;
  gap: 5px;
}

.post__btn {
  font-size: 14px;
  display: block;
  width: 80px;
  height: 35px;
}
</style>
