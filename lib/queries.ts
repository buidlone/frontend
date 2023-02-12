import { gql } from "@apollo/client";

// export const GET_INITIAL_DATA = gql`
//   query InitialData($id: ID!) {
//     project(id: $id) {
//       acceptedToken {
//         decimals
//         id
//         name
//         symbol
//       }
//       fundraiserStartTime
//       fundraiserEndTime
//       distributionPool {
//         lockedTokensForRewards
//         projectToken {
//           decimals
//           id
//           name
//           symbol
//         }
//       }
//       softCap
//       isSoftCapReached
//       hardCap
//       milestonesCount
//       milestones {
//         milestoneId
//         startTime
//         endTime
//         isStreamOngoing
//         isSeedAllocationPaid
//         seedFundsAllocation
//         streamFundsAllocation
//       }
//       percentageDivider
//       totalInvested
//       currentMilestone {
//         milestoneId
//       }
//       softCapMultiplier
//       hardCapMultiplier
//       maximumWeightDivisor
//       governancePool {
//         votingToken {
//           supplyCap
//         }
//       }
//     }
//   }
// `;

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

// export const GET_PROJECT_STATE = gql`
//   query StateData($id: ID!) {
//     project(id: $id) {
//       isCanceledBeforeFundraiserStart
//       isCanceledDuringMilestones
//       isTerminatedByGelato
//       fundraiserStartTime
//       fundraiserEndTime
//       isEmergencyTerminated
//       isSoftCapReached
//       milestonesCount
//       distributionPool {
//         didCreatorLockTokens
//       }
//       milestones {
//         startTime
//         endTime
//       }
//       currentMilestone {
//         milestoneId
//       }
//     }
//   }
// `;

export const GET_INDIVIDUAL_VALUES = gql`
  query IndividualValues($id: ID!, $investor: Bytes!) {
    project(id: $id) {
      projectInvestments(where: { investor: $investor }) {
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

//add its transactions into this query and refetch only when he invests/votes
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
      investor {
        id
      }
      transactionHash
      investedAmount
    }
  }
`;
