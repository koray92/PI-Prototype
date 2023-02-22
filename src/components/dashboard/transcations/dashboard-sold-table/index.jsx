import clsx from "clsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Web3 from "web3";
import { useSession } from "next-auth/react";

const soldtable = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [category, setCategory] = useState(1);
    const { data: session } = useSession();
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
    const findItemName = (itemid) => {
        const deneme = items?.filter((person) => person.item_id == itemid);

        return deneme?.length>0 ? deneme[0]?.item_name : null;
    };
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
        <div className="me-2 transactiontablesize">
            <div className="dashboard-top-no-border">
                <h3>Recently Sold/Purchased</h3>
            </div>
            <div style={{backgroundColor:"#252734"}}>
                <ul
                  className="nav nav-tabs dashboard-table-head-container"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      style={{backgroundColor:"#00f6ff"}}
                      onClick={(e) => {
                        e.preventDefault();
                        setCategory(1);
                      }}
                    >
                      <img
                        src="/images/transactionicons/tab1.png"
                        width="60"
                        height="60"
                      />
                      <p style={{fontWeight:"bold",fontSize:"17px"}}>Weapon</p>
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
                        src="/images/transactionicons/tab2.png"
                        width="50"
                        height="60"
                      />
                      <p style={{fontWeight:"bold",fontSize:"17px"}}>Ammo</p>
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
                        src="/images/transactionicons/tab3.png"
                        width="32"
                        height="40"
                      />
                      <p style={{fontWeight:"bold",fontSize:"17px"}}>Characters</p>

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
                        src="/images/transactionicons/tab4.png"
                        width="72"
                        height="30"
                      />
                      <p style={{fontWeight:"bold",fontSize:"17px"}}>Clothes</p>
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
                        src="/images/transactionicons/tab6.png"
                        width="51"
                        height="30"
                      />
                      <p style={{fontWeight:"bold",fontSize:"17px"}}>Medicine</p>
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
                        src="/images/transactionicons/tab5.png"
                        width="52"
                        height="30"
                      />
                      <p style={{fontWeight:"bold",fontSize:"17px",marginBottom:"0px"}}>Weapon</p>
                      <p style={{fontWeight:"bold",fontSize:"17px"}}>Extensions</p>

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
                        src="/images/transactionicons/tab7.png"
                        width="55"
                        height="30"
                      />
                      <p style={{fontWeight:"bold"}}>Utilities</p>

                    </button>
                  </li>

                </ul>
                <div className="dashboard-table-body-container">
                    <table className="zui-table zui-table-rounded">
                        <thead>
                            <tr>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>

                            {Object.entries(transactions).map(
                                ([key, value]) =>
                                    value.transaction_type == "Sale" && (value.seller_wallet_id == session?.user.user_wallet_id || value.buyer_wallet_id == session?.user.user_wallet_id) && (
                                        <tr key={value}>
                                            <td className="">


                                              <div className="d-flex justify-content-lg-start">
                                                <div className="" style={{marginRight:"30px"}}>
                                                  <img width="104px" height="104px" src={findItemImage(value.item_id)} />
                                                </div>
                                                <div className="" style={{marginRight:"30px"}}>

                                                  <h5 className="color-white text-center" style={{width:"130px",fontSize:"17px",fontWeight:"300",margin:"auto",padding:"5px",backgroundColor:"#70B007",borderRadius:"15px"}}>
                                                    {findItemName(value.item_id)}
                                                  </h5>
                                                  <p style={{textAlign:"center",fontSize:"15px",fontWeight:"100"}}>
                                                    total # of items <br />in inventory:1
                                                  </p>
                                                </div>
                                                <div style={{marginRight:"20px"}}>
                                                  <h6 style={{fontSize:"16px"}}>Buyer</h6>
                                              <h6 style={{fontSize:"16px"}} className="font-monospace">{
                                                value.buyer_wallet_id == "0x144aad362af3B71d42781f8f750777B3523c500B" && "muratyvz13"
                                              }
                                                {
                                                  value.buyer_wallet_id == "0xf9aD346CBa2eEB7d9738038002b614AdEa966dB6" && "Koray92"
                                                }</h6>
                                                </div>
                                                <div style={{marginRight:"20px"}}>
                                                  <h6 style={{fontSize:"16px"}}>Seller</h6>
                                                  <h6 style={{fontSize:"16px"}} className="font-monospace">{
                                              value.seller_wallet_id == "0x144aad362af3B71d42781f8f750777B3523c500B" && "muratyvz13"
                                            }
                                              {
                                                value.seller_wallet_id == "0xf9aD346CBa2eEB7d9738038002b614AdEa966dB6" && "Koray92"
                                              }</h6>
                                              </div>
                                                <div className="d-flex">
                                                  <div style={{display:"grid"}}>
                                                    <h6 style={{marginBottom:"0px"}}>{value.eth_amount+" ETH"}</h6>
                                                    <p style={{marginBottom:"0px"}}>{"$ "+value.eth_amount*1500}</p>
                                                    <h6 style={{fontSize:"13px"}}>{value.transaction_timestamp.slice(0, 10)}{" "}</h6>

                                                  </div>
                                                  <Link href={"https://goerli.etherscan.io/tx/"+value.transaction_hash} style={{cursor:"pointer"}}>
                                                    <img src="/images/icons/arrow.png" style={{width:"20px",height:"20px",margin:"auto"}}></img>
                                                  </Link>
                                                </div>
                                              </div>


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
