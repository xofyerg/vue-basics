<template>
  <div class="navbar">
    <div class="navbar__title">Vue BASICS</div>

    <div class="navbar__btns">
      <my-button @click="$router.push('/')">To Home</my-button>
      <my-button @click="$router.push('/posts')">To Posts</my-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.navbar {
  background-color: #1698d9;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
}

.navbar__title {
  color: #fff;
  font-size: 28px;
}
</style>
