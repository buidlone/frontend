import React, { useContext, useState } from "react";
import Modal from "../../../components/modal";
import { getDate, ITimeline } from "../../../components/timelineGraph";
import {
  DateBar,
  DateStep,
  TimelineBar,
  TimelineContainer,
  TimelineScroll,
  TimelineStep,
  TProgress,
} from "../../../components/timelineGraph/styled";
import { CurrentTask } from "../../../interfaces/enums/DemoTaskEnums";
import { ProjectState } from "../../../interfaces/enums/ProjectStateEnums";
import { getMilestoneState } from "../../../utils/getMilestoneState";
import DemoMockDataContext from "../../context/demoMockDataContext";
import DemoTaskContext from "../../context/demoTaskContext";
import DemoMessagesModal from "../demoMessagesModal";
import { InvestigateIcon } from "./styled";

const DemoTimelineGraph = ({ scale }: ITimeline) => {
  const {
    mockData: { milestones },
  } = useContext(DemoMockDataContext);
  const { tasks, currentTask } = useContext(DemoTaskContext);
  const getDemoProgress = () => {
    let progress = currentTask === CurrentTask.INVEST ? 0 : 30;
    return progress;
  };

  const projectState = tasks[currentTask].projectState;
  const usersVoted = projectState === ProjectState.TERMINATED_BY_VOTING;
  const currentMilestone = tasks[currentTask].currentMilestone;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <TimelineContainer>
        <TimelineScroll hideScrollbars={true}>
          {currentTask === CurrentTask.INVESTIGATE &&
            projectState !== ProjectState.TERMINATED_BY_VOTING && (
              <InvestigateIcon
                onClick={() => setShowModal(true)}
                className="material-icons"
              >
                error
              </InvestigateIcon>
            )}
          <TimelineBar scale={scale}>
            <TProgress progress={getDemoProgress()} />
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
                  <TimelineStep
                    scale={scale}
                    key={milestone.milestoneId}
                    stage={`Milestone ${milestone.milestoneId + 1}`}
                    completed={completed}
                    current={active}
                    suspended={suspended}
                    investigation={[
                      CurrentTask.INVESTIGATE,
                      CurrentTask.EVACUATE,
                    ].includes(currentTask)}
                    voted={usersVoted}
                  />
                );
              })}
          </TimelineBar>
          <DateBar scale={scale}>
            {milestones &&
              milestones.map((milestone) => (
                <DateStep
                  key={milestone.milestoneId}
                  scale={scale}
                  date={getDate(milestone.endTime, milestone.startTime, scale)}
                />
              ))}
          </DateBar>
        </TimelineScroll>
      </TimelineContainer>
      <Modal show={showModal}>
        <DemoMessagesModal onClose={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

export default DemoTimelineGraph;
