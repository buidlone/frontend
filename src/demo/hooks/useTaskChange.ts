import { useContext, useEffect } from "react";
import DemoTaskContext from "../context/demoTaskContext";

export const useTaskChange = () => {
  const { currentTask } = useContext(DemoTaskContext);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    async function changeTask() {
      await timeout(500);
      window.scrollTo(0, 0);
    }

    if (currentTask === 1) {
      changeTask();
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentTask]);
};
