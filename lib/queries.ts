import { gql } from "@apollo/client";

export const GET_SUBGRAPH_DATA = gql`
  query {
    projects {
      percentageDivider
    }
    milestones {
      milestoneId
      startTime
      endTime
      isStreamOngoing
      isSeedAllocationPaid
    }
    acceptedSuperTokens {
      id
      name
      symbol
      decimals
    }
    projectTokens {
      id
      name
      symbol
      decimals
    }
  }
`;
