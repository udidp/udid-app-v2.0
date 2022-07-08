<script setup>
import MainContainer from "@/layouts/MainContainer.vue";
import SearchBox from "@/components/SearchBox.vue";
import DomainItem from "@/components/DomainItem.vue";
import Radio from "@/components/Radio.vue";
</script>

<template>
  <div id="favourites" class="pt-40 min-h-screen">
    <MainContainer class="space-y-12 mx-auto">
      <h1 class="text-6xl font-medium">My Favourites</h1>
      <SearchBox placeHolder="favorInputHolder" />
      <div class="f-r-b-c">
        <h3 class="text-xl font-bold">Sub Domain Search Results</h3>
        <div class="f-r-s-c space-x-3">
          <span class="text-xl font-normal">Select All</span>
          <Radio />
        </div>
      </div>
      <DomainItem><Radio /></DomainItem>
    </MainContainer>
  </div>
</template>
<style lang='less' scoped>
</style>