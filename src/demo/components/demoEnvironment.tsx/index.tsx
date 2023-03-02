import Image from "next/image";
import {
  Arrow,
  EnvironmentDisclaimerContainer,
  ResetButton,
  SwitchTaskButton,
  TaskSelectionWrapper,
  TestDisclaimer,
} from "./styled";
import Warning from "../../../../public/icon_demo_warning.svg";
import Reset from "../../../../public/reset-filter.svg";
import TaskSelector from "../taskSelector.tsx";
import { useContext } from "react";
import DemoMockDataContext from "../../context/demoMockDataContext";
import { initialMockData } from "../../mockData/initialMockData";
import DemoTaskContext from "../../context/demoTaskContext";
import { tasksData } from "../../mockData/taskData";
import { CurrentTask } from "../../../interfaces/enums/DemoTaskEnums";

const DemoEnvironment = () => {
  const { setMockData } = useContext(DemoMockDataContext);
  const {
    currentTask,
    setCurrentTask,
    tasks,
    setTasks,
    completedTasks,
    setCompletedTasks,
  } = useContext(DemoTaskContext);
  const handleReset = () => {
    setTasks(tasksData);
    setMockData(initialMockData);
    setCurrentTask(CurrentTask.INVEST);
    setCompletedTasks([]);
  };

  const handleClickLeft = () => {
    setCurrentTask((prev) => prev - 1);
  };

  const handleClickRight = () => {
    setCurrentTask((prev) => prev + 1);
  };

  return (
    <EnvironmentDisclaimerContainer>
      <TestDisclaimer>
        <Image src={Warning} />
        <span>Test environment</span>
      </TestDisclaimer>
      <TaskSelectionWrapper>
        <SwitchTaskButton
          className={currentTask === CurrentTask.INVEST ? "disabled" : ""}
          disabled={currentTask === CurrentTask.INVEST}
          style={{ paddingLeft: "8px" }}
          onClick={handleClickLeft}
        >
          <Arrow className="left" />
        </SwitchTaskButton>
        <TaskSelector />
        <SwitchTaskButton
          style={{ paddingRight: "8px" }}
          className={
            currentTask === tasks.length - 1 ||
            !completedTasks.includes(currentTask)
              ? "disabled"
              : ""
          }
          disabled={currentTask === tasks.length - 1}
          onClick={handleClickRight}
        >
          <Arrow className="right" />
        </SwitchTaskButton>
      </TaskSelectionWrapper>
      <ResetButton onClick={handleReset}>
        <Image src={Reset} />
        Reset Demo
      </ResetButton>
    </EnvironmentDisclaimerContainer>
  );
};

export default DemoEnvironment;
