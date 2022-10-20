import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GovernancePoolAddress, InvestmentPoolAddress, VotingTokenAddress } from "../constants/contractAddresses";
import { GovernancePoolAddress1, InvestmentPoolAddress1, VotingTokenAddress1 } from "../constants/contractAddressesWithMocked";
import GovernancePoolABI from './abi/GovernancePool.json'
import VotingTokenABI from './abi/votingToken.json'
import InvestmentPoolABI from './abi/InvestmentPool.json'

import GovernancePoolABI1 from './abi/abiMocked/GovernancePool.json'
import InvestmentPoolABI1 from './abi/abiMocked/InvestmentPool.json'
import Web3Context from "../context/web3Context";
import { getVotingTokens } from "./getVotingTokens";




export const stopProject = async (provider: any, address: string | undefined | null, tokens?: number) => {
    // let x;



  if (provider) {
     try {
        const signer = provider.getSigner();
      const contract = new ethers.Contract(VotingTokenAddress, VotingTokenABI, provider);
      const contractInvestmentPool = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, provider)
      const contractInvestmentPoolMocked = new ethers.Contract(InvestmentPoolAddress1, InvestmentPoolABI1, signer)
      const contractGovernancePool = new ethers.Contract(GovernancePoolAddress, GovernancePoolABI, signer)
      const contractGovernancePoolMocked = new ethers.Contract(GovernancePoolAddress1, GovernancePoolABI1, signer)
      const contractWithSigner = new ethers.Contract(VotingTokenAddress, VotingTokenABI, signer);
      
       const isApprovedPromise = contract.isApprovedForAll(address, GovernancePoolAddress1)
         let isApproved = await isApprovedPromise;

let stop;

//const date = await contractInvestmentPoolMocked.milestones(0);
const timestamp = await contractInvestmentPoolMocked.setTimestamp(1671204579)


console.log(timestamp)
//console.log(date)

        


         if(isApproved === false) {
      isApproved =  contractWithSigner.setApprovalForAll(GovernancePoolAddress1, true)
         } 
         if(isApproved) {
           stop = await contractGovernancePoolMocked.voteAgainst(InvestmentPoolAddress1,0)
         }

         

  console.log(isApproved);
  





  


      return {
    
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving data from blockchain")
    }
  }

};
