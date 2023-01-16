import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Topside from "@components/dashboard/transcations/dashboard-top";
import Listingtable from "@components/dashboard/transcations/dashboard-listing-table";
import Soldtable from "@components/dashboard/transcations/dashboard-sold-table";
import ChatFriends from "@components/dashboard/chat-friends";
import React, { useContext, useState } from "react";
import Chart from "@components/chart";

const Transactions = (className) => (
    <Wrapper>
        <SEO pageTitle="About" />
        <Header />
        <main id="main-content">
          <h1 className="text-center mt-5"> Chat</h1>
            <div className="d-flex justify-content-center mt-5">
                <ChatFriends />
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
