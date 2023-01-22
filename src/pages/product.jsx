import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ProductArea from "@containers/explore-product/layout-01";
import Web3 from "web3";
import { useEffect, useState } from "react";
import nftabi from "../../server/subscribe/nftcontractabi";
import nftmarketabi from "../../server/subscribe/nftmarketplacecontractabi";
// Demo Data
import productData from "../data/products.json";


const web3 = new Web3(
    new Web3.providers.HttpProvider(
        "https://goerli.infura.io/v3/53987d06438846efb4411f45609e07e1"
    )
);

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Product = () => {
    const nftcontractadress = "0xEF417241bf2D8bC1c7C146a57F1ec627D46582A5";
    const nftmarketcontractadress =
        "0x58BA460be663055720AFBFd0036bd26C1e217BC2";
    const [nfts, setNfts] = useState([]);
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
            let obje2 = [];
            for (let i = 0; i < 3; i++) {
                //const call = await nftcontractobject?.methods?.tokenURI(1)?.call();

              if(i==0) {
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
              if(i==1) {
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
              if(i==2) {
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
            console.log(obje2);
            setNfts(obje2);
        };
        sign();

    },[]);
    return (
        <Wrapper>
            <SEO pageTitle="Product" />
            <Header />

            <main id="main-content">
                <Breadcrumb pageTitle="Nft Marketplace" currentPage="Nft Marketplace" />

                <ProductArea data={{ products: nfts }} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Product;
