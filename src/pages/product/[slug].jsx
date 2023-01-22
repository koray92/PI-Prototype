import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ProductDetailsArea from "@containers/product-details";
import ProductArea from "@containers/product/layout-03";
import { shuffleArray } from "@utils/methods";
import Web3 from "web3";
import { useEffect, useState } from "react";
import nftabi from "../../../server/subscribe/nftcontractabi";
import nftmarketabi from "../../../server/subscribe/nftmarketplacecontractabi";
// demo data
import productData from "../../data/products.json";

const ProductDetails = ({
    product,
    params,
    recentViewProducts,
    relatedProducts,
}) => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://goerli.infura.io/v3/53987d06438846efb4411f45609e07e1"
      )
    );
    const nftcontractadress = "0xEF417241bf2D8bC1c7C146a57F1ec627D46582A5";
    const nftmarketcontractadress =
        "0x58BA460be663055720AFBFd0036bd26C1e217BC2";
    const [nfts, setNfts] = useState([]);
    const [receiver,setReceiver] =useState(null);
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
            for (let i = 0; i < 3; i++) {
                //const call = await nftcontractobject?.methods?.tokenURI(1)?.call();

                if(i==0 && parseInt(params.slug)==0) {
                    const obje = {
                        "nftid": i,
                        "rarity": "Uncommon",
                        "slug": i + "",
                        "name": "Handgun",
                        "images": [
                            {
                                "src": "https://i.ibb.co/48r9jxF/NFT-Handgun.jpg",
                            },
                            {
                                "src": "https://i.ibb.co/48r9jxF/NFT-Handgun.jpg",
                            },
                            {
                                "src": "https://i.ibb.co/48r9jxF/NFT-Handgun.jpg",
                            }
                        ],
                    };
                    obje2.push(obje);
                }
                if(i==1 && parseInt(params.slug)==1) {
                    const obje = {
                        "nftid": i,
                        "rarity": "Unique",
                        "slug": i + "",
                        "name": "Rocket Launcher",
                        "images": [
                            {
                                "src": "https://i.ibb.co/NVpswQf/NFT-Rocket-Launcher.jpg",
                            },
                            {
                                "src": "https://i.ibb.co/NVpswQf/NFT-Rocket-Launcher.jpg",
                            },
                            {
                                "src": "https://i.ibb.co/NVpswQf/NFT-Rocket-Launcher.jpg",
                            }
                        ],
                    };
                    obje2.push(obje);
                }
                if(i==2 && parseInt(params.slug)==2) {
                    const obje = {
                        "nftid": i,
                        "rarity": "Common",
                        "slug": i + "",
                        "name": "Knife",
                        "images": [
                            {
                                "src": "https://i.ibb.co/876hchy/NFT-knife.jpg",
                            },
                            {
                                "src": "https://i.ibb.co/876hchy/NFT-knife.jpg",
                            },
                            {
                                "src": "https://i.ibb.co/876hchy/NFT-knife.jpg",
                            }
                        ],
                    };
                    obje2.push(obje);
                }


            }
            console.log(nfts);
            setNfts(obje2);
        };
        sign();
    }, []);
    useEffect(() => {

    },[nfts]);
    return (
        <Wrapper>
            <SEO pageTitle="Product Details" />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle="Product Details"
                    currentPage="Product Details"
                />


          <ProductDetailsArea product={nfts[0]} />

            </main>
            <Footer />
        </Wrapper>
    );
};
export async function getServerSideProps(context) {
    const { params } = context;
    return {
        props: {
            params,
            className: "template-color-1",
        },
    };
    // Rest of `getServerSideProps` code
}

ProductDetails.propTypes = {
    product: PropTypes.shape({}),
    recentViewProducts: PropTypes.arrayOf(PropTypes.shape({})),
    relatedProducts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ProductDetails;
