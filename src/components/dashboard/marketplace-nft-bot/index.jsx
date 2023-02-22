import clsx from "clsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Web3 from "web3";
import ProgressBar from "react-bootstrap/ProgressBar";

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
    useEffect(() => {
        const UserBalance = async () => {
            const balance = await HTTP_WEB3?.eth?.getBalance(
               session?.user?.user_wallet_id
            );
            const ethBalance = Web3.utils.fromWei(balance, "ether");
            setUserBalance(parseFloat(ethBalance).toFixed(3));
        };
        const getTotalSale = async () => {
            await axios
                .post("/api/auth/totalsale", {
                    user_id: session?.user.user_id,
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
                    user_wallet_id: session.user.user_wallet_id,
                })
                .then((response) => {
                    const totalVolume = response.data;
                    setUserTotalVolume(totalVolume);

                })
                .catch((error) => {
                    console.log(error);
                });
        };
        if(session) {
            UserBalance();
            getTotalVolume();
            getTotalSale();
        }
        console.log(`${Date.now()}------`);
    }, [userBalance,userTotalSale,userTotalVolume,session]);
    return (
      <div className="container">
          <div
            className="balancecard-container"
          >
              <div style={{ width: "350px",position:"relative",marginBottom:"30px"}}>

                  <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px"}} className="pink__gradient" />
                  <div style={{position:"absolute",zIndex:"1",width:"200px",height:"200px",bottom:"10px"}} className="white__gradient rounded-circle" />
                  <div style={{position:"absolute",zIndex:"0",width:"200px",height:"200px",bottom:"10px",right:"10px"}} className="blue__gradient rounded-circle" />

                  <div style={container}>

                      <div style={leftdiv}>
                          <h6 style={text}>ETH:</h6>
                          <h6 style={text}>{userBalance}</h6>
                          <p style={textp}>${1500 * userBalance}</p>
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

          </div>



      </div>
    );
};

export default topside;
