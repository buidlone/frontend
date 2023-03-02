import { useContext, useEffect } from "react";
import { CurrentTask } from "../../interfaces/enums/DemoTaskEnums";
import DemoTaskContext from "../context/demoTaskContext";

export const useTaskChange = () => {
  const { currentTask, completedTasks } = useContext(DemoTaskContext);

  useEffect(() => {
    if (
      currentTask === CurrentTask.EVACUATE &&
      !completedTasks.includes(CurrentTask.EVACUATE)
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentTask]);
};
