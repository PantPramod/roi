import './App.css';
import close from './images/close.jpg';
import cake from './images/cake.jpg';
import hide from './images/hide.jpg';
import show from './images/show.jpg';

import { useState } from 'react';

function App() {
  const [showDetails, setShowDetails] = useState(true);
  const [amount, setAmount] = useState('');
  const [timeframe, setTimeframe] = useState('1 Day');
  const [tier, setTier] = useState('tier1');
  const [enableAPY, setEnableAPY] = useState(true);
  const [isUSD, setIsUSD] = useState(true);
  const [iscake, setIscake] = useState(true);

  return (
    <div className="app">
      <div className='container '>
        <div className='header center mw'>
          <h2>ROI Calculator</h2>
          <div className='close'>
            <img src={close} />
          </div>
        </div>

        <div className='btn-group mw' >
          <span onClick={() => setIscake(!iscake)}>
            <img src={cake} style={iscake ? { border: "4px solid skyblue", borderRadius: "50%" } : {}} />
          </span>
          <p>Cake</p>
          <label class="switch">
            <input type="checkbox" checked={isUSD} onChange={() => setIsUSD(!isUSD)} />
            <span class="slider round"></span>
          </label>
          <p>USD</p>
        </div>

        <div className='input-box '>
          <input type="text" placeholder={isUSD ? '0.000 USD' : "0.000"} className='mw center' onChange={(e) => setAmount(e.target.value)} value={amount} />
        </div>

        <div className='btn-group btn-group2 mw'>
          <span>
            <button onClick={() => setAmount(1000)} style={amount == 1000 ? { background: "#FFFF99" } : {}}>$1000</button>
            <button onClick={() => setAmount(100)} style={amount == 100 ? { background: "#FFFF99" } : {}}>$100</button>
          </span>

          <p>~cake 0.000</p>

        </div>

        <p className='timeframe center mw'>Timeframe</p>

        <div className='btn-group3 center mw'>
          <p style={timeframe == "1 Day" ? { background: "#FFFF99" } : {}} onClick={() => setTimeframe("1 Day")}>1 Day</p>
          <p style={timeframe == "7 Days" ? { background: "#FFFF99" } : {}} onClick={() => setTimeframe("7 Days")}>7 Days</p>
          <p style={timeframe == "30 Days" ? { background: "#FFFF99" } : {}} onClick={() => setTimeframe("30 Days")}>30 Days</p>
          <p style={timeframe == "1 Year" ? { background: "#FFFF99" } : {}} onClick={() => setTimeframe("1 Year")}>1 Year</p>
          <p style={timeframe == "5 Year" ? { background: "#FFFF99" } : {}} onClick={() => setTimeframe("5 Year")}>5 Year</p>
        </div>

        <div className='enableAPY center mw'>
          <p className='timeframe'>Enable Accelerated APY</p>
          <label class="switch s2">
            <input type="checkbox" checked={enableAPY} onChange={() => setEnableAPY(!enableAPY)} />
            <span class="slider slider2 round"></span>
          </label>
        </div>

        <div className='btn-group3 center mw'>
          <p style={tier == "tier1" ? { background: "#FFFF99" } : {}} onClick={() => setTier('tier1')}>Tier1</p>
          <p style={tier == "tier2" ? { background: "#FFFF99" } : {}} onClick={() => setTier('tier2')}>Tier2</p>
          <p style={tier == "tier3" ? { background: "#FFFF99" } : {}} onClick={() => setTier('tier3')}>Tier3</p>
          <p style={tier == "tier4" ? { background: "#FFFF99" } : {}} onClick={() => setTier('tier4')}>Tier4</p>
          <p style={tier == "tier5" ? { background: "#FFFF99" } : {}} onClick={() => setTier('tier5')}>Tier5</p>
        </div>


        <p className='roiatcurrent center mw'>ROI at Current Rates</p>

        <div className='input-box'>
          <input type="text" placeholder='0.000 USD' className='mw center' disabled={true} />
        </div>

        <p className='bottomtext center mw'>0.000 Cake + 0.000000 DON</p>

        <p className='hide mw'>
          {showDetails && <p onClick={() => setShowDetails(!showDetails)}>Hide Details</p>}
          {!showDetails && <p onClick={() => setShowDetails(!showDetails)}>Show Details</p>}
          <span>
            <img src={showDetails ? hide : show} onClick={() => setShowDetails(!showDetails)} />
          </span>
        </p>
        {showDetails &&
          <>
            <div className='apy center mw'>
              <p>APY</p>
              <p className='percent'>9.0%</p>
            </div>
            <ul className='center mw'>
              <li>Calculated based on current rates</li>
              <li>All Figures are estimates provided for yoyr convenience only, and by no
                means represent guaranteed returns.
              </li>
            </ul>
          </>
        }
      </div>
    </div >
  );
}

export default App;
