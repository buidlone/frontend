import { ethers } from "ethers";
import { toast } from "react-toastify";
import { GovernancePoolAddress, InvestmentPoolAddress } from "../constants/contractAddresses";
import GovernancePoolABI from './abi/GovernancePool.json'

export const getVotingTokens = async (provider: any, address: string | null | undefined) => {

  if (provider) {
     try {
      const contract = new ethers.Contract(GovernancePoolAddress, GovernancePoolABI, provider);
      const votingTokensSupply = await contract.getVotingTokensSupply(InvestmentPoolAddress);
      const votingTokenBalance = await contract.getVotingTokenBalance(InvestmentPoolAddress, address)
      
      return {
        votingTokensSupply: (Number(ethers.utils.formatEther(votingTokensSupply))),
        votingTokenBalance: (Number(ethers.utils.formatEther(votingTokenBalance)))
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving data from blockchain")
    }
  }

};

