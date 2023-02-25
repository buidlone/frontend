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
import { getMilestoneState } from "../../../utils/getMilestoneState";
import DemoMockDataContext from "../../context/demoMockDataContext";
import DemoTaskContext from "../../context/demoTaskContext";
import DemoMessagesModal from "../demoMessagesModal";
import DemoModal from "../demoModal";
import { InvestigateIcon } from "./styled";

const DemoTimelineGraph = ({ scale }: ITimeline) => {
  const {
    mockData: { milestones },
  } = useContext(DemoMockDataContext);
  const { tasks, currentTask } = useContext(DemoTaskContext);
  const getDemoProgress = () => {
    let progress = currentTask === 0 ? 0 : 30;
    return progress;
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <TimelineContainer>
      <TimelineScroll hideScrollbars={true}>
        {currentTask !== 0 && (
          <>
            <InvestigateIcon
              onClick={() => setShowModal(true)}
              className="material-icons"
            >
              error
            </InvestigateIcon>
            <Modal show={showModal}>
              <DemoMessagesModal onClose={() => setShowModal(false)} />
            </Modal>
          </>
        )}
        <TimelineBar scale={scale}>
          <TProgress progress={getDemoProgress()} />
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
                <TimelineStep
                  scale={scale}
                  key={milestone.milestoneId}
                  stage={`Milestone ${milestone.milestoneId + 1}`}
                  completed={completed}
                  current={active}
                  suspended={suspended}
                  investigation={[1, 2].includes(currentTask)}
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
  );
};

export default DemoTimelineGraph;
