<script setup>
import SearchBox from "@/components/SearchBox.vue";
import MainContainer from "@/layouts/MainContainer.vue";

const route = useRoute();
const afterSearch = ref(false);
const handleAfterSearch = (value) => {
  afterSearch.value = value;
};
const isRoute = ref(null);
onBeforeMount(() => {
  isRoute.value = route.query.q;
  console.log(isRoute.value, Boolean(isRoute.value));
});
</script>

<template>
  <div
    v-if="!afterSearch && !isRoute"
    id="home"
    class="
      min-h-screen
      pt-28
      flex flex-col
      justify-start
      items-center
      space-y-10
      relative
    "
  >
    <video
      class="
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
        z-0
      "
      muted="muted"
      autoplay="autoplay"
      loop="loop"
      preload="preload"
      src="@/views/home/images/bg.mp4"
    />
    <div class="mx-auto w-40 l:w-64 2xl:w-72 opacity-50 relative">
      <div class="relative" style="padding-top: 100%">
        <img
          class="absolute top-0 right-0 w-full"
          src="@/views/home/images/app-logo.gif"
          alt=""
        />
      </div>
    </div>
    <SearchBox
      :afterSearch="afterSearch"
      @handleAfterSearch="handleAfterSearch"
      class="w-3/5 z-10"
    />
  </div>
  <div v-else id="domains" class="pt-40">
    <SearchBox class="w-1/2 mx-auto" />
    <MainContainer class="mt-16 space-y-12 mx-auto">
      <h3 class="text-xl font-bold">Root Domain Search Results</h3>
      <div
        style="background: rgba(255, 255, 255, 0.04); border-radius: 32px"
        class="p-6"
      >
        <div class="grid grid-cols-2 gap-10">
          <div
            class="
              col-span-2
              xl:col-span-1
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
              >.{{ $route.query.q }}
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
            class="col-span-2 xl:col-span-1 f-c-c-s"
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
            <div class="mt-12 f-r-b-c">
              <button class="py-2.5 rounded-lg px-12 text-lg mr-56">
                Register
              </button>
              <img
                class="cursor-pointer"
                src="@/views/domains/images/un-favor.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="f-r-b-c">
        <h3 class="text-xl font-bold">Sub Domain Search Results</h3>
        <div class="f-r-s-c space-x-3">
          <span class="text-xl font-normal">Available</span>
          <div class="w-6 h-6 border-4 border-primary rounded-md f-r-c-c p-px">
            <div class="w-3 h-3 bg-primary rounded-sm"></div>
          </div>
        </div>
      </div>
      <div class="f-c-s-c space-y-5">
        <template v-for="item of 10" :key="item">
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
            </div>
          </div>
        </template>
      </div>
    </MainContainer>
  </div>
</template>
<style lang='less' scoped>
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