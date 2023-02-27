import { Title } from "../../../components/fundingBlock/styled";
import {
  BottomPartWrapper,
  BottomWrapper,
  InlineWrapper,
} from "../../../components/timelineBlock/styled";
import Tooltip from "../../../components/tooltip";
import { DemoBlockWrapper } from "../demoFundingBlock/styled";
import infoBubbleWhite from "../../../../public/info_bubble_white.svg";
import Image from "next/image";
import DemoTimelineGraph from "../demoTimelineGraph";

const DemoTimelineBlock = () => {
  return (
    <DemoBlockWrapper>
      <Title>Roadmap</Title>
      <DemoTimelineGraph scale={1} />
      <BottomWrapper>
        <BottomPartWrapper>
          <InlineWrapper>
            <div className="period">Soft cap reservation period</div>

            <Tooltip
              text={
                "You will be able to claim back your cash if Soft Cap is not reached during expected period"
              }
            >
              <Image src={infoBubbleWhite} alt="information" height={"14px"} />
            </Tooltip>
          </InlineWrapper>
          <div className="dateNum">2023 01 - 2023 06</div>
        </BottomPartWrapper>
        <BottomPartWrapper>
          <div>Project period</div>
          <div className="dateWords">Aprx 1,5 year after reaching Soft cap</div>
        </BottomPartWrapper>
      </BottomWrapper>
    </DemoBlockWrapper>
  );
};

export default DemoTimelineBlock;
