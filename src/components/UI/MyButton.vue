<template>
  <button class="my-btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style>
.my-btn {
  width: 150px;
  height: 40px;
  background: transparent;
  border: 1px solid #1698d9;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}
</style>
