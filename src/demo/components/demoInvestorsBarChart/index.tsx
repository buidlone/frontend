import { useContext, useEffect, useState } from "react";
import {
  BarChartContainer,
  BarChartScroll,
  InvFooter,
  InvFooterItem,
  InvHeader,
} from "../../../components/investorsBarChart/styled";
import DemoMockDataContext from "../../context/demoMockDataContext";
import { DemoBarChartBlock, DemoBarChartColumn } from "./styled";

const DemoInvestorsBarchart = () => {
  const {
    mockData: { investors },
  } = useContext(DemoMockDataContext);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(2000);

  useEffect(() => {
    setMin(Math.min(...investors));
    setMax(Math.max(...investors));
  }, [investors]);

  return (
    <DemoBarChartBlock>
      <BarChartContainer>
        <InvHeader>{investors.length} investors already in</InvHeader>

        <BarChartScroll hideScrollbars={true} vertical={false} horizontal>
          {investors.map((inv, index) => {
            return (
              <DemoBarChartColumn
                key={index}
                amount={
                  investors.length === 1
                    ? 100
                    : 5 +
                      (Number(
                        ((Number(inv) - Number(min)) /
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
            <div className="amount">{min}$</div>
          </InvFooterItem>
          <InvFooterItem>
            <div className="text">Highest</div>
            <div className="amount">{max}$</div>
          </InvFooterItem>
        </InvFooter>
      </BarChartContainer>
    </DemoBarChartBlock>
  );
};

export default DemoInvestorsBarchart;
