import { Dispatch, SetStateAction } from "react";

export type task = {
  id: number;
  name: string;
  description: string;
  goal: string;
  projectState: number;
  currentMilestone: number;
};

export type TaskContext = {
  tasks: task[];
  currentTask: number;
  setCurrentTask: Dispatch<SetStateAction<number>>;
};

export const tasksData = [
  {
    id: 0,
    name: `Let's PUMP`,
    description: `Read IDO details and decide rather you want to invest or not. Yes, yes.. of course you want, let’s multiply your funds 500 times.`,
    goal: `Invest enough USDT to reach Soft cap, and begin the project`,
    projectState: 4,
    currentMilestone: 0,
  },
  {
    id: 1,
    name: `“Smells Fishy”`,
    description: `Take a minute to investigate the project. Your life as investor continues even after you dropped the cash.`,
    goal: `Check project milestones timeline, and try to figure out what is going on here.`,
    projectState: 6,
    currentMilestone: 1,
  },
  {
    id: 2,
    name: `“Evacuation”`,
    description: `The investors have found out that the owners of PROJECT LMB are preparing to buy a brand new Lambo instead of reaching the project milestones. Stop this madness!`,
    goal: `Find the way to stop the project and refund your investment`,
    projectState: 6,
    currentMilestone: 1,
  },
  {
    id: 3,
    name: `“Are we having fun yet?”`,
    description: `As you see, your vote, your action DOES matter. Help us build these insanity.`,
    goal: `Please fill the short form about your experience buidler.`,
    projectState: 8,
    currentMilestone: 1,
  },
];
