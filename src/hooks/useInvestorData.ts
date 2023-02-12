import { useLazyQuery, useQuery } from "@apollo/client";

import { GET_INDIVIDUAL_VALUES, GET_INVESTOR_VALUES } from "../../lib/queries";
import { PROJECT_ID } from "../constants/contractAddresses";

//DOESNT WORK YET - NEEDS CACHE EVICTION
export const useInvestorData = (address: string | undefined | null) => {
  const { data, error, loading, refetch } = useQuery(GET_INVESTOR_VALUES, {
    variables: {
      id: address?.toLowerCase(),
      project: PROJECT_ID,
    },
    skip: !address,
  });

  return { data, refetch };
};
