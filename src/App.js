import { useState, useEffect } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coninList, setConinList] = useState([]);
  const [selectCoin, setSelectCoin] = useState("");

  const inputChage = (e) => {
    setAmount(e.target.value);
  }
  const onChangeCoin = (e) => {
    setSelectCoin(coninList[e.target.value]);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (selectCoin !== "") {
      setResult([selectCoin.symbol, amount > 0 ? amount / selectCoin.quotes.KRW.price : 0]);
    }
  }

  const getCoinList = async () => {
    const response = await fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW", {
      headers:
      {
        Accept: 'application/json'
      }
    });

    const json = await response.json();
    setConinList(json.slice(0, 100));
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
          <div>
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="Coin">Coin - </label>
                <select onChange={onChangeCoin}>
                  <option value={""} key={""}>Select Coin</option>
                  {
                    coninList.map((coin, idx) => (
                      <option value={idx} key={idx}>
                        {coin.name}({coin.symbol})  -  {Number(coin.quotes.KRW.price).toLocaleString()} KRW
                      </option>
                    ))
                  }
                </select>
              </div>
              <div>
                <label htmlFor="KRW">KRW - </label>
                <input
                  value={amount}
                  onChange={inputChage}
                  id="KRW"
                  type="number"
                />
              </div>
              <button>Exchange</button>
            </form>
            <hr />
            <h2>
              {
                result.length === 0 ?
                  null
                  :
                  `${result[1]} ${result[0]}`
              }
            </h2>
            <hr />
            <ul>
              {coninList.map((coin, idx) => (
                <li key={idx}>{coin.name}({coin.symbol})<br />
                  ￦ {Number(coin.quotes.KRW.price.toFixed(1)).toLocaleString()} KRW
                </li>
              ))}
            </ul>
          </div>
      }
    </div>
  );
}

export default App;