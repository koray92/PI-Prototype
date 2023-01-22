import PropTypes from "prop-types";
import clsx from "clsx";
import Sticky from "@ui/sticky";
import Button from "@ui/button";
import GalleryTab from "@components/product-details/gallery-tab";
import ProductTitle from "@components/product-details/title";
import ProductCategory from "@components/product-details/category";
import ProductCollection from "@components/product-details/collection";
import BidTab from "@components/product-details/bid-tab";
import PlaceBet from "@components/product-details/place-bet";
import { ImageType } from "@utils/types";
import Web3 from "web3";
import nftabi from "../../../server/subscribe/nftcontractabi";
import nftmarketabi from "../../../server/subscribe/nftmarketplacecontractabi";
import { useEffect, useState } from "react";
import axios from "axios";

// Demo Image

const ProductDetailsArea = ({ space, className, product }) => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://goerli.infura.io/v3/53987d06438846efb4411f45609e07e1"
      )
    );
    const nftcontractadress = "0x91e4B151198FFF14AAC0040574992bb3889cA3aC";
    const nftmarketcontractadress =
      "0x81692C9CceD929fC99149dD8018729cb832050dd";
    const [bidss, setBidss] = useState([]);
    const [bidsowner, setBidsowner] = useState([]);
    const [walletaddress,setWalletaddress]=useState([]);
    useEffect(() => {
        const sign = async () => {
            const nftcontractobject = await new web3.eth.Contract(
              nftabi,
              nftcontractadress
            );
            const nftmarketcontractobject = await new web3.eth.Contract(
              nftmarketabi,
              nftmarketcontractadress
            );
            const obje2 = [];
            //const bidsrequest= await nftmarketcontractobject.methods.getAllAuctions().call();
          // const bidsrequest= await nftmarketcontractobject.methods.getAllListedNfts().call();
          await nftmarketcontractobject.methods.getAllListedNfts().call()
            .then((response) => {
                console.log(response.filter(person => person.id == product?.nftid)[0]?.price);
                console.log("bu oc **");
                setBidsowner(response);

            })
            .catch((error) => {
              console.log(error);
            });

        };
        sign();
    }, [bidss,product]);
  useEffect(() => {
    const getBids = async () => {
      console.log("getbidss");
      console.log(bidss);
      const data={
         "nft_id":product?.nftid,
         "wallet_id":bidsowner?.filter(person => person.id == product?.nftid)[0]?.owner
      }
      await axios
        .post("/api/auth/getbids", data)
        .then((response) => {
          setBidss(response.data);

        })
        .catch((error) => {
          console.log(error);
        });
    }
    getBids();
    if (typeof window !== "undefined") {
      setWalletaddress(web3.utils.toChecksumAddress(window?.ethereum.selectedAddress));
    }
  },[product]);
    return (
      <div
        className={clsx(
          "product-details-area",
          space === 1 && "rn-section-gapTop",
          className
        )}
      >

          <div className="container">
              <div className="row g-5">
                  <div className="col-lg-7 col-md-12 col-sm-12">
                      <Sticky>
                          <GalleryTab images={product?.images} />
                      </Sticky>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                      <div className="rn-pd-content-area">
                          <ProductTitle
                            title={product?.name}
                            likeCount={100}
                          />
                          <span className="bid">
                            <span className="price">
                            </span>
                        </span>
                          <h6 className="title-name">{"İtem Power:  " + product?.rarity}</h6>
                          <div className="catagory-collection">
                          </div>
                          <div className="rn-bid-details">
                            <BidTab
                                bids={bidss}
                            />

                            {/*  bid sistemi parametreleri
                            <PlaceBet
                                owner={bidsowner?.filter(person => person.id == product?.nftid)[0]?.owner}
                                price={bidsowner?.filter(person => person.id == product?.nftid)[0]?.price}
                                startTime={bidsowner?.filter(person => person.id == product?.nftid)[0]?.startTime}
                                endTime={bidsowner?.filter(person => person.id == product?.nftid)[0]?.endTime}
                                auction_date={"2022-02-10"}
                                receiver={walletaddress}
                                nftid={product?.nftid}
                                highest_bid={22}
                              />
                              */
                              }
                              <PlaceBet
                                owner={bidsowner?.filter(person => person.id == product?.nftid)[0]?.owner}
                                price={bidsowner?.filter(person => person.id == product?.nftid)[0]?.price}
                                islisted={bidsowner?.filter(person => person.id == product?.nftid)[0]?.isListed}
                                receiver={walletaddress}
                                nftid={product?.nftid}
                              />
                            {/*
                                bidss?.filter(person =>  person.id == product?.nftid)[0]?.endTime
                                */
                            }


                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );

    ProductDetailsArea.propTypes = {
        space: PropTypes.oneOf([1, 2]),
        className: PropTypes.string,
        product: PropTypes.shape({
            title: PropTypes.string.isRequired,
            likeCount: PropTypes.number,
            price: PropTypes.shape({
                amount: PropTypes.number.isRequired,
                currency: PropTypes.string.isRequired,
            }).isRequired,
            owner: PropTypes.shape({}),
            collection: PropTypes.shape({}),
            bids: PropTypes.arrayOf(PropTypes.shape({})),
            properties: PropTypes.arrayOf(PropTypes.shape({})),
            tags: PropTypes.arrayOf(PropTypes.shape({})),
            history: PropTypes.arrayOf(PropTypes.shape({})),
            highest_bid: PropTypes.shape({}),
            auction_date: PropTypes.string,
            images: PropTypes.arrayOf(ImageType),
        }),
    };
}

ProductDetailsArea.defaultProps = {
    space: 1,
};

export default ProductDetailsArea;
