import React, { useContext, useEffect, useState } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { getMonthsBetween } from "../../utils/getMonthsBetween";

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
            currentMilestone !== null &&
            milestones.map((milestone) => {
              const itemProps =
                (projectState === 32 || projectState === 64) &&
                milestone.id === currentMilestone
                  ? { ref: activeStageRef }
                  : {};
              return (
                <TimelineStep
                  scale={scale}
                  key={milestone.id}
                  stage={`Milestone ${milestone.id + 1}`}
                  completed={milestone.id < currentMilestone}
                  current={
                    (projectState === 32 || projectState === 64) &&
                    milestone.id === currentMilestone
                  }
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
                date={getMonthsBetween(
                  milestone.startDate,
                  milestone.endDate,
                  true
                ).toString()}
              />
            ))}
        </DateBar>
      </TimelineScroll>
    </TimelineContainer>
  );
};

export default TimelineGraph;
