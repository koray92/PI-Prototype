import Image from "next/image";
import Anchor from "@ui/anchor";
import {useSession} from "next-auth/react";
import React, { useEffect,useState } from "react";
import Web3 from "web3";
const UserDropdown = () => {
    const { data: session } = useSession();
    const[userBalance,setUserBalance]=useState(0);
    const HTTP_WEB3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://goerli.infura.io/v3/53987d06438846efb4411f45609e07e1"
      )
    );
    useEffect(() => {
        const UserBalance = async () => {
                if(window.ethereum.selectedAddress != null) {
                const balance = await HTTP_WEB3?.eth.getBalance(
                  window?.ethereum.selectedAddress
                );
                const ethBalance = Web3.utils.fromWei(balance, "ether");
                setUserBalance(parseFloat(ethBalance)
                  .toFixed(3));
            }
        };
        UserBalance();
    });
    return (
        <div className="icon-box">
            <Anchor path="/product">
                <Image
                    src="/images/icons/boy-avater.png"
                    alt="Images"
                    layout="fixed"
                    width={38}
                    height={38}
                />
            </Anchor>
            <div className="rn-dropdown">
                <div className="rn-inner-top">
                    <h4 className="title">
                        <Anchor path="/product">{session.user.user_name}</Anchor>
                    </h4>
                </div>
                <div className="rn-product-inner">
                    <ul className="product-list">

                        <li className="single-product-list">
                            <div className="thumbnail">
                                <Anchor path="/product">
                                    <Image
                                        src="/images/portfolio/portfolio-01.jpg"
                                        alt="Nft Product Images"
                                        layout="fixed"
                                        width={50}
                                        height={50}
                                    />
                                </Anchor>
                            </div>
                            <div className="content">
                                <h6 className="title">
                                    <Anchor path="/product">Balance</Anchor>
                                </h6>
                                <span className="price">{userBalance} ETH</span>
                            </div>
                            <div className="button" />
                        </li>
                    </ul>
                </div>

                <ul className="list-inner">
                    <li>
                        <Anchor path="/dashboard/inventory">My Profile</Anchor>
                    </li>

                    <li>
                        <Anchor path="/signout">Sign out</Anchor>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserDropdown;
