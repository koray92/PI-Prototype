const Web3 = require("web3");
const abi = require("./nftmarketplacecontractabi.js");

const WS_WEB3 = new Web3(
    new Web3.providers.WebsocketProvider(
        "wss://goerli.infura.io/ws/v3/53987d06438846efb4411f45609e07e1"
    )
);
const address = "0xbC286fc9Ca7d4cb7379E0ab116F9475bCbAa3C7b";

const main = async () => {
    async function subscription() {
        const contractObject = new WS_WEB3.eth.Contract(
            abi,
            Web3.utils.toChecksumAddress(address)
        );
        let id = "";
        let from = "";
        let to = "";
        let price = "";
        const dataTest = await contractObject.events
            .Buy(() => {})
            .on("data", async (data) => {
                const arguments = data.returnValues.arguments
                id = data.returnValues.id;
                from = data.returnValues.owner;
                to = data.returnValues.reception;
                price = data.returnValues.price;
                console.log("nft id:"+id+"from"+from+"to"+to+"price"+price);
            });
        async function getEvents() {
            let latest_block = await Web3.eth.getBlockNumber();
            let historical_block = latest_block - 10000; // you can also change the value to 'latest' if you have a upgraded rpc
            console.log("latest: ", latest_block, "historical block: ", historical_block);
            const events = await contract.getPastEvents(
              'Transfer', // change if your looking for a different event
              { fromBlock: historical_block, toBlock: 'latest' }
            );
            await getTransferDetails(events);
        };
        async function getTransferDetails(data_events) {
            for (i = 0; i < data_events.length; i++) {
                let from = data_events[i]['returnValues']['from'];
                let to = data_events[i]['returnValues']['to'];
                let amount = data_events[i]['returnValues']['amount'];
                let converted_amount = web3.utils.fromWei(amount);
                if (converted_amount > 32) { //checking for transcations with above 32 eth as an example
                    console.log("From:", from, "- To:", to, "- Value:", converted_amount);
                }
            };
        };
    }
    subscription();
};
main();
