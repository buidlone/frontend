import { ethers } from "ethers";
import { toast } from "react-toastify";
import { GovernancePoolAddress, InvestmentPoolAddress, VotingTokenAddress } from "../constants/contractAddresses";
import GovernancePoolABI from './abi/GovernancePool.json'
import VotingTokenABI from './abi/votingToken.json'
import InvestmentPoolABI from './abi/InvestmentPool.json'


export const stopProject = async (provider: any, address: string | undefined | null) => {

  if (provider) {
     try {
        let stop;
        const signer = provider.getSigner();
        const contractGovernancePoolProvider = new ethers.Contract(GovernancePoolAddress, GovernancePoolABI, provider);
        const contractVotingToken = new ethers.Contract(VotingTokenAddress, VotingTokenABI, provider);
        const contractGovernancePoolSigner = new ethers.Contract(GovernancePoolAddress, GovernancePoolABI, signer)
        const contractVotingTokenSigner = new ethers.Contract(VotingTokenAddress, VotingTokenABI, signer);
        const votingTokenBalance = await contractGovernancePoolProvider.getVotingTokenBalance(InvestmentPoolAddress, address);   
        const isApprovedPromise = contractVotingToken.isApprovedForAll(address, GovernancePoolAddress)
        let isApproved = await isApprovedPromise;

        if(!isApproved) {
          isApproved = await contractVotingTokenSigner.setApprovalForAll(GovernancePoolAddress, true)
        }
         if(isApproved) {
           stop = await contractGovernancePoolSigner.voteAgainst(InvestmentPoolAddress, votingTokenBalance)
         }

    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving data from blockchain")
    }
  }

};
