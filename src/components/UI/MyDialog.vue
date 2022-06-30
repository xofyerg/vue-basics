<template>
  <div class="my-dialog" v-if="show" @click.stop="hideDialog">
    <div class="my-dialog__content" @click.stop>
      <slot />
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "my-dialog",
  mixins: [toggleMixin],
};
</script>

<style scoped>
.my-dialog {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}

.my-dialog__content {
  padding: 20px 25px;
  border-radius: 5px;
  background: #ffffff;
  margin: auto;
  min-width: 600px;
}
</style>
