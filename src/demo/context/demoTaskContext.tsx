import React, { createContext, useState } from "react";
import { TaskContext, tasksData } from "../mockData/taskData";

interface Props {
  children: React.ReactNode;
}

const DemoTaskContext = createContext<TaskContext>({
  tasks: tasksData,
  currentTask: 0,
  setCurrentTask: () => {},
});

export function DemoTaskContextProdvider({ children }: Props) {
  const tasks = tasksData;
  const [currentTask, setCurrentTask] = useState<number>(0);

  return (
    <DemoTaskContext.Provider value={{ tasks, currentTask, setCurrentTask }}>
      {children}
    </DemoTaskContext.Provider>
  );
}

export default DemoTaskContext;
