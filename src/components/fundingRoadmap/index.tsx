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
import { useContext, useEffect, useState } from "react";
import ProjectContext from "../../context/projectContext";
import LoadedValuesContext from "../../context/loadedValuesContext";

interface IFundingBlock {
  seed: string;
  hardCap: number;
  softCap: number;
  totalInvested: number;
}

export default function FundingRoadmap({ ...props }: IFundingBlock) {
  const project = useContext(ProjectContext);
  const { softCap } = useContext(LoadedValuesContext);
  const [progress, setProgress] = useState<number>(
    (props.totalInvested * 100) / props.hardCap
  );

  useEffect(() => {
    setProgress((props.totalInvested * 100) / props.hardCap);
  }, [props.totalInvested]);

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
        <FProgress progress={progress}>
          <FundsIndicator
            funds={props.totalInvested.toLocaleString().replace(/,/g, " ")}
          />
        </FProgress>

        <RoadmapBubble>
          <VerticalLine>
            <TextAboveDashed>Soft Cap</TextAboveDashed>
            <TextWhite>
              {softCap?.amount?.toLocaleString().replace(/,/g, " ")} USDT
            </TextWhite>
          </VerticalLine>
          {softCap?.isReached ? (
            <Image src={unlockedLock} alt="unlocked lock" height={"14px"} />
          ) : (
            <Image src={lockedLock} alt="locked lock" height={"14px"} />
          )}
        </RoadmapBubble>
      </FundsBar>
      <RoadmapBubble>
        {project.hardCap.isReached ? (
          <Image src={unlockedLock} alt="unlocked lock" height={"14px"} />
        ) : (
          <Image src={lockedLock} alt="locked lock" height={"14px"} />
        )}
        <VerticalLine>
          <TextAboveDashed>Hard Cap</TextAboveDashed>
          <TextWhite>
            {props.hardCap.toLocaleString().replace(/,/g, " ")} USDT
          </TextWhite>
        </VerticalLine>
      </RoadmapBubble>
    </FProgressWrapper>
  );
}
