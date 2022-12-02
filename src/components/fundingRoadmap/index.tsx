import {
  FProgress,
  FProgressWrapper,
  FundsBar,
  InlineLabel,
  FundsWrapper,
} from "./styled";
import lockedLock from "../../../public/lock_closed_white.svg";
import Image from "next/image";
import unlockedLock from "../../../public/lock_open_white.svg";
import infoBubble from "../../../public/info_bubble.svg";
import infoBubbleWhite from "../../../public/info_bubble_white.svg";
import { useContext, useEffect, useState } from "react";

import LoadedValuesContext from "../../context/loadedValuesContext";
import { BigNumber, ethers } from "ethers";
import Tooltip from "../tooltip";

export default function FundingRoadmap() {
  const { softCap, hardCap, totalInvested, currency } =
    useContext(LoadedValuesContext);

  const [softCapProgress, setSoftCapProgress] = useState<number>(
    Number(totalInvested.mul(BigNumber.from(100)).div(softCap.amount))
  );
  const [hardCapProgress, setHardCapProgress] = useState<number>(
    Number(totalInvested.mul(BigNumber.from(100)).div(hardCap))
  );

  const [over, setOver] = useState(0);

  useEffect(() => {
    setHardCapProgress(
      totalInvested.mul(BigNumber.from(100)).div(hardCap).toNumber()
    );
    setSoftCapProgress(
      totalInvested.mul(BigNumber.from(100)).div(softCap.amount).toNumber()
    );
  }, [totalInvested._hex]);

  return (
    <>
      <FProgressWrapper>
        <InlineLabel>
          {softCap?.isReached ? (
            <Image src={unlockedLock} alt="unlocked lock" height={"17px"} />
          ) : (
            <Image src={lockedLock} alt="locked lock" height={"17px"} />
          )}
          <div>Soft Cap</div>
          <div onMouseOver={() => setOver(1)} onMouseOut={() => setOver(0)}>
            <Tooltip
              nowrap
              text={"Funds needed to start the project, best time to invest"}
            >
              <Image
                src={over === 1 ? infoBubble : infoBubbleWhite}
                alt="information"
                height={"14px"}
              />
            </Tooltip>
          </div>
        </InlineLabel>
        <FundsBar>
          <FProgress progress={softCapProgress > 100 ? 100 : softCapProgress} />
        </FundsBar>
        <FundsWrapper>
          <div className="total">
            {" "}
            {ethers.utils.formatEther(totalInvested).replace(/,/g, " ")}{" "}
            {currency.label}
          </div>
          <div className="required">
            {ethers.utils.formatEther(softCap.amount).replace(/,/g, " ")}{" "}
            {currency.label}
          </div>
        </FundsWrapper>
      </FProgressWrapper>
      <FProgressWrapper>
        <InlineLabel>
          {totalInvested.gte(hardCap) ? (
            <Image src={unlockedLock} alt="unlocked lock" height={"17px"} />
          ) : (
            <Image src={lockedLock} alt="locked lock" height={"17px"} />
          )}
          <div>Hard Cap</div>
          <div onMouseOver={() => setOver(2)} onMouseOut={() => setOver(0)}>
            <Tooltip
              nowrap
              text={
                "Overall funds needed, investment available till hard cap is reached"
              }
            >
              <Image
                src={over === 2 ? infoBubble : infoBubbleWhite}
                alt="information"
                height={"14px"}
              />
            </Tooltip>
          </div>
        </InlineLabel>
        <FundsBar>
          <FProgress progress={hardCapProgress > 100 ? 100 : hardCapProgress} />
        </FundsBar>
        <FundsWrapper>
          <div className="total">
            {ethers.utils.formatEther(totalInvested).replace(/,/g, " ")}{" "}
            {currency.label}
          </div>
          <div className="required">
            {ethers.utils.formatEther(hardCap).replace(/,/g, " ")}{" "}
            {currency.label}
          </div>
        </FundsWrapper>
      </FProgressWrapper>
    </>
  );
}
