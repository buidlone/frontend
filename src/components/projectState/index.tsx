import { useContext } from "react";
import {
  StateTextBlue,
  StateTextGreen,
  StateTextOrange,
  StateTextYellow,
} from "./styled";
import { ProjectState } from "../../interfaces/enums/ProjectStateEnums";
import DemoStateContext from "../../demo/context/demoStateContext";

export interface IStatusProps {
  projectState: number;
  isDemoEnv?: boolean;
}

export const StatusColor = ({ projectState }: IStatusProps) => {
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

const ProjectStateLabel = ({ projectState, isDemoEnv }: IStatusProps) => {
  // const { isDemo } = useContext(DemoStateContext);

  if (
    [
      ProjectState.ONGOING_FUNDRAISER,
      ProjectState.FUNDRAISER_ENDED_NO_MILESTONES_ONGOING,
      ProjectState.MILESTONES_ONGOING_BEFORE_LAST,
      ProjectState.LAST_MILESTONE_ONGOING,
    ].includes(projectState)
  ) {
    return (
      <StateTextGreen isDemo={isDemoEnv}>
        {isDemoEnv ? "Active - Private round" : "Ongoing"}
      </StateTextGreen>
    );
  } else if (
    [ProjectState.CANCELED, ProjectState.FAILED_FUNDRAISER].includes(
      projectState
    )
  ) {
    return <StateTextBlue isDemo={isDemoEnv}>Canceled</StateTextBlue>;
  } else if (projectState === ProjectState.BEFORE_FUNDRAISER) {
    return <StateTextYellow isDemo={isDemoEnv}>Not started</StateTextYellow>;
  } else if (projectState === ProjectState.TERMINATED_BY_VOTING) {
    return <StateTextOrange isDemo={isDemoEnv}>Suspended</StateTextOrange>;
  } else if (projectState === ProjectState.TERMINATED_DUE_TO_INACTIVITY) {
    return <StateTextOrange isDemo={isDemoEnv}>Terminated</StateTextOrange>;
  } else if (projectState === ProjectState.SUCCESSFULLY_ENDED) {
    return <StateTextBlue isDemo={isDemoEnv}>Ended</StateTextBlue>;
  } else if (projectState === ProjectState.UNKNOWN) {
    return <>¯\_(ツ)_/¯</>; // TODO: decide what is shown to user when status is unknown
  } else {
    return <></>;
  }
};

export default ProjectStateLabel;
