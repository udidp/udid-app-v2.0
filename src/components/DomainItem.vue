<script setup>
</script>

<template>
  <div
    style="background: rgba(255, 255, 255, 0.04); border-radius: 20px"
    class="f-r-b-c py-5 p-8 w-full"
  >
    <div class="f-r-c-c space-x-4">
      <img src="@/views/domains/images/favor.svg" alt="" />
      <span class="text-4xl font-bold">625.satoshi</span>
      <div class="f-r-c-c space-x-1">
        <div class="w-1 h-1 bg-primary rounded-full"></div>
        <span class="text-sm text-primary">Available</span>
      </div>
    </div>
    <div class="f-r-c-c space-x-4">
      <div class="f-r-c-c space-x-2">
        <img src="@/views/domains/images/usdt.svg" alt="" />
        <span class="text-3xl font-normal">10.00</span>
      </div>
      <button class="py-2 px-3 rounded-md text-lg">Register</button>
      <slot />
    </div>
  </div>
</template>
<style lang='less' scoped>
</style>