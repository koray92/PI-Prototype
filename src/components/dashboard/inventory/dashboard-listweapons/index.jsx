import clsx from "clsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { HTTP_WEB3 } from "../../../../utils/variables"
import Web3 from "web3";
const topside = () => {
    const { data: session } = useSession();
    const [inventory, setInventory] = useState({});

    const container = {
        justifyContent: "space-between",
        display: "flex",
        position: "relative",
        backgroundColor: "#252434",
        height: "200px",
        border: "10px solid #46454f",
        zIndex:"5"
    };
    const containerright = {
        backgroundColor: "#252434",
        position: "relative",
        height: "200px",
        border: "10px solid #46454f",
        zIndex:"5"
    };
    const containerchart = {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#252434",
        height: "500px",
        border: "10px solid #46454f",
    };
    const containercharttime = {
        backgroundColor: "#252434",
        height: "600px",
        border: "10px solid #46454f",
        padding: "90px",
        paddingTop: "30px",
    };
    const leftdiv = {
        width: "30%",
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "20px",
    };
    const rightdiv = {
        width: "40%",
        marginTop: "auto",
        marginBottom: "auto",
    };
    const text = {
        lineHeight: "0.6",
    };
    const textp = {
        lineHeight: "0.6",
        color: "#0093ec",
        display: "inline",
        marginRight: "5px",
    };
    const textp2 = {
        lineHeight: "0.6",
        color: "#b3b6b9",
        display: "inline",
        marginRight: "5px",
    };
    const textp3 = {
        lineHeight: "0.6",
        color: "#0c932f",
        display: "inline",
        marginRight: "5px",
    };
    const [key, setKey] = useState("Category");
    const [balance, setBalance] = useState(0);
    const [category, setCategory] = useState(0);
    const categoryClick = async () => {
        setKey("Category");
    };
    const timeClick = () => {
        setKey("Time");
    };
    useEffect(() => {
        const userBalance = async () => {
            const balanceeth = await HTTP_WEB3?.eth.getBalance(
              Web3.utils.toChecksumAddress(session?.user?.user_wallet_id)
            );
            const ethBalance = Web3?.utils.fromWei(balanceeth, "ether");
            console.log(`-----${ethBalance}---s-`);

            setBalance(parseFloat(ethBalance).toFixed(3));
        };
        if (session) {
            userBalance();
        }
    }, [session]);
    useEffect(() => {
        const getInventory = async () => {
            await axios
                .post("/api/auth/getinventory", {
                    user_id: session?.user.user_id,
                })
                .then((response) => {
                    setInventory(response.data);
                    console.log(
                        `--------${response.data}--------${session?.user.user_id}`
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getInventory();
    }, []);
    return (
        <div>
            <div className="container">
                <div
                  className="balancecard-container-overview3tab"
                >
                    <div style={{ width: "300px",position:"relative"}}>
                        <h5 style={{zIndex:"5",position:"relative"}} className="container">Balance</h5>
                        <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px"}} className="pink__gradient" />
                        <div style={{position:"absolute",zIndex:"1",width:"200px",height:"200px",bottom:"10px"}} className="white__gradient rounded-circle" />
                        <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px",bottom:"10px",right:"10px"}} className="blue__gradient rounded-circle" />

                        <div style={container}>

                            <div style={leftdiv}>
                                <h6 style={text}>ETH:</h6>
                                <h6 style={text}>{parseFloat(balance).toFixed(3)}</h6>
                                <p style={textp}>${parseInt(1500 * balance).toFixed(2)}</p>
                                <p style={textp2}>ETH</p>
                                <p style={textp3}>(+2.33%)</p>

                            </div>
                            <div style={rightdiv}>
                                <img
                                  src="/images/dashboard/eth.png"
                                  style={{ width: "130px" }}
                                />
                            </div>

                        </div>
                    </div>
                    <div style={{ width: "300px",position:"relative"}}>
                        <h5 style={{zIndex:"5",position:"relative"}} className="container">Balance (PIX)</h5>
                        <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px"}} className="pink__gradient" />
                        <div style={{position:"absolute",zIndex:"1",width:"200px",height:"200px",bottom:"10px"}} className="white__gradient rounded-circle" />
                        <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px",bottom:"10px",right:"10px"}} className="blue__gradient rounded-circle" />


                        <div style={container}>

                            <div style={leftdiv}>
                                <h6 style={text}>PIX:</h6>
                                <h6 style={text}>2.52000</h6>
                                <p style={textp}>$0.04</p>
                                <p style={textp2}>PIX</p>
                                <p style={textp3}>(+2.33%)</p>
                            </div>
                            <div style={rightdiv}>
                                <img
                                  src="/images/dashboard/pixcoinicon.png"
                                  style={{ width: "130px" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "350px",position:"relative"}}>
                        <h5 style={{zIndex:"5",position:"relative"}} className="container">Total Volume of Inventory:</h5>
                        <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px"}} className="pink__gradient" />
                        <div style={{position:"absolute",zIndex:"1",width:"200px",height:"200px",bottom:"10px"}} className="white__gradient rounded-circle" />
                        <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px",bottom:"10px",right:"10px"}} className="blue__gradient rounded-circle" />
                        <div style={container}>
                            <div style={leftdiv}>
                                <h6 style={text}>ETH:</h6>
                                <h6 style={text}>{"6"}</h6>
                                <p style={textp}>${1500 * 6}</p>
                                <p style={textp2}>ETH</p>
                                <p style={textp3}>(+2.33%)</p>
                            </div>
                            <div style={rightdiv}>
                                <img
                                  src="/images/dashboard/eth.png"
                                  style={{ width: "130px" }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ width: "400px",marginRight:"auto",marginLeft:"auto",marginBottom:"30px",marginTop:"30px"}}>
                    <h4 style={{zIndex:"5",position:"relative"}} className="container">Total Volume of selected Categories:</h4>
                    <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px"}} className="pink__gradient" />
                    <div style={{position:"absolute",zIndex:"1",width:"200px",height:"200px",bottom:"10px"}} className="white__gradient rounded-circle" />
                    <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px",bottom:"10px",right:"10px"}} className="blue__gradient rounded-circle" />
                    <div style={container}>
                        <div style={leftdiv}>
                            <h4 style={text}>ETH:</h4>
                            <h4 style={text}>{"4"}</h4>
                            <p style={textp}>${1500 * 4}</p>
                            <p style={textp2}>ETH</p>
                            <p style={textp3}>(+2.33%)</p>
                        </div>
                        <div style={rightdiv}>
                            <img
                              src="/images/dashboard/eth.png"
                              style={{ width: "130px" }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{backgroundColor:"#252734"}}>
                    <ul
                      className="nav nav-tabs filter-weapons"
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
                              style={{backgroundColor: category ==0 ? "#00f6ff" : ""}}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setCategory(0);
                              }}
                            >
                                <img
                                  src="/images/transactionicons/tab1.png"
                                  width="60"
                                  height="60"
                                />
                                <p style={{fontWeight:"bold"}}>Weapon</p>
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
                              style={{backgroundColor: category ==1 ? "#00f6ff" : ""}}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setCategory(1);
                              }}
                            >
                                <img
                                  src="/images/transactionicons/tab2.png"
                                  width="60"
                                  height="60"
                                />
                                <p style={{fontWeight:"bold"}}>Ammo</p>
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
                              style={{backgroundColor: category ==2 ? "#00f6ff" : ""}}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setCategory(2);
                              }}
                            >
                                <img
                                  src="/images/transactionicons/tab3.png"
                                  width="37"
                                  height="60"
                                />
                                <p style={{fontWeight:"bold"}}>Characters</p>
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
                              style={{backgroundColor: category ==3 ? "#00f6ff" : ""}}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setCategory(3);
                              }}
                            >
                                <img
                                  src="/images/transactionicons/tab4.png"
                                  width="80"
                                  height="30"
                                />
                                <p style={{fontWeight:"bold",lineHeight:"2"}}>Clothes</p>

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
                              style={{backgroundColor: category ==4 ? "#00f6ff" : ""}}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setCategory(4);
                              }}
                            >
                                <img
                                  src="/images/transactionicons/tab6.png"
                                  width="60"
                                  height="30"
                                />
                                <p style={{fontWeight:"bold"}}>Medicine</p>

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
                              style={{backgroundColor: category ==5 ? "#00f6ff" : ""}}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setCategory(5);
                              }}
                            >
                                <img
                                  src="/images/transactionicons/tab5.png"
                                  width="60"
                                  height="30"
                                />
                                <p style={{fontWeight:"bold"}}>Weapon Extensions</p>

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
                              style={{backgroundColor: category ==6 ? "#00f6ff" : ""}}
                              onClick={(e) => {
                                  e.preventDefault();
                                  setCategory(6);
                              }}
                            >
                                <img
                                  src="/images/transactionicons/tab7.png"
                                  width="60"
                                  height="30"
                                />
                                <p style={{fontWeight:"bold"}}>Utilities</p>

                            </button>
                        </li>

                    </ul>
                    </div>

                <div className="row">
                    {Object.entries(inventory).map(([key, value]) => (
                       category == 0 && <div className="col-xl-3 col-lg-3 col-sm-6" style={{margin:"30px",width:"25%",height:"500px",backgroundColor:"#242436",borderRadius:"25px"}}>
                            <div>
                                <img
                                    className="mt-2"
                                    src={value.item.item_image}
                                    style={{borderRadius:"25px"}}
                                />
                                <div>
                                    <h3 className="mt-5 text-center">
                                        {value.item.item_name}
                                    </h3>
                                    <div className="d-flex justify-content-center">
                                        <img
                                          src="/images/dashboard/eth.png"
                                          style={{ width: "40px",height:"40px" }}
                                        />
                                        <h4 className=" text-center" style={{fontWeight:"normal",marginRight:"10px"}}>
                                            { value.item.item_name == "Hand Gun" && "0,0065"  }
                                            { value.item.item_name == "Knife" && "0,0019"  }

                                        </h4>


                                    </div>


                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {
                    /*
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

                <div
                    style={{ alignItems: "center", marginTop: "17px" }}
                    className="d-flex"
                >


                    <h3 className="mt-0 text-center dashboard-top-element-bot-text d-inline-block">
                        Total Value of Weapons:
                    </h3>

                    <h3 className="mt-0 me-2 ms-5 text-right dashboard-top-element-bot-text color-green ">
                        2 Eth
                    </h3>
                </div>

                </div>
                */
                }

            </div>
        </div>
    );
};

export default topside;
