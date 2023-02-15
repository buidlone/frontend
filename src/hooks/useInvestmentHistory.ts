import { useQuery } from "@apollo/client";
import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { GET_INVESTMENTS_HISTORY } from "../../lib/queries";
import { PROJECT_ID } from "../constants/contractAddresses";
import { IInvestor } from "../interfaces/IInvestors";

export const useInvestors = () => {
  const { data, error, loading, refetch } = useQuery(GET_INVESTMENTS_HISTORY, {
    variables: {
      id: PROJECT_ID,
    },
    pollInterval: 5000,
  });
  const [investors, setInvestors] = useState<IInvestor[]>([]);
  const [wallets, setWallets] = useState<number>(0);
  const [min, setMin] = useState<BigNumber>(BigNumber.from(0));
  const [max, setMax] = useState<BigNumber>(BigNumber.from(0));

  useEffect(() => {
    console.log(data);

    if (!data || !!data.singleInvestments) return;
    const uniqueInvestors = new Set();

    const values = data.singleInvestments.map((investment: any) => {
      uniqueInvestors.add(investment.investor.id);

      return {
        caller: investment.investor.id,
        amount: BigNumber.from(investment.investedAmount),
        transactionHash: investment.transactionHash,
      };
    });
    setInvestors(values.reverse());
    setWallets(uniqueInvestors.size);
    setMin((prev) => {
      if (!prev.eq(BigNumber.from(data.lowest[0].investedAmount))) {
        return BigNumber.from(data.lowest[0].investedAmount);
      }
      return prev;
    });
    setMax((prev) => {
      if (!prev.eq(BigNumber.from(data.highest[0].investedAmount))) {
        return BigNumber.from(data.highest[0].investedAmount);
      }
      return prev;
    });
  }, [data]);

  return {
    investors,
    wallets,
    loading,
    error,
    refetch,
    min,
    max,
  };
};
