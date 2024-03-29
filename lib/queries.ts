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
      milestonesCount
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
          id
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
      fundsUsedByCreator
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
      governancePool {
        totalPercentageAgainst
        votingToken {
          id
          currentSupply
        }
      }
    }
  }
`;

//needs to be queried every time user invests
export const GET_INVESTOR_DATA = gql`
  query InvestorValues($id: ID!, $project: String) {
    investor(id: $id) {
      id
      projectInvestments(where: { project: $project }) {
        id
        allocatedProjectTokens
        claimedProjectTokens
        investedAmount
        investmentFlowrates
        investmentUsed
        currentVotesBalance
        unusedActiveVotes
        singleInvestments {
          investedAmount
          transactionHash
        }
        project {
          governancePool {
            votingToken {
              id
              currentSupply
            }
          }
        }
      }
    }
  }
`;

export const INVEST_MUTATION = gql`
  mutation InvestLocally($id: ID!, $project: String, $amount: String) {
    investLocally(id: $id, project: $project, amount: $amount) {
      projectInvestments(where: { project: $project }) {
        investedAmount
      }
    }
  }
`;

export const GET_INVESTMENTS_HISTORY = gql`
  query InvestmentsHistory($id: ID!) {
    singleInvestments(
      orderBy: creationTime
      orderDirection: asc
      where: { projectInvestment_: { project: $id } }
    ) {
      investor {
        id
      }
      transactionHash
      investedAmount
    }

    lowest: singleInvestments(
      first: 1
      orderBy: investedAmount
      orderDirection: asc
      where: { projectInvestment_: { project: $id } }
    ) {
      investedAmount
      investor {
        id
      }
    }

    highest: singleInvestments(
      first: 1
      orderBy: investedAmount
      orderDirection: desc
      where: { projectInvestment_: { project: $id } }
    ) {
      investedAmount
      investor {
        id
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
