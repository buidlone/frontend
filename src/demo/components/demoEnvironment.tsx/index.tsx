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
import { CurrentTask } from "../../../interfaces/enums/DemoTaskEnums";

const DemoEnvironment = () => {
  const {
    setMockData,
    mockData,
    mockData: {
      softCap,
      userValues,
      userValues: { investment },
      maxInvestment,
      refund,
    },
  } = useContext(DemoMockDataContext);
  const { currentTask, setCurrentTask, tasks, setTasks } =
    useContext(DemoTaskContext);
  const handleReset = () => {
    setMockData(initialMockData);
    setTasks(tasksData);
    setCurrentTask(CurrentTask.INVEST);
  };

  const handleClickLeft = () => {
    if (currentTask === CurrentTask.REVIEW) {
      setMockData({
        ...mockData,
        userValues: {
          ...userValues,
          investment: investment,
          balance: maxInvestment - investment,
        },
      });
    }
    setCurrentTask((prev) => prev - 1);
  };

  const handleClickRight = () => {
    if (currentTask === CurrentTask.INVEST && !softCap.isReached) {
      setMockData(fakeMockData);
    } else if (currentTask === CurrentTask.EVACUATE) {
      setMockData({
        ...mockData,
        userValues: { ...userValues, balance: refund },
      });
    }
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
