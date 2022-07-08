<script setup>
import { onBeforeMount } from "@vue/runtime-core";

import MainContainer from "@/layouts/MainContainer.vue";
const router = useRouter();
const route = useRoute();
const emits = defineEmits(["handleAfterSearch"]);
const props = defineProps({
  afterSearch: Boolean,
  placeHolder: String,
  inputWidth: String,
});

const inputValue = ref("");
const search = async () => {
  await router.push({
    name: "Domains",
    query: {
      q: inputValue.value,
    },
  });

  emits("handleAfterSearch", true);
};
const isRoute = ref(null);
onBeforeMount(() => {
  inputValue.value = route.query.q;

  isRoute.value = route.query.q;
});
</script>

<template>
  <div id="search-box" class="space-y-12">
    <div
      :class="['flex mx-auto', `w-${inputWidth}`]"
      style="
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(50px);
      "
    >
      <input
        :placeholder="$t(`p.${placeHolder}`)"
        style="-webkit-appearance: none"
        class="w-full border-0 bg-transparent pl-6 text-3xl outline-none"
        type="search"
        v-model="inputValue"
        name="query"
        @input="validate"
        autocomplete="off"
        @keyup.enter="search"
      />
      <button
        class="px-10 py-5 text-3xl"
        :class="{ btnDisabled, light }"
        type="submit"
        @click="search"
        style="border-radius: 20px"
      >
        {{ $t("p.search") }}
      </button>
    </div>
    <MainContainer v-if="isRoute" class="mx-auto space-y-12">
      <h3 class="text-xl font-bold">Root Domain Search Results</h3>
      <div
        style="background: rgba(255, 255, 255, 0.04); border-radius: 32px"
        class="p-6"
      >
        <div class="grid grid-cols-2 gap-10">
          <div
            class="
              col-span-2
              l:col-span-1
              relative
              border-2 border-white border-opacity-30
            "
            style="border-radius: 32px"
          >
            <span
              class="
                absolute
                top-1/2
                left-1/2
                transform
                -translate-x-1/2 -translate-y-1/2
                text-5xl
                font-bold
                z-20
              "
              >.{{ inputValue }}
            </span>
            <div
              class="
                absolute
                bottom-8
                left-1/2
                transform
                -translate-x-1/2
                font-bold
                z-20
                f-r-b-c
                w-9/12
              "
            >
              <div class="f-c-c-s text-xs">
                <span>2023.05.20 </span>
                <span>at 04:04(UTC+08:00)</span>
              </div>
              <div>
                <span class="text-4xl font-bold">30U</span>
                <span class="text-sm">/</span>
                <span class="text-4xl font-bold">Y</span>
              </div>
            </div>
            <img
              class="w-full"
              style="border-radius: 31px"
              src="@/views/domains/images/ball.gif"
              alt=""
            />
            <div
              id="card"
              style="border-radius: 32px"
              class="absolute top-0 left-0 z-10 w-full overflow-hidden"
            >
              <img
                class="w-full"
                src="@/views/domains/images/card.png"
                alt=""
              />
            </div>
          </div>
          <div
            class="col-span-2 l:col-span-1 f-c-c-s"
            style="font-family: PingFang SC-Medium, PingFang SC"
          >
            <h3 class="text-3xl tracking-wider">Why register a root domain</h3>
            <div class="mt-4 f-c-c-s space-y-3 text-xl">
              <div class="f-r-s-c space-x-2">
                <img src="@/views/domains/images/profits.svg" alt="" />
                <p class="opacity-60">Share Sub Domain sales profits</p>
              </div>
              <div class="f-r-s-c space-x-2">
                <img src="@/views/domains/images/identity.svg" alt="" />
                <p class="opacity-60">Can create a unique community identity</p>
              </div>
              <div class="f-r-s-c space-x-2">
                <img src="@/views/domains/images/price.svg" alt="" />
                <p class="opacity-60">Customize the price of the Sub Domain</p>
              </div>
            </div>
            <div class="mt-12 f-r-b-c w-full">
              <button class="py-2.5 rounded-lg px-12 text-lg">Register</button>
              <img
                class="cursor-pointer"
                src="@/views/domains/images/un-favor.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  </div>
</template>
<style lang='less' scoped>
input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.2);
}

#card {
  // background: linear-gradient(
  //   117.71deg,
  //   rgba(255, 255, 255, 0.91) -2.58%,
  //   rgba(255, 255, 255, 0) 101.85%
  // );
  background: rgba(0, 3, 0, 0.2);

  backdrop-filter: blur(25px);
}
</style>

  
  