import { BigNumber, ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { useInvestors } from "../../hooks/useInvestmentHistory";
import { IInvestorsProps } from "../../interfaces/ICommonProps";
import { roundPrecise } from "../../utils/roundValue";
import {
  BarChartBlock,
  BarChartColumn,
  BarChartScroll,
  BarChartContainer,
  InvHeader,
  InvFooter,
  InvFooterItem,
} from "./styled";

const InvestorsBarChart = () => {
  const { currency } = useContext(LoadedValuesContext);
  const [active, setActive] = useState(false);
  const containerRef = React.createRef<HTMLElement>();
  const { investors, wallets, refetch, min, max } = useInvestors();

  const handleMouseOver = () => {
    setActive(true);
  };
  const handleMouseOut = () => {
    setActive(false);
  };

  return (
    <BarChartBlock>
      <BarChartContainer
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <InvHeader>
          {wallets} {wallets === 1 ? "investor" : "investors"}
        </InvHeader>

        <BarChartScroll
          innerRef={containerRef}
          hideScrollbars={active ? false : true}
          vertical={false}
          horizontal
        >
          {investors &&
            min.gte(BigNumber.from(0)) &&
            max.gte(BigNumber.from(0)) &&
            investors.map((inv, index) => {
              return (
                <BarChartColumn
                  key={index}
                  amount={
                    investors.length === 1
                      ? 100
                      : 5 +
                        (Number(
                          ((Number(inv.amount) - Number(min)) /
                            (Number(max) - Number(min))) *
                            95
                        ) || 0)
                  }
                />
              );
            })}
        </BarChartScroll>
        <InvFooter>
          <InvFooterItem>
            <div className="text">Lowest</div>
            <div className="amount">
              {min.gte(BigNumber.from(0)) &&
                roundPrecise(ethers.utils.formatEther(min)).replace(
                  /,/g,
                  " "
                )}{" "}
              {currency.label}
            </div>
          </InvFooterItem>
          <InvFooterItem>
            <div className="text">Highest</div>
            <div className="amount">
              {max.gte(BigNumber.from(0)) &&
                roundPrecise(ethers.utils.formatEther(max)).replace(
                  /,/g,
                  " "
                )}{" "}
              {currency.label}
            </div>
          </InvFooterItem>
        </InvFooter>
      </BarChartContainer>
    </BarChartBlock>
  );
};

export default InvestorsBarChart;
