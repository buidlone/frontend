import { BlockWrapper, Title } from "../fundingBlock/styled";
import { Line } from "../projectsInfoSection/styled";

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
import { useState } from "react";

const TimelineBlock = () => {
  const [active, setActive] = useState(2);

  return (
    <BlockWrapper>
      <TopWrapper>
        <Title>Timeline</Title>
        <InlineWrapper className="buttons">
          <XButton onClick={() => setActive(1)}>x1</XButton>
          <XButton autoFocus onClick={() => setActive(2)}>
            x2
          </XButton>
          <XButton onClick={() => setActive(3)}>x3</XButton>
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
          <div className="dateNum">2022 01 - 2022 06</div>
        </BottomPartWrapper>
        <BottomPartWrapper>
          <div>Project period</div>
          <div className="dateWords">Aprx 1,5 year after reaching Soft cap</div>
        </BottomPartWrapper>
      </BottomWrapper>
    </BlockWrapper>
  );
};

export default TimelineBlock;
