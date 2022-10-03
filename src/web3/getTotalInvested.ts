import { ethers } from "ethers";
 import { toast } from "react-toastify";
 import {InvestmentPoolAddress } from "../constants/contractAddresses";
 import InvestmentPoolABI from './abi/InvestmentPool.json'

 export const getTotalInvested = async (provider: any, address: string | null | undefined) => {
     
    if (provider) {
      try {
       const contract = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, provider);
       const totalInvested = await contract.totalInvestedAmount();
       return {
        totalInvested: totalInvested.toString(),
       }
     } catch (error) {
       console.log(error);
       toast.error("Error occurred while retrieving data from blockchain")
     }

    }
 };