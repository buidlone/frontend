import { ethers } from "ethers";
import GovernancePoolABI from "./abi/GovernancePool.json";
import { InvestmentPoolAddress, GovernancePoolAddress } from "../constants/contractAddresses";

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
      InvestmentPoolAddress,
      address
    );
    const votingPower = await contractGovernance.votesAgainstPercentageCount(
      InvestmentPoolAddress,
      votingTokens
    );

   return votingPower;
  } catch (error) {
    console.log("network error", error);
  }
};
