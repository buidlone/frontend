import { ProjectState } from "../interfaces/enums/ProjectStateEnums";

export const getProjectState = (projectState: number | undefined) => {
  switch (projectState) {
    case ProjectState.CANCELED:
      return "Project was canceled by the creator before the fundraiser started";

    case ProjectState.BEFORE_FUNDRAISER:
      return "Fundraiser has not started";

    case ProjectState.ONGOING_FUNDRAISER:
      return "Fundraiser is active";

    case ProjectState.FAILED_FUNDRAISER:
      return "Fundraiser failed to raise soft cap";

    case ProjectState.FUNDRAISER_ENDED_NO_MILESTONES_ONGOING:
      return "Fundraiser ended successfully, waiting for the 1st milestone to start";

    case ProjectState.MILESTONES_ONGOING_BEFORE_LAST ||
      ProjectState.LAST_MILESTONE_ONGOING:
      return "Milestone is ongoing";

    case ProjectState.TERMINATED_BY_VOTING:
      return "Project was terminated by voting";
    case ProjectState.TERMINATED_DUE_TO_INACTIVITY:
      return "Project was terminated by gelato";

    case ProjectState.SUCCESSFULLY_ENDED:
      return "Project successfully ended";
    case ProjectState.UNKNOWN:
      return "Project state is unknown";
    default:
      return "Error occured while retrieving project state";
  }
};

export const getProjectStatus = (
  fundraiserEndTime: number,
  fundraiserStartTime: number,
  isSoftCapReached: boolean,
  isCanceledBeforeFundraiserStart: boolean,
  isEmergencyTerminated: boolean,
  didCreatorLockTokens: boolean,
  milestones: any,
  isTerminatedByGelato: boolean,
  isCanceledDuringMilestones: boolean,
  currentMilestone: any
) => {
  const currentTime = new Date().getTime();

  const isFailedFundraiser =
    currentTime >= fundraiserEndTime && isSoftCapReached == false;

  if (isCanceledBeforeFundraiserStart) {
    return ProjectState.CANCELED;
  } else if (
    currentTime < fundraiserStartTime &&
    isEmergencyTerminated == false
  ) {
    return ProjectState.BEFORE_FUNDRAISER;
  } else if (
    (isFailedFundraiser == true || didCreatorLockTokens == false) &&
    isEmergencyTerminated == false
  ) {
    return ProjectState.FAILED_FUNDRAISER;
  } else if (
    currentTime >= fundraiserStartTime &&
    currentTime < fundraiserEndTime &&
    isEmergencyTerminated == false
  ) {
    return ProjectState.ONGOING_FUNDRAISER;
  } else if (
    currentTime >= fundraiserEndTime &&
    currentTime < milestones[0].startTime &&
    isFailedFundraiser == false &&
    isEmergencyTerminated == false
  ) {
    return ProjectState.FUNDRAISER_ENDED_NO_MILESTONES_ONGOING;
  } else if (
    currentTime >= milestones[0].startTime &&
    currentTime < milestones[milestones.length - 2].endTime &&
    isFailedFundraiser == false &&
    isEmergencyTerminated == false
  ) {
    return ProjectState.MILESTONES_ONGOING_BEFORE_LAST;
  } else if (
    currentTime >= milestones[milestones.length - 1].startTime &&
    currentTime < milestones[milestones.length - 1].endTime &&
    isFailedFundraiser == false &&
    isEmergencyTerminated == false
  ) {
    return ProjectState.LAST_MILESTONE_ONGOING;
  } else if (
    isTerminatedByGelato == false &&
    isCanceledDuringMilestones == true &&
    isFailedFundraiser == false
  ) {
    return ProjectState.TERMINATED_BY_VOTING;
  } else if (
    isTerminatedByGelato == true &&
    isCanceledDuringMilestones == true &&
    isFailedFundraiser == false
  ) {
    return ProjectState.TERMINATED_DUE_TO_INACTIVITY;
  } else if (
    currentTime > milestones[milestones.length - 1].endTime &&
    currentMilestone.milestoneId == milestones.length - 1 &&
    isFailedFundraiser == false &&
    isEmergencyTerminated == false
  ) {
    return ProjectState.SUCCESSFULLY_ENDED;
  } else {
    return ProjectState.UNKNOWN;
  }
};
