import { useContext, useEffect } from "react";
import { CurrentTask } from "../../interfaces/enums/DemoTaskEnums";
import DemoTaskContext from "../context/demoTaskContext";

export const useTaskChange = () => {
  const { currentTask } = useContext(DemoTaskContext);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  //  useEffect(() => {
  //     if (softCap.isReached && currentTask === CurrentTask.INVEST) {
  //       setCompletedTasks([...completedTasks, currentTask]);
  //       setCurrentTask(CurrentTask.INVESTIGATE);
  //     }
  //   }, [softCap.isReached]);

  useEffect(() => {
    // async function changeTask() {
    //   await timeout(1000);
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    // }

    // if (currentTask === CurrentTask.INVESTIGATE) {
    //   changeTask();
    // } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // }
  }, [currentTask]);

  
};
