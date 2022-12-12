import React from "react";
import { useContext, useEffect, useState } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import Web3Context from "../../context/web3Context";
import { getIndividualInvestedAmount } from "../../web3/getIndividualInvestedAmount";
import { BarChartContainer, BarChartScroll } from "../investorsBarChart/styled";
import { Table } from "../tokenStreamTable/styled";

const UserInvesmentHistory = () => {
  type History = {
    address: string;
    hash: string;
    amount: string;
  };
  const { web3Provider, address } = useContext(Web3Context);
  const [history, setHistory] = useState<History[]>();
  const { currency } = useContext(LoadedValuesContext);

  useEffect(() => {
    if (web3Provider) {
      getIndividualInvestedAmount(web3Provider, address).then((data: any) => {
        setHistory(data.investorHistory);
      });
    }
  }, []);

  return (
    <BarChartContainer>
      <BarChartScroll hideScrollbars={false} vertical={true}>
        <Table>
          <thead>
            <th className="phase">Address</th>
            <th className="phase">Amount</th>
            <th className="phase">Transaction Hash</th>
          </thead>
          <tbody>
            {history?.map((item: any) => (
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

  );

};

export default UserInvesmentHistory;