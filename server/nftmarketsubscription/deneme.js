const ethers = require('ethers');

const provider = new ethers.providers.JsonRpcProvider('https://rpc.metatime.com/elanor')
const web3 = require('web3')
const deneme =async () => {
    const wallet = new ethers.Wallet('0x2d246be24d07568fec04d868a0e86cccf92b43dd247ab538e0cb71f17be042a2', provider)
    const obj =
        {value:  '0x0', sender: '0xB7c9b4edc3F30E5fd6B2a116304A1B0DEefAc2b4', id: '0x1'}
    const message = JSON.stringify(obj);
    console.log(message)
    const signature = await wallet.signMessage(message);
    let sig = ethers.utils.splitSignature(signature);
    console.log(sig)


}
deneme()
