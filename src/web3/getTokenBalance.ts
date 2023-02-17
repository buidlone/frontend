import { ethers } from "ethers";
import ERC20TokenABI from "./abi/ERC20Token.json";

export const getTokenBalance = async (
  tokenAddress: string,
  provider: any,
  address?: string | null | undefined
) => {
  try {
    const contract = new ethers.Contract(tokenAddress, ERC20TokenABI, provider);
    const tokenBalance = await contract.balanceOf(address);
    const tokenDecimals = await contract.decimals();

    const tokenBalanceInDecimals = ethers.utils.formatUnits(
      tokenBalance,
      tokenDecimals
    );
    return tokenBalanceInDecimals;
  } catch (error) {
    console.log("network error", error);
  }
};
