/* eslint-disable no-unused-vars */
<template>
  <div @click="handleShow()" :class="['wallet-pop', { show }]">
    <div @Click="$event.cancelBubble = true" class="wallet-pop-box">
      <img
        @click="handleShow()"
        src="@/views/home/images/off.svg"
        alt=""
        class="wallet-pop-box-off text-center"
      />
      <span class="wallet-pop-box-title text-center">Connect Wallet</span>
      <ul class="wallet-w">
        <div class="li-wrap">
          <li
            @click="connectWallet(index)"
            v-for="(item, index) in walletItems"
            :key="index"
            class="wallet-w-li flex justify-between items-center"
          >
            <img class="wallet-w-li-ava" :src="item.src" alt="" />
            <span class="wallet-w-li-name">{{ item.title }}</span>
          </li>
        </div>
      </ul>
      <div
        @click="handleWalletBox"
        class="option flex justify-between items-center"
      >
        <span class="option-span">More options</span>
        <img class="option-top" src="@/views/home/images/top.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
// import Web3 from "web3";
import { useStore, dappStore } from "@/store";

import { isMetaMask } from "@/bizlib/metamask";
import { connectMetaMask } from "@/web3-lib";

const store = useStore();
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  show: Boolean,
});
const emits = defineEmits(["handleShow"]);
const handleShow = () => {
  emits("handleShow", false);
};

const walletItems = ref([
  {
    src: new URL("../views/home/images/metamask.png", import.meta.url).href,
    title: "MetaMask",
  },
  {
    src: new URL("../views/home/images/phantom2.svg", import.meta.url).href,
    title: "WalletConnect",
  },
  {
    src: new URL("../views/home/images/phantom.png", import.meta.url).href,
    title: "Phantom",
  },
  {
    // src: require("@/views/home/images/walletconnect.svg"),
    title: "MetaMask",
  },
  {
    // src: require("@/views/home/images/walletconnect.svg"),
    title: "MetaMask",
  },
  {
    // src: require("@/views/home/images/walletconnect.svg"),
    title: "MetaMask",
  },
  {
    // src: require("@/views/home/images/walletconnect.svg"),
    title: "MetaMask",
  },
]);

const handleWalletBox = () => {
  var el = document.querySelector(".wallet-w");
  var inner = document.querySelector(".li-wrap");
  var top = document.querySelector(".option-top");
  top.classList.toggle("isActive");
  if (window.getComputedStyle(el).maxHeight === "300px") {
    el.style.maxHeight = inner.offsetHeight + 100 + "px";
  } else {
    el.style.maxHeight = "300px";
  }
};

const loginMetamask = () => {
  // console.log(isMetaMask(), "canLoginState", canLoginState.value);
  if (!isMetaMask()) {
    window.open(
      "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
    );
    return;
  }
  connectMetaMask().then((resp) => {
    console.log("Login EWallet", resp);
    dappStore.setMetaMaskLogin(resp);
    handleShow();
  });
  // .catch((ex) => {
  //   if (ex.code === 4001) {
  //     this.$message(this.$basTip.error($t("code.4001")));
  //   } else if (ex.code === -32601) {
  //     this.$message(this.$basTip.error($t("g.NetworkTimeout")));
  //   }
  // });
};

const connectWallet = async (index) => {
  switch (index) {
    case 0:
      loginMetamask();
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
  }
};
</script>

<style lang='less' scoped>
.wallet-pop.show {
  visibility: visible;
  opacity: 1;
  transition: all 0.3s ease-in-out;
}
.wallet-pop {
  transition: all 0.3s ease-in-out;
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  top: 0px;
  background: rgba(0, 0, 0, 0.87);
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: opacity;
  visibility: hidden;
  opacity: 0;

  &-box {
    position: relative;
    min-width: 32%;
    background: #181818;
    padding: 30px;
    border-radius: 10px;
    font-size: 26px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    text-align: center;

    &-off {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    &-title {
      font-size: 32px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 45px;
    }
    .wallet-w {
      width: 100%;
      margin-top: 30px;
      height: auto;
      max-height: 300px;
      transition: max-height 0.3s ease-in-out;
      overflow: hidden;
      &-li {
        width: 100%;
        display: flex;
        border-radius: 6px;
        background: #2e2e2e;
        margin-bottom: 20px;
        padding: 20px 30px;
        cursor: pointer;
        &-ava {
          width: 40px;
          height: 40px;
        }
        &:hover {
          background: #464646;
        }
      }
    }
    .option {
      display: flex;
      background: #2e2e2e;
      padding: 20px 30px;
      cursor: pointer;
      border-radius: 6px;
      &-top {
        transform: rotateZ(180deg);
        transition: all 0.1s ease-in-out;
      }
      &-top.isActive {
        transform: rotateX(0deg);
      }
    }
  }
}
@media screen and (max-width: 1680px) {
  .wallet-pop {
    &-box {
      padding: 20px;
      font-size: 22px;
      &-off {
        top: 5px;
        right: 5px;
        width: 18px;
        height: 18px;
      }
      &-title {
        line-height: 1.5px;
      }
      .wallet-w {
        margin-top: 10px;
        &-li {
          margin-bottom: 13px;
          padding: 13px 20px;
          &-ava {
            width: 25px;
            height: 25px;
          }
        }
      }
      .option {
        padding: 13px 20px;
        &-top {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .wallet-pop {
    &-box {
      padding: 20px;
      font-size: 18px;
      &-off {
        top: 5px;
        right: 5px;
        width: 18px;
        height: 18px;
      }
      &-title {
        font-size: 20px;
        line-height: 1.5px;
      }
      .wallet-w {
        margin-top: 10px;
        &-li {
          margin-bottom: 13px;
          padding: 5px 20px;
          &-ava {
            width: 20px;
            height: 20px;
          }
        }
      }
      .option {
        padding: 5px 20px;
        &-top {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>