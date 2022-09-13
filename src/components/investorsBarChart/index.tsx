import React, { useContext, useEffect, useState } from "react";
import ProjectContext from "../../context/projectContext";
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
  const project = useContext(ProjectContext);
  const [active, setActive] = useState(false);
  const [max, setMax] = useState<number>();
  const [min, setMin] = useState<number>();

  const containerRef = React.createRef<HTMLElement>();
  const handleMouseOver = () => {
    setActive(true);
  };
  const handleMouseOut = () => {
    setActive(false);
  };

  useEffect(() => {
    setMax((prev) =>
      project?.investors?.reduce(
        (max, p) => (p.invested > max ? p.invested : max),
        project.investors[0].invested
      )
    );

    setMin((prev) =>
      project?.investors?.reduce(
        (min, p) => (p.invested < min ? p.invested : min),
        project.investors[0].invested
      )
    );
  }, []);

  return (
    <BarChartBlock>
      <BarChartContainer
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <InvHeader>{project.investors?.length} investors</InvHeader>
        <BarChartScroll
          innerRef={containerRef}
          hideScrollbars={active ? false : true}
          vertical={false}
          horizontal
        >
          {project &&
            min &&
            max &&
            project?.investors?.map((inv, index) => {
              return (
                <BarChartColumn
                  key={index}
                  amount={5 + ((inv.invested - min) / (max - min)) * 95}
                />
              );
            })}
        </BarChartScroll>
        <InvFooter>
          <InvFooterItem>
            <div className="text">Lowest</div>
            <div className="amount">
              {min && min.toLocaleString().replace(/,/g, " ")}$
            </div>
          </InvFooterItem>
          <InvFooterItem>
            <div className="text">Highest</div>
            <div className="amount">
              {max && max.toLocaleString().replace(/,/g, " ")}$
            </div>
          </InvFooterItem>
        </InvFooter>
      </BarChartContainer>
    </BarChartBlock>
  );
};

export default InvestorsBarChart;
