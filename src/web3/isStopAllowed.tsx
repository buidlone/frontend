import { getActiveVotingTokens } from "./getActiveVotingTokens";

export const isStopAllowed = (
  projectState: number,
  currentMilestone: number,
  address: string | undefined,
  web3Provider: any
) => {
  let activeTokens;

  const x = getActiveVotingTokens(web3Provider, address, currentMilestone).then(
    (data) => {
      activeTokens = data;
    }
  );

  if (address === undefined) {
    return true;
  } else if (projectState !== 4 && projectState !== 32) {
    return true;
  } else if (activeTokens === 0) {
    return true;
  } else return false;
};
