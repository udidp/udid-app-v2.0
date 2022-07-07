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
          to: '/domains',
          name: 'Domains',
          i18n: 'domains'
        },
        {
          to: '/account',
          name: 'Dccount',
          i18n: 'account'
        },
        {
          to: '/favourites',
          name: 'Favourites',
          i18n: 'favourites'
        },
        {
          to: '/faq',
          name: 'Faq',
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
