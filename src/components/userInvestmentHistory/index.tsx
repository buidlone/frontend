import { useQuery } from "@apollo/client";
import { ethers } from "ethers";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { GET_INVESTOR_HISTORY } from "../../../lib/queries";
import { PROJECT_ID } from "../../constants/contractAddresses";
import LoadedValuesContext from "../../context/loadedValuesContext";
import Web3Context from "../../context/web3Context";

import { BarChartContainer, BarChartScroll } from "../investorsBarChart/styled";
import { Table } from "../tokenStreamTable/styled";

const UserInvesmentHistory = () => {
  type History = {
    address: string;
    hash: string;
    amount: string;
  };
  const { web3Provider, address } = useContext(Web3Context);
  const { currency, totalInvested } = useContext(LoadedValuesContext);
  const {
    data: history,
    error,
    loading,
    refetch,
  } = useQuery(GET_INVESTOR_HISTORY, {
    variables: {
      id: PROJECT_ID,
      investor: address?.toLowerCase(),
    },
  });

  useEffect(() => {
    refetch();
  }, [totalInvested._hex]);

  return (
    <BarChartContainer>
      <BarChartScroll hideScrollbars={false} vertical={true}>
        <Table>
          <thead>
            <tr className="none">
              <th className="phase">Address</th>
              <th className="phase">Amount</th>
              <th className="phase">Transaction Hash</th>
            </tr>
          </thead>
          <tbody>
            {!!history &&
              history.singleInvestments.map((item: any) => (
                <tr key={item.transactionHash}>
                  <td data-label={`Address`} className="token">
                    {item.investor.id}
                  </td>
                  <td data-label={`Amount`} className="token">
                    {ethers.utils.formatEther(item.investedAmount)}{" "}
                    {currency.label}
                  </td>
                  <td data-label={`Transaction Hash`} className="fund">
                    <a
                      target="_blank"
                      href={`https://goerli.etherscan.io/tx/${item.hash}`}
                    >
                      {item.transactionHash}
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </BarChartScroll>
    </BarChartContainer>
  );
};

export default UserInvesmentHistory;
