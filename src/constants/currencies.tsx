//export type AvailableCurrencies = "USDC" | "USDT" | "fDAI" | "fUSDC";

export interface Currency {
  name: string;
  label: string;
  address: string;
  decimals: number;
}

export const mainnetCurrencies: Currency[] = [
  {
    name: "USDT",
    label: "USDT",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    decimals: 6,
  },
  {
    name: "USDC",
    label: "USDC",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    decimals: 6,
  },
];

export const goerliCurrencies: Currency[] = [
  {
    name: "fDAI",
    label: "fDAI",
    address: "0x88271d333C72e51516B67f5567c728E702b3eeE8",
    decimals: 18,
  },
  {
    name: "fUSDC",
    label: "fUSDC",
    address: "0xc94dd466416A7dFE166aB2cF916D3875C049EBB7",
    decimals: 18,
  },
];
