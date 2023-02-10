import { getActiveVotingTokens } from "./getActiveVotingTokens";

export const isStopAllowed = async (
  projectState: number,
  currentMilestone: number,
  address: string | undefined | null,
  web3Provider: any
) => {
  const activeTokens = await getActiveVotingTokens(
    web3Provider,
    address,
    currentMilestone
  );

  if (address === undefined || address === null) {
    return true;
  } else if (projectState !== 4 && projectState !== 32) {
    return true;
  } else if (activeTokens === undefined || activeTokens <= 0) {
    return true;
  } else return false;
};
