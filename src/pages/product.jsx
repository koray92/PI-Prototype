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
    const nftcontractadress = "0x6115e0AFDd2de935caFa40C714D98708dc70818D";
    const nftmarketcontractadress =
        "0xbc562510b03cc2fBe380B3a058d7920887863176";
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
            for (let i = 1; i < 5; i++) {
                const call = await nftcontractobject.methods.tokenURI(i).call();
              fetch(call).then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error('Something went wrong');
              })
                .then((responseJson) => {
                  console.log(responseJson.attributes[0].value);
                  const obje = {
                    "nftid": i,
                    "rarity":responseJson.attributes[0].value,
                    "slug":responseJson.attributes[0].value,
                    "name":responseJson.name,
                    "images": [
                      {
                        "src": responseJson.image,
                      },
                      {
                        "src": responseJson.image,
                      },
                      {
                        "src": responseJson.image,
                      }
                    ],
                  };
                  obje2.push(obje);
                })
                .catch((error) => {
                  console.log(error)
                });

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
                <Breadcrumb pageTitle="Our Product" currentPage="Our Product" />

                <ProductArea data={{ products: nfts }} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Product;
