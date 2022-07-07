<script setup>
import SearchBox from "@/components/SearchBox.vue";
import MainContainer from "@/layouts/MainContainer.vue";
</script>

<template>
  <div id="domains" class="pt-40">
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
              >.satoshi
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

            <!-- <svg
              width="100%"
              height="auto"
              viewBox="0 0 560 331"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g id="Frame 8491">
                <g id="Rectangle 15771242" filter="url(#filter0_b_4878_39685)">
                  <rect
                    x="1.44531"
                    y="1.44507"
                    width="557.11"
                    height="328.052"
                    rx="31.071"
                    fill="url(#paint0_linear_4878_39685)"
                    fill-opacity="0.5"
                  />
                  <rect
                    x="0.722732"
                    y="0.722488"
                    width="558.555"
                    height="329.497"
                    rx="31.7935"
                    stroke="url(#paint1_linear_4878_39685)"
                    stroke-width="1.44516"
                  />
                </g>
                <g id="Frame 8031" opacity="0.4">
                  <g id="Frame" clip-path="url(#clip0_4878_39685)">
                    <path
                      id="Vector"
                      d="M397.077 44.0771V53.5932L390.193 55.7305L397.077 44.0771ZM397.077 44.0771V53.5932L403.96 55.7305L397.077 44.0771ZM397.077 67.145V60.5121L390.193 56.7239L397.077 67.145ZM397.077 67.145V60.5121L403.96 56.7239L397.077 67.145Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M390.193 55.7508L397.077 52.5522V59.1262L390.193 55.7508ZM403.96 55.7508L397.077 52.5522V59.1262L403.96 55.7508Z"
                      fill="white"
                    />
                  </g>
                  <g id="Frame_2" clip-path="url(#clip1_4878_39685)">
                    <path
                      id="Vector_3"
                      d="M433.4 60.4791L430.43 63.6669C430.365 63.7363 430.286 63.7919 430.198 63.8303C430.113 63.8692 430.02 63.8879 429.926 63.8848H415.867C415.799 63.8878 415.732 63.8687 415.676 63.8303C415.625 63.7905 415.583 63.7392 415.554 63.6805C415.525 63.6214 415.515 63.5546 415.527 63.4898C415.54 63.4252 415.568 63.3645 415.608 63.3127L418.578 60.1249C418.644 60.0555 418.722 59.9999 418.81 59.9615C418.895 59.9226 418.988 59.9039 419.082 59.907H433.155C433.222 59.904 433.289 59.9231 433.345 59.9615C433.397 60.0013 433.439 60.0526 433.468 60.1113C433.497 60.1718 433.507 60.2402 433.494 60.3064C433.482 60.3726 433.449 60.4332 433.4 60.4791V60.4791ZM430.43 54.0627C430.365 53.9933 430.286 53.9377 430.198 53.8993C430.113 53.8604 430.02 53.8418 429.926 53.8448H415.867C415.799 53.8418 415.732 53.8609 415.676 53.8993C415.625 53.9392 415.583 53.9904 415.554 54.0491C415.525 54.1083 415.515 54.175 415.527 54.2398C415.54 54.3044 415.568 54.3651 415.608 54.4169L418.578 57.6047C418.644 57.6741 418.722 57.7297 418.81 57.7682C418.895 57.807 418.988 57.8257 419.082 57.8227H433.155C433.222 57.8256 433.289 57.8065 433.345 57.7682C433.397 57.7283 433.439 57.677 433.468 57.6183C433.496 57.5589 433.505 57.4925 433.495 57.4276C433.482 57.363 433.454 57.3023 433.413 57.2505L430.43 54.0627ZM415.867 51.7741H429.926C430.02 51.7771 430.113 51.7585 430.198 51.7196C430.284 51.6778 430.362 51.6226 430.43 51.5561L433.4 48.3684C433.446 48.3199 433.475 48.2577 433.482 48.1913C433.494 48.1264 433.484 48.0594 433.454 48.0006C433.429 47.9395 433.387 47.8874 433.332 47.8507C433.276 47.8124 433.209 47.7932 433.141 47.7962H419.082C418.988 47.7932 418.895 47.8118 418.81 47.8507C418.724 47.8926 418.646 47.9477 418.578 48.0142L415.608 51.2019C415.562 51.2504 415.534 51.3126 415.527 51.379C415.514 51.4439 415.524 51.5109 415.554 51.5697C415.579 51.6308 415.622 51.6829 415.676 51.7196C415.735 51.7519 415.8 51.7705 415.867 51.7741V51.7741Z"
                      fill="white"
                    />
                  </g>
                  <g id="Frame_3" clip-path="url(#clip2_4878_39685)">
                    <path
                      id="Vector_4"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M458.595 51.5122L451.792 57.9533C451.706 57.7878 451.628 57.618 451.56 57.4445C451.321 56.8532 451.197 56.2216 451.196 55.5838C451.193 54.3228 451.678 53.1095 452.548 52.1968C452.981 51.7556 453.501 51.4091 454.074 51.1793C454.692 50.9245 455.354 50.796 456.022 50.8013C456.697 50.7937 457.365 50.9274 457.985 51.1938C458.194 51.2884 458.398 51.3947 458.595 51.5122V51.5122ZM457.985 60.0306C457.367 60.2853 456.705 60.4138 456.037 60.4085C455.362 60.4162 454.694 60.2825 454.074 60.016C453.86 59.9212 453.652 59.8144 453.449 59.6962L460.252 53.2565C460.339 53.422 460.416 53.5918 460.485 53.7653C460.724 54.3566 460.847 54.9883 460.848 55.626C460.851 56.887 460.367 58.1004 459.497 59.013C459.072 59.4571 458.556 59.8042 457.985 60.0306ZM459.017 62.0366C459.895 61.6862 460.699 61.1733 461.386 60.5248C462.045 59.8923 462.574 59.1367 462.942 58.3007C463.306 57.4459 463.494 56.5262 463.494 55.5969C463.494 54.6676 463.306 53.7479 462.942 52.8931C462.733 52.397 462.465 51.9283 462.142 51.4976L466.576 47.3111L464.817 45.6394L460.369 49.8405C459.961 49.5746 459.528 49.3506 459.075 49.1718C458.111 48.7966 457.085 48.6091 456.051 48.6194C455.016 48.6067 453.988 48.7994 453.028 49.1863C452.15 49.5367 451.346 50.0496 450.658 50.6981C449.999 51.3306 449.471 52.0863 449.103 52.9222C448.735 53.7759 448.547 54.6963 448.55 55.626C448.55 56.5554 448.738 57.4752 449.103 58.3298C449.311 58.8259 449.58 59.2946 449.902 59.7253L445.469 63.9133L447.228 65.585L451.676 61.3839C452.084 61.6498 452.517 61.8738 452.97 62.0526C453.933 62.4277 454.959 62.6153 455.993 62.605C457.028 62.6043 458.053 62.4116 459.017 62.0366Z"
                      fill="#FDFDFF"
                    />
                  </g>
                  <g id="Frame_4" clip-path="url(#clip3_4878_39685)">
                    <path
                      id="Vector_5"
                      d="M481.636 50.5669L479.893 51.5783V53.5887L478.151 52.5774V50.5669L479.893 49.5556L481.636 50.5669ZM493.857 49.5556L492.115 50.5669L493.857 51.5783V53.5887L495.599 52.5774V50.5669C495.612 50.5669 493.857 49.5556 493.857 49.5556ZM490.36 47.5451L488.618 46.5338L486.875 45.5225L483.378 47.5451L481.636 48.5565L483.378 49.5678L485.121 48.5565L486.863 47.5451L488.605 48.5565L490.348 49.5678L492.09 48.5565L490.36 47.5451ZM486.875 49.5556L485.133 50.5669L486.875 51.5783L488.618 50.5669L486.875 49.5556ZM490.36 51.5783L488.618 52.5896L486.875 53.6009L483.378 51.5783L481.636 52.5896V54.6001L483.378 55.6114L485.121 56.6227V60.6559L486.863 61.6672L488.605 60.6559V56.6227L490.348 55.6114L492.09 54.6001V52.5774L490.36 51.5783ZM490.36 57.6219V59.6445L492.102 58.6454V56.6349L490.36 57.6219ZM493.857 55.6114V59.6445L490.36 61.655V63.6655L492.102 62.6541L493.845 61.6428L495.587 60.6315V54.5879L493.857 55.6114ZM479.881 59.6445V55.6114L478.139 54.6001V60.6559L479.881 61.6672L481.624 62.6785L483.366 63.6898V61.6745C483.378 61.6672 479.881 59.6445 479.881 59.6445V59.6445ZM488.618 62.6663L486.875 63.6776L485.133 62.6663V64.689L486.875 65.7003L488.618 64.689V62.6663ZM481.636 56.6105V58.6283L483.378 59.6397V57.617L481.636 56.6057V56.6105Z"
                      fill="white"
                    />
                  </g>
                </g>
                <g id="Mask group">
                  <mask
                    id="mask0_4878_39685"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="64"
                    y="33"
                    width="47"
                    height="48"
                  >
                    <g id="x_&#229;&#164;&#180;&#229;&#131;&#143;">
                      <mask
                        id="mask1_4878_39685"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="64"
                        y="33"
                        width="47"
                        height="48"
                      >
                        <path
                          id="&#232;&#183;&#175;&#229;&#190;&#132;"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M64.3105 33.9612H110.556V80.2063H64.3105V33.9612Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask1_4878_39685)">
                        <g id="&#229;&#136;&#134;&#231;&#187;&#132; 1">
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_2"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M74.7812 38.3239H79.1445V33.9607H74.7812V38.3239Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_3"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M80.0156 38.3239H84.3789V33.9607H80.0156V38.3239Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_4"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M85.252 38.3239H89.6152V33.9607H85.252V38.3239Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_5"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M90.4863 38.3239H94.8496V33.9607H90.4863V38.3239Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_6"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M95.7227 38.3239H100.086V33.9607H95.7227V38.3239Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_7"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M69.5449 43.5593H73.9082V39.196H69.5449V43.5593Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_8"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M80.0156 43.5593H84.3789V39.196H80.0156V43.5593Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_9"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M85.252 43.5593H89.6152V39.196H85.252V43.5593Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_10"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M90.4863 43.5593H94.8496V39.196H90.4863V43.5593Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_11"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M74.7812 48.7944H79.1445V44.4312H74.7812V48.7944Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_12"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M80.0156 48.7944H84.3789V44.4312H80.0156V48.7944Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_13"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M85.252 48.7944H89.6152V44.4312H85.252V48.7944Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_14"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M90.4863 48.7944H94.8496V44.4312H90.4863V48.7944Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_15"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M95.7227 48.7944H100.086V44.4312H95.7227V48.7944Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_16"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M74.7812 54.03H79.1445V49.6667H74.7812V54.03Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_17"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M80.0156 54.03H84.3789V49.6667H80.0156V54.03Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_18"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M85.252 54.03H89.6152V49.6667H85.252V54.03Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_19"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M90.4863 54.03H94.8496V49.6667H90.4863V54.03Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_20"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M95.7227 54.03H100.086V49.6667H95.7227V54.03Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_21"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M80.0156 59.2651H84.3789V54.9019H80.0156V59.2651Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_22"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M85.252 59.2651H89.6152V54.9019H85.252V59.2651Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_23"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M90.4863 59.2651H94.8496V54.9019H90.4863V59.2651Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_24"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M74.7812 64.5007H79.1445V60.1375H74.7812V64.5007Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_25"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M80.0156 64.5007H84.3789V60.1375H80.0156V64.5007Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_26"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M85.252 64.5007H89.6152V60.1375H85.252V64.5007Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_27"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M90.4863 64.5007H94.8496V60.1375H90.4863V64.5007Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_28"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M95.7227 64.5007H100.086V60.1375H95.7227V64.5007Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_29"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M74.7812 69.7363H79.1445V65.373H74.7812V69.7363Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_30"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M80.0156 69.7363H84.3789V65.373H80.0156V69.7363Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_31"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M85.252 69.7363H89.6152V65.373H85.252V69.7363Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_32"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M90.4863 69.7363H94.8496V65.373H90.4863V69.7363Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_33"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M95.7227 69.7363H100.086V65.373H95.7227V69.7363Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_34"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M100.957 43.5593H105.32V39.196H100.957V43.5593Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_35"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M74.7812 80.2062H79.1445V75.843H74.7812V80.2062Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_36"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M80.0156 80.2062H84.3789V75.843H80.0156V80.2062Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_37"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M85.252 80.2062H89.6152V75.843H85.252V80.2062Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_38"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M90.4863 80.2062H94.8496V75.843H90.4863V80.2062Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_39"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M95.7227 80.2062H100.086V75.843H95.7227V80.2062Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_40"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M74.7812 74.9714H79.1445V70.6082H74.7812V74.9714Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_41"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M69.5449 74.9714H73.9082V70.6082H69.5449V74.9714Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_42"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M80.0156 74.9714H84.3789V70.6082H80.0156V74.9714Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_43"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M85.252 74.9714H89.6152V70.6082H85.252V74.9714Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_44"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M90.4863 74.9714H94.8496V70.6082H90.4863V74.9714Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_45"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M95.7227 74.9714H100.086V70.6082H95.7227V74.9714Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_46"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M100.957 74.9714H105.32V70.6082H100.957V74.9714Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_47"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M68.6738 69.7363V65.373H64.3105V69.7363H68.6738Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_48"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M68.6738 64.5007V60.1375H64.3105V64.5007H68.6738Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_49"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M68.6738 59.2651V54.9019H64.3105V59.2651H68.6738Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_50"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M68.6738 54.03V49.6667H64.3105V54.03H68.6738Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_51"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M68.6738 48.7944V44.4312H64.3105V48.7944H68.6738Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_52"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M73.9082 69.7363V65.373H69.5449V69.7363H73.9082Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_53"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M110.557 69.7363V65.373H106.193V69.7363H110.557Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_54"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M110.557 64.5007V60.1375H106.193V64.5007H110.557Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_55"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M110.557 59.2651V54.9019H106.193V59.2651H110.557Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_56"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M110.557 54.03V49.6667H106.193V54.03H110.557Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_57"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M110.557 48.7944V44.4312H106.193V48.7944H110.557Z"
                            fill="white"
                          />
                          <path
                            id="&#232;&#183;&#175;&#229;&#190;&#132;_58"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M105.32 69.7363V65.373H100.957V69.7363H105.32Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </g>
                  </mask>
                  <g mask="url(#mask0_4878_39685)">
                    <rect
                      id="Rectangle 15771256"
                      x="57.2559"
                      y="27.6907"
                      width="58.0024"
                      height="60.3539"
                      fill="url(#paint2_linear_4878_39685)"
                    />
                  </g>
                </g>
                <g id="Frame 8029">
                  <g clip-path="url(#clip4_4878_39685)">
                    <g id="Rectangle" style="mix-blend-mode: overlay">
                      <rect
                        x="1.44531"
                        y="1.44507"
                        width="557.11"
                        height="328.052"
                        rx="31.071"
                        fill="url(#pattern0)"
                        fill-opacity="0.27"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_b_4878_39685"
                  x="-36.129"
                  y="-36.129"
                  width="632.258"
                  height="403.2"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="18.0645" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4878_39685"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_4878_39685"
                    result="shape"
                  />
                </filter>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_4878_39685"
                    transform="scale(0.00129702 0.00220264)"
                  />
                </pattern>
                <linearGradient
                  id="paint0_linear_4878_39685"
                  x1="-37.574"
                  y1="20.5934"
                  x2="456.671"
                  y2="461.368"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.62" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_4878_39685"
                  x1="-10.8386"
                  y1="174.864"
                  x2="589.626"
                  y2="58.529"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0085FF" stop-opacity="0.52" />
                  <stop offset="0.320586" stop-color="#916AFF" />
                  <stop offset="0.556965" stop-color="#47D1DA" />
                  <stop offset="0.913687" stop-color="#F45A5A" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_4878_39685"
                  x1="57.2559"
                  y1="57.8676"
                  x2="115.258"
                  y2="57.8676"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1FA2FF" />
                  <stop offset="0.5" stop-color="#12D8FA" />
                  <stop offset="1" stop-color="#A6FFCB" />
                </linearGradient>
                <clipPath id="clip0_4878_39685">
                  <rect
                    width="13.767"
                    height="23.0678"
                    fill="white"
                    transform="translate(390.193 44.0774)"
                  />
                </clipPath>
                <clipPath id="clip1_4878_39685">
                  <rect
                    width="18.3864"
                    height="16.5478"
                    fill="white"
                    transform="translate(415.521 47.3374)"
                  />
                </clipPath>
                <clipPath id="clip2_4878_39685">
                  <rect
                    width="21.1071"
                    height="19.9441"
                    fill="white"
                    transform="translate(445.469 45.6392)"
                  />
                </clipPath>
                <clipPath id="clip3_4878_39685">
                  <rect
                    width="17.4607"
                    height="20.1778"
                    fill="white"
                    transform="translate(478.139 45.5225)"
                  />
                </clipPath>
                <clipPath id="clip4_4878_39685">
                  <rect
                    x="1.44531"
                    y="1.44507"
                    width="557.11"
                    height="328.052"
                    rx="14.4516"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg> -->
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