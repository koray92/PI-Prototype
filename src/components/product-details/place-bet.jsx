import { useEffect, useState } from "react";
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
const ethers = require('ethers');

const PlaceBet = ({ highest_bid, auction_date, btnColor, className }) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const [userBalancefloat, setUserBalancefloat] = useState(0);
    const HTTP_WEB3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://goerli.infura.io/v3/53987d06438846efb4411f45609e07e1"
      )
    );

    const domain = {
        name: "Redeemer", //sabit
        version: '5', //sabit
        chainId: 6382,  //hangi chain kullanılıyorsa o chainin idsi
        verifyingContract: '0xbc562510b03cc2fBe380B3a058d7920887863176'  //nft market adresi
    }

    const types = {
        Permit : [
            {name: "owner", type: "address"},
            {name: "receiver", type: "address"},
            {name: "value", type: "uint256"},
            {name: "id", type: "uint256"},
            {name: "startTime", type: "uint256"},
            {name: "endTime", type: "uint256"},
            {name: "nonce", type: "uint256"}
        ]
    }
    console.log(Web3.utils.sha3("Permit(address owner,address receiver,uint256 value,uint256 id,uint256 startTime,uint256 endTime,uint256 nonce)"))
    const value = {
        owner: '0xB7c9b4edc3F30E5fd6B2a116304A1B0DEefAc2b4',  //satan
        receiver: '0x985376c953ab63F7C5466D82a2EE2341dF76a90d', //alan
        value: '2000000000000000000', //fiyat
        id: '1', //nft id
        startTime: '1672872773',  //açık artırma başlangıç saat
        endTime: '1672873013', //bitiş
        nonce: '0' //bu otomatik artacak şimdilik 0
    }
    const sign = async () => {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const wallet = provider.getSigner();

        const contract =await new HTTP_WEB3.eth.Contract(nftabi, '0x6115e0AFDd2de935caFa40C714D98708dc70818D');
        const signature = await wallet._signTypedData(domain, types, value);
        let sig = ethers.utils.splitSignature(signature);
        //signature değişkeni signature üretir sig ise v, r, s değerlerine parçalanmış hali. Biz parçalamayı kontratta yapıyoruz zaten
        console.log(signature)
        //aşağıdaki tuple verilen bidin bilgilerini ve signaturei içeriyor. satan kişi fullfillbasicorder metodunu bu tarz argümanlarla çağırınca satışı tamamlamış oluyor
        //["0xB7c9b4edc3F30E5fd6B2a116304A1B0DEefAc2b4",   "0x985376c953ab63F7C5466D82a2EE2341dF76a90d",    "2000000000000000000",    "1",     "1672872773",   "1672873013",  "0x9167b57c3784849f856ca54a3bbda019ec75c8497a8402164b47e7c8c50b71161433d8c8284e58ce9c8ab7733dc30db41677a08608119a353bd34b0c828f63a01c" ]
        const res = await contract.methods.recover(sig.v, sig.r, sig.s, ["0xB7c9b4edc3F30E5fd6B2a116304A1B0DEefAc2b4",   "0x985376c953ab63F7C5466D82a2EE2341dF76a90d",    "2000000000000000000",    "1",     "1672872773",   "1672873013",  "0x9167b57c3784849f856ca54a3bbda019ec75c8497a8402164b47e7c8c50b71161433d8c8284e58ce9c8ab7733dc30db41677a08608119a353bd34b0c828f63a01c" ]).call()
        console.log(res);
    }

    const conn = () => {
        if(window.ethereum){
            window.ethereum.request({method:'eth_requestAccounts'})
              .then(res=>{
                  // Return the address of the wallet
                  console.log(res)
              })
        }else{
            alert("install metamask extension!!")
        }
    }
    useEffect(() => {
        const userBalance = async () => {
            const balance = await HTTP_WEB3?.eth.getBalance(
              window?.ethereum.selectedAddress
            );
            const ethBalance = Web3?.utils.fromWei(balance, "ether");
            setUserBalancefloat(parseFloat(ethBalance).toFixed(3));
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
        var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
        var year = date.getFullYear();
// Minutes part from the timestamp
        var month =date.getMonth();
// Seconds part from the timestamp
        var day = date.getDate();

// Will display time in 10:30:23 format
        var formattedTime = year + '-' + month+1 + '-' + day;
        return formattedTime;
    }
    return (
        <>
            <div className={clsx("place-bet-area", className)}>
                <div className="rn-bet-create">
                    <div className="bid-list winning-bid">
                        <h6 className="title"></h6>
                        <div className="top-seller-inner-one">
                            <div className="top-seller-wrapper">
                                {/*highest_bid.bidder?.image?.src && (
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
                                )*/}

                                <div className="top-seller-content">
                                    {/*<span className="heighest-bid">
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
                    {0 && (
                        <div className="bid-list left-bid">
                            <h6 className="title">Auction has ended {convertTime(auction_date)}</h6>
                            <Countdown className="mt--15" date={convertTime(auction_date)} />
                        </div>
                    )}
                </div>
                <p>You are about to purchase This Product Form Nuron</p>
                <div className="placebid-form-box">
                    <h5 className="title">Your bid</h5>
                    <div className="bid-content">
                        <div className="bid-content-top">
                            <div className="bid-content-left">
                                <input id="value" type="text" name="value" style={{background:"white",marginBottom:"10px"}} />
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
                        <Button size="medium" onClick={conn} style={{marginBottom:"22px"}} fullwidth>
                            Approve
                        </Button>

                        { <Button size="medium" onClick={sign} fullwidth>
                            Place a bid
                        </Button> }

                    </div>
                </div>
                <Button
                    color={btnColor || "primary-alta"}
                    className="mt--30"
                    onClick={handleBidModal}
                >
                    Place a Bid
                </Button>
            </div>
            <PlaceBidModal show={showBidModal} handleModal={handleBidModal} />
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
