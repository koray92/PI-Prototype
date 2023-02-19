import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Topside from "@components/dashboard/overview/dashboard-top";
import React, { useContext, useState } from "react";
import Chart from "@components/chart";
import Breadcrumb from "@components/breadcrumb";

const Overview = (className) => (
    <Wrapper>
        <SEO pageTitle="About" />

        <Header />
        <Breadcrumb pageTitle="Overview" currentPage="Overview" />
        <main id="main-content">
            <Topside />
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
export default Overview;
