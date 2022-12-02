import React from "react";
import { useContext, useEffect, useState } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import Web3Context from "../../context/web3Context";
import { getHistoryTable } from "../../web3/historyTable";
import { BarChartContainer, BarChartScroll } from "../investorsBarChart/styled";
import { Table } from "../tokenStreamTable/styled";
import { HistoryTable } from "./styled";

const HistoryBlock = () => {
  type History = {
    address: string;
    hash: string;
    amount: string;
  };
  const [history, setHistory] = useState<History[]>();
  const { currency, totalInvested } = useContext(LoadedValuesContext);

  useEffect(() => {
    getHistoryTable().then((data: any) => {
      setHistory(data);
    });
  }, [totalInvested._hex]);

  if (history) {
    return (
      <HistoryTable style={{ color: "white" }}>
        <BarChartContainer>
          <BarChartScroll hideScrollbars={false} vertical={true}>
            <Table>
              <thead>
                <th>Address</th>
                <th>Amount</th>
                <th>Transaction Hash</th>
              </thead>
              <tbody>
                {history.map((item: any) => (
                  <tr>
                    <td data-label={`Address`} className="token">
                      {item.address}
                    </td>
                    <td data-label={`Amount`} className="token">
                      {item.amount} {currency.label}
                    </td>
                    <td data-label={`Transaction Hash`} className="fund">
                      <a
                        target="_blank"
                        href={`https://goerli.etherscan.io/tx/${item.hash}`}
                      >
                        {item.hash}
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
          <th>Address</th>
          <th>Amount</th>
          <th>Transaction Hash</th>
        </thead>
        <tbody></tbody>
      </Table>
    </HistoryTable>
  );
};

export default HistoryBlock;
