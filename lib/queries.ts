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
      softCapMultiplier
      hardCapMultiplier
      maximumWeightDivisor
      governancePool {
        votingToken {
          supplyCap
        }
      }
    }
  }
`;

export const GET_INDIVIDUAL_VALUES = gql`
  query IndividualValues($id: ID!, $investor: Bytes!) {
    project(id: $id) {
      investments(where: { investor: $investor }) {
        investedAmount
        allocatedProjectTokens
      }
    }
  }
`;

// export const SUBSCRIBE_TO_UPDATES = gql`
//   subscription UpdatedData($id: ID!) {
//     project(id: $id) {
//       totalInvested
//     }
//   }
// `;
