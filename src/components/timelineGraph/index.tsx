import React, { useContext, useEffect, useState } from "react";
import ProjectContext from "../../context/projectContext";
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
  const project = useContext(ProjectContext);
  const [active, setActive] = useState(false);

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
          <TProgress progress={2} />

          {project &&
            project?.stages?.map((stage) => {
              const itemProps = stage.active ? { ref: activeStageRef } : {};
              return (
                <TimelineStep
                  scale={scale}
                  key={stage.id}
                  stage={stage.name}
                  completed={stage.isCompleted}
                  current={stage.active}
                  {...itemProps}
                />
              );
            })}
        </TimelineBar>

        <DateBar>
          {project &&
            project?.stages?.map((stage) => (
              <DateStep scale={scale} date={stage.duration} />
            ))}
        </DateBar>
      </TimelineScroll>
    </TimelineContainer>
  );
};

export default TimelineGraph;
