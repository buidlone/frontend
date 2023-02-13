import { gql } from "@apollo/client";

export const GET_STATIC_DATA = gql`
  query StaticData($id: ID!) {
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
      }
      percentageDivider
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

export const GET_DYNAMIC_DATA = gql`
  query DynamicData($id: ID!) {
    project(id: $id) {
      isSoftCapReached
      hardCap
      milestones {
        milestoneId
        isStreamOngoing
        isSeedAllocationPaid
        seedFundsAllocation
        streamFundsAllocation
      }
      totalInvested
      currentMilestone {
        milestoneId
      }
      isCanceledBeforeFundraiserStart
      isCanceledDuringMilestones
      isTerminatedByGelato
      isEmergencyTerminated
      distributionPool {
        didCreatorLockTokens
      }
    }
  }
`;

export const GET_INVESTOR_VALUES = gql`
  query InvestorValues($id: ID!, $project: String) {
    investor(id: $id) {
      projectInvestments(where: { project: $project }) {
        allocatedProjectTokens
        claimedProjectTokens
        investedAmount
      }
    }
  }
`;

export const GET_INVESTOR_HISTORY = gql`
  query InvestorHistory($id: ID!, $investor: Bytes!) {
    singleInvestments(
      where: { projectInvestment_: { project: $id, investor: $investor } }
    ) {
      id
      investor {
        id
      }
      investedAmount
      transactionHash
    }
  }
`;

export const GET_INVESTMENTS_HISTORY = gql`
  query InvestmentsHistory($id: ID!) {
    singleInvestments(where: { projectInvestment_: { project: $id } }) {
      id
      investor {
        id
      }
      transactionHash
      investedAmount
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
