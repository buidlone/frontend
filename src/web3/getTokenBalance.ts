import { ethers } from "ethers";
import ERC20TokenABI from './abi/ERC20Token.json'

/**
 Addresses for testing:
 Mainnet: 
 USDT : 0xc9376D12eC1E531d9c14Ee87Cfb23448B4CA2704
 USDC : 0xF9b7faed2d309b025DBF5a5A9Cdb80CEF015Da77

 Goerli:
 USDT : 0x2f62ceacb04eabf8fc53c195c5916dddfa4bed02
 USDC : 0x7e85BA59147ac3616938d680Ab988E3d30834765
 */


export const getTokenBalance = async (tokenAddress: string, provider: any, decimals: number, address?: string | null | undefined) => {

  const contract = new ethers.Contract(tokenAddress, ERC20TokenABI, provider);
  //For testing purposes addresses that have USDC/USDT currencies in Mainnet/Goerli are hardcoded
  //If the address from investModal is provided as an argument - balance of currently connected account will be checked 
  const tokenBalance = await contract.balanceOf(address ? address : "0xF9b7faed2d309b025DBF5a5A9Cdb80CEF015Da77");  
  const tokenBalanceInDecimals = ethers.utils.formatUnits(tokenBalance, decimals)

  return tokenBalanceInDecimals;
  };


