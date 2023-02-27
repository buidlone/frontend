import { BigNumber } from "ethers";

export const getCalculatedVotingTokens = (
  amount: BigNumber,
  softCap: BigNumber,
  hardCap: BigNumber,
  totalInvested: BigNumber,
  softCapMultiplier: BigNumber,
  hardCapMultiplier: BigNumber,
  maxWeightDivisor: BigNumber,
  lockedTokens: BigNumber,
  supplyCap: BigNumber
) => {
  let votingTickets = BigNumber.from(0);
  let maxVotingPower = BigNumber.from(0);
  let minVotingPower = BigNumber.from(0);

  if (totalInvested.lt(softCap) && amount.add(totalInvested).lte(softCap)) {
    votingTickets = amount.mul(softCapMultiplier);

    maxVotingPower = votingTickets
      .mul(10000)
      .div(softCap.mul(softCapMultiplier));

    minVotingPower = votingTickets.mul(10000).div(supplyCap);
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

    minVotingPower = votingTickets.mul(10000).div(supplyCap);
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
    minVotingPower = votingTickets.mul(10000).div(supplyCap);
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
};
