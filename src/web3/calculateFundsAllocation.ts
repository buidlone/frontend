import { BigNumber, ethers } from "ethers";
import {
  IMilestoneFundsAllocated,
  Milestone,
} from "../interfaces/ILoadedValues";

export const calculateFundsAllocation = (
  milestones: Milestone[],
  milestonesInvestmentsListForFormula: number[],
  percentageDivider: number
) => {
  let milestonesFundsAllocation: IMilestoneFundsAllocated[] = [];

  let firstDupeIndex = milestonesInvestmentsListForFormula.findIndex(
    (item: number, index: number) =>
      milestonesInvestmentsListForFormula.lastIndexOf(item) !== index &&
      item === 0
  );

  let firstNonZero = milestonesInvestmentsListForFormula[firstDupeIndex - 1];

  for (let i in milestonesInvestmentsListForFormula) {
    if (milestonesInvestmentsListForFormula[i] !== 0) {
      let stream =
        milestonesInvestmentsListForFormula[i] *
        (milestones[i].intervalStreamingPortion / percentageDivider);
      let seed =
        milestonesInvestmentsListForFormula[i] *
        (milestones[i].intervalSeedPortion / percentageDivider);
      let total = stream + seed;

      let milestoneFundsAllocation = {
        streamAllocated: ethers.utils.formatEther(
          BigNumber.from(parseInt(stream.toString()))
        ),
        seedAllocated: ethers.utils.formatEther(
          BigNumber.from(parseInt(seed.toString()))
        ),
        totalFundsAllocated: ethers.utils.formatEther(
          BigNumber.from(parseInt(total.toString()))
        ),
      };      

      milestonesFundsAllocation.push(milestoneFundsAllocation);
    } else {
      let stream =
        firstNonZero *
        (milestones[i].intervalStreamingPortion / percentageDivider);
      let seed =
        firstNonZero * (milestones[i].intervalSeedPortion / percentageDivider);
      let total = stream + seed;

      let milestoneFundsAllocation = {
        streamAllocated: ethers.utils.formatEther(
          BigNumber.from(parseInt(stream.toString()))
        ),
        seedAllocated: ethers.utils.formatEther(
          BigNumber.from(parseInt(seed.toString()))
        ),
        totalFundsAllocated: ethers.utils.formatEther(
          BigNumber.from(parseInt(total.toString()))
        ),
      };
      milestonesFundsAllocation.push(milestoneFundsAllocation);
    }
  }
  console.log(milestonesFundsAllocation);
  return milestonesFundsAllocation;
};
