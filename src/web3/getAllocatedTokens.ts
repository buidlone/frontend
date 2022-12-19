import { ethers } from "ethers";
import { toast } from "react-toastify";
import { DistributionPoolAddress } from "../constants/contractAddresses";
import DistributionPoolABI from "./abi/DistributionPool.json";

export const getAllocatedTokens = async (
  provider: any,
  address: string | undefined | null
) => {
  if (provider) {
    try {
      const contract = new ethers.Contract(
        DistributionPoolAddress,
        DistributionPoolABI,
        provider
      );

      const allocatedTokens = await contract.getAllocatedTokens(address);

      return ethers.utils.formatEther(allocatedTokens);
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving data from blockchain");
    }
  }
};

