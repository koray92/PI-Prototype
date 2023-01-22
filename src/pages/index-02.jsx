import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import HeroArea from "@containers/hero/layout-02";
import CreatorArea from "@containers/creator/layout-01";
import LiveExploreArea from "@containers/live-explore/layout-02";
import ServiceArea from "@containers/services/layout-01";
import NewestItmesArea from "@containers/product/layout-04";
import ExploreProductArea from "@containers/explore-product/layout-01";
import CollectionArea from "@containers/collection/layout-01";
import { normalizedData } from "@utils/methods";
import Web3 from "web3";
// Demo data
import { useEffect, useState } from "react";
import axios from "axios";
import homepageData from "../data/homepages/home-02.json";
import sellerData from "../data/sellers.json";
import productData from "../data/products.json";
import collectionsData from "../data/collections.json";
import abiNft from "../../server/subscribe/nftcontractabi.js";
import abiMarket from "../../server/subscribe/nftmarketplacecontractabi";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home02 = () => {
    const [nfts, setNfts] = useState(null);
    const content = normalizedData(homepageData?.content || []);
    const HTTP_WEB3 = new Web3(
        new Web3.providers.HttpProvider(
            "https://goerli.infura.io/v3/53987d06438846efb4411f45609e07e1"
        )
    );
    const nftContractAddress = "0x6115e0AFDd2de935caFa40C714D98708dc70818D";
    const nftMarketContractAddress =
        "0x8B29Ad551d044E81d38C752A7748D015b25Ca8cE";
    const nftContractObject = new HTTP_WEB3.eth.Contract(
        abiNft,
        Web3.utils.toChecksumAddress(nftContractAddress)
    );
    const nftMarketContractObject = new HTTP_WEB3.eth.Contract(
        abiMarket,
        Web3.utils.toChecksumAddress(nftMarketContractAddress)
    );
  function fetchUrl(url) {
    const obje=null;

    return obje;
  }
    useEffect(() => {
        const getNfts = async () => {
            const latest_block = await HTTP_WEB3.eth.getBlockNumber();
            const totalsupply = await nftContractObject.methods
                .totalSupply()
                .call();

          const url2 = await nftContractObject.methods.totalSupply().call();
            for (let i=1;i<4;i++) //totalsupply
            {
              const url = await nftContractObject.methods.tokenURI(i).call();
              fetch(url)
                .then((res) => res.json())
                .then((res) => {
                  console.log(res);
                  console.log(obje.image+"-");
                })
                .catch((err) => console.error(err));

            }
        };
        getNfts();

        /* if(window.ethereum)
      {
      //nftContractObject.methods.totalSupply().call();
      } */
    });
    const liveAuctionData = productData
        .filter(
            (prod) =>
                prod?.auction_date && new Date() <= new Date(prod?.auction_date)
        )
        .sort(
            (a, b) =>
                Number(new Date(b.published_at)) -
                Number(new Date(a.published_at))
        )
        .slice(0, 5);
    const newestData = productData
        .sort(
            (a, b) =>
                Number(new Date(b.published_at)) -
                Number(new Date(a.published_at))
        )
        .slice(0, 5);

    return (
        <Wrapper>
            <SEO pageTitle="Home Two" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
                <CreatorArea
                    data={{
                        ...content["top-sller-section"],
                        creators: sellerData,
                    }}
                />

                <NewestItmesArea
                    data={{
                        ...content["newest-section"],
                        products: newestData,
                    }}
                />
                <LiveExploreArea
                    data={{
                        ...content["live-explore-section"],
                        products: liveAuctionData,
                    }}
                    gap={5}
                />
                <ServiceArea data={content["service-section"]} />
                <ExploreProductArea
                    data={{
                        ...content["explore-product-section"],
                        products: productData,
                    }}
                />
                <CollectionArea
                    data={{
                        ...content["collection-section"],
                        collections: collectionsData.slice(0, 4),
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home02;
