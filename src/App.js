import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coninList, setConinList] = useState([]);

  const getCoinList = async () => {
    const response = await fetch("https://api.coinpaprika.com/v1/tickers");
    const json = await response.json();
    setConinList(json);
    setLoading(false);
  };

  useEffect(() => {
    getCoinList();
  }, []);

  return (
    <div>
      <h2>The Conin List {loading ? "" : `(${coninList.length})`} !!!</h2>
      <hr />
      {
        loading ?
          <strong>Loading...</strong>
          :
          <ul>
            {
              coninList.map((coin, idx) => (
                <li key={idx}>
                  {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                </li>
              ))
            }
          </ul>
      }
    </div>
  );
}

export default App;
