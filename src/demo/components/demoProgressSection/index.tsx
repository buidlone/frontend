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
import { CurrentTask } from "../../../interfaces/enums/DemoTaskEnums";
import { ProjectState } from "../../../interfaces/enums/ProjectStateEnums";

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
  const { tasks, setTasks, currentTask, setCurrentTask } =
    useContext(DemoTaskContext);
  const projectState = tasks[currentTask].projectState;
  const handleStop = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === currentTask) {
          return { ...task, projectState: 8 };
        } else {
          return task;
        }
      })
    );
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

              <Data className="votes">
                {projectState === ProjectState.TERMINATED_BY_VOTING ? 55 : 0}%
              </Data>

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
                    <span className="votingPower">
                      {power ? power.toFixed(2) : 0}%
                    </span>{" "}
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
                <OrangeButton
                  disabled={
                    currentTask !== CurrentTask.EVACUATE ||
                    projectState === ProjectState.TERMINATED_BY_VOTING
                  }
                  onClick={handleStop}
                >
                  {projectState === ProjectState.TERMINATED_BY_VOTING
                    ? "You have decided"
                    : "STOP cash flow"}
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
