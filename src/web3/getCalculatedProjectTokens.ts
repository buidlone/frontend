import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import {
  DistributionPoolAddress,
  NEXT_PUBLIC_INFURA_ID,
} from "../constants/contractAddresses";
import DistributionPoolABI from "./abi/DistributionPool.json";

const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`
);

export const getCalculatedProjectTokens = async (amount: string) => {
  try {
    const contract = new ethers.Contract(
      DistributionPoolAddress,
      DistributionPoolABI,
      provider
    );

    const expectedTokensAllocation =
      await contract.calculateExpectedTokensAllocation(
        ethers.utils.parseEther(amount)
      );
    const lockedTokens = await contract.getLockedTokens();

    const projectTokensPercentage = expectedTokensAllocation
      .mul(BigNumber.from(10000))
      .div(lockedTokens);

    return {
      expectedTokensAllocation,
      lockedTokens,
      projectTokensPercentage,
    };
  } catch (error) {
    console.log(error);
    toast.error("Error occurred while retrieving data from blockchain");
  }
};
