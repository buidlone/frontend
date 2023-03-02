import { useContext, useEffect, useRef } from "react";
import { ProjectState } from "../../interfaces/enums/ProjectStateEnums";
import DemoMockDataContext from "../context/demoMockDataContext";
import DemoTaskContext from "../context/demoTaskContext";

const useRealTimeFlow = () => {
  const {
    mockData,
    setMockData,
    mockData: {
      userValues,
      softCap,
      userValues: { investment, reward },
    },
  } = useContext(DemoMockDataContext);
  const { tasks, currentTask } = useContext(DemoTaskContext);
  const projectState = tasks[currentTask].projectState;

  const investmentRef = useRef(0);
  const rewardRef = useRef(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (
        softCap.isReached &&
        projectState !== ProjectState.TERMINATED_BY_VOTING
      ) {
        investmentRef.current = investment - 5000;
        rewardRef.current = reward + 5000;

        setMockData({
          ...mockData,
          userValues: {
            ...userValues,
            investment: investmentRef.current > 0 ? investmentRef.current : 0,
            reward: rewardRef.current,
          },
        });
      }
    }, 120000);

    return () => clearInterval(intervalId);
  }, [softCap.isReached, projectState, setMockData, investment, reward]);
  return [investmentRef.current, rewardRef.current];
};

export default useRealTimeFlow;
