import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { GRAPHQL_ENDPOINT } from "../src/constants/contractAddresses";

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          project: {
            merge: true,
          },
          singleInvestments: {},
          investor: {},
        },
      },
    },
  }),
});

export default client;
