import TradeViewChart from './TradeViewChart';

import './App.css';

function App() {
  return (
  <div className="parent">
    <h3>LUNA/USDT</h3>
    <TradeViewChart
      containerStyle={{
        minHeight: '300px',
        minWidth: '400px',
        marginBottom: '30px',
      }}
      pair="LUNAUSDT"
    />
  </div>
  )
}

export default App;
