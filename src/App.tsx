import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  useGetBinanceRate,
  useGetBitstampRate,
  useGetCoinbaseRate,
  useGetCryptoComRate,
  useGetKrakenRate,
} from "./hooks/exchangeData";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function App() {
  const [cbLoading, cbData] = useGetCoinbaseRate();
  const [binanceLoading, binanceData] = useGetBinanceRate();
  const [bitstampLoading, bitstampData] = useGetBitstampRate();
  const [cryptoComLoading, cryptoComData] = useGetCryptoComRate();
  const [krakenLoading, krakenData] = useGetKrakenRate();

  return (
    <div className="App">
      <header style={{ backgroundColor: "#232222", padding: "1.5rem 0" }}>
        <h1 style={{ margin: 0 }}>
          <i style={{ color: "white" }}>
            Exchange<span style={{ color: "#00AC4E" }}>Watch</span>
          </i>
        </h1>
      </header>
      {cbLoading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <>
          <p>
            Coinbase:{" "}
            {typeof cbData === "number" && currencyFormatter.format(cbData)}
          </p>
        </>
      )}
      {binanceLoading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <>
          <p>
            Binance:{" "}
            {typeof binanceData === "number" &&
              currencyFormatter.format(binanceData)}
          </p>
        </>
      )}
      {bitstampLoading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <>
          <p>
            Bitstamp:{" "}
            {typeof bitstampData === "number" &&
              currencyFormatter.format(bitstampData)}
          </p>
        </>
      )}
      {cryptoComLoading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <>
          <p>
            Crypto.com:{" "}
            {typeof cryptoComData === "number" &&
              currencyFormatter.format(cryptoComData)}
          </p>
        </>
      )}
      {krakenLoading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <>
          <p>
            Kraken:{" "}
            {typeof krakenData === "number" &&
              currencyFormatter.format(krakenData)}
          </p>
        </>
      )}
    </div>
  );
}

export default App;
