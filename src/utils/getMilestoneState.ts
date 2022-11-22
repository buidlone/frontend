export function getMilestoneState(
  projectState: number,
  currentMilestoneID: number,
  milestoneID: number
) {
  let active = false;
  let completed = false;

  if (
    (projectState === 32 || projectState === 64) &&
    milestoneID === currentMilestoneID
  ) {
    active = true;
  } else if (milestoneID < currentMilestoneID || projectState === 512) {
    completed = true;
  }

  return { active, completed };
}
