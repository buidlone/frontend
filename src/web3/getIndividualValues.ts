import { BigNumber, ethers } from "ethers";
import client from "../../lib/apolloClient";
import { GET_INDIVIDUAL_VALUES } from "../../lib/queries";
import { PROJECT_ID } from "../constants/contractAddresses";

export const getIndividualValues = async (
  address: string | null | undefined
) => {
  try {
    const { data } = await client.query({
      query: GET_INDIVIDUAL_VALUES,
      variables: {
        id: PROJECT_ID,
        investor: address?.toLowerCase(),
      },
    });

    let investedAmount = "0";
    let allocatedProjectTokens = "0";

    if (
      data.project.investments[0]?.investedAmount &&
      data.project.investments[0]?.allocatedProjectTokens
    ) {
      investedAmount = ethers.utils.formatEther(
        BigNumber.from(data.project.investments[0].investedAmount)
      );

      allocatedProjectTokens = ethers.utils.formatEther(
        BigNumber.from(data.project.investments[0].allocatedProjectTokens)
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
