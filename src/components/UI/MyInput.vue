<template>
  <input
    class="my-input"
    :value="modelValue"
    @input="updateInput"
    type="text"
  />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style>
.my-input {
  width: 100%;
  height: 40px;
  padding-left: 8px;
  font-size: 16px;
  border: 1px solid #1698d9;
  border-radius: 5px;
}
</style>
