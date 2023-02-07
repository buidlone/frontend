import { gql } from "@apollo/client";

export const GET_INITIAL_DATA = gql`
  query InitialData($id: ID!) {
    project(id: $id) {
      acceptedToken {
        decimals
        id
        name
        symbol
      }
      fundraiserStartTime
      fundraiserEndTime
      distributionPool {
        lockedTokensForRewards
        projectToken {
          decimals
          id
          name
          symbol
        }
      }
      softCap
      hardCap
      milestones {
        milestoneId
        startTime
        endTime
        isStreamOngoing
        isSeedAllocationPaid
        seedFundsAllocation
        streamFundsAllocation
      }
      percentageDivider
      totalInvested
      currentMilestone {
        milestoneId
      }
    }
  }
`;

export const GET_INDIVIDUAL_INVESTMENT = gql`
  query UserInvestment($id: ID!, $investor: Bytes!) {
    project(id: $id) {
      investments(where: { investor: $investor }) {
        investedAmount
      }
    }
  }
`;

export const GET_INDIVIDUAL_REWARDS = gql`
  query Rewards($id: ID!, $investor: Bytes!) {
    project(id: $id) {
      investments(where: { investor: $investor }) {
        allocatedProjectTokens
      }
    }
  }
`;
