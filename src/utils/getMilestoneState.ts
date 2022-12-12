export function getMilestoneState(
  projectState: number,
  currentMilestoneID: number,
  milestoneID: number
) {
  let active = false;
  let completed = false;
  let suspended = false;

  if (
    (projectState === 32 || projectState === 64) &&
    milestoneID === currentMilestoneID
  ) {
    active = true;
  } else if (milestoneID < currentMilestoneID || projectState === 512) {
    completed = true;
  } else if (milestoneID === currentMilestoneID && projectState === 128) {
    suspended = true;
  }

  return { active, completed, suspended };
}
