import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Topside from "@components/dashboard/transcations/dashboard-top";
import Listingtable from "@components/dashboard/transcations/dashboard-listing-table";
import Soldtable from "@components/dashboard/transcations/dashboard-sold-table";
import React, { useContext, useState } from "react";
import Chart from "@components/chart";
import Breadcrumb from "@components/breadcrumb";

const Transactions = (className) => (
    <Wrapper>
        <SEO pageTitle="About" />
        <Header />
        <main id="main-content">
          <Breadcrumb pageTitle="Transactions" currentPage="Transactions" />
            <Topside />

          <div className="">
            <div className="transactionstables-container">
                <Listingtable />
                <Soldtable />
            </div>
          </div>
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
