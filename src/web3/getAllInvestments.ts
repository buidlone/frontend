import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import { InvestmentPoolAddress, NEXT_PUBLIC_INFURA_ID } from "../constants/contractAddresses";
import { IInvestor } from "../interfaces/IInvestors";
import InvestmentPoolABI from './abi/InvestmentPool.json'

const provider = new ethers.providers.JsonRpcProvider(
    `https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`
  );

export const getAllInvestments = async () => {

    let allInvestments = <IInvestor[]>[]
     try {
        const contract = new ethers.Contract(InvestmentPoolAddress, InvestmentPoolABI, provider);
        const filter = contract.filters.Invest();
        const events = await contract.queryFilter(filter);
        
        for (let i in events) {
          const investedAmount: IInvestor =  {
            caller: events[i].args?.caller,
            amount: (events[i].args?.amount)
          }
          allInvestments.push(investedAmount)
        }
      return {
        allInvestments
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving data from blockchain")
    }
  

};