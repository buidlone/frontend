import { useContext, useState } from "react";
import ProjectContext from "../../context/projectContext";
import {
  TimelineBar,
  TimelineStep,
  TProgress,
  VerticalLine,
  Bubble,
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
      <TimelineScroll hideScrollbars={active ? false : true}>
        <TimelineBar>
          <TProgress progress={2} />

          {project &&
            project?.stages?.map((stage) => (
              <TimelineStep
                scale={scale}
                key={stage.id}
                stage={stage.name}
                completed={stage.isCompleted}
                current={stage.active}
              ></TimelineStep>
            ))}
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

