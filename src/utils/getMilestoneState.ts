import { ProjectState } from "../interfaces/enums/ProjectStateEnums";

export function getMilestoneState(
  projectState: number,
  currentMilestoneID: number,
  milestoneID: number
) {
  let active = false;
  let completed = false;
  let suspended = false;

  if (
    (projectState === ProjectState.MILESTONES_ONGOING_BEFORE_LAST ||
      projectState === ProjectState.LAST_MILESTONE_ONGOING) &&
    milestoneID === currentMilestoneID
  ) {
    active = true;
  } else if (
    milestoneID < currentMilestoneID ||
    projectState === ProjectState.SUCCESSFULLY_ENDED
  ) {
    completed = true;
  } else if (
    milestoneID === currentMilestoneID &&
    projectState === ProjectState.TERMINATED_BY_VOTING
  ) {
    suspended = true;
  }

  return { active, completed, suspended };
}
