<template>
  <navbar-block />

  <div class="app">
    <router-view />
  </div>
</template>

<script>
import NavbarBlock from "@/components/NavbarBlock";
export default {
  components: {
    NavbarBlock,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

input,
textarea,
button {
  font-family: inherit;
}

body {
  font-family: "Source Serif Pro", serif;
}

.app {
  margin: 15px;
}
</style>
