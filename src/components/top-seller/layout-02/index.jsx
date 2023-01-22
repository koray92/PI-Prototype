import Image from "next/image";
import PropTypes from "prop-types";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import axios from "axios";
import { useEffect,useState } from "react";
import Web3 from "web3";
import nftabi from "../../../../server/subscribe/nftcontractabi";
import nftmarketabi from "../../../../server/subscribe/nftmarketplacecontractabi";
import wethabi from "../../../../server/subscribe/wethabi";
const TopSeller = ({ name,owner,receiver, time, path, image, eth, isVarified }) =>
 {
   const [transaction, setTransaction] = useState(null);
   const sellOrder = async () => {

     const HTTP_WEB3 = new Web3(
       new Web3.providers.HttpProvider(
         "https://goerli.infura.io/v3/53987d06438846efb4411f45609e07e1"
       )
     );
     const nftmarketContractAddress = "0x81692C9CceD929fC99149dD8018729cb832050dd";
     const nftmarketcontractobject = await new HTTP_WEB3.eth.Contract(
       nftmarketabi,
       nftmarketContractAddress
     );

     const res = await nftmarketcontractobject.methods
       .recover([transaction.wallet_id,transaction.receiver,transaction.price,transaction.nft_id,transaction.startTime,transaction.endTime,"0",transaction.signature])
       .call();
     console.log("res"+res);



     let data={
       owner:transaction.wallet_id,
       receiver:transaction.receiver,
       price:+transaction.price,
       nft_id:transaction.nft_id,
       startTime:transaction.startTime,
       endTime: transaction.endTime,
       nonce:0,
       signature:transaction.signature
     }

      // let encodeDatas = nftmarketcontractobject.methods.fullfillBasicOrder(["0x144aad362af3B71d42781f8f750777B3523c500B","0x144aad362af3B71d42781f8f750777B3523c500B","1000000000000000","1","1674213190","1676891590","0","0x6cc04d75f21e025a8d755bab111e15ff2ceb3fd439f01cf88817e0dc1394ad241b9111d47b368441684b186fe14950a2b907b25b76f67615b4edbf10c72ea2f71b"]);
     let encodeDatas = nftmarketcontractobject.methods.fullfillBasicOrder([data.owner,data.receiver,data.price,data.nft_id,data.startTime,data.endTime,"0",data.signature]);
     const tx = ethereum
       .request({
         method: 'eth_sendTransaction',
         params: [
           {
             from: data.owner,
             to: nftmarketContractAddress,
             value: '0x0',
             data: encodeDatas.encodeABI()
           },
         ],
       })
       .then((txHash) => {
           console.log(txHash);
         }
       )
       .catch((error) => {
         alert(`Error sending transaction: ${error.code}: ${error.message}`);
       });

   };
   useEffect(() => {
     const x = async() => {
       let data={
         "wallet_id":owner,
         "price":eth
       }
       await axios
         .post("/api/auth/getsignature", data)
         .then((response) => {
           setTransaction(response.data[0]);
           console.log(response.data)
         })
         .catch((error) => {
           console.log(error);
         });

     }
     x();
   }, []);


  return (
    <div className="top-seller-inner-one">
      <div className="top-seller-wrapper">
        {image?.src && (
          <div className={clsx("thumbnail", isVarified && "varified")}>

            <Image
              src={image.src}
              alt={image?.alt || "Nft_Profile"}
              width={image?.width || 50}
              height={image?.height || 50}
              layout="fixed"
            />

          </div>
        )}

        <div className="top-seller-content">
                <span>

                    <span style={{ color: "white", fontSize: "20px" }}>{ <>{Web3.utils.fromWei(eth.toString(),"ether") + " ETH"}   </>}</span>
                    <span style={{ fontSize: "18px" }}>{"by  "}</span>

                    <span style={{ color: "white", fontSize: "17px" }}>{owner}</span>

                </span>
          {time &&
            <span className="count-number" style={{ color: "white", fontSize: "18px" }}>{"Bid date: "}{time}</span>}

        </div>
      </div>
      {/*
        <Button
          size="medium"
          style={{ marginBottom: "22px" }}
          onClick={sellOrder}
          fullwidth
        >
          Sell
        </Button>
      */}
    </div>
  );
}
TopSeller.propTypes = {
    name: PropTypes.string.isRequired,
    time: PropTypes.string,
    path: PropTypes.string.isRequired,
    eth: PropTypes.string,
    image: PropTypes.shape({
        src: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string])
            .isRequired,
        alt: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
    isVarified: PropTypes.bool,
};

export default TopSeller;
