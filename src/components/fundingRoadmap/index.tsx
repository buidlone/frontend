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
  hardCap: string;
}

export default function FundingRoadmap({
  seed,
  hardCap,
  ...props
}: IFundingBlock) {
  const project = useContext(ProjectContext);
  const { softCap } = useContext(LoadedValuesContext);
  const { totalInvested } = useContext(LoadedValuesContext);
  const [progress, setProgress] = useState<number>(
    (totalInvested * 100) / project.hardCap.amount
  );

  useEffect(() => {
    setProgress((totalInvested * 100) / project.hardCap.amount);
  }, [totalInvested]);

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
            funds={totalInvested?.toLocaleString().replace(/,/g, " ")}
          />
        </FProgress>

        <RoadmapBubble>
          <VerticalLine>
            <TextAboveDashed>Soft Cap</TextAboveDashed>
            <TextWhite>
              {softCap?.toLocaleString().replace(/,/g, " ")} USDT
            </TextWhite>
          </VerticalLine>
          {project.softCap.isReached ? (
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
            {project.hardCap?.amount?.toLocaleString().replace(/,/g, " ")} USDT
          </TextWhite>
        </VerticalLine>
      </RoadmapBubble>
    </FProgressWrapper>
  );
}
