import { ethers } from "ethers";
import GovernancePoolABI from "./abi/GovernancePool.json";
import { InvestmentPoolAddress } from "../constants/contractAddresses";
import { GovernancePoolAddress } from "../constants/contractAddresses";

export const getVotingPower = async (
  provider: any,
  address?: string | null | undefined
) => {
  try {

    const contractGovernance = new ethers.Contract(
       GovernancePoolAddress,
       GovernancePoolABI,
        provider
      );

    const votingTokens = await contractGovernance.getVotingTokenBalance(
      GovernancePoolAddress,
      address
    );
    const votingPower = await contractGovernance.votesAgainstPercentageCount(
      InvestmentPoolAddress,
      votingTokens
    );

    return Number(ethers.utils.formatEther(votingPower));
  } catch (error) {
    console.log("network error", error);
  }
};
