import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Topside from "@components/dashboard/dashboard-top";
import Listingtable from "@components/dashboard/dashboard-listing-table";
import Soldtable from "@components/dashboard/dashboard-sold-table";
import React, { useContext, useState } from "react";
import Chart from "@components/chart";

const Transactions = (className) => (
    <Wrapper>
        <SEO pageTitle="About" />
        <Header />
        <main id="main-content">
            <Topside />
            <div className="d-flex justify-content-center">
                <Listingtable />
                <Soldtable />
            </div>
            <h1 className="text-center mt-5">User Earn Chart (ETH)</h1>
            <Chart />
        </main>
        <Footer />
    </Wrapper>
);
export async function getStaticProps() {
    return {
        props: {
            className: "template-color-1",
        },
    };
}
export default Transactions;
