<template>
  <div class="post-list">
    <h4 class="post-list__title">Posts:</h4>
    <post-item :post="post" v-for="post in posts" v-bind:key="post.id" />
  </div>
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
.post-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.post-list__title {
  font-size: 30px;
}
</style>
