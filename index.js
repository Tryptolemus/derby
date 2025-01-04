const { GalaWallet } = require('@gala-chain/sdk');

async function connectWallet() {
  const wallet = await GalaWallet.connect();
  console.log('Connected wallet:', wallet.address);
}

connectWallet();
