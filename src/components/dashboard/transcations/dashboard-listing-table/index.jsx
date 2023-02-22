import clsx from "clsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { prisma } from "../../../../../server/db/client";
import Link from 'next/link';
import { useSession } from "next-auth/react";


const listingtable = ({ posts }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [category, setCategory] = useState(1);
    const { data: session } = useSession();
    const [transactions, setTransactions] = useState({});
    const [items, setItems] = useState(null);
    const [currentItem, setCurrentItem] = useState("");
    const [accuracy, setAccuracy] = useState(0);
    const [control, setControl] = useState(0);
    const [damage, setDamage] = useState(0);
    const [firerate, setFirerate] = useState(0);
    const [mobility, setMobility] = useState(0);
    const [range, setRange] = useState(0);
    {
        /* /api/auth/transactions */
    }
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
    const findPower1 = (itemid) => {
    const deneme = items?.filter((person) => person.item_id == itemid);
    return deneme?.length>0 ? deneme[0]?.accuracy : null;
  };
  const findPower2 = (itemid) => {
    const deneme = items?.filter((person) => person.item_id == itemid);
    return deneme?.length>0 ? deneme[0]?.control : null;
  };
  const findPower3 = (itemid) => {
    const deneme = items?.filter((person) => person.item_id == itemid);
    return deneme?.length>0 ? deneme[0]?.damage : null;
  };
  const findPower4 = (itemid) => {
    const deneme = items?.filter((person) => person.item_id == itemid);
    return deneme?.length>0 ? deneme[0]?.fire_rate : null;
  };
  const findPower5 = (itemid) => {
    const deneme = items?.filter((person) => person.item_id == itemid);
    return deneme?.length>0 ? deneme[0]?.mobility : null;
  };
  const findPower6 = (itemid) => {
    const deneme = items?.filter((person) => person.item_id == itemid);
    return deneme?.length>0 ? deneme[0]?.range : null;
  };

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
            await axios
                .get("/api/auth/transactions")
                .then((response) => {
                    const transaction = response.data;
                    setTransactions(transaction);
                    transaction.map((product) =>
                        console.log(product.transaction_hash)
                    );
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
                <h3>Currently offered NFTs:</h3>

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
                      width="50"
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
                      width="60"
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
                <div className="dashboard-table-body-container" style={{backgroundColor:"#252734"}}>
                    <table className="zui-table zui-table-rounded">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(transactions).map(
                                ([key, value]) => (
                                   value.transaction_type=="Listing" && value.buyer_wallet_id == session?.user.user_wallet_id && <tr key={value}>


                                       <td className="table-icon">
                                            <img src={findItemImage(value.item_id)} />
                                        </td>
                                        <td>
                                            <div className="">
                                                <h5 className="color-white text-center" style={{fontSize:"17px",fontWeight:"300",margin:"auto",padding:"5px",backgroundColor:"#70B007",borderRadius:"15px"}}>
                                                    {findItemName(value.item_id)}
                                                </h5>
                                                <p style={{textAlign:"center",fontSize:"15px",fontWeight:"100",}}>
                                                  total # of items in inventory:1
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <div style={{display:"grid"}}>
                                                    <img
                                                      src="/images/transactionicons/range1.png"
                                                      width="35"
                                                      height="35"
                                                      alt="Accuracy"
                                                      title="Accuracy"
                                                      style={{alignItems: "top",paddingBottom:"3px"}}
                                                    />

                                                    <h6 className="text-center">{findPower1(value.item_id)}</h6>
                                                </div>
                                                <div style={{display:"grid"}}>
                                                    <img
                                                      src="/images/transactionicons/range2.png"
                                                      width="35"
                                                      height="35"
                                                      alt="Fire Rate"
                                                      title="Fire Rate"
                                                      style={{alignItems: "top",paddingBottom:"3px"}}
                                                    />
                                                    <h6 className="text-center">{findPower2(value.item_id)}</h6>
                                                </div>
                                                <div style={{display:"grid"}}>
                                                    <img
                                                      src="/images/transactionicons/range3.png"
                                                      width="35"
                                                      height="35"
                                                      alt="Damage"
                                                      title="Damage"
                                                      style={{alignItems: "top",paddingBottom:"3px"}}
                                                    />
                                                    <h6 className="text-center">{findPower3(value.item_id)}</h6>
                                                </div>
                                                <div style={{display:"grid"}}>
                                                    <img
                                                      src="/images/transactionicons/range4.png"
                                                      width="35"
                                                      height="35"
                                                      alt="Mobility"
                                                      title="Mobility"
                                                      style={{alignItems: "top",paddingBottom:"3px"}}
                                                    />
                                                    <h6 className="text-center">{findPower4(value.item_id)}</h6>
                                                </div>
                                                <div style={{display:"grid"}}>
                                                    <img
                                                      src="/images/transactionicons/range5.png"
                                                      width="35"
                                                      height="35"
                                                      alt="Range"
                                                      title="Range"
                                                      style={{alignItems: "top",paddingBottom:"3px"}}
                                                    />
                                                    <h6 className="text-center">{findPower5(value.item_id)}</h6>
                                                </div>
                                              <div style={{display:"grid"}}>
                                                <img
                                                  src="/images/transactionicons/range6.png"
                                                  width="35"
                                                  height="35"
                                                  alt="Control"
                                                  title="Control  "
                                                  style={{alignItems: "top",paddingBottom:"3px"}}
                                                />
                                                <h6 className="text-center">{findPower6(value.item_id)}</h6>
                                              </div>
                                            </div>
                                        </td>
                                        <td>
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
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default listingtable;
