import React, { useEffect, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import Image from "next/image";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import PlaceBidModal from "@components/modals/placebid-modal";
import Countdown from "@ui/countdown/layout-02";
import { ImageType } from "@utils/types";
import Web3 from "web3";
import nftabi from "../../../server/subscribe/nftcontractabi";
import nftmarketabi from "../../../server/subscribe/nftmarketplacecontractabi";
import wethabi from "../../../server/subscribe/wethabi";
import axios from "axios";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';

import { prisma } from "../../../server/db/client";

const ethers = require("ethers");
const PlaceBet = ({
    highest_bid,
    owner,
    price,
    islisted,
    nftid,
    receiver,
    startTime,
    endTime,
    auction_date,
    btnColor,
    className,
}) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const [userBalancefloat, setUserBalancefloat] = useState(0);
    const [userAddress, setUserAddress] = useState(0);
    const [userName, setUserName] = useState(null);
    const [txhash, setTxhash] =useState("");
    const [bid, setBid] = useState(0);
    const HTTP_WEB3 = new Web3(
        new Web3.providers.HttpProvider(
            "https://goerli.infura.io/v3/53987d06438846efb4411f45609e07e1"
        )
    );


    const { data: session } = useSession();
    const domain = {
        name: "Redeemer", // sabit
        version: "1", // sabit
        chainId: 5, // hangi chain kullanılıyorsa o chainin idsi
        verifyingContract: "0x81692C9CceD929fC99149dD8018729cb832050dd"  // nft market adresi
    };

    const types = {
        Permit: [
            { name: "owner", type: "address" },
            { name: "receiver", type: "address" },
            { name: "value", type: "uint256" },
            { name: "id", type: "uint256" },
            { name: "startTime", type: "uint256" },
            { name: "endTime", type: "uint256" },
            { name: "nonce", type: "uint256" }
        ],
    };

    console.log(
        Web3.utils.sha3(
            "Permit(address owner,address receiver,uint256 value,uint256 id,uint256 startTime,uint256 endTime,uint256 nonce)"
        )
    );

    const wethcontractaddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
    const nftmarketContractAddress = "0x81692C9CceD929fC99149dD8018729cb832050dd";
    const sellnft = async () => {
        const nftmarketcontractobject = await new HTTP_WEB3.eth.Contract(
          nftmarketabi,
          nftmarketContractAddress
        );
        let encodeDatas = nftmarketcontractobject.methods.Sale(nftid);
        const tx = ethereum
          .request({
              method: 'eth_sendTransaction',
              params: [
                  {
                      from: Web3.utils.toChecksumAddress(window.ethereum.selectedAddress),
                      to: nftmarketContractAddress,
                      value: '0x' + (+price).toString(16),
                      data: encodeDatas.encodeABI()
                  },
              ],
          })
          .then((txHash) => {
                console.log(txHash);
                setTxhash(txHash);
            }
          )
          .catch((error) => {
              console.log(`Error sending transaction: ${error.code}: ${error.message}`);
          });



    };
    const approve = async () => {


        const wethcontract = await new HTTP_WEB3.eth.Contract(
            wethabi,
            wethcontractaddress
        );

        let encodeDatas = wethcontract.methods.approve(nftmarketContractAddress,Web3.utils.toWei(bid,"ether"));
        const tx = ethereum
          .request({
              method: 'eth_sendTransaction',
              params: [
                  {
                      from: Web3.utils.toChecksumAddress(window.ethereum.selectedAddress),
                      to: wethcontractaddress,
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
              console.log(`Error sending transaction: ${error.code}: ${error.message}`);
          });


    };
    const sellOrder = async () => {
        const nftmarketcontractobject = await new HTTP_WEB3.eth.Contract(
          nftmarketabi,
          nftmarketContractAddress
        );
        {/*
        const res = await nftmarketcontractobject.methods
          .recover(["0x144aad362af3B71d42781f8f750777B3523c500B","0x144aad362af3B71d42781f8f750777B3523c500B","1000000000000000","0","1674210730","1674901930","0","0x2cfade54bc4359c245c6f323de067f94c7b6b2351d26d71875c8d3ee76dd0fe40d5df2bfb5da70e0e5ef498f0a92c1929662ebbb240deb245918c8374b5bf7c91b"])
          .call();
        console.log("res"+res);
*/}
        let data={
            owner:owner,
            receiver:receiver,
            price:Web3.utils.toWei(bid,"ether"),
            nft_id:nftid,
            startTime:startTime,
            endTime: endTime,
            nonce:0,
            signature:"0x6cc04d75f21e025a8d755bab111e15ff2ceb3fd439f01cf88817e0dc1394ad241b9111d47b368441684b186fe14950a2b907b25b76f67615b4edbf10c72ea2f71b"
        }

      //  let encodeDatas = nftmarketcontractobject.methods.fullfillBasicOrder(["0x144aad362af3B71d42781f8f750777B3523c500B","0x144aad362af3B71d42781f8f750777B3523c500B","1000000000000000","1","1674213190","1676891590","0","0x6cc04d75f21e025a8d755bab111e15ff2ceb3fd439f01cf88817e0dc1394ad241b9111d47b368441684b186fe14950a2b907b25b76f67615b4edbf10c72ea2f71b"]);
        let encodeDatas = nftmarketcontractobject.methods.fullfillBasicOrder([data.owner,data.receiver,"1000000000000000",nftid,startTime,endTime,"0","0x6cc04d75f21e025a8d755bab111e15ff2ceb3fd439f01cf88817e0dc1394ad241b9111d47b368441684b186fe14950a2b907b25b76f67615b4edbf10c72ea2f71b"]);
        const tx = ethereum
          .request({
              method: 'eth_sendTransaction',
              params: [
                  {
                      from: receiver,
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
              console.log(`Error sending transaction: ${error.code}: ${error.message}`);
          });

    };
    const x = () => {

    }
    const sign = async () => {
        toast.success('Bid sended !', {
            position: toast.POSITION.TOP_RIGHT
        });

        let data={
            owner:owner,
            receiver:Web3.utils.toChecksumAddress(window.ethereum.selectedAddress),
            price:Web3.utils.toWei(bid,"ether"),
            nft_id:nftid,
            startTime:Date.now().toString(),
            endTime: "2022-1-2",
            signature:"0cx0zcx0xz0c0sda0das0ads0"
        }
        await axios
          .post("/api/auth/savesignature", data)
          .then((response) => {

          })
          .catch((error) => {
              console.log(error);
          });

        /*
        const value = {
            owner:owner, // satan
            receiver: receiver, // alan
            value: Web3.utils.toWei(bid,"ether"), // fiyat
            id: nftid, // nft id
            startTime: startTime, // açık artırma başlangıç saat
            endTime: endTime, // bitiş
            nonce: "0", // bu otomatik artacak şimdilik 0
        };
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const wallet = provider.getSigner();

        const contract = await new HTTP_WEB3.eth.Contract(
            nftmarketabi,
            "0xCF0295C1084f99bF561873Bf3FdFE213Be8178fe"
        );

        const signature = await wallet._signTypedData(domain, types, value);
        const sig = ethers.utils.splitSignature(signature);
        let data={
            owner:owner,
            receiver:receiver,
            price:Web3.utils.toWei(bid,"ether"),
            nft_id:nftid,
            startTime:startTime,
            endTime: endTime,
            signature
        }
        await axios
          .post("/api/auth/savesignature", data)
          .then((response) => {
              console.log(signature);
          })
          .catch((error) => {
              console.log(error);
          });
        // signature değişkeni signature üretir sig ise v, r, s değerlerine parçalanmış hali. Biz parçalamayı kontratta yapıyoruz zaten

        // aşağıdaki tuple verilen bidin bilgilerini ve signaturei içeriyor. satan kişi fullfillbasicorder metodunu bu tarz argümanlarla çağırınca satışı tamamlamış oluyor
        // ["0xB7c9b4edc3F30E5fd6B2a116304A1B0DEefAc2b4",   "0x985376c953ab63F7C5466D82a2EE2341dF76a90d",    "2000000000000000000",    "1",     "1672872773",   "1672873013",  "0x9167b57c3784849f856ca54a3bbda019ec75c8497a8402164b47e7c8c50b71161433d8c8284e58ce9c8ab7733dc30db41677a08608119a353bd34b0c828f63a01c" ]
        /*const res = await contract.methods
            .recover(sig.v, sig.r, sig.s, [
                "0xB7c9b4edc3F30E5fd6B2a116304A1B0DEefAc2b4",
                "0x985376c953ab63F7C5466D82a2EE2341dF76a90d",
                "2000000000000000000",
                "1",
                "1672872773",
                "1672873013",
                "0x9167b57c3784849f856ca54a3bbda019ec75c8497a8402164b47e7c8c50b71161433d8c8284e58ce9c8ab7733dc30db41677a08608119a353bd34b0c828f63a01c",
            ])
            .call();
        console.log(res);*/
    };

    const conn = () => {
        if (window.ethereum) {
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res)=> {
                    // Return the address of the wallet
                    console.log(res);
                });
        } else {
            alert("install metamask extension!!");
        }
    };
    useEffect(() => {
        const getusername = async() => {
            await axios
              .post("/api/auth/getWalletidtoUsername", { wallet_id : owner})
              .then((response) => {
                    console.log("response----");
                    console.log("response----");
                    console.log(response.data);
                    setUserName(response.data.users.user_name);
                    console.log("response---*****");
              })
              .catch((error) => {
                  console.log(error);
              });
        }
        getusername();
        const userBalance = async () => {
            const balance = await HTTP_WEB3?.eth.getBalance(
                window?.ethereum.selectedAddress
            );
            const ethBalance = Web3?.utils.fromWei(balance, "ether");
            setUserBalancefloat(parseFloat(ethBalance).toFixed(3));
            setUserAddress(Web3.utils.toChecksumAddress(window?.ethereum.selectedAddress));
            console.log(`-----${userBalance}---s-`);
        };
        userBalance();
    }, []);

    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };
    const convertTime = (unix_timestamp) => {
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        let date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        let year = date.getFullYear();
        // Minutes part from the timestamp
        let month = date.getMonth();
        // Seconds part from the timestamp
        let day = date.getDate();

        // Will display time in 10:30:23 format
        let formattedTime = `${year  }-${  month}${1  }-${  day}`;
        return formattedTime;
    };
    return (
        <>
            <div className={clsx("place-bet-area", className)}>
                <div className="rn-bet-create">
                    <div className="bid-list winning-bid">
                        <h6 className="title" />
                        <div className="top-seller-inner-one">
                            <div className="top-seller-wrapper">
                                {/* highest_bid.bidder?.image?.src && (
                                    <div className="thumbnail">
                                        <Anchor path={highest_bid.bidder.slug}>
                                            <Image
                                                src={
                                                    highest_bid.bidder.image.src
                                                }
                                                alt="Nft_Profile"
                                                width={44}
                                                height={44}
                                                layout="fixed"
                                            />
                                        </Anchor>
                                    </div>
                                ) */}

                                <div className="top-seller-content">
                                    {/* <span className="heighest-bid">
                                        Heighest bid{" "}
                                        <Anchor path={highest_bid.bidder.slug}>
                                            {highest_bid.bidder.name}
                                        </Anchor>
                                    </span>
                                    <span className="count-number">
                                        {highest_bid.amount}
                                    </span> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {false && (
                        <div className="bid-list left-bid">
                            <h6 className="title">
                                Auction has ended {convertTime(auction_date)}
                            </h6>
                            <Countdown
                                className="mt--15"
                                date={convertTime(auction_date)}
                            />
                        </div>
                    )}
                </div>

                {txhash != "" && (<Anchor path={"https://goerli.etherscan.io/tx/"+txhash}>
                      <div style={{marginBottom:"20px"}}>
                          <h5 style={{display:"inline-block"}}>Click for transaction: </h5>
                          <img
                            className=""
                            style={{marginLeft:"10px"}}
                            width="40px"
                            height="40px"
                            src="/images/icons/etherscan.png"
                          />
                      </div>

                  </Anchor>)
                }

                {session?.user.user_wallet_id == userAddress && owner!= undefined  && price!=0  ? (
                 <div className="placebid-form-box">
                     {
                          <h5 className="title">Sell price : {Web3.utils.fromWei(price)+" ETH"}</h5>

                     }
                     {
                         <h5 className="title">Seller : {"muratyvz13"}</h5>

                     }

                       <Button
                       color={btnColor || "primary-alta"}
                       className="mt--30"
                       style={{marginBottom:"20px"}}
                       onClick={sellnft}
                     >
                         Buy Nft

                     </Button>

                    <h5 className="title">Your bid</h5>

                    <div className="bid-content">
                        <div className="bid-content-top">
                            <div className="bid-content-left">
                                <input
                                    id="value"
                                    type="text"
                                    name="value"
                                    value={bid}
                                    onChange={e => setBid(e.target.value)}
                                    style={{
                                        background: "white",
                                        marginBottom: "10px",
                                    }}
                                />
                                <span>wETH</span>

                            </div>

                        </div>

                        <div className="bid-content-mid">
                            <div className="bid-content-left">
                                <span>Your Balance</span>
                            </div>
                            <div className="bid-content-right">
                                <span>{userBalancefloat}</span>
                            </div>
                        </div>
                    </div>
                    <div className="bit-continue-button">

                        <Button size="medium" onClick={sign} fullwidth>
                            Place a bid
                        </Button>


                    </div>

                 </div>) : (( (owner!= undefined) ? (price!=0 ?(<h4>Please use your saved wallet.</h4>) : <h4>Solded</h4>) : <h4>Solded</h4> ))}


            </div>
            {
                /* <PlaceBidModal show={showBidModal} handleModal={handleBidModal} />

                 */
                }

        </>
    );
};

PlaceBet.propTypes = {
    highest_bid: PropTypes.shape({
        amount: PropTypes.string,
        bidder: PropTypes.shape({
            name: PropTypes.string,
            image: ImageType,
            slug: PropTypes.string,
        }),
    }),
    auction_date: PropTypes.string,
    btnColor: PropTypes.string,
    className: PropTypes.string,
};

export default PlaceBet;

