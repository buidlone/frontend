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

const DemoEnvironment = () => {
  const { setMockData } = useContext(DemoMockDataContext);
  const { currentTask, setCurrentTask, tasks } = useContext(DemoTaskContext);
  const handleReset = () => {
    setMockData(initialMockData);
    setCurrentTask(0);
  };
  console.log(currentTask);

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
