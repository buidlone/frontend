import { BigNumber } from "ethers";

export const isInvestingAllowed = (
  projectState: number,
  hardCap: BigNumber,
  totalInvested: BigNumber
) => {
  if ([4, 32].includes(projectState) && !totalInvested.eq(hardCap)) {
    return true;
  } else {
    return false;
  }
};
