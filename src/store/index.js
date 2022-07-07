import { defineStore } from 'pinia'
import { storeName } from './store-name'

import { useDappStore } from './dapp'

import { checkSupport, getNetworkName } from '@/web3-lib/networks'

export const dappStore = useDappStore()

export const useStore = defineStore(storeName.ROOTSTORE, {
  state: () => {
    return {
      isLogin: true,
      rootNav: [
        {
          to: 'domains',
          name: 'domains',
          i18n: 'domains'
        },
        {
          to: 'account',
          name: 'account',
          i18n: 'account'
        },
        {
          to: 'favourites',
          name: 'favourites',
          i18n: 'favourites'
        },
        {
          to: 'faq',
          name: 'faq',
          i18n: 'faq'
        }
      ]
    }
  },
  getters: {
    metaMaskDisabled() {
      const chainId = dappStore.chainId
      const wallet = dappStore.walletAddress
      const spFlag = checkSupport(chainId)
      if (dappStore.injected || !chainId || !wallet || !spFlag) {
        return true
      } else {
        return false
      }
    }
  },
  actions: {}
})

export default {
  dappStore
}
