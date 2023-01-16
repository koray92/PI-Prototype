import clsx from "clsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Web3 from "web3";

const soldtable = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [category, setCategory] = useState(1);
    const [transactions, setTransactions] = useState({});
    const [items, setItems] = useState(null);
    const [currentItem, setCurrentItem] = useState("");
    const [x, setX] = useState(null);
    const findItem = (itemid) => {
        const deneme = items?.filter((person) => person.item_id == itemid);
        return deneme?.length>0 ?  deneme[0]?.item_design : null;
    };
    const findItemImage = (itemid) => {
        const deneme = items?.filter((person) => person.item_id == itemid);
        return deneme?.length>0 ? deneme[0]?.item_image : null;
    };

    const deneme = async (text) => {
        return('asdasdsadsa');
    }
    const denemee = async (addr) => {
        return addr + 'x';
    }
    useEffect(() => {

        const getitems = async () => {
            await axios
                .get("/api/auth/item")
                .then((response) => {
                    const item = response.data;
                    setItems(item);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        const getdatas = async () => {
            let datas = [];
            await axios
                .get("/api/auth/transactions")
                .then((response) => {
                    const transaction = response.data;
                    setTransactions(transaction);
                    response.data.map(async (product) => {
                        const a = await denemee(product.wallet_id);
                        datas.push(a);
                    });
                    setX(datas);
                    // console.log(`${transaction.total_pages}sd`);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getitems();
        getdatas();
    }, []);

    return (
        <div className="me-2" style={{width:"48%"}}>
            <div className="dashboard-top-no-border">
                <h3>Recently Sold:</h3>
            </div>
            <div>
                <ul
                    className="nav nav-tabs dashboard-table-head-container"
                    id="myTab"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home"
                            type="button"
                            role="tab"
                            onClick={(e) => {
                                e.preventDefault();
                                setCategory(1);
                            }}
                        >
                            <img
                                src="/images/icons/tab-1.png"
                                width="40"
                                height="40"
                            />
                            Weapon
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                            onClick={(e) => {
                                e.preventDefault();
                                setCategory(2);
                            }}
                        >
                            <img
                                src="/images/icons/tab-2.png"
                                width="40"
                                height="40"
                            />
                            Accessory
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                            onClick={(e) => {
                                e.preventDefault();
                                setCategory(3);
                            }}
                        >
                            <img
                                src="/images/icons/tab-3.png"
                                width="40"
                                height="40"
                            />
                            Ammo
                        </button>
                    </li>
                </ul>
                <div className="dashboard-table-body-container">
                    <table className="zui-table zui-table-rounded">
                        <thead>
                            <tr>
                                <th>Icon</th>
                                <th>Buyer</th>
                                <th>Price (ETH)</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {Object.entries(transactions).map(
                                ([key, value]) =>
                                    value.transaction_type == "Sale" && (
                                        <tr key={value}>
                                            <td className="table-icon">
                                                <img src={findItemImage(value.item_id)} />

                                            </td>
                                            <td>
                                                <div className="">
                                                    <h6 className="font-monospace text-center">
                                                        {value.users.user_name}

                                                    </h6>
                                                </div>
                                            </td>
                                            <td>
                                                <h5 className="font-monospace">{value.eth_amount}</h5>
                                            </td>
                                            <td>
                                                <h6 className="font-monospace" style={{fontSize:"15px"}}>
                                                    {value.transaction_timestamp}{" "}
                                                    <Link href={`https://goerli.etherscan.io/tx/${value.transaction_hash}`}><img
                                                            className=""
                                                            width="30px"
                                                            height="30px"
                                                            src="/images/icons/etherscan.png"
                                                        />
                                                    </Link>
                                                </h6>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default soldtable;
