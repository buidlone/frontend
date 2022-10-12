export const isInvestingAllowed = (
  projectState: number,
  hardCap: number,
  totalInvested: number
) => {
  if ([4, 32].includes(projectState) && totalInvested !== hardCap) {
    return true;
  } else {
    return false}
};
