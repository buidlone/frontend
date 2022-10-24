import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GovernancePoolAddress, InvestmentPoolAddress, VotingTokenAddress } from "../constants/contractAddresses";

import GovernancePoolABI from './abi/GovernancePool.json'
import VotingTokenABI from './abi/votingToken.json'
import InvestmentPoolABI from './abi/InvestmentPool.json'
import Web3Context from "../context/web3Context";
import { log } from "console";




export const stopProject = async (provider: any, address: string | undefined | null, tokens?: number) => {

  if (provider) {
     try {
        const signer = provider.getSigner();
        const contractGovernancePoolProvider = new ethers.Contract(GovernancePoolAddress, GovernancePoolABI, provider);
      const votingTokenBalance = await contractGovernancePoolProvider.getVotingTokenBalance(InvestmentPoolAddress, address)


      const contract = new ethers.Contract(VotingTokenAddress, VotingTokenABI, provider);
      const contractInvestmentPool = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, provider)

      const contractGovernancePool = new ethers.Contract(GovernancePoolAddress, GovernancePoolABI, signer)

      const contractWithSigner = new ethers.Contract(VotingTokenAddress, VotingTokenABI, signer);
      
       const isApprovedPromise = contract.isApprovedForAll(address, GovernancePoolAddress)


         let isApproved = await isApprovedPromise;



 let stop;

const date = await contractInvestmentPool.milestones(0);
const timestamp = await contractInvestmentPool.setTimestamp(1671467123)
const state = await  contractInvestmentPool.getProjectStateByteValue();

console.log(state);
console.log("state");

console.log(timestamp)
console.log("timestamp");

console.log(date)
console.log("date");


console.log(isApproved);
console.log("approved");
//const stop = await contractGovernancePoolMocked.voteAgainst(InvestmentPoolAddress1,'0x2386f26fc10000')

        let x;


      //    if(isApproved === false) {
      // isApproved = await contractWithSigner.setApprovalForAll(GovernancePoolAddress1, true)

      // console.log(isApproved);

      // if(isApproved === false) {
      // console.log("veikia lyg");
      
      //    } else if(isApproved === true) {
      //      console.log("true");
      //    }

      //   }
      //    if(isApproved) {
      //      stop = await contractGovernancePoolMocked.voteAgainst(InvestmentPoolAddress1,'0x2386f26fc10000')
      //    }

       
         
         
         

  console.log(stop);
  





  


      return {
    
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving data from blockchain")
    }
  }

};
