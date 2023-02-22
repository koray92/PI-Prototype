import clsx from "clsx";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Bar, Doughnut } from "react-chartjs-2";
import Web3 from "web3";
import * as faker from "@faker-js/faker";
import Table from "../bot-table";
import datas from "../../../../data/totalearninggraphic";
import { HTTP_WEB3 } from "../../../../utils/variables";

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
};

export const optionsbar = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: "",
        },
    },
};
const labelsbarchart = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
];

export const databarchart = {
    labels: ["Jan", "Feb", "March", "Apr", "May", "Jun", "Aug", "Sep"],
    datasets: [
        {
            label: "",
            data: [80, 50, 65, 30, 40, 80, 30, 40, 80, 70, 30, 90],
            backgroundColor: [
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
            ],
            borderColor: [
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
                "#6d09e5",
            ],
            borderWidth: 1,
        },
    ],
};

export const data = {
    labels: ["Purple", "Blue", "Red", "Green", "Yellow"],
    datasets: [
        {
            label: "# of Votes",
            data: [80, 50, 65, 30, 40, 50, 65],
            backgroundColor: [
                "#6d09e5",
                "#6de0f1",
                "#f5344f",
                "#30c103",
                "#d6c638",
                "#006CFF",
                "#FF6100",
            ],
            borderColor: [
                "#6d09e5",
                "#6de0f1",
                "#f5344f",
                "#30c103",
                "#d6c638",
                "#006CFF",
                "#FF6100",
            ],
            borderWidth: 1,
        },
    ],
};
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

const dashboardcard = () => {
    const { data: session } = useSession();
    const [purchasekey, setPurchasekey] = useState("Category");
    const [earnkey, setEarnkey] = useState("Category");
    const [balance, setBalance] = useState(0);
    const purchasecategoryClick = async () => {
        setPurchasekey("Category");
    };
    const purchasetimeClick = () => {
        setPurchasekey("Time");
    };
    const earncategoryClick = async () => {
        setEarnkey("Category");
    };
    const earntimeClick = () => {
        setEarnkey("Time");
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
    return (
        <div className="container">
            <div
                className="balancecard-container"
            >
                <div style={{ width: "250px",position:"relative",marginBottom:"30px"}}>
                    <h3 style={{zIndex:"5",position:"relative"}} className="container">Balance </h3>
                    <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px"}} className="pink__gradient" />
                    <div style={{position:"absolute",zIndex:"1",width:"200px",height:"200px",bottom:"10px"}} className="white__gradient rounded-circle" />
                    <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px",bottom:"10px",right:"10px"}} className="blue__gradient rounded-circle" />

                    <div style={container}>

                        <div style={leftdiv}>
                            <h6 style={text}>ETH:</h6>
                            <h6 style={text}>{parseFloat(balance).toFixed(4)}</h6>
                            <p style={textp}>${parseFloat(1500 * balance).toFixed(2)}</p>
                            <p style={textp2}>ETH</p>
                            <p style={textp3}>(+2.33%)</p>

                        </div>
                        <div style={rightdiv}>
                            <img
                                src="/images/dashboard/eth.png"
                                style={{ width: "130px",marginBottom:"30px" }}
                            />
                               </div>

                    </div>
                </div>
                <div style={{ width: "250px",position:"relative" ,marginBottom:"30px"}}>
                    <h3 style={{zIndex:"5",position:"relative"}} className="container">Balance</h3>
                    <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px"}} className="pink__gradient" />
                    <div style={{position:"absolute",zIndex:"1",width:"200px",height:"200px",bottom:"10px"}} className="white__gradient rounded-circle" />
                    <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px",bottom:"10px",right:"10px"}} className="blue__gradient rounded-circle" />


                    <div style={container}>

                        <div style={leftdiv}>
                            <h6 style={text}>PIX:</h6>
                            <h6 style={text}>2.5200</h6>
                            <p style={textp}>$0.04</p>
                            <p style={textp2}>PIX</p>
                            <p style={textp3}>(+2.33%)</p>
                        </div>
                        <div style={rightdiv}>
                            <img
                                src="/images/dashboard/pixcoinicon.png"
                                style={{ width: "130px",marginBottom:"30px" }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ width: "400px",position:"relative",marginBottom:"30px"}}>

                    <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px"}} className="pink__gradient" />
                    <div style={{position:"absolute",zIndex:"1",width:"200px",height:"200px",bottom:"10px"}} className="white__gradient rounded-circle" />
                    <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px",bottom:"10px",right:"10px"}} className="blue__gradient rounded-circle" />

                      <h3>Player Stats:</h3>

                    <div style={containerright}>
                        <div className="mx-4 my-3">
                            <h6 style={{ lineHeight: "1.4" }}>Level: 18</h6>
                            <h3 style={{ lineHeight: "1" }}>Exp:6542</h3>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            margin: "0px",
                                            lineHeight: "2.4",
                                            textAlign: "left",
                                        }}
                                    >
                                        Exp:
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            margin: "0px",
                                            backgroundColor: "#f82f4b",
                                            borderRadius: "17px",
                                            paddingLeft: "10px",
                                            paddingRight: "10px",
                                            color: "white",
                                        }}
                                    >
                                        %80
                                    </p>
                                </div>
                            </div>
                            <ProgressBar variant="danger" now={80} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5" style={{marginLeft:"80px"}}>
                <h4 className="d-inline-block mx-5 my-5 py-1">Filter:</h4>
                <button
                    type="button"
                    className="btn btn-dark mx-4"
                    onClick={purchasecategoryClick}
                >
                    Category
                </button>
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={purchasetimeClick}
                >
                    Time
                </button>
            </div>
            <Tabs
                id="fill-tab-example"
                activeKey={purchasekey}
                onSelect={(k) => setPurchasekey(k)}
                className="mb-3"
                style={{ margin: "40px", fontsize: "30px", display: "none" }}
            >
                <Tab eventKey="Category" title="Category Chart">
                    <div style={{ width: "850px", margin: "50px" ,marginLeft:"auto",marginRight:"auto"}}>
                        <h3>Total Purchase By Category</h3>
                        <div className="containerchart">
                            <div
                                style={{
                                    width: "300px",
                                    height: "300px",
                                    margin: "auto",
                                }}
                            >
                                <Doughnut data={data} options={options} />
                            </div>
                            <div
                                style={{
                                    width: "470px",
                                    height: "900px",
                                    marginRight:"auto",
                                    marginLeft:"auto",
                                    marginTop:"30px",
                                    padding: "30px",
                                }}
                            >
                                {datas.map((item) => (
                                    <div key={item.id} className="my-4">
                                        <h6 style={{ lineHeight: "0.2" }}>
                                            {item.title}:
                                        </h6>
                                        <div className="d-flex justify-content-between">
                                            <div
                                                style={{
                                                    width: "90%",
                                                    color: "red",
                                                    backgroundcolor: "red",
                                                }}
                                            >
                                                <ProgressBar
                                                    className={
                                                        item.backgroundcolor
                                                    }
                                                    style={{
                                                        backgroundColor:
                                                            "#1d3568",
                                                    }}
                                                    now={+item.percentage}
                                                />
                                            </div>

                                            <div>
                                                <p
                                                    style={{
                                                        lineHeight: "0.5",
                                                    }}
                                                >
                                                    {item.percentage} %
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="Time" title="Time Chart">
                    <div style={{ width: "800px", margin: "50px" ,marginLeft:"auto",marginRight:"auto"}}>
                        <h3>Total Purchase By Time</h3>
                        <div style={containercharttime}>
                            <h5 className="text-center">Expense Trend</h5>
                            <h1 className="text-center"  style={{lineHeight:"1"}}>7,423</h1>
                            <div className="d-flex justify-content-center my-5">
                                <div>
                                    <h6 className="text-center">Total purchased: </h6>
                                </div>
                                <div>
                                    <h6 className="text-center" style={{margin:"0px",marginLeft:"10px"}}>{"   "}5 ETH </h6>
                                    <h6 className="text-center" style={{margin:"0px",marginLeft:"10px"}}>{"   "}(150 PIX) </h6>
                                </div>
                            </div>
                            <Bar options={options} data={databarchart} />
                        </div>
                    </div>
                </Tab>
            </Tabs>

            <div className="my-5" style={{marginLeft:"80px"}}>
                <h4 className="d-inline-block mx-5 my-5 py-1">Filter:</h4>
                <button
                  type="button"
                  className="btn btn-dark mx-4"
                  onClick={earncategoryClick}
                >
                    Category
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={earntimeClick}
                >
                    Time
                </button>
            </div>
            <Tabs
              id="fill-tab-example"
              activeKey={earnkey}
              onSelect={(k) => setEarnkey(k)}
              className="mb-3"
              style={{ margin: "40px", fontsize: "30px", display: "none" }}
            >
                <Tab eventKey="Category" title="Category Chart">
                    <div style={{ width: "850px", margin: "50px" ,marginLeft:"auto",marginRight:"auto"}}>
                        <h3>Total Earnings By Category</h3>
                        <div className="containerchart">
                            <div
                              style={{
                                  width: "300px",
                                  height: "300px",
                                  margin: "auto",
                              }}
                            >
                                <Doughnut data={data} options={options} />
                            </div>
                            <div
                              style={{
                                  width: "470px",
                                  height: "900px",
                                  marginRight:"auto",
                                  marginLeft:"auto",
                                  marginTop:"30px",
                                  padding: "30px",
                              }}
                            >
                                {datas.map((item) => (
                                  <div key={item.id} className="my-4">
                                      <h6 style={{ lineHeight: "0.2" }}>
                                          {item.title}:
                                      </h6>
                                      <div className="d-flex justify-content-between">
                                          <div
                                            style={{
                                                width: "90%",
                                                color: "red",
                                                backgroundcolor: "red",
                                            }}
                                          >
                                              <ProgressBar
                                                className={
                                                    item.backgroundcolor
                                                }
                                                style={{
                                                    backgroundColor:
                                                      "#1d3568",
                                                }}
                                                now={+item.percentage}
                                              />
                                          </div>

                                          <div>
                                              <p
                                                style={{
                                                    lineHeight: "0.5",
                                                }}
                                              >
                                                  {item.percentage} %
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="Time" title="Time Chart">
                    <div style={{ width: "800px", margin: "50px",marginLeft:"auto",marginRight:"auto"}}>
                        <h3>Total Earnings By Time</h3>
                        <div style={containercharttime}>
                            <h5 className="text-center">Expense Trend</h5>
                            <h1 className="text-center" style={{lineHeight:"1"}}>7,423</h1>
                            <div className="d-flex justify-content-center my-5">
                                <div>
                                    <h6 className="text-center">Total purchased: </h6>
                                </div>
                                <div>
                                    <h6 className="text-center" style={{margin:"0px",marginLeft:"10px"}}>{"   "}10 ETH </h6>
                                    <h6 className="text-center" style={{margin:"0px",marginLeft:"10px"}}>{"   "}(300 PIX) </h6>
                                </div>
                            </div>
                            <Bar options={options} data={databarchart} />
                        </div>
                    </div>
                </Tab>
            </Tabs>
            <div style={{ width: "20%",position:"relative"}}>

                <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px"}} className="pink__gradient" />
                <div style={{position:"absolute",zIndex:"1",width:"200px",height:"200px",bottom:"10px"}} className="white__gradient rounded-circle" />
                <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px",bottom:"10px",right:"10px"}} className="blue__gradient rounded-circle" />


            </div>
            <div>
            <Table />
            </div>
        </div>
    );
};

export default dashboardcard;
