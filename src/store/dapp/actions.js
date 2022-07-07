import * as types from './dapp-types'
import Cookies from 'js-cookie'

export default {
  [types.SET_INJECTED](state, injected) {
    state.injected = injected
  },
  [types.SET_METAMASK_LOGIN](payload) {
    this.chainId = payload.chainId || null
    this.walletAddress = payload.wallet || null
    console.log(this)
    if (payload.chainId)
      Cookies.set(types.LAST_CHAINID_KEY, payload.chainId, { expires: 1 })
  },
  [types.UPDATE_CHAINID](state, chainId) {
    console.log(chainId)
    state.chainId = chainId
    if (chainId) Cookies.set(types.LAST_CHAINID_KEY, chainId, { expires: 1 })
  },
  [types.CLEAN_WEB3_STATE](state) {
    this.chainId = null
    this.wallet = null
  }
}
