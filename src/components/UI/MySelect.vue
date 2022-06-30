<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option disabled value="">Select from list</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped>
.select {
  border: 1px solid #1698d9;
  border-radius: 5px;
  font-size: 17px;
  padding: 0 10px;
}
</style>
