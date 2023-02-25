import Image from "next/image";
import { Title } from "../../../components/fundingBlock/styled";
import {
  FProgress,
  FProgressWrapper,
  FundsBar,
  FundsWrapper,
  InlineLabel,
} from "../../../components/fundingRoadmap/styled";
import lockedLock from "../../../../public/lock_closed_white.svg";
import unlockedLock from "../../../../public/lock_open_white.svg";
import infoBubbleWhite from "../../../../public/info_bubble_white.svg";
import Tooltip from "../../../components/tooltip";
import { DemoBlockWrapper, DemoFContainer } from "./styled";
import { useContext, useEffect, useState } from "react";
import DemoMockDataContext from "../../context/demoMockDataContext";
import DemoTaskContext from "../../context/demoTaskContext";

const DemoFundingBlock = () => {
  const {
    mockData: { softCap, hardCap, totalInvested, currency },
    setMockData,
  } = useContext(DemoMockDataContext);
  const { currentTask, tasks } = useContext(DemoTaskContext);

  const [softCapProgress, setSoftCapProgress] = useState<number>(
    (totalInvested * 100) / softCap.amount
  );
  const [hardCapProgress, setHardCapProgress] = useState<number>(
    (totalInvested * 100) / hardCap
  );

  useEffect(() => {
    setSoftCapProgress((totalInvested * 100) / softCap.amount);
    setHardCapProgress((totalInvested * 100) / hardCap);
  }, [totalInvested]);

  return (
    <DemoBlockWrapper>
      <Title>Funding</Title>
      <DemoFContainer>
        <>
          <FProgressWrapper>
            <InlineLabel>
              {softCap.isReached ? (
                <Image src={unlockedLock} alt="unlocked lock" height={"17px"} />
              ) : (
                <Image src={lockedLock} alt="locked lock" height={"17px"} />
              )}
              <div>Soft Cap</div>

              <Tooltip
                nowrap
                text={"Funds needed to start the project, best time to invest"}
              >
                <Image
                  src={infoBubbleWhite}
                  alt="information"
                  height={"14px"}
                />
              </Tooltip>
            </InlineLabel>
            <FundsBar>
              <FProgress
                suspended={tasks[currentTask].projectState === 8}
                progress={softCapProgress > 100 ? 100 : softCapProgress}
              />
            </FundsBar>
            <FundsWrapper suspended={tasks[currentTask].projectState === 8}>
              <div className="total">
                {totalInvested.toLocaleString("fr-FR")} {currency}
              </div>
              <div className="required">
                {softCap.amount.toLocaleString("fr-FR")} {currency}
              </div>
            </FundsWrapper>
          </FProgressWrapper>
          <FProgressWrapper>
            <InlineLabel>
              <Image src={lockedLock} alt="locked lock" height={"17px"} />

              <div>Hard Cap</div>

              <Tooltip
                nowrap
                text={
                  "Overall funds needed, investment available till hard cap is reached"
                }
              >
                <Image
                  src={infoBubbleWhite}
                  alt="information"
                  height={"14px"}
                />
              </Tooltip>
            </InlineLabel>
            <FundsBar>
              <FProgress
                progress={hardCapProgress}
                suspended={tasks[currentTask].projectState === 8}
              />
            </FundsBar>
            <FundsWrapper suspended={tasks[currentTask].projectState === 8}>
              <div className="total">
                {totalInvested.toLocaleString("fr-FR")} {currency}
              </div>
              <div className="required">
                {hardCap.toLocaleString("fr-FR")} {currency}
              </div>
            </FundsWrapper>
          </FProgressWrapper>
        </>
      </DemoFContainer>
    </DemoBlockWrapper>
  );
};

export default DemoFundingBlock;
