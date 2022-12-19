import { ethers } from "ethers";
import { toast } from "react-toastify";
import {
  GovernancePoolAddress,
  InvestmentPoolAddress,
} from "../constants/contractAddresses";
import GovernancePoolABI from "./abi/GovernancePool.json";
import InvestmentPoolABI from "./abi/InvestmentPool.json";

export const getVotingTokens = async (
  provider: any,
  address: string | null | undefined
) => {
  if (provider) {
    try {
      const contract = new ethers.Contract(
        GovernancePoolAddress,
        GovernancePoolABI,
        provider
      );
      const contractInvestmentPoolProvider = new ethers.Contract(
        InvestmentPoolAddress,
        InvestmentPoolABI,
        provider
      );
      const votingTokensSupply = await contract.getVotingTokensSupply(
        InvestmentPoolAddress
      );
      const votingTokenBalance = await contract.getVotingTokenBalance(
        InvestmentPoolAddress,
        address
      );
      const currentMilestone =
        await contractInvestmentPoolProvider.getCurrentMilestoneId();
      const activeTokens = await contract.getActiveVotingTokensBalance(
        InvestmentPoolAddress,
        currentMilestone,
        address
      );

      return {
        votingTokensSupply: Number(
          ethers.utils.formatEther(votingTokensSupply)
        ),
        votingTokenBalance: Number(
          ethers.utils.formatEther(votingTokenBalance)
        ),
        activeVotingTokens: Number(ethers.utils.formatEther(activeTokens)),
      };
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving data from blockchain");
    }
  }
};

