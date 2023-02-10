import clsx from "clsx";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Web3 from "web3";
ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const container = {
  justifyContent:"space-between",
  display:"flex",
  backgroundColor:"#001c59",
  height:"200px",
  border: '10px solid #001a52',
};
const containerright = {
  backgroundColor:"#001c59",
  height:"200px",
  border: '10px solid #001a52',
};
const containerchart = {
  display:"flex",
  justifyContent: "space-between",
  backgroundColor:"#001c59",
  height:"400px",
  border: '10px solid #001a52',
};
const leftdiv = {
  width:"30%",
  marginTop:"auto",
  marginBottom:"auto",
  marginLeft:"20px"

};
const rightdiv = {
  width:"40%",
  marginTop:"auto",
  marginBottom:"auto"
};
const text = {
  lineHeight:"0.6"
};
const textp = {
  lineHeight:"0.6",
  color:"#0093ec",
  display: "inline",
  marginRight:"5px"
};
const textp2 = {
  lineHeight:"0.6",
  color:"#b3b6b9",
  display: "inline",
  marginRight:"5px"
};
const textp3 = {
  lineHeight:"0.6",
  color:"#0c932f",
  display: "inline",
  marginRight:"5px"
};
function ScreenreaderLabelExample() {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} visuallyHidden />;
}
const dashboardcard = () => {

  return (
    <>
    <div style={{marginTop:"20px",display:"flex",justifyContent:"space-around"}}>

      <div style={{width:"20%"}}>
      <h3>Balance (ETH)</h3>
      <div style={container}>
        <div style={leftdiv}>
          <h6 style={text}>Bitcoin:</h6>
          <h6 style={text}>2.52000</h6>
          <p style={textp}>$0.04</p>
          <p style={textp2}>BTC</p>
          <p style={textp3}>(+2.33%)</p>
        </div>
        <div style={rightdiv}>
          <img src="/images/dashboard/eth.png" style={{width:"130px"}}></img>
        </div>
      </div>
      </div>
      <div style={{width:"20%"}}>
        <h3>Balance (ETH)</h3>
        <div style={container}>
          <div style={leftdiv}>
            <h6 style={text}>Bitcoin:</h6>
            <h6 style={text}>2.52000</h6>
            <p style={textp}>$0.04</p>
            <p style={textp2}>BTC</p>
            <p style={textp3}>(+2.33%)</p>
          </div>
          <div style={rightdiv}>
            <img src="/images/dashboard/pixcoinicon.png" style={{width:"130px"}}></img>
          </div>
        </div>
      </div>

      <div style={{width:"40%"}}>
        <h3>Balance (ETH)</h3>

        <div style={containerright}>
          <div className="mx-4 my-3">
            <h6 style={{lineHeight:"1.4"}}>Level: 18</h6>
            <h3 style={{lineHeight:"1"}}>Exp:6542</h3>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div>
              <p style={{margin:"0px",lineHeight:"2.4",textAlign: "left"}}>Exp:</p>
              </div>
              <div>
                <p style={{margin:"0px",backgroundColor:"#f82f4b",borderRadius: "17px",paddingLeft:"10px",paddingRight:"10px",color:"white"}}>%80</p>
              </div>

            </div>
            <ProgressBar variant="danger" now={80} />
          </div>
        </div>
      </div>
    </div>
      <div style={{marginTop:"20px",display:"flex",justifyContent:"space-around"}}>

        <div style={{width:"50%"}}>
          <h3>Balance (ETH)</h3>

          <div style={containerchart}>
            <div style={{width:"300px",height:"300px"}}>
              <Doughnut data={data} />
            </div>
            <div style={{width:"500px",height:"300px",marginTop:"30px",padding:"30px"}}>
              <h6 style={{lineHeight:"0.7"}}>Rent and Utilities:</h6>
              <div className="d-flex justify-content-between">
              <div style={{width:"90%"}}>
              <ProgressBar variant="danger" now={80}/>
              </div>
                <div>
                  <p style={{lineHeight:"0.5"}}>80 %</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      </>
  );
};

export default dashboardcard;
