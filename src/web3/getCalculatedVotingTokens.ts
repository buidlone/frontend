import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import {
  InvestmentPoolAddress,
  NEXT_PUBLIC_INFURA_ID,
} from "../constants/contractAddresses";
import InvestmentPoolABI from "./abi/InvestmentPool.json";

const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`
);

export const getCalculatedVotingTokens = async (amount: string) => {
  try {
    const contract = new ethers.Contract(
      InvestmentPoolAddress,
      InvestmentPoolABI,
      provider
    );

    const votingTokensToMint = await contract.getVotingTokensAmountToMint(
      ethers.utils.parseEther(amount)
    );
    const votingTokensSupplyCap = await contract.getVotingTokensSupplyCap();

    const calculatedVotingTokens = votingTokensToMint
      .mul(BigNumber.from(10000))
      .div(votingTokensSupplyCap);

    return {
      votingTokensToMint,
      votingTokensSupplyCap,
      calculatedVotingTokens,
    };
  } catch (error) {
    console.log(error);
    toast.error("Error occurred while retrieving data from blockchain");
  }
};
