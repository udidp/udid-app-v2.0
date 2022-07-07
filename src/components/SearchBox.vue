<script setup>
import { onBeforeMount } from "@vue/runtime-core";

const router = useRouter();
const route = useRoute();
const emits = defineEmits(["handleAfterSearch"]);
const props = defineProps({
  afterSearch: Boolean,
});

const inputValue = ref("");
const search = () => {
  router.push({
    name: "Domains",
    query: {
      q: inputValue.value,
    },
  });
  emits("handleAfterSearch", true);
};
const isRoute = ref(null);
onBeforeMount(() => {
  console.log(route.query);
  inputValue.value = route.query.q;
  isRoute.value = true;
});
</script>

<template>
  <div id="search-box">
    <div
      class="flex"
      style="
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(50px);
      "
    >
      <input
        :placeholder="$t('p.inputHolder')"
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
  </div>
</template>
<style lang='less' scoped>
input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.2);
}
</style>

  
  