import { ethers } from "ethers";
import { toast } from "react-toastify";
import {
  GovernancePoolAddress,
  InvestmentPoolAddress,
} from "../constants/contractAddresses";
import GovernancePoolABI from "../web3/abi/GovernancePool.json";

export const getActiveVotingTokens = async (
  provider: any,
  address: string | undefined | null,
  currentMilestone: number
) => {
  if (provider) {
    try {
      const contractGovernancePoolProvider = new ethers.Contract(
        GovernancePoolAddress,
        GovernancePoolABI,
        provider
      );

      const investmentPoolId =
        await contractGovernancePoolProvider.getInvestmentPoolId();

      const activeTokens =
        await contractGovernancePoolProvider.getActiveVotingTokensBalance(
          currentMilestone,
          address
        );

      const usedTokens = await contractGovernancePoolProvider.getVotesAmount(
        address
      );
      const votesBalance = activeTokens - usedTokens;

      if (votesBalance !== undefined) return votesBalance;
      else return 0;
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving data from blockchain");
    }
  }
};
