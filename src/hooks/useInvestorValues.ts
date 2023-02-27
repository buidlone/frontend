import { useEffect, useState } from "react";
import { PROJECT_ID } from "../constants/contractAddresses";
import { GET_INVESTOR_DATA } from "../../lib/queries";
import { useQuery } from "@apollo/client";
import { IInvestorValues } from "../interfaces/IInvestorValues";
import { BigNumber, ethers } from "ethers";

export const investorValuesInitialState: IInvestorValues = {};

export const useInvestorValues = (address: string | null | undefined) => {
  const [investorValues, setInvestorValues] = useState<IInvestorValues>(
    investorValuesInitialState
  );
  const { data, error, loading, refetch } = useQuery(GET_INVESTOR_DATA, {
    variables: {
      id: address?.toLowerCase(),
      project: PROJECT_ID,
    },
    skip: !address,
    pollInterval: 5000,
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (!loading && data && data.investor && address) {
      const updatedHistory =
        data.investor.projectInvestments[0].singleInvestments.map(
          (investment: any) => {
            return {
              investedAmount: BigNumber.from(investment.investedAmount),
              transactionHash: investment.transactionHash,
            };
          }
        );

      setInvestorValues({
        id: data.investor.id,
        projectInvestments: {
          id: data.investor.projectInvestments[0].id,
          allocatedProjectTokens: ethers.utils.formatEther(
            BigNumber.from(
              data.investor.projectInvestments[0].allocatedProjectTokens
            )
          ),
          totalInvestedAmount: ethers.utils.formatEther(
            BigNumber.from(data.investor.projectInvestments[0].investedAmount)
          ),
          claimedProjectTokens:
            data.investor.projectInvestments[0].claimedProjectTokens,
          singleInvestments: updatedHistory.reverse(),
          investmentFlowrates: [
            ...data.investor.projectInvestments[0].investmentFlowrates,
          ],
          investmentUsed: [
            ...data.investor.projectInvestments[0].investmentUsed,
          ],
          votingPower:
            BigNumber.from(
              data.investor.projectInvestments[0].currentVotesBalance
            )
              .mul(10000)
              .div(
                BigNumber.from(
                  data.investor.projectInvestments[0].project.governancePool
                    .votingToken.currentSupply
                )
              )
              .toNumber() / 100,
          unusedActiveVotes: [
            ...data.investor.projectInvestments[0].unusedActiveVotes,
          ],
        },
      });
    } else {
      setInvestorValues({});
    }
  }, [data, loading, address]);

  return {
    investorValues,
    setInvestorValues,
    refetch,
  };
};
