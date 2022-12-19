import { ethers } from "ethers";
import { toast } from "react-toastify";
import {
  GovernancePoolAddress,
  InvestmentPoolAddress,
} from "../constants/contractAddresses";
import GovernancePoolABI from "./abi/GovernancePool.json";
import InvestmentPoolABI from "./abi/InvestmentPool.json";

export const getUsedInvestments = async (
  provider: any,
  address: string | null | undefined,
  seconds: number
) => {
  if (provider) {
    try {
      const contract = new ethers.Contract(
        InvestmentPoolAddress,
        InvestmentPoolABI,
        provider
      );

      const usedInvestments = await contract.getUsedInvestmentsData(address);

      const usedInvestmentsEth1 = ethers.utils.formatEther(usedInvestments[0]);
      const usedInvestmentsEth2 = ethers.utils.formatEther(usedInvestments[1]);

      const realTimeAmountMultiplied = seconds * Number(usedInvestmentsEth2);

      const realTimeAmount =
        realTimeAmountMultiplied + Number(usedInvestmentsEth1);

      return realTimeAmount;
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving data from blockchain");
    }
  }
};

