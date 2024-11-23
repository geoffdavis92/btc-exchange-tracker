export interface BinanceResponse {
  symbol: string;
  price: string;
}

export interface BitstampResponse {
  timestamp: string;
  last: string;
  side: "0" | "1";
  volume: string;
}

export interface CoinbaseResponse {
  data: {
    currency: string;
    rates: {
      [key: string]: string;
    };
  };
}

export interface CryptoComResponse {
  result: {
    data: {
      // latest trade price
      a: string;

      // 24hr volume
      v: string;

      // timestamp
      t: number;
    }[];
  };
}

export interface KrakenResponse {
  result: {
    XXBTZUSD: {
      // Last trade close
      c: [price: string, lotVolume: string];

      // Volume
      v: [volume: string, lastDayVolume: string];
    };
  };
}
