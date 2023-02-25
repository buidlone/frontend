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
import { fakeMockData, initialMockData } from "../../mockData/initialMockData";
import DemoTaskContext from "../../context/demoTaskContext";
import { tasksData } from "../../mockData/taskData";

const DemoEnvironment = () => {
  const {
    setMockData,
    mockData: { softCap },
  } = useContext(DemoMockDataContext);
  const { currentTask, setCurrentTask, tasks, setTasks } =
    useContext(DemoTaskContext);
  const handleReset = () => {
    setMockData(initialMockData);
    setTasks(tasksData);
    setCurrentTask(0);
  };

  const handleClickLeft = () => {
    setCurrentTask((prev) => prev - 1);
  };

  const handleClickRight = () => {
    if (currentTask === 0 && !softCap.isReached) {
      setMockData(fakeMockData);
      setCurrentTask((prev) => prev + 1);
    } else {
      setCurrentTask((prev) => prev + 1);
    }
  };

  return (
    <EnvironmentDisclaimerContainer>
      <TestDisclaimer>
        <Image src={Warning} />
        <span>Test environment</span>
      </TestDisclaimer>
      <TaskSelectionWrapper>
        <SwitchTaskButton
          className={currentTask === 0 ? "disabled" : ""}
          disabled={currentTask === 0}
          style={{ paddingLeft: "8px" }}
          onClick={handleClickLeft}
        >
          <Arrow className="left" />
        </SwitchTaskButton>
        <TaskSelector />
        <SwitchTaskButton
          className={currentTask === tasks.length - 1 ? "disabled" : ""}
          disabled={currentTask === tasks.length - 1}
          style={{ paddingRight: "7px" }}
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
