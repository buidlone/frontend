import { useContext, useState } from "react";
import { AccordionButtonIcon } from "../../../components/accordionContent/styled";
import DemoTaskContext from "../../context/demoTaskContext";
import {
  Description,
  StepBubble,
  StepIndicator,
  TaskDescriptionContainer,
  TaskName,
  TaskSelectorWrapper,
} from "./styled";

const TaskSelector = () => {
  const [showMore, setShowMore] = useState(false);
  const { tasks, currentTask } = useContext(DemoTaskContext);
  return (
    <>
      <TaskSelectorWrapper>
        <StepIndicator>
          <StepBubble />
          <span>
            Step {currentTask + 1}/{tasks.length}
          </span>
        </StepIndicator>
        <TaskName>{tasks[currentTask].name}</TaskName>
        <AccordionButtonIcon
          style={{ zIndex: "2" }}
          className="material-icons"
          onClick={() => setShowMore(!showMore)}
          isActive={showMore}
        >
          expand_more
        </AccordionButtonIcon>
        {showMore && (
          <>
            <TaskDescriptionContainer>
              <Description>
                <p>{tasks[currentTask].description}</p>
                <p className="bold">{tasks[currentTask].goal}</p>
              </Description>
            </TaskDescriptionContainer>
          </>
        )}
      </TaskSelectorWrapper>
    </>
  );
};

export default TaskSelector;
