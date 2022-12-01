import { ethers } from "ethers";
import ERC20TokenABI from "./abi/ERC20Token.json";

/**
 Addresses for testing:
 Mainnet: 
 USDT : 0xc9376D12eC1E531d9c14Ee87Cfb23448B4CA2704
 USDC : 0xF9b7faed2d309b025DBF5a5A9Cdb80CEF015Da77

 Goerli:
 0x618ada3f9f7BC1B2f2765Ba1728BEc5057B3DE40
 */

export const getTokenBalance = async (
  tokenAddress: string,
  provider: any,
  address?: string | null | undefined
) => {
  try {
    const contract = new ethers.Contract(tokenAddress, ERC20TokenABI, provider);
    //For testing purposes addresses that have USDC/USDT currencies in Mainnet/Goerli are hardcoded
    //If the address from investModal is provided as an argument - balance of currently connected account will be checked
    const tokenBalance = await contract.balanceOf(
      address ? address : "0x618ada3f9f7BC1B2f2765Ba1728BEc5057B3DE40"
    );
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
