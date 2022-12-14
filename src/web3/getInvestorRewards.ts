import { ethers } from "ethers";
import DistributionPoolABI from "./abi/DistributionPool.json";
import { DistributionPoolAddress } from "../constants/contractAddresses";
import { toast } from "react-toastify";

export const getInvestorRewards = async (
  provider: any,
  address?: string | null | undefined
) => {
  try {
    const contract = new ethers.Contract(
      DistributionPoolAddress,
      DistributionPoolABI,
      provider
    );

    const investorRewards = ethers.utils.formatEther(
      await contract.getAllocatedTokens(address)
    );

    return investorRewards;
  } catch (error) {
    console.log("network error", error);
    toast.error("Error occurred while retrieving data from blockchain");
  }
};
