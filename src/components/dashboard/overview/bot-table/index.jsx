import React from 'react';


function Tablo() {
    const data = [
        { category:"Killed Zombies",kzombie: "20", gained: '200', EXP: '400', perfcompared: 10 },
        { category:"Killed Players",kzombie: "30", gained: '100', EXP: '200', perfcompared: 0 },
        { category:"Found NFT's",kzombie: "40", gained: '300', EXP: '600', perfcompared: -30 }
    ];
  const icon = {
    width:"30px",
    height:"30px",
    margin:"auto"
  };
    return (
      <table className="tablo" style={{backgroundColor:"#252434",borderRadius:"25px"}}>
          <thead>
          <tr>
            <h5 style={{padding:"20px"}}>Accomplishments</h5>
          </tr>
          <tr style={{backgroundColor:"rgba(255, 255, 255, 0.2)"}}>
              <th>Category</th>
              <th>Count</th>
              <th>Gained</th>
              <th>Exp</th>
              <th>Performance Compared</th>
          </tr>
          </thead>
          <tbody>
          {data.map((satir) => (
            <tr key={satir.kzombie}>
                <td>{satir.category}</td>
                <td>{satir.kzombie}</td>
                <td>{satir.gained}</td>
                <td>{satir.EXP}</td>
                <td>
                  { satir.perfcompared > 0 ?
                    <div style={icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                    </svg>
                  </div>  : (satir.perfcompared == 0
                      ?
                      <div style={icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </div> :
                      <div style={icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                        </svg>
                      </div>) }
                </td>
            </tr>
              ))}
          </tbody>
      </table>
    );
}

export default Tablo;
