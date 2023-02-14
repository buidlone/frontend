import { BigNumber, ethers } from "ethers";
import client from "../../lib/apolloClient";
import { GET_INVESTOR_VALUES } from "../../lib/queries";
import { PROJECT_ID } from "../constants/contractAddresses";

//TODO: rewrite into a custom hook with useQuery, add refetch option, evict the cache after user logs out
export const getIndividualValues = async (
  address: string | null | undefined
) => {
  try {
    const { data } = await client.query({
      query: GET_INVESTOR_VALUES,
      variables: {
        id: address?.toLowerCase(),
        project: PROJECT_ID,
      },
    });

    let investedAmount = "0";
    let allocatedProjectTokens = "0";

    if (!!data.investor) {
      investedAmount = ethers.utils.formatEther(
        BigNumber.from(data.investor.projectInvestments[0].investedAmount)
      );

      allocatedProjectTokens = ethers.utils.formatEther(
        BigNumber.from(
          data.investor.projectInvestments[0].allocatedProjectTokens
        )
      );
    }

    return { investedAmount, allocatedProjectTokens };
  } catch (error) {
    console.log(
      "Error while fetching investor rewards from the subgraph",
      error
    );
  }
};
