import { useContext, useEffect } from "react";
import { CurrentTask } from "../../interfaces/enums/DemoTaskEnums";
import DemoTaskContext from "../context/demoTaskContext";

export const useTaskChange = () => {
  const { currentTask } = useContext(DemoTaskContext);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    async function changeTask() {
      await timeout(1000);
      window.scrollTo(0, 0);
    }

    if (currentTask === CurrentTask.INVESTIGATE) {
      changeTask();
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentTask]);
};
