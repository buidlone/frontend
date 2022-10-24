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

export default function FundingRoadmap() {
  const project = useContext(ProjectContext);
  const { softCap, hardCap, totalInvested, currency } =
    useContext(LoadedValuesContext);
  const [progress, setProgress] = useState<number>(
    (totalInvested * 100) / hardCap
  );
  

  useEffect(() => {
    setProgress((totalInvested * 100) / hardCap);
  }, [totalInvested]);

  return (
    <FProgressWrapper>
      <RoadmapBubble>
        <VerticalLine>
          <TextAboveDashed>Seed</TextAboveDashed>
          <TextWhite>
            {project.seed?.fundsRequired.toLocaleString().replace(/,/g, " ")}{" "}
            {currency.label}
          </TextWhite>
        </VerticalLine>
      </RoadmapBubble>
      <FundsBar>
        <FProgress progress={progress}>
          <FundsIndicator funds={totalInvested} currency={currency.label} />
        </FProgress>

        <RoadmapBubble>
          <VerticalLine>
            <TextAboveDashed>Soft Cap</TextAboveDashed>
            <TextWhite>
              {softCap?.amount?.toLocaleString().replace(/,/g, " ")}{" "}
              {currency.label}
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
            {hardCap?.toLocaleString().replace(/,/g, " ")} {currency.label}
          </TextWhite>
        </VerticalLine>
      </RoadmapBubble>
    </FProgressWrapper>
  );
}
