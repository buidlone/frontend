import { ethers } from "ethers";
import { toast } from "react-toastify";
import {
  InvestmentPoolAddress,
  NEXT_PUBLIC_INFURA_ID,
} from "../constants/contractAddresses";
import InvestmentPoolABI from "./abi/InvestmentPool.json";

const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`
);

export const getCalculatedTokens = async (amount: number) => {
  try {
    const contract = new ethers.Contract(
      InvestmentPoolAddress,
      InvestmentPoolABI,
      provider
    );

    let votingTokensToMint = await contract.getVotingTokensAmountToMint(
      ethers.utils.parseEther(amount.toFixed(18)) //with toString ethersjs throws an error: fractional component exceeds decimals
    );
    let votingTokensSupplyCap = await contract.getVotingTokensSupplyCap();

    votingTokensToMint = Number(ethers.utils.formatEther(votingTokensToMint));
    votingTokensSupplyCap = Number(
      ethers.utils.formatEther(votingTokensSupplyCap)
    );

    return {
      votingTokensToMint,
      votingTokensSupplyCap,
    };
  } catch (error) {
    console.log(error);
    toast.error("Error occurred while retrieving data from blockchain");
  }
};
