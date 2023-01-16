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
            const obje2 = [];
            for (let i = 1; i < 5; i++) {
                const call = await nftcontractobject.methods.tokenURI(i).call();
                fetch(call)
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                        throw new Error("Something went wrong");
                    })
                    .then((responseJson) => {
                        console.log(responseJson.attributes[0].value);
                        if(params.slug == responseJson.attributes[0].value) {
                            const obje = {
                                "nftid": i,
                                "rarity": responseJson.attributes[0].value,
                                "slug": responseJson.attributes[0].value,
                                "name": responseJson.name,
                                "images": [
                                    {
                                        src: responseJson.image,
                                    },
                                    {
                                        src: responseJson.image,
                                    },
                                    {
                                        src: responseJson.image,
                                    },
                                ],
                            };
                            obje2.push(obje);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
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
