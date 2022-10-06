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
import { useContext, useState } from "react";
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
  const [progress] = useState<number>(
    (totalInvested * 100) / project.hardCap.amount
  );

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
          {totalInvested >= project.softCap.amount ? ( // Gal butu praktiskiau naudoti palyginima su values ar pasieke nei atskira property tam sukurti? Nes kol kas nemaciau, kad kazkur setintum ta isReached pagal kazka true/false, tai nereiketu tiesiog atskiru skaiciavimu tam daryti, kad paskaiciuoti ar pareachino :D
            <Image src={unlockedLock} alt="unlocked lock" height={"14px"} />
          ) : (
            <Image src={lockedLock} alt="locked lock" height={"14px"} />
          )}
        </RoadmapBubble>
      </FundsBar>
      <RoadmapBubble>
        {totalInvested >= project.hardCap.amount ? (
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
