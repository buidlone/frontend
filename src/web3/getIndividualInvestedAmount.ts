import { ethers } from "ethers";
import { toast } from "react-toastify";
import { InvestmentPoolAddress } from "../constants/contractAddresses";
import InvestmentPoolABI from './abi/InvestmentPool.json'

export const getIndividualInvestedAmount = async (provider: any, address?: string) => {

  if (provider) {
     try {
        const contract = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, provider);
        const filter = contract.filters.Invest(address);
        const filteredEvents = await contract.queryFilter(filter);
        let totalAmountInvested = 0;

        for (let i in filteredEvents) {
          const investedAmount = Number(ethers.utils.formatEther(filteredEvents[i].args?.amount))
          totalAmountInvested = totalAmountInvested + investedAmount;

        }
      return {
        totalAmountInvested
      }

    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving data from blockchain")
    }
  }

};