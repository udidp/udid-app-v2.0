<script setup>
const isChecked = ref(false);
const changeChecked = () => {
  isChecked.value = !isChecked.value;
};
</script>

<template>
  <div
    @click="changeChecked"
    class="
      cursor-pointer
      w-6
      h-6
      border-4 border-primary
      rounded-md
      f-r-c-c
      p-px
    "
  >
    <div v-show="isChecked" class="w-3 h-3 bg-primary rounded-sm"></div>
  </div>
</template>
<style lang='less' scoped>
</style>