<script setup>
import MainContainer from "@/layouts/MainContainer.vue";
import Radio from "@/components/Radio.vue";
import { dappStore } from "@/store";
</script>

<template>
  <div id="account" class="pt-40 min-h-screen">
    <MainContainer class="space-y-12 mx-auto">
      <h1 class="text-6xl font-medium">My Account</h1>
      <div
        class="p-8 f-c-c-s space-y-5"
        style="background: rgba(255, 255, 255, 0.04); border-radius: 20px"
      >
        <div class="f-r-b-c w-full">
          <div class="f-r-s-s space-x-4">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_5511_43324"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="60"
                height="60"
              >
                <mask
                  id="mask1_5511_43324"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H60V60H0V0Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_5511_43324)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5898 5.66002H19.2508V-0.000976562H13.5898V5.66002Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.3789 5.66002H26.0399V-0.000976562H20.3789V5.66002Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.168 5.66002H32.829V-0.000976562H27.168V5.66002Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.9648 5.66002H39.6258V-0.000976562H33.9648V5.66002Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.7578 5.66002H46.4188V-0.000976562H40.7578V5.66002Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.78906 12.452H12.4501V6.79102H6.78906V12.452Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.3789 12.452H26.0399V6.79102H20.3789V12.452Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.168 12.452H32.829V6.79102H27.168V12.452Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.9648 12.452H39.6258V6.79102H33.9648V12.452Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5898 19.245H19.2508V13.584H13.5898V19.245Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.3789 19.245H26.0399V13.584H20.3789V19.245Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.168 19.245H32.829V13.584H27.168V19.245Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.9648 19.245H39.6258V13.584H33.9648V19.245Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.7578 19.245H46.4188V13.584H40.7578V19.245Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5898 26.038H19.2508V20.377H13.5898V26.038Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.3789 26.038H26.0399V20.377H20.3789V26.038Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.168 26.038H32.829V20.377H27.168V26.038Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.9648 26.038H39.6258V20.377H33.9648V26.038Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.7578 26.038H46.4188V20.377H40.7578V26.038Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.3789 32.8299H26.0399V27.1689H20.3789V32.8299Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.168 32.8299H32.829V27.1689H27.168V32.8299Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.9648 32.8299H39.6258V27.1689H33.9648V32.8299Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5898 39.6219H19.2508V33.9609H13.5898V39.6219Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.3789 39.6219H26.0399V33.9609H20.3789V39.6219Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.168 39.6219H32.829V33.9609H27.168V39.6219Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.9648 39.6219H39.6258V33.9609H33.9648V39.6219Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.7578 39.6219H46.4188V33.9609H40.7578V39.6219Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5898 46.4149H19.2508V40.7539H13.5898V46.4149Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.3789 46.4149H26.0399V40.7539H20.3789V46.4149Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.168 46.4149H32.829V40.7539H27.168V46.4149Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.9648 46.4149H39.6258V40.7539H33.9648V46.4149Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.7578 46.4149H46.4188V40.7539H40.7578V46.4149Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M47.543 12.452H53.204V6.79102H47.543V12.452Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5898 59.9989H19.2508V54.3379H13.5898V59.9989Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.3789 59.9989H26.0399V54.3379H20.3789V59.9989Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.168 59.9989H32.829V54.3379H27.168V59.9989Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.9648 59.9989H39.6258V54.3379H33.9648V59.9989Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.7578 59.9989H46.4188V54.3379H40.7578V59.9989Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5898 53.2079H19.2508V47.5469H13.5898V53.2079Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.78906 53.2079H12.4501V47.5469H6.78906V53.2079Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.3789 53.2079H26.0399V47.5469H20.3789V53.2079Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.168 53.2079H32.829V47.5469H27.168V53.2079Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.9648 53.2079H39.6258V47.5469H33.9648V53.2079Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.7578 53.2079H46.4188V47.5469H40.7578V53.2079Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M47.543 53.2079H53.204V47.5469H47.543V53.2079Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.661 46.4149V40.7539H0V46.4149H5.661Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.661 39.6219V33.9609H0V39.6219H5.661Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.661 32.8299V27.1689H0V32.8299H5.661Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.661 26.037V20.376H0V26.037H5.661Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.661 19.245V13.584H0V19.245H5.661Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4501 46.4149V40.7539H6.78906V46.4149H12.4501Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M60.0048 46.4149V40.7539H54.3438V46.4149H60.0048Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M60.0048 39.6219V33.9609H54.3438V39.6219H60.0048Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M60.0048 32.8299V27.1689H54.3438V32.8299H60.0048Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M60.0048 26.038V20.377H54.3438V26.038H60.0048Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M60.0048 19.245V13.584H54.3438V19.245H60.0048Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M53.204 46.4149V40.7539H47.543V46.4149H53.204Z"
                    fill="white"
                  />
                </g>
              </mask>
              <g mask="url(#mask0_5511_43324)">
                <rect
                  x="-9.14844"
                  y="-8.13574"
                  width="75.2542"
                  height="78.3051"
                  fill="url(#paint0_linear_5511_43324)"
                />
                <rect
                  x="-9.14844"
                  y="-8.13574"
                  width="75.2542"
                  height="78.3051"
                  fill="#00AA5B"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_5511_43324"
                  x1="-9.14844"
                  y1="31.0168"
                  x2="66.1058"
                  y2="31.0168"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1FA2FF" />
                  <stop offset="0.5" stop-color="#12D8FA" />
                  <stop offset="1" stop-color="#A6FFCB" />
                </linearGradient>
              </defs>
            </svg>
            <div class="f-c-c-s pt-2">
              <span>1234</span>
              <div v-if="dappStore.walletAddress" class="f-r-s-c space-x-1">
                <span class="font-base opacity-60">{{
                  dappStore.walletAddress
                }}</span>
                <svg
                  class="cursor-pointer"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.875 5.16185V3.42969C4.875 2.8472 5.3472 2.375 5.92969 2.375H15.0703C15.6528 2.375 16.125 2.8472 16.125 3.42969V12.5703C16.125 13.1528 15.6528 13.625 15.0703 13.625H13.3186"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0703 5.375H2.92969C2.3472 5.375 1.875 5.8472 1.875 6.42969V15.5703C1.875 16.1528 2.3472 16.625 2.92969 16.625H12.0703C12.6528 16.625 13.125 16.1528 13.125 15.5703V6.42969C13.125 5.8472 12.6528 5.375 12.0703 5.375Z"
                    stroke="white"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            class="f-r-c-c px-2 space-x-1 py-0 cursor-pointer"
            style="border: 1px solid #00aa5b; border-radius: 30px"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.08008 9.00008C1.08008 10.0401 1.28494 11.07 1.68295 12.0309C2.08097 12.9918 2.66435 13.8649 3.39979 14.6004C4.13523 15.3358 5.00833 15.9192 5.96923 16.3172C6.93012 16.7152 7.96001 16.9201 9.00008 16.9201C10.0401 16.9201 11.07 16.7152 12.0309 16.3172C12.9918 15.9192 13.8649 15.3358 14.6004 14.6004C15.3358 13.8649 15.9192 12.9918 16.3172 12.0309C16.7152 11.07 16.9201 10.0401 16.9201 9.00008C16.9201 6.89956 16.0857 4.88508 14.6004 3.39979C13.1151 1.9145 11.1006 1.08008 9.00008 1.08008C6.89956 1.08008 4.88508 1.9145 3.39979 3.39979C1.9145 4.88508 1.08008 6.89956 1.08008 9.00008Z"
                fill="#00AA5B"
              />
              <path
                d="M7.29396 5.46728C7.33243 5.52687 7.35878 5.59345 7.37151 5.66323C7.38425 5.733 7.38311 5.8046 7.36817 5.87394C7.35322 5.94327 7.32477 6.00898 7.28442 6.06732C7.24408 6.12565 7.19264 6.17547 7.13304 6.21392C6.17076 6.8342 5.58 7.889 5.58 9.04352C5.58 10.9069 7.11 12.42 9 12.42C10.89 12.42 12.42 10.9069 12.42 9.04316C12.42 7.90016 11.8408 6.85436 10.8943 6.23156C10.8351 6.19256 10.7841 6.14227 10.7443 6.08357C10.7045 6.02486 10.6767 5.9589 10.6623 5.88943C10.648 5.81997 10.6476 5.74836 10.6609 5.67871C10.6743 5.60906 10.7012 5.54272 10.7402 5.48348C10.7792 5.42424 10.8295 5.37327 10.8882 5.33347C10.9469 5.29367 11.0129 5.26582 11.0824 5.25151C11.1518 5.2372 11.2234 5.23672 11.2931 5.25008C11.3627 5.26345 11.4291 5.2904 11.4883 5.3294C12.7343 6.14984 13.5 7.53224 13.5 9.04352C13.5 11.5056 11.484 13.5 9 13.5C6.516 13.5 4.5 11.5059 4.5 9.04316C4.5 7.51712 5.2812 6.12284 6.54768 5.30636C6.66799 5.22878 6.81419 5.20216 6.95413 5.23233C7.09407 5.26251 7.21631 5.34701 7.29396 5.46728ZM9 3.95996C9.14322 3.95996 9.28057 4.01685 9.38184 4.11812C9.48311 4.21939 9.54 4.35674 9.54 4.49996V8.81996C9.54 8.96318 9.48311 9.10053 9.38184 9.2018C9.28057 9.30307 9.14322 9.35996 9 9.35996C8.85678 9.35996 8.71943 9.30307 8.61816 9.2018C8.51689 9.10053 8.46 8.96318 8.46 8.81996V4.49996C8.46 4.35674 8.51689 4.21939 8.61816 4.11812C8.71943 4.01685 8.85678 3.95996 9 3.95996Z"
                fill="white"
              />
            </svg>
            <span
              style="font-family: 'PingFang SC'"
              class="text-sm text-primary font-black"
              >Disconnect</span
            >
          </div>
        </div>
        <div class="w-full flex space-x-6">
          <div
            class="flex-1 f-c-s-c pt-5 pb-3"
            style="background: rgba(255, 255, 255, 0.04); border-radius: 8px"
          >
            <span class="text-4xl font-normal">0</span>
            <span class="mt-1 mb-5 text-lg opacity-60">USDT</span>
            <span class="text-primary text-sm cursor-pointer">提现</span>
          </div>
          <div
            class="flex-1 f-c-s-c pt-5 pb-3"
            style="background: rgba(255, 255, 255, 0.04); border-radius: 8px"
          >
            <span class="text-4xl font-normal">0</span>
            <span class="mt-1 mb-5 text-lg opacity-60">USDT</span>
          </div>
          <div
            class="flex-1 f-c-s-c pt-5 pb-3"
            style="background: rgba(255, 255, 255, 0.04); border-radius: 8px"
          >
            <span class="text-4xl font-normal">0</span>
            <span class="mt-1 mb-5 text-lg opacity-60">USDT</span>
          </div>
        </div>
      </div>

      <div class="f-r-b-c">
        <h3 class="text-xl font-bold">Root Domain</h3>
        <div class="f-r-s-c space-x-3">
          <span class="text-xl font-normal">Select All</span>
          <Radio />
        </div>
      </div>

      <div class="f-c-s-c space-y-5">
        <template v-for="item of 10" :key="item">
          <div
            style="background: rgba(255, 255, 255, 0.04); border-radius: 20px"
            class="f-r-b-c py-5 p-8 w-full"
          >
            <div class="f-r-c-c space-x-4">
              <svg
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_5507_32788"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="35"
                  height="36"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 2.75C8 3.16421 8.33579 3.5 8.75 3.5H10.25C10.6642 3.5 11 3.16421 11 2.75V1.25C11 0.835786 10.6642 0.5 10.25 0.5H8.75C8.33579 0.5 8 0.835786 8 1.25V2.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2.75C12 3.16421 12.3358 3.5 12.75 3.5H14.25C14.6642 3.5 15 3.16421 15 2.75V1.25C15 0.835786 14.6642 0.5 14.25 0.5H12.75C12.3358 0.5 12 0.835786 12 1.25V2.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 2.75C16 3.16421 16.3358 3.5 16.75 3.5H18.25C18.6642 3.5 19 3.16421 19 2.75V1.25C19 0.835786 18.6642 0.5 18.25 0.5H16.75C16.3358 0.5 16 0.835786 16 1.25V2.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 2.75C20 3.16421 20.3358 3.5 20.75 3.5H22.25C22.6642 3.5 23 3.16421 23 2.75V1.25C23 0.835786 22.6642 0.5 22.25 0.5H20.75C20.3358 0.5 20 0.835786 20 1.25V2.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 2.75C24 3.16421 24.3358 3.5 24.75 3.5H26.25C26.6642 3.5 27 3.16421 27 2.75V1.25C27 0.835786 26.6642 0.5 26.25 0.5H24.75C24.3358 0.5 24 0.835786 24 1.25V2.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 6.75C4 7.16421 4.33579 7.5 4.75 7.5H6.25C6.66421 7.5 7 7.16421 7 6.75V5.25C7 4.83579 6.66421 4.5 6.25 4.5H4.75C4.33579 4.5 4 4.83579 4 5.25V6.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 6.75C16 7.16421 16.3358 7.5 16.75 7.5H18.25C18.6642 7.5 19 7.16421 19 6.75V5.25C19 4.83579 18.6642 4.5 18.25 4.5H16.75C16.3358 4.5 16 4.83579 16 5.25V6.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 10.75C12 11.1642 12.3358 11.5 12.75 11.5H14.25C14.6642 11.5 15 11.1642 15 10.75V9.25C15 8.83579 14.6642 8.5 14.25 8.5H12.75C12.3358 8.5 12 8.83579 12 9.25V10.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 6.75C12 7.16421 12.3358 7.5 12.75 7.5H14.25C14.6642 7.5 15 7.16421 15 6.75V5.25C15 4.83579 14.6642 4.5 14.25 4.5H12.75C12.3358 4.5 12 4.83579 12 5.25V6.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 10.75C8 11.1642 8.33579 11.5 8.75 11.5H10.25C10.6642 11.5 11 11.1642 11 10.75V9.25C11 8.83579 10.6642 8.5 10.25 8.5H8.75C8.33579 8.5 8 8.83579 8 9.25V10.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 10.75C16 11.1642 16.3358 11.5 16.75 11.5H18.25C18.6642 11.5 19 11.1642 19 10.75V9.25C19 8.83579 18.6642 8.5 18.25 8.5H16.75C16.3358 8.5 16 8.83579 16 9.25V10.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 10.75C20 11.1642 20.3358 11.5 20.75 11.5H22.25C22.6642 11.5 23 11.1642 23 10.75V9.25C23 8.83579 22.6642 8.5 22.25 8.5H20.75C20.3358 8.5 20 8.83579 20 9.25V10.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 6.75C20 7.16421 20.3358 7.5 20.75 7.5H22.25C22.6642 7.5 23 7.16421 23 6.75V5.25C23 4.83579 22.6642 4.5 22.25 4.5H20.75C20.3358 4.5 20 4.83579 20 5.25V6.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 10.75C24 11.1642 24.3358 11.5 24.75 11.5H26.25C26.6642 11.5 27 11.1642 27 10.75V9.25C27 8.83579 26.6642 8.5 26.25 8.5H24.75C24.3358 8.5 24 8.83579 24 9.25V10.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 14.75C12 15.1642 12.3358 15.5 12.75 15.5H14.25C14.6642 15.5 15 15.1642 15 14.75V13.25C15 12.8358 14.6642 12.5 14.25 12.5H12.75C12.3358 12.5 12 12.8358 12 13.25V14.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 14.75C8 15.1642 8.33579 15.5 8.75 15.5H10.25C10.6642 15.5 11 15.1642 11 14.75V13.25C11 12.8358 10.6642 12.5 10.25 12.5H8.75C8.33579 12.5 8 12.8358 8 13.25V14.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 22.75C8 23.1642 8.33579 23.5 8.75 23.5H10.25C10.6642 23.5 11 23.1642 11 22.75V21.25C11 20.8358 10.6642 20.5 10.25 20.5H8.75C8.33579 20.5 8 20.8358 8 21.25V22.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 14.75C16 15.1642 16.3358 15.5 16.75 15.5H18.25C18.6642 15.5 19 15.1642 19 14.75V13.25C19 12.8358 18.6642 12.5 18.25 12.5H16.75C16.3358 12.5 16 12.8358 16 13.25V14.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 14.75C20 15.1642 20.3358 15.5 20.75 15.5H22.25C22.6642 15.5 23 15.1642 23 14.75V13.25C23 12.8358 22.6642 12.5 22.25 12.5H20.75C20.3358 12.5 20 12.8358 20 13.25V14.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 14.75C24 15.1642 24.3358 15.5 24.75 15.5H26.25C26.6642 15.5 27 15.1642 27 14.75V13.25C27 12.8358 26.6642 12.5 26.25 12.5H24.75C24.3358 12.5 24 12.8358 24 13.25V14.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 22.75C24 23.1642 24.3358 23.5 24.75 23.5H26.25C26.6642 23.5 27 23.1642 27 22.75V21.25C27 20.8358 26.6642 20.5 26.25 20.5H24.75C24.3358 20.5 24 20.8358 24 21.25V22.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 18.75C16 19.1642 16.3358 19.5 16.75 19.5H18.25C18.6642 19.5 19 19.1642 19 18.75V17.25C19 16.8358 18.6642 16.5 18.25 16.5H16.75C16.3358 16.5 16 16.8358 16 17.25V18.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 22.75C12 23.1642 12.3358 23.5 12.75 23.5H14.25C14.6642 23.5 15 23.1642 15 22.75V21.25C15 20.8358 14.6642 20.5 14.25 20.5H12.75C12.3358 20.5 12 20.8358 12 21.25V22.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 18.75C12 19.1642 12.3358 19.5 12.75 19.5H14.25C14.6642 19.5 15 19.1642 15 18.75V17.25C15 16.8358 14.6642 16.5 14.25 16.5H12.75C12.3358 16.5 12 16.8358 12 17.25V18.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 22.75C16 23.1642 16.3358 23.5 16.75 23.5H18.25C18.6642 23.5 19 23.1642 19 22.75V21.25C19 20.8358 18.6642 20.5 18.25 20.5H16.75C16.3358 20.5 16 20.8358 16 21.25V22.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 22.75C20 23.1642 20.3358 23.5 20.75 23.5H22.25C22.6642 23.5 23 23.1642 23 22.75V21.25C23 20.8358 22.6642 20.5 22.25 20.5H20.75C20.3358 20.5 20 20.8358 20 21.25V22.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 18.75C20 19.1642 20.3358 19.5 20.75 19.5H22.25C22.6642 19.5 23 19.1642 23 18.75V17.25C23 16.8358 22.6642 16.5 22.25 16.5H20.75C20.3358 16.5 20 16.8358 20 17.25V18.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 26.75C8 27.1642 8.33579 27.5 8.75 27.5H10.25C10.6642 27.5 11 27.1642 11 26.75V25.25C11 24.8358 10.6642 24.5 10.25 24.5H8.75C8.33579 24.5 8 24.8358 8 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 26.75C4 27.1642 4.33579 27.5 4.75 27.5H6.25C6.66421 27.5 7 27.1642 7 26.75V25.25C7 24.8358 6.66421 24.5 6.25 24.5H4.75C4.33579 24.5 4 24.8358 4 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 26.75C12 27.1642 12.3358 27.5 12.75 27.5H14.25C14.6642 27.5 15 27.1642 15 26.75V25.25C15 24.8358 14.6642 24.5 14.25 24.5H12.75C12.3358 24.5 12 24.8358 12 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 26.75C16 27.1642 16.3358 27.5 16.75 27.5H18.25C18.6642 27.5 19 27.1642 19 26.75V25.25C19 24.8358 18.6642 24.5 18.25 24.5H16.75C16.3358 24.5 16 24.8358 16 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 26.75C20 27.1642 20.3358 27.5 20.75 27.5H22.25C22.6642 27.5 23 27.1642 23 26.75V25.25C23 24.8358 22.6642 24.5 22.25 24.5H20.75C20.3358 24.5 20 24.8358 20 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 26.75C24 27.1642 24.3358 27.5 24.75 27.5H26.25C26.6642 27.5 27 27.1642 27 26.75V25.25C27 24.8358 26.6642 24.5 26.25 24.5H24.75C24.3358 24.5 24 24.8358 24 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28 26.75C28 27.1642 28.3358 27.5 28.75 27.5H30.25C30.6642 27.5 31 27.1642 31 26.75V25.25C31 24.8358 30.6642 24.5 30.25 24.5H28.75C28.3358 24.5 28 24.8358 28 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28 6.75C28 7.16421 28.3358 7.5 28.75 7.5H30.25C30.6642 7.5 31 7.16421 31 6.75V5.25C31 4.83579 30.6642 4.5 30.25 4.5H28.75C28.3358 4.5 28 4.83579 28 5.25V6.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 30.75C8 31.1642 8.33579 31.5 8.75 31.5H10.25C10.6642 31.5 11 31.1642 11 30.75V29.25C11 28.8358 10.6642 28.5 10.25 28.5H8.75C8.33579 28.5 8 28.8358 8 29.25V30.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 34.75C8 35.1642 8.33579 35.5 8.75 35.5H10.25C10.6642 35.5 11 35.1642 11 34.75V33.25C11 32.8358 10.6642 32.5 10.25 32.5H8.75C8.33579 32.5 8 32.8358 8 33.25V34.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 30.75C12 31.1642 12.3358 31.5 12.75 31.5H14.25C14.6642 31.5 15 31.1642 15 30.75V29.25C15 28.8358 14.6642 28.5 14.25 28.5H12.75C12.3358 28.5 12 28.8358 12 29.25V30.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 34.75C12 35.1642 12.3358 35.5 12.75 35.5H14.25C14.6642 35.5 15 35.1642 15 34.75V33.25C15 32.8358 14.6642 32.5 14.25 32.5H12.75C12.3358 32.5 12 32.8358 12 33.25V34.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 30.75C16 31.1642 16.3358 31.5 16.75 31.5H18.25C18.6642 31.5 19 31.1642 19 30.75V29.25C19 28.8358 18.6642 28.5 18.25 28.5H16.75C16.3358 28.5 16 28.8358 16 29.25V30.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 34.75C16 35.1642 16.3358 35.5 16.75 35.5H18.25C18.6642 35.5 19 35.1642 19 34.75V33.25C19 32.8358 18.6642 32.5 18.25 32.5H16.75C16.3358 32.5 16 32.8358 16 33.25V34.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 30.75C20 31.1642 20.3358 31.5 20.75 31.5H22.25C22.6642 31.5 23 31.1642 23 30.75V29.25C23 28.8358 22.6642 28.5 22.25 28.5H20.75C20.3358 28.5 20 28.8358 20 29.25V30.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 34.75C20 35.1642 20.3358 35.5 20.75 35.5H22.25C22.6642 35.5 23 35.1642 23 34.75V33.25C23 32.8358 22.6642 32.5 22.25 32.5H20.75C20.3358 32.5 20 32.8358 20 33.25V34.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 30.75C24 31.1642 24.3358 31.5 24.75 31.5H26.25C26.6642 31.5 27 31.1642 27 30.75V29.25C27 28.8358 26.6642 28.5 26.25 28.5H24.75C24.3358 28.5 24 28.8358 24 29.25V30.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 34.75C24 35.1642 24.3358 35.5 24.75 35.5H26.25C26.6642 35.5 27 35.1642 27 34.75V33.25C27 32.8358 26.6642 32.5 26.25 32.5H24.75C24.3358 32.5 24 32.8358 24 33.25V34.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28 30.75C28 31.1642 28.3358 31.5 28.75 31.5H30.25C30.6642 31.5 31 31.1642 31 30.75V29.25C31 28.8358 30.6642 28.5 30.25 28.5H28.75C28.3358 28.5 28 28.8358 28 29.25V30.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.25 27.5C2.66421 27.5 3 27.1642 3 26.75V25.25C3 24.8358 2.66421 24.5 2.25 24.5H0.75C0.335786 24.5 0 24.8358 0 25.25V26.75C0 27.1642 0.335786 27.5 0.75 27.5H2.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.25 23.5C2.66421 23.5 3 23.1642 3 22.75V21.25C3 20.8358 2.66421 20.5 2.25 20.5H0.75C0.335786 20.5 0 20.8358 0 21.25V22.75C0 23.1642 0.335786 23.5 0.75 23.5H2.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.25 19.5C2.66421 19.5 3 19.1642 3 18.75V17.25C3 16.8358 2.66421 16.5 2.25 16.5H0.75C0.335786 16.5 0 16.8358 0 17.25V18.75C0 19.1642 0.335786 19.5 0.75 19.5H2.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.25 15.5C2.66421 15.5 3 15.1642 3 14.75V13.25C3 12.8358 2.66421 12.5 2.25 12.5H0.75C0.335786 12.5 0 12.8358 0 13.25V14.75C0 15.1642 0.335786 15.5 0.75 15.5H2.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.25 11.5C2.66421 11.5 3 11.1642 3 10.75V9.25C3 8.83579 2.66421 8.5 2.25 8.5H0.75C0.335786 8.5 0 8.83579 0 9.25V10.75C0 11.1642 0.335786 11.5 0.75 11.5H2.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.25 31.5C6.66421 31.5 7 31.1642 7 30.75V29.25C7 28.8358 6.66421 28.5 6.25 28.5H4.75C4.33579 28.5 4 28.8358 4 29.25V30.75C4 31.1642 4.33579 31.5 4.75 31.5H6.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.25 27.5C34.6642 27.5 35 27.1642 35 26.75V25.25C35 24.8358 34.6642 24.5 34.25 24.5H32.75C32.3358 24.5 32 24.8358 32 25.25V26.75C32 27.1642 32.3358 27.5 32.75 27.5H34.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.25 23.5C34.6642 23.5 35 23.1642 35 22.75V21.25C35 20.8358 34.6642 20.5 34.25 20.5H32.75C32.3358 20.5 32 20.8358 32 21.25V22.75C32 23.1642 32.3358 23.5 32.75 23.5H34.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.25 19.5C34.6642 19.5 35 19.1642 35 18.75V17.25C35 16.8358 34.6642 16.5 34.25 16.5H32.75C32.3358 16.5 32 16.8358 32 17.25V18.75C32 19.1642 32.3358 19.5 32.75 19.5H34.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.25 15.5C34.6642 15.5 35 15.1642 35 14.75V13.25C35 12.8358 34.6642 12.5 34.25 12.5H32.75C32.3358 12.5 32 12.8358 32 13.25V14.75C32 15.1642 32.3358 15.5 32.75 15.5H34.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.25 11.5C34.6642 11.5 35 11.1642 35 10.75V9.25C35 8.83579 34.6642 8.5 34.25 8.5H32.75C32.3358 8.5 32 8.83579 32 9.25V10.75C32 11.1642 32.3358 11.5 32.75 11.5H34.25Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_5507_32788)">
                  <rect
                    y="0.5"
                    width="35"
                    height="35"
                    fill="url(#paint0_linear_5507_32788)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_5507_32788"
                    x1="29.1667"
                    y1="30.0312"
                    x2="5.10417"
                    y2="5.96875"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#008C3D" />
                    <stop offset="1" stop-color="#0AC846" />
                  </linearGradient>
                </defs>
              </svg>

              <span class="text-4xl font-bold">satoshi</span>
              <div class="f-r-c-c space-x-1">
                <!-- <div class="w-1 h-1 bg-primary rounded-full"></div>
                <span class="text-sm text-primary">Available</span> -->
              </div>
            </div>
            <div class="f-r-c-c space-x-4">
              <div class="f-r-c-c space-x-2">
                <!-- <img src="@/views/domains/images/usdt.svg" alt="" />
                <span class="text-3xl font-normal">10.00</span> -->
              </div>
              <button class="py-2 px-3 rounded-md text-lg">Setting</button>
            </div>
          </div>
        </template>
      </div>

      <div class="f-r-b-c">
        <h3 class="text-xl font-bold">Sub Domain</h3>
        <div class="f-r-s-c space-x-3">
          <span class="text-xl font-normal">Select All</span>
          <div class="w-6 h-6 border-4 border-primary rounded-md f-r-c-c p-px">
            <div class="w-3 h-3 bg-primary rounded-sm"></div>
          </div>
        </div>
      </div>

      <div class="f-c-s-c space-y-5">
        <template v-for="item of 6" :key="item">
          <div
            style="background: rgba(255, 255, 255, 0.04); border-radius: 20px"
            class="f-r-b-c py-5 p-8 w-full"
          >
            <div class="f-r-c-c space-x-4">
              <svg
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_5507_32788"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="35"
                  height="36"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 2.75C8 3.16421 8.33579 3.5 8.75 3.5H10.25C10.6642 3.5 11 3.16421 11 2.75V1.25C11 0.835786 10.6642 0.5 10.25 0.5H8.75C8.33579 0.5 8 0.835786 8 1.25V2.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2.75C12 3.16421 12.3358 3.5 12.75 3.5H14.25C14.6642 3.5 15 3.16421 15 2.75V1.25C15 0.835786 14.6642 0.5 14.25 0.5H12.75C12.3358 0.5 12 0.835786 12 1.25V2.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 2.75C16 3.16421 16.3358 3.5 16.75 3.5H18.25C18.6642 3.5 19 3.16421 19 2.75V1.25C19 0.835786 18.6642 0.5 18.25 0.5H16.75C16.3358 0.5 16 0.835786 16 1.25V2.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 2.75C20 3.16421 20.3358 3.5 20.75 3.5H22.25C22.6642 3.5 23 3.16421 23 2.75V1.25C23 0.835786 22.6642 0.5 22.25 0.5H20.75C20.3358 0.5 20 0.835786 20 1.25V2.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 2.75C24 3.16421 24.3358 3.5 24.75 3.5H26.25C26.6642 3.5 27 3.16421 27 2.75V1.25C27 0.835786 26.6642 0.5 26.25 0.5H24.75C24.3358 0.5 24 0.835786 24 1.25V2.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 6.75C4 7.16421 4.33579 7.5 4.75 7.5H6.25C6.66421 7.5 7 7.16421 7 6.75V5.25C7 4.83579 6.66421 4.5 6.25 4.5H4.75C4.33579 4.5 4 4.83579 4 5.25V6.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 6.75C16 7.16421 16.3358 7.5 16.75 7.5H18.25C18.6642 7.5 19 7.16421 19 6.75V5.25C19 4.83579 18.6642 4.5 18.25 4.5H16.75C16.3358 4.5 16 4.83579 16 5.25V6.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 10.75C12 11.1642 12.3358 11.5 12.75 11.5H14.25C14.6642 11.5 15 11.1642 15 10.75V9.25C15 8.83579 14.6642 8.5 14.25 8.5H12.75C12.3358 8.5 12 8.83579 12 9.25V10.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 6.75C12 7.16421 12.3358 7.5 12.75 7.5H14.25C14.6642 7.5 15 7.16421 15 6.75V5.25C15 4.83579 14.6642 4.5 14.25 4.5H12.75C12.3358 4.5 12 4.83579 12 5.25V6.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 10.75C8 11.1642 8.33579 11.5 8.75 11.5H10.25C10.6642 11.5 11 11.1642 11 10.75V9.25C11 8.83579 10.6642 8.5 10.25 8.5H8.75C8.33579 8.5 8 8.83579 8 9.25V10.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 10.75C16 11.1642 16.3358 11.5 16.75 11.5H18.25C18.6642 11.5 19 11.1642 19 10.75V9.25C19 8.83579 18.6642 8.5 18.25 8.5H16.75C16.3358 8.5 16 8.83579 16 9.25V10.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 10.75C20 11.1642 20.3358 11.5 20.75 11.5H22.25C22.6642 11.5 23 11.1642 23 10.75V9.25C23 8.83579 22.6642 8.5 22.25 8.5H20.75C20.3358 8.5 20 8.83579 20 9.25V10.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 6.75C20 7.16421 20.3358 7.5 20.75 7.5H22.25C22.6642 7.5 23 7.16421 23 6.75V5.25C23 4.83579 22.6642 4.5 22.25 4.5H20.75C20.3358 4.5 20 4.83579 20 5.25V6.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 10.75C24 11.1642 24.3358 11.5 24.75 11.5H26.25C26.6642 11.5 27 11.1642 27 10.75V9.25C27 8.83579 26.6642 8.5 26.25 8.5H24.75C24.3358 8.5 24 8.83579 24 9.25V10.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 14.75C12 15.1642 12.3358 15.5 12.75 15.5H14.25C14.6642 15.5 15 15.1642 15 14.75V13.25C15 12.8358 14.6642 12.5 14.25 12.5H12.75C12.3358 12.5 12 12.8358 12 13.25V14.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 14.75C8 15.1642 8.33579 15.5 8.75 15.5H10.25C10.6642 15.5 11 15.1642 11 14.75V13.25C11 12.8358 10.6642 12.5 10.25 12.5H8.75C8.33579 12.5 8 12.8358 8 13.25V14.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 22.75C8 23.1642 8.33579 23.5 8.75 23.5H10.25C10.6642 23.5 11 23.1642 11 22.75V21.25C11 20.8358 10.6642 20.5 10.25 20.5H8.75C8.33579 20.5 8 20.8358 8 21.25V22.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 14.75C16 15.1642 16.3358 15.5 16.75 15.5H18.25C18.6642 15.5 19 15.1642 19 14.75V13.25C19 12.8358 18.6642 12.5 18.25 12.5H16.75C16.3358 12.5 16 12.8358 16 13.25V14.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 14.75C20 15.1642 20.3358 15.5 20.75 15.5H22.25C22.6642 15.5 23 15.1642 23 14.75V13.25C23 12.8358 22.6642 12.5 22.25 12.5H20.75C20.3358 12.5 20 12.8358 20 13.25V14.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 14.75C24 15.1642 24.3358 15.5 24.75 15.5H26.25C26.6642 15.5 27 15.1642 27 14.75V13.25C27 12.8358 26.6642 12.5 26.25 12.5H24.75C24.3358 12.5 24 12.8358 24 13.25V14.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 22.75C24 23.1642 24.3358 23.5 24.75 23.5H26.25C26.6642 23.5 27 23.1642 27 22.75V21.25C27 20.8358 26.6642 20.5 26.25 20.5H24.75C24.3358 20.5 24 20.8358 24 21.25V22.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 18.75C16 19.1642 16.3358 19.5 16.75 19.5H18.25C18.6642 19.5 19 19.1642 19 18.75V17.25C19 16.8358 18.6642 16.5 18.25 16.5H16.75C16.3358 16.5 16 16.8358 16 17.25V18.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 22.75C12 23.1642 12.3358 23.5 12.75 23.5H14.25C14.6642 23.5 15 23.1642 15 22.75V21.25C15 20.8358 14.6642 20.5 14.25 20.5H12.75C12.3358 20.5 12 20.8358 12 21.25V22.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 18.75C12 19.1642 12.3358 19.5 12.75 19.5H14.25C14.6642 19.5 15 19.1642 15 18.75V17.25C15 16.8358 14.6642 16.5 14.25 16.5H12.75C12.3358 16.5 12 16.8358 12 17.25V18.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 22.75C16 23.1642 16.3358 23.5 16.75 23.5H18.25C18.6642 23.5 19 23.1642 19 22.75V21.25C19 20.8358 18.6642 20.5 18.25 20.5H16.75C16.3358 20.5 16 20.8358 16 21.25V22.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 22.75C20 23.1642 20.3358 23.5 20.75 23.5H22.25C22.6642 23.5 23 23.1642 23 22.75V21.25C23 20.8358 22.6642 20.5 22.25 20.5H20.75C20.3358 20.5 20 20.8358 20 21.25V22.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 18.75C20 19.1642 20.3358 19.5 20.75 19.5H22.25C22.6642 19.5 23 19.1642 23 18.75V17.25C23 16.8358 22.6642 16.5 22.25 16.5H20.75C20.3358 16.5 20 16.8358 20 17.25V18.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 26.75C8 27.1642 8.33579 27.5 8.75 27.5H10.25C10.6642 27.5 11 27.1642 11 26.75V25.25C11 24.8358 10.6642 24.5 10.25 24.5H8.75C8.33579 24.5 8 24.8358 8 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 26.75C4 27.1642 4.33579 27.5 4.75 27.5H6.25C6.66421 27.5 7 27.1642 7 26.75V25.25C7 24.8358 6.66421 24.5 6.25 24.5H4.75C4.33579 24.5 4 24.8358 4 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 26.75C12 27.1642 12.3358 27.5 12.75 27.5H14.25C14.6642 27.5 15 27.1642 15 26.75V25.25C15 24.8358 14.6642 24.5 14.25 24.5H12.75C12.3358 24.5 12 24.8358 12 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 26.75C16 27.1642 16.3358 27.5 16.75 27.5H18.25C18.6642 27.5 19 27.1642 19 26.75V25.25C19 24.8358 18.6642 24.5 18.25 24.5H16.75C16.3358 24.5 16 24.8358 16 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 26.75C20 27.1642 20.3358 27.5 20.75 27.5H22.25C22.6642 27.5 23 27.1642 23 26.75V25.25C23 24.8358 22.6642 24.5 22.25 24.5H20.75C20.3358 24.5 20 24.8358 20 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 26.75C24 27.1642 24.3358 27.5 24.75 27.5H26.25C26.6642 27.5 27 27.1642 27 26.75V25.25C27 24.8358 26.6642 24.5 26.25 24.5H24.75C24.3358 24.5 24 24.8358 24 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28 26.75C28 27.1642 28.3358 27.5 28.75 27.5H30.25C30.6642 27.5 31 27.1642 31 26.75V25.25C31 24.8358 30.6642 24.5 30.25 24.5H28.75C28.3358 24.5 28 24.8358 28 25.25V26.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28 6.75C28 7.16421 28.3358 7.5 28.75 7.5H30.25C30.6642 7.5 31 7.16421 31 6.75V5.25C31 4.83579 30.6642 4.5 30.25 4.5H28.75C28.3358 4.5 28 4.83579 28 5.25V6.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 30.75C8 31.1642 8.33579 31.5 8.75 31.5H10.25C10.6642 31.5 11 31.1642 11 30.75V29.25C11 28.8358 10.6642 28.5 10.25 28.5H8.75C8.33579 28.5 8 28.8358 8 29.25V30.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 34.75C8 35.1642 8.33579 35.5 8.75 35.5H10.25C10.6642 35.5 11 35.1642 11 34.75V33.25C11 32.8358 10.6642 32.5 10.25 32.5H8.75C8.33579 32.5 8 32.8358 8 33.25V34.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 30.75C12 31.1642 12.3358 31.5 12.75 31.5H14.25C14.6642 31.5 15 31.1642 15 30.75V29.25C15 28.8358 14.6642 28.5 14.25 28.5H12.75C12.3358 28.5 12 28.8358 12 29.25V30.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 34.75C12 35.1642 12.3358 35.5 12.75 35.5H14.25C14.6642 35.5 15 35.1642 15 34.75V33.25C15 32.8358 14.6642 32.5 14.25 32.5H12.75C12.3358 32.5 12 32.8358 12 33.25V34.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 30.75C16 31.1642 16.3358 31.5 16.75 31.5H18.25C18.6642 31.5 19 31.1642 19 30.75V29.25C19 28.8358 18.6642 28.5 18.25 28.5H16.75C16.3358 28.5 16 28.8358 16 29.25V30.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 34.75C16 35.1642 16.3358 35.5 16.75 35.5H18.25C18.6642 35.5 19 35.1642 19 34.75V33.25C19 32.8358 18.6642 32.5 18.25 32.5H16.75C16.3358 32.5 16 32.8358 16 33.25V34.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 30.75C20 31.1642 20.3358 31.5 20.75 31.5H22.25C22.6642 31.5 23 31.1642 23 30.75V29.25C23 28.8358 22.6642 28.5 22.25 28.5H20.75C20.3358 28.5 20 28.8358 20 29.25V30.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 34.75C20 35.1642 20.3358 35.5 20.75 35.5H22.25C22.6642 35.5 23 35.1642 23 34.75V33.25C23 32.8358 22.6642 32.5 22.25 32.5H20.75C20.3358 32.5 20 32.8358 20 33.25V34.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 30.75C24 31.1642 24.3358 31.5 24.75 31.5H26.25C26.6642 31.5 27 31.1642 27 30.75V29.25C27 28.8358 26.6642 28.5 26.25 28.5H24.75C24.3358 28.5 24 28.8358 24 29.25V30.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 34.75C24 35.1642 24.3358 35.5 24.75 35.5H26.25C26.6642 35.5 27 35.1642 27 34.75V33.25C27 32.8358 26.6642 32.5 26.25 32.5H24.75C24.3358 32.5 24 32.8358 24 33.25V34.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28 30.75C28 31.1642 28.3358 31.5 28.75 31.5H30.25C30.6642 31.5 31 31.1642 31 30.75V29.25C31 28.8358 30.6642 28.5 30.25 28.5H28.75C28.3358 28.5 28 28.8358 28 29.25V30.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.25 27.5C2.66421 27.5 3 27.1642 3 26.75V25.25C3 24.8358 2.66421 24.5 2.25 24.5H0.75C0.335786 24.5 0 24.8358 0 25.25V26.75C0 27.1642 0.335786 27.5 0.75 27.5H2.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.25 23.5C2.66421 23.5 3 23.1642 3 22.75V21.25C3 20.8358 2.66421 20.5 2.25 20.5H0.75C0.335786 20.5 0 20.8358 0 21.25V22.75C0 23.1642 0.335786 23.5 0.75 23.5H2.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.25 19.5C2.66421 19.5 3 19.1642 3 18.75V17.25C3 16.8358 2.66421 16.5 2.25 16.5H0.75C0.335786 16.5 0 16.8358 0 17.25V18.75C0 19.1642 0.335786 19.5 0.75 19.5H2.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.25 15.5C2.66421 15.5 3 15.1642 3 14.75V13.25C3 12.8358 2.66421 12.5 2.25 12.5H0.75C0.335786 12.5 0 12.8358 0 13.25V14.75C0 15.1642 0.335786 15.5 0.75 15.5H2.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.25 11.5C2.66421 11.5 3 11.1642 3 10.75V9.25C3 8.83579 2.66421 8.5 2.25 8.5H0.75C0.335786 8.5 0 8.83579 0 9.25V10.75C0 11.1642 0.335786 11.5 0.75 11.5H2.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.25 31.5C6.66421 31.5 7 31.1642 7 30.75V29.25C7 28.8358 6.66421 28.5 6.25 28.5H4.75C4.33579 28.5 4 28.8358 4 29.25V30.75C4 31.1642 4.33579 31.5 4.75 31.5H6.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.25 27.5C34.6642 27.5 35 27.1642 35 26.75V25.25C35 24.8358 34.6642 24.5 34.25 24.5H32.75C32.3358 24.5 32 24.8358 32 25.25V26.75C32 27.1642 32.3358 27.5 32.75 27.5H34.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.25 23.5C34.6642 23.5 35 23.1642 35 22.75V21.25C35 20.8358 34.6642 20.5 34.25 20.5H32.75C32.3358 20.5 32 20.8358 32 21.25V22.75C32 23.1642 32.3358 23.5 32.75 23.5H34.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.25 19.5C34.6642 19.5 35 19.1642 35 18.75V17.25C35 16.8358 34.6642 16.5 34.25 16.5H32.75C32.3358 16.5 32 16.8358 32 17.25V18.75C32 19.1642 32.3358 19.5 32.75 19.5H34.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.25 15.5C34.6642 15.5 35 15.1642 35 14.75V13.25C35 12.8358 34.6642 12.5 34.25 12.5H32.75C32.3358 12.5 32 12.8358 32 13.25V14.75C32 15.1642 32.3358 15.5 32.75 15.5H34.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.25 11.5C34.6642 11.5 35 11.1642 35 10.75V9.25C35 8.83579 34.6642 8.5 34.25 8.5H32.75C32.3358 8.5 32 8.83579 32 9.25V10.75C32 11.1642 32.3358 11.5 32.75 11.5H34.25Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_5507_32788)">
                  <rect
                    y="0.5"
                    width="35"
                    height="35"
                    fill="url(#paint0_linear_5507_32788)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_5507_32788"
                    x1="29.1667"
                    y1="30.0312"
                    x2="5.10417"
                    y2="5.96875"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#008C3D" />
                    <stop offset="1" stop-color="#0AC846" />
                  </linearGradient>
                </defs>
              </svg>

              <span class="text-4xl font-bold">satoshi</span>
              <div class="f-r-c-c space-x-1">
                <!-- <div class="w-1 h-1 bg-primary rounded-full"></div>
                <span class="text-sm text-primary">Available</span> -->
              </div>
            </div>
            <div class="f-r-c-c space-x-4">
              <div class="f-r-c-c space-x-2">
                <!-- <img src="@/views/domains/images/usdt.svg" alt="" />
                <span class="text-3xl font-normal">10.00</span> -->
              </div>
              <button class="py-2 px-3 rounded-md text-lg">Setting</button>
            </div>
          </div>
        </template>
      </div>
    </MainContainer>
  </div>
</template>
<style lang='less' scoped>
</style>