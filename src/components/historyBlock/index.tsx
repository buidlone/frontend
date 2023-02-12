import { ethers } from "ethers";
import React from "react";
import { useContext, useEffect, useState } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { useInvestors } from "../../hooks/useInvestmentHistory";

import { BarChartContainer, BarChartScroll } from "../investorsBarChart/styled";
import { Table } from "../tokenStreamTable/styled";
import { HistoryTable } from "./styled";

const HistoryBlock = () => {
  type History = {
    address: string;
    hash: string;
    amount: string;
  };

  const { currency, totalInvested } = useContext(LoadedValuesContext);
  //const { history, refetch } = useInvestmentHistory();
  const { investors, refetch } = useInvestors();

  useEffect(() => {
    refetch();
  }, [totalInvested._hex]);

  if (!!investors) {
    return (
      <HistoryTable style={{ color: "white" }}>
        <BarChartContainer>
          <BarChartScroll hideScrollbars={false} vertical={true}>
            <Table>
              <thead>
                <tr className="none">
                  <th>Address</th>
                  <th>Amount</th>
                  <th>Transaction Hash</th>
                </tr>
              </thead>

              <tbody>
                {investors.map((investor: any) => (
                  <tr key={investor.transactionHash}>
                    <td data-label={`Address`} className="token">
                      {investor.caller}
                    </td>
                    <td data-label={`Amount`} className="token">
                      {ethers.utils.formatEther(investor.amount)}{" "}
                      {currency.label}
                    </td>
                    <td data-label={`Transaction Hash`} className="fund">
                      <a
                        target="_blank"
                        href={`https://goerli.etherscan.io/tx/${investor.transactionHash}`}
                      >
                        {investor.transactionHash}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </BarChartScroll>
        </BarChartContainer>
      </HistoryTable>
    );
  }
  return (
    <HistoryTable style={{ color: "white" }}>
      <Table>
        <thead>
          <tr className="none">
            <th>Address</th>
            <th>Amount</th>
            <th>Transaction Hash</th>
          </tr>
        </thead>
        <tbody />
      </Table>
    </HistoryTable>
  );
};

export default HistoryBlock;
