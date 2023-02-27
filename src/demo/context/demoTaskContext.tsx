import React, { createContext, useState } from "react";
import { CurrentTask } from "../../interfaces/enums/DemoTaskEnums";
import { task, TaskContext, tasksData } from "../mockData/taskData";

interface Props {
  children: React.ReactNode;
}

const DemoTaskContext = createContext<TaskContext>({
  tasks: tasksData,
  currentTask: 0,
  setCurrentTask: () => {},
  setTasks: () => {},
});

export function DemoTaskContextProdvider({ children }: Props) {
  const [tasks, setTasks] = useState<task[]>(tasksData);
  const [currentTask, setCurrentTask] = useState<number>(CurrentTask.INVEST);

  return (
    <DemoTaskContext.Provider
      value={{ tasks, setTasks, currentTask, setCurrentTask }}
    >
      {children}
    </DemoTaskContext.Provider>
  );
}

export default DemoTaskContext;
