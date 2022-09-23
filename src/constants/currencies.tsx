export type AvailableCurrencies = "USDC" | "USDT";

export interface Currency {
  key: AvailableCurrencies;
  label: string;
  address: string;
  decimals: number;
}

export const mainnetCurrencies: Currency[] = [
  {
    key: "USDT",
    label: "USDT",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    decimals: 6,
  },
  {
    key: "USDC",
    label: "USDC",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    decimals: 6,
  },
];

export const goerliCurrencies: Currency[] = [
  {
    key: "USDT",
    label: "USDT",
    address: "0x509Ee0d083DdF8AC028f2a56731412edD63223B9",
    decimals: 6,
  },
  {
    key: "USDC",
    label: "USDC",
    address: "0x2f3A40A3db8a7e3D09B0adfEfbCe4f6F81927557",
    decimals: 6,
  },
];
