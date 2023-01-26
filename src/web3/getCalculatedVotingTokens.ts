import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import {
  InvestmentPoolAddress,
  DistributionPoolAddress,
  NEXT_PUBLIC_INFURA_ID,
} from "../constants/contractAddresses";
import InvestmentPoolABI from "./abi/InvestmentPool.json";
import DistributionPoolABI from "./abi/DistributionPool.json";

const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${NEXT_PUBLIC_INFURA_ID}`
);

export const getCalculatedVotingTokens = async (
  amount: BigNumber,
  softCap: BigNumber,
  hardCap: BigNumber,
  totalInvested: BigNumber
) => {
  try {
    const distributionPoolContract = new ethers.Contract(
      DistributionPoolAddress,
      DistributionPoolABI,
      provider
    );

    const investmentPoolContract = new ethers.Contract(
      InvestmentPoolAddress,
      InvestmentPoolABI,
      provider
    );

    const softCapMultiplier =
      await investmentPoolContract.getSoftCapMultiplier();
    const hardCapMultiplier =
      await investmentPoolContract.getHardCapMultiplier();
    const maxWeightDivisor =
      await investmentPoolContract.getMaximumWeightDivisor();
    const lockedTokens = await distributionPoolContract.getLockedTokens();
    let votingTickets = BigNumber.from(0);
    let maxVotingPower = BigNumber.from(0);
    let minVotingPower = BigNumber.from(0);

    if (totalInvested.lt(softCap) && amount.add(totalInvested).lte(softCap)) {
      votingTickets = amount.mul(softCapMultiplier);

      maxVotingPower = votingTickets
        .mul(10000)
        .div(softCap.mul(softCapMultiplier));

      minVotingPower = votingTickets.mul(10000).div(maxWeightDivisor);
    }

    if (totalInvested.gte(softCap) && totalInvested.lte(hardCap)) {
      votingTickets = amount.mul(hardCapMultiplier);
      const gapAmount = totalInvested.sub(softCap);

      maxVotingPower = votingTickets
        .mul(10000)
        .div(
          softCap
            .mul(softCapMultiplier)
            .add(gapAmount.mul(hardCapMultiplier))
            .add(votingTickets)
        );

      minVotingPower = votingTickets.mul(10000).div(maxWeightDivisor);
    }

    if (totalInvested.lt(softCap) && amount.add(totalInvested).gt(softCap)) {
      const softCapLimit = softCap.sub(totalInvested);
      const gapAmount = totalInvested.add(amount).sub(softCap);
      votingTickets = softCapLimit
        .mul(softCapMultiplier)
        .add(gapAmount.mul(hardCapMultiplier));

      maxVotingPower = votingTickets
        .mul(10000)
        .div(
          softCap.mul(softCapMultiplier).add(gapAmount.mul(hardCapMultiplier))
        );
      minVotingPower = votingTickets.mul(10000).div(maxWeightDivisor);
    }

    //voting tickets same as inv weight
    const expectedTokenAllocation = lockedTokens
      .mul(votingTickets)
      .div(maxWeightDivisor);

    const expectedTokenAllocationPercentage = expectedTokenAllocation
      .mul(10000)
      .div(lockedTokens);

    return {
      votingTickets,
      maxVotingPower,
      minVotingPower,
      expectedTokenAllocation,
      expectedTokenAllocationPercentage,
    };
  } catch (error) {
    console.log(error);
    toast.error("Error occurred while retrieving data from blockchain");
  }
};
