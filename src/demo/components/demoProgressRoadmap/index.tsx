import Image from "next/image";
import { useContext, useState } from "react";
import lockedLock from "../../../../public/LockedLock.svg";
import unlockedLock from "../../../../public/UnlockedLock.svg";
import { Title } from "../../../components/fundingBlock/styled";
import Modal from "../../../components/modal";
import {
  CheckMark,
  DashedCircle,
  Lock,
  LockBar,
  MilestoneProgressWrapper,
  MProgressBar,
  Progress,
  ProgressBar,
  ProgressStep,
  ScrollableContainerWrapper,
} from "../../../components/progressRoadmap/styled";
import { CurrentTask } from "../../../interfaces/enums/DemoTaskEnums";
import { ProjectState } from "../../../interfaces/enums/ProjectStateEnums";
import { getMilestoneState } from "../../../utils/getMilestoneState";
import DemoMockDataContext from "../../context/demoMockDataContext";
import DemoTaskContext from "../../context/demoTaskContext";
import FeedbackCard from "../confirmationCard/feedbackCard";
import {
  DemoProgressRoadmapWrapper,
  DemoRefundButton,
  DemoScrollableContainer,
} from "./styled";

const DemoProgressRoadmap = () => {
  const {
    setMockData,
    mockData,
    mockData: { milestones, userValues, refund },
  } = useContext(DemoMockDataContext);
  const [showModal, setShowModal] = useState(false);
  const {
    tasks,
    currentTask,
    setCurrentTask,
    completedTasks,
    setCompletedTasks,
  } = useContext(DemoTaskContext);
  const projectState = tasks[currentTask].projectState;
  const currentMilestone = tasks[currentTask].currentMilestone;

  const handleRefundClick = () => {
    setMockData({
      ...mockData,
      userValues: { ...userValues, balance: refund },
    });
    setCompletedTasks([...completedTasks, CurrentTask.EVACUATE]);
    setCurrentTask(CurrentTask.REVIEW);
    setShowModal(true);
  };

  return (
    <>
      <DemoProgressRoadmapWrapper>
        <Title>Project progress</Title>
        <ScrollableContainerWrapper>
          <DemoScrollableContainer
            horizontal={false}
            vertical={false}
            style={{ cursor: "default" }}
          >
            <ProgressBar>
              {milestones &&
                milestones.map((milestone) => {
                  const completed = getMilestoneState(
                    projectState,
                    currentMilestone,
                    milestone.milestoneId
                  ).completed;
                  const active = getMilestoneState(
                    projectState,
                    currentMilestone,
                    milestone.milestoneId
                  ).active;
                  const suspended = getMilestoneState(
                    projectState,
                    currentMilestone,
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
                            progress={
                              active || suspended ? 50 : completed ? 100 : 0
                            }
                          />
                        </MProgressBar>
                      )}
                    </MilestoneProgressWrapper>
                  );
                })}
            </ProgressBar>

            <LockBar>
              {milestones &&
                milestones.map((milestone) => {
                  const completed = getMilestoneState(
                    projectState,
                    currentMilestone,
                    milestone.milestoneId
                  ).completed;
                  const active = getMilestoneState(
                    projectState,
                    currentMilestone,
                    milestone.milestoneId
                  ).active;
                  const suspended = getMilestoneState(
                    projectState,
                    currentMilestone,
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
          </DemoScrollableContainer>
        </ScrollableContainerWrapper>
        {/*TODO: rethink the logic when the button is disabled */}
        <DemoRefundButton
          className={
            projectState === ProjectState.TERMINATED_BY_VOTING &&
            currentTask !== CurrentTask.REVIEW &&
            userValues.balance !== refund
              ? ""
              : "disabled"
          }
          disabled={
            projectState !== ProjectState.TERMINATED_BY_VOTING ||
            userValues.balance === refund
          }
          onClick={handleRefundClick}
        >
          Refund
        </DemoRefundButton>
      </DemoProgressRoadmapWrapper>
      <Modal show={showModal}>
        <FeedbackCard onClose={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

export default DemoProgressRoadmap;
