import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  const [coin, setCoin] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoin(json);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <h1>the coins</h1>
      {loading ? (
        <span>Loading..</span>
      ) : (
        <ul>
          {coin.slice(0, 30).map((item) => (
            <li key={item.id}>
              <span className="title">{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
