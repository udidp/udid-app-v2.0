import { checkSupport, getNetworkName } from '@/web3-lib/networks'

export default {
  web3State: (state) => {
    return {
      injected: Boolean(state.injected),
      chainId: state.chainId,
      wallet: state.walletAddress,
      network: getNetworkName(state.chainId)
    }
  }
}
