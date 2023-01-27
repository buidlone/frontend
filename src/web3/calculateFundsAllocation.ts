import { BigNumber, ethers } from "ethers";
import {
  IMilestoneFundsAllocated,
  Milestone,
} from "../interfaces/ILoadedValues";

// export const calculateFundsAllocation = (
//   milestones: Milestone[],
//   milestonesInvestmentsListForFormula: BigNumber[],
//   percentageDivider: string
// ) => {
//   let milestonesFundsAllocation: IMilestoneFundsAllocated[] = [];

//   let firstNonZero = milestonesInvestmentsListForFormula
//     .slice()
//     .reverse()
//     .find((element) => element.toString() != "0");

//   for (let i in milestonesInvestmentsListForFormula) {
//     if (milestonesInvestmentsListForFormula[i].toString() !== "0") {
//       let stream = milestonesInvestmentsListForFormula[i]
//         .mul(milestones[i].intervalStreamingPortion)
//         .div(percentageDivider);

//       let seed = milestonesInvestmentsListForFormula[i]
//         .mul(milestones[i].intervalSeedPortion)
//         .div(percentageDivider);

//       let total = stream.add(seed);

//       let milestoneFundsAllocation = {
//         streamAllocated: ethers.utils.formatEther(stream),

//         seedAllocated: ethers.utils.formatEther(seed),

//         totalFundsAllocated: ethers.utils.formatEther(total),
//       };

//       milestonesFundsAllocation.push(milestoneFundsAllocation);
//     } else {
//       if (firstNonZero) {
//         let stream = firstNonZero
//           .mul(milestones[i].intervalStreamingPortion)
//           .div(percentageDivider);

//         let seed = firstNonZero
//           .mul(milestones[i].intervalSeedPortion)
//           .div(percentageDivider);

//         let total = stream.add(seed);

//         let milestoneFundsAllocation = {
//           streamAllocated: ethers.utils.formatEther(stream),

//           seedAllocated: ethers.utils.formatEther(seed),

//           totalFundsAllocated: ethers.utils.formatEther(total),
//         };
//         milestonesFundsAllocation.push(milestoneFundsAllocation);
//       }
//     }
//   }
//   return milestonesFundsAllocation;
// };
