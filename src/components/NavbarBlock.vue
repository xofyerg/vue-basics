<template>
  <div class="navbar">
    <div class="navbar__title">Vue BASICS</div>

    <div class="navbar__btns">
      <my-button class="navbar__btn" @click="$router.push('/')"
        >To Home</my-button
      >
      <my-button class="navbar__btn" @click="$router.push('/posts')"
        >To Posts</my-button
      >
      <my-button class="navbar__btn" @click="$router.push('/store')"
        >Store</my-button
      >
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {
    MyButton,
  },
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

.navbar__btn {
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: #fff;
  margin-left: 5px;
}
</style>
