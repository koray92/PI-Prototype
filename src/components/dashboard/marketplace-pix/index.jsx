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
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Bar, Doughnut,Line } from "react-chartjs-2";
import Web3 from "web3";
import * as faker from "@faker-js/faker";


import { HTTP_WEB3 } from "../..//../utils/variables";
import Nav from "react-bootstrap/Nav";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

export const databarchart = {
    labels: ["Jan", "Feb", "March", "Apr", "May", "Jun", "Aug", "Sep"],
    datasets: [
        {
            label: "",
            data: [0.3, 0.15, 0.12, 0.2 , 0.4 , 0.3 , 0.5 , 0.45],
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
const containerchart = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#252434",
    height: "500px",
    border: "10px solid #46454f",
};
const containercharttime = {
    backgroundColor: "#252434",
    height: "360px",
    border: "10px solid #46454f",
    position: "relative",
    zIndex:"5"
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
    const [key, setKey] = useState("Category");
    const [balance, setBalance] = useState(0);
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
    return (
      <div className="container">
          <div className="balancecard-container"

          >
              <div style={{ width: "350px",position:"relative",marginBottom:"30px"}}>

                  <div style={{position:"absolute",zIndex:"0",width:"300px",height:"300px"}} className="pink__gradient" />
                  <div style={{position:"absolute",zIndex:"1",width:"300px",height:"300px",bottom:"10px"}} className="white__gradient rounded-circle" />
                  <div style={{position:"absolute",zIndex:"0",width:"300px",height:"300px",bottom:"10px",right:"10px"}} className="blue__gradient rounded-circle" />

                  <div style={container}>

                      <div style={leftdiv}>
                          <h6 style={text}>ETH:</h6>
                          <h6 style={text}>{balance}</h6>
                          <p style={textp}>${1500 * balance}</p>
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
              <div style={{ width: "350px",position:"relative"}}>

                  <div style={{position:"absolute",zIndex:"0",width:"300px",height:"300px"}} className="pink__gradient" />
                  <div style={{position:"absolute",zIndex:"1",width:"300px",height:"300px",bottom:"10px"}} className="white__gradient rounded-circle" />
                  <div style={{position:"absolute",zIndex:"0",width:"300px",height:"300px",bottom:"10px",right:"10px"}} className="blue__gradient rounded-circle" />


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
          </div>
          <div className="d-flex justify-content-center" style={{marginTop:"120px",marginBottom:"120px"}}>
             <div class="bidbutton" style={{marginRight:"200px"}}>
              <p className="text-white">Buy PIX</p>
            </div>
              <div class="bidbutton">
                  <p className="text-white">Sell PIX</p>
              </div>
          </div>

                  <div style={{ width: "650px", margin: "auto" }}>
                      <h3>PIX Market Price</h3>
                      <div style={containercharttime}>
                          <div style={{margin:"auto"}}>
                          <Line options={options} data={databarchart} />
                          </div>
                      </div>
                  </div>

          <div style={{ width: "20%",position:"relative"}}>

              <div style={{position:"absolute",zIndex:"0",width:"300px",height:"300px"}} className="pink__gradient" />
              <div style={{position:"absolute",zIndex:"1",width:"300px",height:"300px",bottom:"10px"}} className="white__gradient rounded-circle" />
              <div style={{position:"absolute",zIndex:"0",width:"300px",height:"300px",bottom:"10px",right:"10px"}} className="blue__gradient rounded-circle" />


          </div>

      </div>
    );
};

export default dashboardcard;
