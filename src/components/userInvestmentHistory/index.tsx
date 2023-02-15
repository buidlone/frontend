import { ethers } from "ethers";
import React from "react";
import { useContext } from "react";
import InvestorValuesContext from "../../context/investorContext";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { BarChartContainer, BarChartScroll } from "../investorsBarChart/styled";
import { Table } from "../tokenStreamTable/styled";

const UserInvesmentHistory = () => {
  const { currency } = useContext(LoadedValuesContext);
  const {
    investorValues: { projectInvestments, id },
  } = useContext(InvestorValuesContext);

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
            {projectInvestments &&
              projectInvestments.singleInvestments.map((item: any) => (
                <tr key={item.transactionHash}>
                  <td data-label={`Address`} className="token">
                    {id}
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
