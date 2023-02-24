import Image from "next/image";
import { useContext } from "react";
import lockedLock from "../../../../public/LockedLock.svg";
import unlockedLock from "../../../../public/UnlockedLock.svg";
import { Title } from "../../../components/fundingBlock/styled";
import {
  CheckMark,
  DashedCircle,
  Lock,
  LockBar,
  MilestoneProgressWrapper,
  MProgressBar,
  PBContainer,
  Progress,
  ProgressBar,
  ProgressRoadmapWrapper,
  ProgressStep,
  ScrollableContainer,
  ScrollableContainerWrapper,
} from "../../../components/progressRoadmap/styled";

import { getMilestoneState } from "../../../utils/getMilestoneState";
import DemoMockDataContext from "../../context/demoMockDataContext";
import DemoTaskContext from "../../context/demoTaskContext";
import { DemoProgressRoadmapWrapper, DemoRefundButton } from "./styled";

const DemoProgressRoadmap = () => {
  const {
    mockData: {
      milestones,
      userValues: { reward },
    },
  } = useContext(DemoMockDataContext);
  const { tasks, currentTask } = useContext(DemoTaskContext);

  const handleRefundClick = () => {};

  return (
    <DemoProgressRoadmapWrapper>
      <Title>Project progress</Title>
      <ScrollableContainerWrapper>
        <ScrollableContainer
          horizontal={false}
          vertical={false}
          style={{ cursor: "default" }}
        >
          <ProgressBar>
            {milestones &&
              milestones.map((milestone) => {
                const completed = getMilestoneState(
                  tasks[currentTask].projectState,
                  tasks[currentTask].currentMilestone,
                  milestone.milestoneId
                ).completed;
                const active = getMilestoneState(
                  tasks[currentTask].projectState,
                  tasks[currentTask].currentMilestone,
                  milestone.milestoneId
                ).active;
                const suspended = getMilestoneState(
                  tasks[currentTask].projectState,
                  tasks[currentTask].currentMilestone,
                  milestone.milestoneId
                ).suspended;

                return (
                  <MilestoneProgressWrapper key={milestone.milestoneId}>
                    <ProgressStep
                      stage={`M${milestone.milestoneId + 1}`}
                      completed={completed}
                      active={active}
                      suspended={suspended}
                    >
                      {completed && <CheckMark />}
                      {active && <DashedCircle />}
                    </ProgressStep>

                    {milestone.milestoneId !==
                      milestones[milestones.length - 1].milestoneId && (
                      <MProgressBar>
                        <Progress
                          progress={active ? 50 : completed ? 100 : 0}
                        />
                      </MProgressBar>
                    )}
                  </MilestoneProgressWrapper>
                );
              })}
          </ProgressBar>

          <LockBar>
            {milestones &&
              milestones.map((milestone, index) => {
                const completed = getMilestoneState(
                  tasks[currentTask].projectState,
                  tasks[currentTask].currentMilestone,
                  milestone.milestoneId
                ).completed;
                const active = getMilestoneState(
                  tasks[currentTask].projectState,
                  tasks[currentTask].currentMilestone,
                  milestone.milestoneId
                ).active;
                const suspended = getMilestoneState(
                  tasks[currentTask].projectState,
                  tasks[currentTask].currentMilestone,
                  milestone.milestoneId
                ).suspended;

                return active ? (
                  <Lock
                    key={milestone.milestoneId}
                    unlocked={completed || active}
                    active={active}
                    suspended={suspended}
                  >
                    {active && !suspended ? (
                      <Image
                        src={unlockedLock}
                        alt="unlocked lock"
                        height={15}
                      />
                    ) : completed ? (
                      <CheckMark />
                    ) : (
                      <Image src={lockedLock} alt="locked lock" height={15} />
                    )}
                  </Lock>
                ) : (
                  <Lock
                    key={milestone.milestoneId}
                    unlocked={completed || active}
                    active={active}
                    suspended={suspended}
                  >
                    {completed || (active && !suspended) ? (
                      <Image
                        src={unlockedLock}
                        alt="unlocked lock"
                        height={15}
                      />
                    ) : (
                      <Image src={lockedLock} alt="locked lock" height={15} />
                    )}{" "}
                  </Lock>
                );
              })}
          </LockBar>
        </ScrollableContainer>
      </ScrollableContainerWrapper>
      <DemoRefundButton
        className={currentTask === 3 ? "" : "disabled"}
        onClick={handleRefundClick}
      >
        Refund remain cash
      </DemoRefundButton>
    </DemoProgressRoadmapWrapper>
  );
};

export default DemoProgressRoadmap;
