import { ethers } from "ethers";
import GovernancePoolABI from "./abi/GovernancePool.json";
import {
  InvestmentPoolAddress,
  NEXT_PUBLIC_INFURA_ID,
  GovernancePoolAddress,
} from "../constants/contractAddresses";

export const getVotedAgainst = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    `https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`
  );

  try {
    const contractGovernance = new ethers.Contract(
      GovernancePoolAddress,
      GovernancePoolABI,
      provider
    );

    const totalVotesAmount = await contractGovernance.getTotalVotesAmount(
      InvestmentPoolAddress
    );
    const votedAgainst = await contractGovernance.votesAgainstPercentageCount(
      InvestmentPoolAddress,
      totalVotesAmount
    );

    return votedAgainst;
  } catch (error) {
    console.log("network error", error);
  }
};

