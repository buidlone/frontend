import Image from "next/image";
import { useContext } from "react";

import { Data, Property } from "../../../components/detailsBlock/styled";
import {
  BottomBlock,
  DetailsInfoWrapper,
  GreyLine,
  InlineBlock,
  OrangeButton,
  VotingWrapper,
} from "../../../components/progressInfoBlock/styled";
import DemoMockDataContext from "../../context/demoMockDataContext";
import DemoTaskContext from "../../context/demoTaskContext";
import OrangeLock from "../../../../public/yellow_lock.svg";
import Tooltip from "../../../components/tooltip";
import infoBubbleWhite from "../../../../public/info_bubble_white.svg";
import DemoProgressRoadmap from "../demoProgressRoadmap";
import {
  DemoDetailsCard,
  DemoProgressBlockWrapper,
  DemoProgressContentWrapper,
} from "./styled";

const DemoProgressSection = () => {
  const {
    mockData: {
      userValues: { power },
      totalInvested,
      currency,
      milestones,
      investors,
      tokenCurrency,
    },
  } = useContext(DemoMockDataContext);
  const { tasks, currentTask, setCurrentTask } = useContext(DemoTaskContext);
  const handleStop = () => {
    setCurrentTask(3);
  };
  return (
    <DemoProgressBlockWrapper>
      <DemoProgressContentWrapper>
        <DemoProgressRoadmap />
        <>
          <DemoDetailsCard>
            <DetailsInfoWrapper>
              <Property>Raised</Property>
              <Property>Milestones completed</Property>
              <Property>Participants</Property>
              <Property>Funds used</Property>
              <Property>Tokens reserved</Property>
              <Property>Voted against</Property>
              <Property>Project timeline</Property>
            </DetailsInfoWrapper>

            <DetailsInfoWrapper>
              <Data>
                {totalInvested.toLocaleString("fr-FR")} {currency}
              </Data>

              <Data>
                {tasks[currentTask].currentMilestone}/{milestones.length}
              </Data>

              <Data>{investors.length} wallets</Data>

              <Data>2 3452 {currency}</Data>

              <Data>4 000 000 {tokenCurrency}</Data>

              <Data className="votes">{currentTask === 3 ? 100 : 0}%</Data>

              <Data>2Y 250D 13H 20M 10S</Data>
            </DetailsInfoWrapper>

            <GreyLine />
            <BottomBlock>
              <InlineBlock>
                <VotingWrapper>
                  <Image
                    src={OrangeLock}
                    alt={"Locked lock"}
                    height={"20px"}
                    width={"20px"}
                  />

                  <div>
                    Your word has{" "}
                    <span className="votingPower">{power ? power : 0}%</span>{" "}
                    power
                  </div>

                  <Tooltip
                    text={`Voting power represents how much your vote have impact in stoping the funding process. If 51% investors votes to "STOP cash flow", investments will refunded and project will be terminated irreversible`}
                  >
                    <Image
                      src={infoBubbleWhite}
                      alt="information"
                      height={"18px"}
                      width={"18px"}
                    />
                  </Tooltip>
                </VotingWrapper>
                <OrangeButton disabled={currentTask !== 2} onClick={handleStop}>
                  STOP cash flow
                </OrangeButton>
              </InlineBlock>
            </BottomBlock>
          </DemoDetailsCard>
        </>
      </DemoProgressContentWrapper>
    </DemoProgressBlockWrapper>
  );
};

export default DemoProgressSection;
