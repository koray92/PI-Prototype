import clsx from "clsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Web3 from "web3";

const topside = () => {
    const { data: session } = useSession();
    const [userBalance, setUserBalance] = useState(0);
    const [userTotalSale, setUserTotalSale] = useState("");
    const [userTotalVolume, setUserTotalVolume] = useState(0);
    const HTTP_WEB3 = new Web3(
        new Web3.providers.HttpProvider(
            "https://goerli.infura.io/v3/53987d06438846efb4411f45609e07e1"
        )
    );
    useEffect(() => {
        const UserBalance = async () => {
            const balance = await HTTP_WEB3?.eth.getBalance(
              window?.ethereum.selectedAddress
            );
            const ethBalance = Web3.utils.fromWei(balance, "ether");
            setUserBalance(parseFloat(ethBalance).toFixed(3));
        };
        const getTotalSale = async () => {
            await axios
                .post("/api/auth/totalsale", {
                    user_id: 26,
                })
                .then((response) => {
                    const totalSale = response.data;
                    setUserTotalSale(totalSale);
                    console.log(
                        `---totalsale-----${response.data}--------${session?.user.user_id}`
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        const getTotalVolume = async () => {
            await axios
                .post("/api/auth/totalvolume", {
                    user_wallet_id: "0xA7C6df55631b20F7c381935D5794f8313AEfb56f",
                })
                .then((response) => {
                    const totalVolume = response.data;
                    setUserTotalVolume(totalVolume);

                })
                .catch((error) => {
                    console.log(error);
                });
        };
        UserBalance();
        getTotalVolume();
        getTotalSale();
        console.log(`${Date.now()}------`);
    }, [userBalance,userTotalSale,userTotalVolume]);
    return (
        <div className="dashboard-top">
            <div className="d-flex">
                <div className="me-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="dashboard-top-icon color-green"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                        />
                    </svg>
                </div>
                <div>
                    <h5 className="dashboard-top-element-top-text mb-0 pb-1 text-secondary">
                        User Total Sale:
                    </h5>
                    <h3 className="mt-0 text-center">
                        {userTotalSale}
                    </h3>
                </div>
            </div>
            <div className="d-flex">
                <div className="me-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="dashboard-top-icon color-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <div>
                    <h5 className="dashboard-top-element-top-text mb-0 pb-1 text-secondary">
                        User Total Volume:
                    </h5>
                    <h3 className="mt-0 text-center">
                        {userTotalVolume}
                    </h3>
                </div>
            </div>
            <div className="d-flex">
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
                    <h5 className="dashboard-top-element-top-text mb-0 pb-1 text-secondary">
                        User Balance:
                    </h5>
                    <h3 className="mt-0 text-center">{userBalance} ETH</h3>
                </div>
            </div>
        </div>
    );
};

export default topside;
