import clsx from "clsx";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboardcard from "../dashboardcard";
import Web3 from "web3";

const topside = () => {
    const [userBalance, setUserBalance] = useState(0);
    const [totalEarning, setTotalEarning] = useState("");
    const HTTP_WEB3 = new Web3(
        new Web3.providers.HttpProvider(
            "https://goerli.infura.io/v3/53987d06438846efb4411f45609e07e1"
        )
    );
    const { data: session } = useSession();
    useEffect(() => {
        const userBalance = async () => {
            const balance = await HTTP_WEB3?.eth.getBalance(
                window?.ethereum.selectedAddress
            );
            const ethBalance = Web3?.utils.fromWei(balance, "ether");
            setUserBalance(parseFloat(ethBalance).toFixed(3));
            console.log(`-----${userBalance}---s-`);
        };
        const getTotalSale = async () => {
            await axios
                .post("/api/auth/totalsale", {
                    user_id: session?.user.user_id,
                })
                .then((response) => {
                    const totalEarn = response.data;
                    setTotalEarning(totalEarn);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        getTotalSale();
        userBalance();
    }, [userBalance, totalEarning]);
    return (
        <div>
            <div className="dashboard-top" style={{ border: "none" }}>
                <div className="d-flex border border-5 p-5 rounded-pill mt-5 bg-color--2">
                    <div className="me-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="dashboard-top-icon"
                        >

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </div>
                    <Dashboardcard />
                    <div>
                        <h5 className="dashboard-top-element-top-text mb-0 pb-1 text-secondary">
                            Username:
                        </h5>
                        <h3 className="mt-0 text-center">
                            {session?.user.user_name}
                        </h3>
                    </div>
                </div>
                <div className="d-flex border border-5 p-5 rounded-pill mt-5 bg-color--2">
                    <div className="me-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="dashboard-top-icon color-green"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                        </svg>
                    </div>

                    <div>
                        <h5 className="dashboard-top-element-top-text mb-0 pb-1 text-secondary">
                            User Balance:
                        </h5>
                        <h3 className="mt-0 text-center">{userBalance} ETH</h3>
                    </div>
                </div>
                <div className="d-flex border border-5 p-5 rounded-pill mt-5 bg-color--2">
                    <div className="me-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="dashboard-top-icon color-yellow"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                            />
                        </svg>
                    </div>
                    <div>
                        <h6 className="dashboard-top-element-top-text mb-0 pb-1 text-secondary">
                            Amount of PIX:
                        </h6>
                        <h3 className="mt-0 text-center dashboard-top-element-bot-text ">
                            99 PIX
                        </h3>
                        <h5 className="ms-3 mt-0 text-center dashboard-top-element-bot-text text-secondary">
                            ($ 99)
                        </h5>
                    </div>
                </div>

                <div className="d-flex border border-5 p-5 rounded-pill mt-5 bg-color--2">
                    <div className="me-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="dashboard-top-icon color-green"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <div>
                        <h6 className="dashboard-top-element-top-text mb-0 pb-1 text-secondary">
                            Total Earnings:
                        </h6>
                        <h3 className="mt-0 text-center dashboard-top-element-bot-text ">
                            {totalEarning} ETH
                        </h3>
                        <h5 className="ms-3 mt-0 text-center dashboard-top-element-bot-text text-secondary">
                            {totalEarning * 1200} Usd
                        </h5>
                    </div>
                </div>
            </div>
            <div
                className="d-flex border border-5 p-5 rounded-pill mt-5 bg-color--2"
                style={{ width: "400px", height: "150px", marginLeft: "150px" }}
            >
                <div className="me-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="dashboard-top-icon color-green"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                    </svg>
                </div>
                <div>
                    <h6 className="dashboard-top-element-top-text mb-0 pb-1 text-secondary">
                        Current Level / Exp:
                    </h6>
                    <h3 className="mt-0 text-center dashboard-top-element-bot-text ">
                        13 lvl
                    </h3>
                    <h5 className="ms-3 mt-0 text-center dashboard-top-element-bot-text text-secondary">
                        30.000 exp
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default topside;
