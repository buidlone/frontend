import { BigNumber, ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
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

const InvestorsBarChart = ({ wallets, ...props }: IInvestorsProps) => {
  const { currency, allInvestors } = useContext(LoadedValuesContext);
  const [active, setActive] = useState(false);
  const [max, setMax] = useState<BigNumber>(BigNumber.from(0));
  const [min, setMin] = useState<BigNumber>(BigNumber.from(0));
  const containerRef = React.createRef<HTMLElement>();

  const handleMouseOver = () => {
    setActive(true);
  };
  const handleMouseOut = () => {
    setActive(false);
  };

  const findLowHigh = () => {
    setMax((prev) =>
      allInvestors.reduce(
        (max, p) => (p.amount.gt(max) ? p.amount : max),
        allInvestors[0]?.amount
      )
    );
    setMin((prev) =>
      allInvestors.reduce(
        (min, p) => (p.amount.lt(min) ? p.amount : min),
        allInvestors[0]?.amount
      )
    );
  };

  useEffect(() => {
    if (allInvestors.length !== 0) {
      findLowHigh();
    }
  }, [allInvestors]);

  return (
    <BarChartBlock>
      <BarChartContainer
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <InvHeader>
          {wallets[0] !== "" ? wallets?.length : 0}{" "}
          {wallets?.length === 1 && wallets[0] !== ""
            ? "investor"
            : "investors"}
        </InvHeader>

        <BarChartScroll
          innerRef={containerRef}
          hideScrollbars={active ? false : true}
          vertical={false}
          horizontal
        >
          {allInvestors &&
            min.gte(BigNumber.from(0)) &&
            max.gte(BigNumber.from(0)) &&
            allInvestors.map((inv, index) => {
              return (
                <BarChartColumn
                  key={index}
                  amount={
                    allInvestors.length === 1
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
