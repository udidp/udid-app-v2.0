<script setup>
import { reactive } from "@vue/reactivity";

const props = defineProps({
  configShow: Object,
  dialogShow: Object,
});

const emits = defineEmits(["configDialogOff"]);
const configDialogOff = () => {
  emits("configDialogOff");
};
</script>

<template>
  <div
    @click="configDialogOff()"
    id="regis-config"
    class="
      w-screen
      h-screen
      fixed
      top-0
      bg-black
      z-50
      bg-opacity-80
      f-c-s-c
      pt-44
      2xl:pt-52
      invisible
      opacity-0
      transition-all
      duration-300
      ease-in-out
    "
    :style="dialogShow"
  >
    <div
      @Click="$event.cancelBubble = true"
      class="
        relative
        transform
        -translate-y-4
        transition-all
        duration-300
        ease-in-out
        w-1/4
      "
      :style="configShow"
    >
      <div
        class="f-r-b-c py-5 px-7 border-b border-white border-opacity-10"
        style="background: #1c1c1c; border-radius: 12px 12px 0px 0px"
      >
        <h2 class="text-2xl text-primary font-bold">666.abc</h2>
        <span class="text-base font-normal opacity-60">Sub Domain</span>
      </div>
      <div class="py-4 px-7 space-y-6" style="background: #1c1c1c">
        <div class="f-r-s-c space-x-9">
          <span class="text-lg font-medium opacity-70">Years:</span>
          <el-input-number v-model="num1" size="large" />
        </div>
        <div class="f-r-s-c space-x-9">
          <span class="text-lg font-medium opacity-70">Price:</span>
        </div>
        <div class="f-r-s-c text-base font-normal opacity-60">
          Root Domain:.fff,EXP:
        </div>
      </div>
      <div
        style="background: #1c1c1c; border-radius: 0px 0px 12px 12px"
        class="mt-3 pl-7 f-r-b-c overflow-hidden"
      >
        <div class="f-r-s-e space-x-5">
          <span class="text-base">Total:</span>
          <div class="f-r-s-e space-x-1">
            <span class="text-5xl text-primary font-normal -mb-1">4</span>
            <div>ETH</div>
            <span>≈4 USDT</span>
          </div>
        </div>
        <button class="px-7 py-6 text-2xl">Register</button>
      </div>
      <img
        @click="configDialogOff()"
        class="absolute top-0 right-0 transform translate-x-full cursor-pointer"
        src="@/assets/images/dialog-close.svg"
        alt=""
      />
    </div>
  </div>
</template>
<style lang='less' scoped>
/deep/ .el-input__wrapper {
  background: transparent;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.09) inset;
}
/deep/ .el-input-number__decrease,
/deep/ .el-input-number__increase {
  background: #404040;
  color: #fff;
}

/deep/ .el-input-number__decrease {
  border-right: none;
}

/deep/ .el-input-number__increase {
  border-left: none;
}

/deep/ .el-input__inner {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}
/deep/.el-input--large {
  border: none;
}
</style>