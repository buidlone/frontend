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
import { BigNumber, ethers } from "ethers";

export default function FundingRoadmap() {
  const project = useContext(ProjectContext);
  const { seedFundingLimit, softCap, hardCap, totalInvested, currency } =
    useContext(LoadedValuesContext);
  const [progress, setProgress] = useState<number>(
    Number(totalInvested.mul(BigNumber.from(100)).div(hardCap))
  );
  const [softCapPosition, setSoftCapPosition] = useState<number>(
    Number(softCap.amount.mul(BigNumber.from(100)).div(hardCap))
  );

  useEffect(() => {
    setSoftCapPosition(
      softCap.amount.mul(BigNumber.from(100)).div(hardCap).toNumber()
    );
    setProgress(totalInvested.mul(BigNumber.from(100)).div(hardCap).toNumber());
  }, [totalInvested._hex]);

  return (
    <FProgressWrapper>
      {/* <RoadmapBubble>
        <VerticalLine>
          <TextAboveDashed>Seed</TextAboveDashed>
          <TextWhite>
            {seedFundingLimit.toLocaleString().replace(/,/g, " ")}{" "}
            {currency.label}
          </TextWhite>
        </VerticalLine>
      </RoadmapBubble> */}
      <FundsBar>
        <FProgress progress={progress}>
          <FundsIndicator
            funds={ethers.utils.formatEther(totalInvested)}
            currency={currency.label}
          />
        </FProgress>

        <RoadmapBubble className="softCap" softCapPosition={softCapPosition}>
          <VerticalLine>
            <TextAboveDashed>Soft Cap</TextAboveDashed>
            <TextWhite>
              {ethers.utils.formatEther(softCap.amount).replace(/,/g, " ")}{" "}
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
        {/* TODO: check if hardCap is reached */}
        {project.hardCap.isReached ? (
          <Image src={unlockedLock} alt="unlocked lock" height={"14px"} />
        ) : (
          <Image src={lockedLock} alt="locked lock" height={"14px"} />
        )}
        <VerticalLine>
          <TextAboveDashed>Hard Cap</TextAboveDashed>
          <TextWhite>
            {ethers.utils.formatEther(hardCap).replace(/,/g, " ")}{" "}
            {currency.label}
          </TextWhite>
        </VerticalLine>
      </RoadmapBubble>
    </FProgressWrapper>
  );
}
