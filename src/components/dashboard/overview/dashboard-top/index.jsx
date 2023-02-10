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
            <Dashboardcard />
        </div>
    );
};

export default topside;
