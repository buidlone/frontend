import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import { InvestmentPoolAddress } from "../constants/contractAddresses";
import InvestmentPoolABI from './abi/InvestmentPool.json'

export const getIndividualInvestedAmount = async (provider: any, address?: string) => {

  let totalAmountInvestedBig = BigNumber.from(0)

     try {
        const contract = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, provider);
        const filter = contract.filters.Invest(address);
        const filteredEvents = await contract.queryFilter(filter);
       
        for (let i in filteredEvents) {
          
          const investedAmount = filteredEvents[i].args?.amount
          totalAmountInvestedBig = totalAmountInvestedBig.add(investedAmount);

        }
        const totalAmountInvested = ethers.utils.formatEther(totalAmountInvestedBig)
      return {
        totalAmountInvested
      }

    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving data from blockchain")
    }
  

};