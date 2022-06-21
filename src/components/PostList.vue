<template>
  <div class="list" v-if="posts.length > 0">
    <h4 class="list__title">Posts:</h4>

    <post-item
      :post="post"
      v-for="post in posts"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else>Post list is empty</h2>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.list__title {
  font-size: 30px;
}
</style>
