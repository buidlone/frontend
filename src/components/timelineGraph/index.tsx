import React, { useContext, useEffect, useState } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { getMilestoneState } from "../../utils/getMilestoneState";
import { dateDiff } from "../../utils/getDateDifference";

import {
  TimelineBar,
  TimelineStep,
  TProgress,
  DateStep,
  DateBar,
  TimelineContainer,
  TimelineScroll,
} from "./styled";
import useCountdown from "../../hooks/useCountdown";
import MilestoneDetails from "../milestoneDetails";
import { ProjectState } from "../../interfaces/enums/ProjectStateEnums";

interface ITimeline {
  scale: number;
}

const TimelineGraph = ({ scale }: ITimeline) => {
  const [active, setActive] = useState(false);
  const { milestones, projectState, currentMilestone } =
    useContext(LoadedValuesContext);

  const containerRef = React.createRef<HTMLElement>();
  const activeStageRef = React.createRef<HTMLElement>();

  const maxDays = useCountdown(
    milestones[currentMilestone]?.endTime,
    milestones[0]?.startTime
  );

  const currentDays = useCountdown(undefined, milestones[0]?.startTime, true);

  const getTimelineProgress = () => {
    let progress = 0;

    if (projectState === ProjectState.MILESTONES_ONGOING_BEFORE_LAST || ProjectState.LAST_MILESTONE_ONGOING) {
      let oneMilestonePortion = 100 / milestones.length;

      let currentMaxProgress =
        projectState === ProjectState.MILESTONES_ONGOING_BEFORE_LAST
          ? oneMilestonePortion * (currentMilestone + 1)
          : 100;

      progress =
        (Number(currentDays.timerDays) * currentMaxProgress) /
        Number(maxDays.timerDays);
    } else if (projectState === ProjectState.SUCCESSFULLY_ENDED) {
      progress = 100;
    }
    return progress;
  };

  const getDate = (endDate: string, startDate: string) => {
    const date = dateDiff(endDate, startDate);
    if (scale === 1) {
      return `${date.rounded_months} mo`;
    } else {
      if (date.days > 0) {
        return `${date.months} mo ${date.days} ${
          date.days === 1 ? "day" : "days"
        }`;
      } else {
        return `${date.months} mo`;
      }
    }
  };

  useEffect(() => {
    if (
      containerRef &&
      containerRef.current &&
      activeStageRef &&
      activeStageRef.current
    ) {
      containerRef.current.scrollTo({
        left:
          scale === 3
            ? activeStageRef.current.offsetLeft -
              containerRef.current.offsetWidth / 9
            : activeStageRef.current.offsetLeft -
              containerRef.current.offsetWidth / 2.6,
        behavior: "smooth",
      });
    }
  }, []);

  const handleMouseOver = () => {
    setActive(true);
  };
  const handleMouseOut = () => {
    setActive(false);
  };

  return (
    <TimelineContainer
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <TimelineScroll
        innerRef={containerRef}
        hideScrollbars={active ? false : true}
      >
        <TimelineBar scale={scale}>
          <TProgress progress={getTimelineProgress()} />
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
              const itemProps = active ? { ref: activeStageRef } : {};
              return (
                <TimelineStep
                  scale={scale}
                  key={milestone.milestoneId}
                  stage={`Milestone ${milestone.milestoneId + 1}`}
                  completed={completed}
                  current={active}
                  {...itemProps}
                >
                  {scale === 3 && (
                    <MilestoneDetails
                      milestone={milestone}
                      date={getDate(milestone.endTime, milestone.startTime)}
                    />
                  )}
                </TimelineStep>
              );
            })}
        </TimelineBar>

        <DateBar scale={scale}>
          {milestones &&
            milestones.map((milestone) => (
              <DateStep
                key={milestone.milestoneId}
                scale={scale}
                date={
                  scale === 3
                    ? `${milestone.startTime.slice(
                        0,
                        10
                      )} - ${milestone.endTime.slice(0, 10)}`
                    : getDate(milestone.endTime, milestone.startTime)
                }
              />
            ))}
        </DateBar>
      </TimelineScroll>
    </TimelineContainer>
  );
};

export default TimelineGraph;
