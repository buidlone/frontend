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
import { dateDiff } from "../../utils/getDateDifference";

const TimelineBlock = () => {
  const [active, setActive] = useState(1);
  const [status, setStatus] = useState(3);
  const { fundraisingStartDate, fundraisingEndDate, milestones } =
    useContext(LoadedValuesContext);

  const [projectPeriodInMonths, setProjectPeriodInMonths] = useState(3);
  const [projectPeriodInYears, setProjectPeriodInYears] = useState(0);

  const handleButtonStatus = () => {
    if (milestones.length < 4) {
      setStatus(2);
    } else if (milestones.length >= 4 && milestones.length < 8) {
      setStatus(1);
    } else {
      setStatus(3);
    }
  };

  useEffect(() => {
    const projectPeriod = dateDiff(
      milestones[milestones.length - 1].endDate,
      milestones[0].startDate
    );

    projectPeriod.years > 0
      ? setProjectPeriodInYears(projectPeriod.years_and_months)
      : setProjectPeriodInMonths(projectPeriod.rounded_months);
    handleButtonStatus();
  }, []);

  return (
    <BlockWrapper>
      <TopWrapper>
        <Title>Roadmap</Title>
        <InlineWrapper className="buttons">
          <XButton
            disabled={status !== 3 ? true : false}
            className={`${active == 1 ? "selected" : ""} ${
              status !== 3 ? "disabled" : ""
            }`}
            onClick={() => setActive(1)}
          >
            x1
          </XButton>
          {/* <XButton
            className={active === 2 ? "selected" : ""}
            onClick={() => setActive(2)}
          >
            x2
          </XButton> */}
          <XButton
            disabled={status === 2 ? true : false}
            className={`${active === 3 ? "selected" : ""} ${
              status === 2 ? "disabled" : ""
            }`}
            onClick={() => setActive(3)}
          >
            x2
          </XButton>
        </InlineWrapper>
      </TopWrapper>

      {active === 1 && <TimelineGraph scale={1} />}
      {/* {active === 2 && <TimelineGraph scale={2} />} */}
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
          {projectPeriodInYears > 0 ? (
            <div className="dateWords">
              Aprx {projectPeriodInYears}{" "}
              {projectPeriodInYears < 2 ? "year" : "years"} after reaching Soft
              cap
            </div>
          ) : (
            <div className="dateWords">
              Aprx {projectPeriodInMonths}{" "}
              {projectPeriodInMonths === 1 ? "month" : "months"} after reaching
              Soft cap
            </div>
          )}
        </BottomPartWrapper>
      </BottomWrapper>
    </BlockWrapper>
  );
};

export default TimelineBlock;
