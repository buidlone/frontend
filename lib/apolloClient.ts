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
          singleInvestments: {
            // read(singleInvestments) {
            //   return singleInvestments && [...singleInvestments].reverse();
            // },
          },
          investor: {},
        },
        
      },
    },
  }),
});

export default client;

// interface Props {
//   query: any;
//   options?: any;
// }
// export const useMyQuery = ({ query, options = {} }: Props) => {
//   const cacheKey = options.cacheKey || query;
//   const { data, ...result } = useQuery(query, {
//     ...options,
//     client,
//     //fetchPolicy
//   });
//   return {
//     data: data ? data[cacheKey] : undefined,
//     ...result,
//   };
// };
