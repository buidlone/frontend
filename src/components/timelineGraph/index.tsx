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

interface ITimeline {
  scale: number;
}

const TimelineGraph = ({ scale }: ITimeline) => {
  const [active, setActive] = useState(false);
  const { milestones, currentMilestone, projectState } =
    useContext(LoadedValuesContext);

  const containerRef = React.createRef<HTMLElement>();
  const activeStageRef = React.createRef<HTMLElement>();

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
          activeStageRef.current.offsetLeft -
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
        <TimelineBar>
          <TProgress progress={0} />
          {milestones &&
            milestones.map((milestone) => {
              const completed = getMilestoneState(
                projectState,
                currentMilestone,
                milestone.id
              ).completed;
              const active = getMilestoneState(
                projectState,
                currentMilestone,
                milestone.id
              ).active;
              const itemProps = active ? { ref: activeStageRef } : {};
              return (
                <TimelineStep
                  scale={scale}
                  key={milestone.id}
                  stage={`Milestone ${milestone.id + 1}`}
                  completed={completed}
                  current={active}
                  {...itemProps}
                />
              );
            })}
        </TimelineBar>

        <DateBar>
          {milestones &&
            milestones.map((milestone) => (
              <DateStep
                key={milestone.id}
                scale={scale}
                date={getDate(milestone.endDate, milestone.startDate)}
              />
            ))}
        </DateBar>
      </TimelineScroll>
    </TimelineContainer>
  );
};

export default TimelineGraph;
