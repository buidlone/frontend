import { BlockWrapper, Title } from "../fundingBlock/styled";

import {
  BottomPartWrapper,
  BottomWrapper,
  InfoIcon,
  InlineWrapper,
  TopWrapper,
  XButton,
} from "./styled";
import TimelineGraph from "../timelineGraph";
import Tooltip from "../tooltip";
import { useContext, useEffect, useState } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { getMonthsBetween } from "../../utils/getMonthsBetween";

const TimelineBlock = () => {
  const [active, setActive] = useState(2);
  const { fundraisingStartDate, fundraisingEndDate, milestones } =
    useContext(LoadedValuesContext);

  const [projectPeriodInYears, setProjectPeriodInYears] = useState("");

  const getProjectPeriod = () => {
    let projectPeriodInMonths = 0;
    for (const milestone of milestones) {
      projectPeriodInMonths += getMonthsBetween(
        milestone.startDate,
        milestone.endDate,
        true
      );
    }
    setProjectPeriodInYears((projectPeriodInMonths / 12).toFixed(1));
  };

  useEffect(() => {
    getProjectPeriod();
  }, []);

  return (
    <BlockWrapper>
      <TopWrapper>
        <Title>Timeline</Title>
        <InlineWrapper className="buttons">
          <XButton
            className={active == 1 ? "selected" : ""}
            onClick={() => setActive(1)}
          >
            x1
          </XButton>
          <XButton
            className={active == 2 ? "selected" : ""}
            onClick={() => setActive(2)}
          >
            x2
          </XButton>
          <XButton
            className={active == 3 ? "selected" : ""}
            onClick={() => setActive(3)}
          >
            x3
          </XButton>
        </InlineWrapper>
      </TopWrapper>

      {active === 1 && <TimelineGraph scale={1} />}
      {active === 2 && <TimelineGraph scale={2} />}
      {active === 3 && <TimelineGraph scale={3} />}

      <BottomWrapper>
        <BottomPartWrapper>
          <InlineWrapper>
            <div className="period">Soft cap reservation period</div>
            <Tooltip
              text={
                "You will be able to claim back your cash if Soft Cap is not reached during expected period"
              }
            >
              <InfoIcon />
            </Tooltip>
          </InlineWrapper>
          <div className="dateNum">
            {fundraisingStartDate?.slice(0, 7)} -{" "}
            {fundraisingEndDate?.slice(0, 7)}{" "}
          </div>
        </BottomPartWrapper>
        <BottomPartWrapper>
          <div>Project period</div>
          <div className="dateWords">
            Aprx {projectPeriodInYears} year after reaching Soft cap
          </div>
        </BottomPartWrapper>
      </BottomWrapper>
    </BlockWrapper>
  );
};

export default TimelineBlock;
