import { useContext, useEffect, useRef, useState } from "react";
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
  const [newInvestment, setNewInvestment] = useState<number>(0);
  const [newRewards, setNetRewards] = useState<number>(0);
  let counter = 5000 / 120000;

  useEffect(() => {
    investmentRef.current = investment;
    rewardRef.current = reward;
    setNetRewards(rewardRef.current);
    setNewInvestment(investmentRef.current);
  }, [investment, reward]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (
        softCap.isReached &&
        projectState !== ProjectState.TERMINATED_BY_VOTING
      ) {
        investmentRef.current -= counter;
        rewardRef.current += counter;
        setNewInvestment(investmentRef.current);
        setNetRewards(rewardRef.current);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  });
  return { newInvestment, newRewards };
};

export default useRealTimeFlow;
