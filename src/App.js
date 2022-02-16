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
    setResult([selectCoin.symbol, amount > 0 ? amount / selectCoin.quotes.USD.price : 0]);
  }

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
          <div>
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="coin">Coin - </label>
                <select onChange={onChangeCoin}>
                  <option value={""} key={""}>Select Coin</option>
                  {
                    coninList.map((coin, idx) => (
                      <option value={idx} key={idx}>
                        {coin.name}({coin.symbol})  -  $ {coin.quotes.USD.price} USD
                      </option>
                    ))
                  }
                </select>
              </div>
              <div>
                <label htmlFor="USD">USD - </label>
                <input
                  onChange={inputChage}
                  id="USD"
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
                  `${result[0]} : ${result[1]}`
              }
            </h2>
          </div>
      }
    </div>
  );
}

export default App;
