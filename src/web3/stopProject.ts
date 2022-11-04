import { ethers } from "ethers";
import { toast } from "react-toastify";
import { GovernancePoolAddress, InvestmentPoolAddress, VotingTokenAddress } from "../constants/contractAddresses";
import GovernancePoolABI from './abi/GovernancePool.json'
import VotingTokenABI from './abi/VotingToken.json'
import InvestmentPoolABI from './abi/InvestmentPool.json'
import { log } from "console";
import { VoteAgainstErrorEnum } from "../interfaces/enums/VoteAgainstErrorEnums";


export const stopProject = async (provider: any, address: string | undefined | null) => {

  if (provider) {
     try {
        const signer = provider.getSigner();
        const contractGovernancePoolProvider = new ethers.Contract(GovernancePoolAddress, GovernancePoolABI, provider);
        const contractInvestmentPoolProvider = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, provider);
        const contractInvestmentPoolSigner = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, signer);
        const contractVotingToken = new ethers.Contract(VotingTokenAddress, VotingTokenABI, provider);
        const contractGovernancePoolSigner = new ethers.Contract(GovernancePoolAddress, GovernancePoolABI, signer)
        const contractVotingTokenSigner = new ethers.Contract(VotingTokenAddress, VotingTokenABI, signer);
        const votingTokenBalance = await contractGovernancePoolProvider.getVotingTokenBalance(InvestmentPoolAddress, address);  
        const investmentPoolId = await contractGovernancePoolProvider.getInvestmentPoolId(InvestmentPoolAddress)
        const currentMilestone = await contractInvestmentPoolProvider.getCurrentMilestoneId();
        const activeTokens = await contractGovernancePoolProvider.getActiveVotingTokensBalance(InvestmentPoolAddress, currentMilestone, address)
        const usedTokens = await contractGovernancePoolProvider.getVotesAmount(address, investmentPoolId)
        const votesBalance = (activeTokens - usedTokens);
        const isApprovedPromise = contractVotingToken.isApprovedForAll(address, GovernancePoolAddress)
        let isApproved = await isApprovedPromise;


        if(!isApproved) {
         const isApproved = await contractVotingTokenSigner.setApprovalForAll(
            GovernancePoolAddress,
            true
        );
        const approveReceipt = await isApproved.wait();

        }
         if(isApproved) {

          try {
            const voteTx = await contractGovernancePoolSigner.voteAgainst(
              InvestmentPoolAddress,
              votesBalance
          );
          const voteReceipt = await voteTx.wait();
            } catch (err: any) {
                const revertData = err.error.data.originalError.data;
                const decodedError =  contractGovernancePoolSigner.interface.parseError(revertData);

                if(decodedError.name === VoteAgainstErrorEnum.AMOUNT_ZERO) {
                  toast.error("Voting token amount must be greater than zero")
                } else if (decodedError.name === VoteAgainstErrorEnum.NO_TOKENS) {
                  toast.error("No active voting tokens")
                } else if (decodedError.name === VoteAgainstErrorEnum.AMOUNT_IS_GREATER_THAN_BALANCE) {
                  toast.error("Amount is greater than voting tokens balance")
                } else if (decodedError.name === VoteAgainstErrorEnum.BAD_STATE) {
                  toast.error("Project state is not suitable for stopping the project")
                }
            }
         }
       

    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving data from blockchain")
    }
  }

};
