<template>
  <div v-if="posts.length > 0">
    <h4 class="list__title">Posts:</h4>

    <div class="list-item">
      <transition-group name="post-list"
        ><post-item
          :post="post"
          v-for="post in posts"
          :key="post.id"
          @remove="$emit('remove', post)"
      /></transition-group>
    </div>
  </div>
  <h3 class="list__empty" v-else>Post list is empty</h3>
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
.list-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.list__title {
  font-size: 30px;
  margin-top: 45px;
  margin-bottom: 5px;
}

.list__empty {
  margin-top: 25px;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
