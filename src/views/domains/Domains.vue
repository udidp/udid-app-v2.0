<script setup>
import SearchBox from "@/components/SearchBox.vue";
import MainContainer from "@/layouts/MainContainer.vue";
import DomainItem from "@/components/DomainItem.vue";
import Radio from "@/components/Radio.vue";
const route = useRoute();
const afterSearch = ref(false);
const handleAfterSearch = (value) => {
  afterSearch.value = value;
};

const listAmount = ref(10);
const moreOrLess = ref("more");
const changeList = () => {
  listAmount.value == 20
    ? ((listAmount.value = 10), (moreOrLess.value = "more"))
    : ((listAmount.value = 20), (moreOrLess.value = "less"));
};
const isRoute = ref(null);
onBeforeMount(() => {
  isRoute.value = route.query.q;
});

console.log("1/2");
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
      placeHolder="searchInputHolder"
      @handleAfterSearch="handleAfterSearch"
      class="w-3/5 z-10"
    />
  </div>
  <div v-else id="domains" class="pt-40">
    <SearchBox class="mx-auto" placeHolder="searchInputHolder" />
    <MainContainer class="mt-16 mb-20 space-y-12 mx-auto">
      <div class="f-r-b-c">
        <h3 class="text-xl font-bold">Sub Domain Search Results</h3>
        <div class="f-r-s-c space-x-3">
          <span class="text-xl font-normal">Available</span>
          <Radio />
        </div>
      </div>
      <div class="f-c-s-c space-y-5">
        <template v-for="item of listAmount" :key="item">
          <DomainItem></DomainItem>
        </template>
        <p
          @click="changeList"
          class="w-full text-3xl py-5 text-center font-normal cursor-pointer"
          style="
            background: linear-gradient(0deg, #181818, #181818);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
            border-radius: 20px;
          "
        >
          {{ moreOrLess }}
        </p>
      </div>
    </MainContainer>
  </div>
</template>
<style lang='less' scoped>
</style>