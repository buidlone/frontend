import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import { InvestmentPoolAddress } from "../constants/contractAddresses";
import InvestmentPoolABI from './abi/InvestmentPool.json'

export const getHistoryTable = async (provider: any, address?: null | string) => {

  let totalAmountInvestedBN = BigNumber.from(0)

     try {
        const contract = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, provider);
        const filter = contract.filters.Invest(address);
        const filteredEvents = await contract.queryFilter(filter);
       
        for (let i in filteredEvents) {
          
          const investedAmount = filteredEvents[i].args?.amount
          totalAmountInvestedBN = totalAmountInvestedBN.add(investedAmount);

          console.log(investedAmount)
          console.log(totalAmountInvestedBN)

        }
        const totalAmountInvested = ethers.utils.formatEther(totalAmountInvestedBN)

        
      return {
        totalAmountInvested
      }

    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving data from blockchain")
    }
  

};