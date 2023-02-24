import { useContext, useEffect } from "react";
import { ProjectState } from "../../../interfaces/enums/ProjectStateEnums";
import DemoMockDataContext from "../../context/demoMockDataContext";
import DemoTaskContext from "../../context/demoTaskContext";
import {
  StateTextBlue,
  StateTextGreen,
  StateTextOrange,
  StateTextYellow,
} from "./styled";

export const StatusColor = () => {
  const { tasks, currentTask } = useContext(DemoTaskContext);

  let projectState = tasks[currentTask].projectState;

  useEffect(() => {
    projectState = tasks[currentTask].projectState;
  }, [currentTask]);

  if (
    [
      ProjectState.ONGOING_FUNDRAISER,
      ProjectState.FUNDRAISER_ENDED_NO_MILESTONES_ONGOING,
      ProjectState.MILESTONES_ONGOING_BEFORE_LAST,
      ProjectState.LAST_MILESTONE_ONGOING,
    ].includes(projectState)
  ) {
    return "#3AEDC4";
  } else if (
    [ProjectState.CANCELED, ProjectState.FAILED_FUNDRAISER].includes(
      projectState
    )
  ) {
    return "rgba(0, 196, 255, 1)";
  } else if (projectState === ProjectState.BEFORE_FUNDRAISER) {
    return "#ffeb00";
  } else if (
    [
      ProjectState.TERMINATED_BY_VOTING,
      ProjectState.TERMINATED_DUE_TO_INACTIVITY,
    ].includes(projectState)
  ) {
    return "rgba(255, 137, 0, 1)";
  } else if (projectState === ProjectState.SUCCESSFULLY_ENDED) {
    return "rgba(0, 196, 255, 1)";
  } else if (projectState === ProjectState.UNKNOWN) {
    return "#FF8900";
  } else return "transparent";
};

const ProjectStateLabel = () => {
  const { tasks, currentTask } = useContext(DemoTaskContext);

  let projectState = tasks[currentTask].projectState;

  useEffect(() => {
    projectState = tasks[currentTask].projectState;
  }, [currentTask]);

  if (
    [
      ProjectState.ONGOING_FUNDRAISER,
      ProjectState.FUNDRAISER_ENDED_NO_MILESTONES_ONGOING,
      ProjectState.MILESTONES_ONGOING_BEFORE_LAST,
      ProjectState.LAST_MILESTONE_ONGOING,
    ].includes(projectState)
  ) {
    return <StateTextGreen>Active - Private round</StateTextGreen>;
  } else if (
    [ProjectState.CANCELED, ProjectState.FAILED_FUNDRAISER].includes(
      projectState
    )
  ) {
    return <StateTextBlue>Canceled</StateTextBlue>;
  } else if (projectState === ProjectState.BEFORE_FUNDRAISER) {
    return <StateTextYellow>Not started</StateTextYellow>;
  } else if (
    [
      ProjectState.TERMINATED_BY_VOTING,
      ProjectState.TERMINATED_DUE_TO_INACTIVITY,
    ].includes(projectState)
  ) {
    return <StateTextOrange>Terminated</StateTextOrange>;
  } else if (projectState === ProjectState.SUCCESSFULLY_ENDED) {
    return <StateTextBlue>Ended</StateTextBlue>;
  } else if (projectState === ProjectState.UNKNOWN) {
    return <>¯\_(ツ)_/¯</>; // TODO: decide what is shown to user when status is unknown
  } else {
    return <></>;
  }
};

export default ProjectStateLabel;
