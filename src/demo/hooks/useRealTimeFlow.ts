import { useContext, useEffect, useRef } from "react";
import project from "../../context/data";
import { CurrentTask } from "../../interfaces/enums/DemoTaskEnums";
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

  let interval = useRef<number | undefined | ReturnType<typeof setInterval>>(
    undefined
  );

  const startTimer = () => {
    interval.current = setInterval(() => {
      setMockData({
        ...mockData,
        userValues: {
          ...userValues,
          investment: !!investment ? investment - 5000 : 0,
          reward: reward + 5000,
        },
      });
    }, 5000);
  };

  useEffect(() => {
    if (
      softCap.isReached &&
      projectState !== ProjectState.TERMINATED_BY_VOTING
    ) {
      console.log("starting");
      startTimer();
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [softCap.isReached, projectState]);
};
export default useRealTimeFlow;
