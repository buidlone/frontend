import { useContext, useEffect } from "react";
import DemoTaskContext from "../context/demoTaskContext";

export const useTaskChange = () => {
  const { currentTask } = useContext(DemoTaskContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentTask]);
};
