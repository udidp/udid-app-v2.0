import { defineStore } from 'pinia'
import { storeName } from '../store-name'
import actions from './actions'
import getters from './getters'
export const useDappStore = defineStore(storeName.DAPPSTORE, {
  state: () => {
    return {
      injected: false,
      walletAddress: null,
      chainId: null
    }
  },
  getters,
  actions
})
