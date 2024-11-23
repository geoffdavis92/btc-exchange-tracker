import {
  BinanceResponse,
  BitstampResponse,
  CoinbaseResponse,
  CryptoComResponse,
  KrakenResponse,
} from "../types/exchanges";
import { useRequest } from "./utils";

export function useGetBinanceRate() {
  const [isLoading, data] = useRequest<BinanceResponse>(
    "https://api.binance.us/api/v3/ticker/price?symbol=BTCUSDT"
  );

  if (!data) {
    return [isLoading, data];
  }

  return [isLoading, parseFloat(data.price)];
}

export function useGetBitstampRate() {
  const [isLoading, data] = useRequest<BitstampResponse>(
    "https://www.bitstamp.net/api/v2/ticker/btcusd"
  );

  if (!data) {
    return [isLoading, data];
  }

  return [isLoading, parseFloat(data.last)];
}

export function useGetCoinbaseRate() {
  const [isLoading, data] = useRequest<CoinbaseResponse>(
    "https://api.coinbase.com/v2/exchange-rates?currency=BTC"
  );

  if (!data) {
    return [isLoading, data];
  }

  return [isLoading, parseFloat(data?.data.rates.USD)];
}

export function useGetCryptoComRate() {
  const [isLoading, data] = useRequest<CryptoComResponse>(
    "https://api.crypto.com/exchange/v1/public/get-tickers?instrument_name=BTC_USDT"
  );

  if (!data) {
    return [isLoading, data];
  }

  return [isLoading, parseFloat(data.result.data[0].a)];
}

export function useGetKrakenRate() {
  const [isLoading, data] = useRequest<KrakenResponse>(
    "https://api.kraken.com/0/public/Ticker?pair=BTCUSD"
  );

  if (!data) {
    return [isLoading, data];
  }

  return [isLoading, parseFloat(data.result.XXBTZUSD.c[0])];
}
