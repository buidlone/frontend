import {
  FProgress,
  FProgressWrapper,
  FundsBar,
  FundsIndicator,
  RoadmapBubble,
  TextAboveDashed,
  TextWhite,
  VerticalLine,
} from "./styled";
import lockedLock from "../../../public/lock_closed.svg";
import Image from "next/image";
import unlockedLock from "../../../public/lock_open.svg";
import { useContext } from "react";
import ProjectContext from "../../context/projectContext";
import LoadedValuesContext from "../../context/loadedValuesContext";

interface IFundingBlock {
  seed: string;
  hardCap: string;
}

export default function FundingRoadmap({
  seed,
  hardCap,
  ...props
}: IFundingBlock) {
  const project = useContext(ProjectContext);
  const { softCap } = useContext(LoadedValuesContext);
  return (
    <FProgressWrapper>
      <RoadmapBubble>
        <VerticalLine>
          <TextAboveDashed>Seed</TextAboveDashed>
          <TextWhite>
            {project.seed?.fundsRequired.toLocaleString().replace(/,/g, " ")}{" "}
            USDT
          </TextWhite>
        </VerticalLine>
      </RoadmapBubble>
      <FundsBar>
        <FProgress progress={64.8}>
          <FundsIndicator funds={35000?.toLocaleString().replace(/,/g, " ")} />
        </FProgress>

        <RoadmapBubble>
          <VerticalLine>
            <TextAboveDashed>Soft Cap</TextAboveDashed>
            <TextWhite>{softCap?.toLocaleString().replace(/,/g, " ")} USDT</TextWhite>
          </VerticalLine>
          {project.softCap?.isReached ? (
            <Image src={unlockedLock} alt="unlocked lock" height={"14px"} />
          ) : (
            <Image src={lockedLock} alt="locked lock" height={"14px"} />
          )}
        </RoadmapBubble>
      </FundsBar>
      <RoadmapBubble>
        {project.hardCap?.isReached ? (
          <Image src={unlockedLock} alt="unlocked lock" height={"14px"} />
        ) : (
          <Image src={lockedLock} alt="locked lock" height={"14px"} />
        )}
        <VerticalLine>
          <TextAboveDashed>Hard Cap</TextAboveDashed>
          <TextWhite>
            {project.hardCap?.amount?.toLocaleString().replace(/,/g, " ")} USDT
          </TextWhite>
        </VerticalLine>
      </RoadmapBubble>
    </FProgressWrapper>
  );
}
