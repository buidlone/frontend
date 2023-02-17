import { BigNumber } from "ethers";
import { ProjectState } from "../interfaces/enums/ProjectStateEnums";

export const isInvestingAllowed = (
  projectState: number,
  hardCap: BigNumber,
  totalInvested: BigNumber
) => {
  if (
    [
      ProjectState.ONGOING_FUNDRAISER,
      ProjectState.MILESTONES_ONGOING_BEFORE_LAST,
    ].includes(projectState) &&
    !totalInvested.eq(hardCap)
  ) {
    return true;
  } else {
    return false;
  }
};
