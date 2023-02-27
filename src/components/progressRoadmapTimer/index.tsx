import { useContext, useEffect } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import useCountdown from "../../hooks/useCountdown";
import { ProjectState } from "../../interfaces/enums/ProjectStateEnums";
import { TextWrapper } from "./styled";

const ProgressRoadmapTimer = () => {
  const {
    projectState,
    milestones,
    currentMilestone,
    fundraisingEndDate,
    fundraisingStartDate,
  } = useContext(LoadedValuesContext);

  let timeTillNextMilestone;

  useEffect(() => {}, [projectState]);

  switch (projectState) {
    case ProjectState.CANCELED:
      return (
        <TextWrapper suspended>
          <span className="topText">Fundraising starts in</span>
          <span className="daysLeft">
            {" "}
            Project was canceled by the creator before the fundraiser started
          </span>
        </TextWrapper>
      );
    case ProjectState.BEFORE_FUNDRAISER:
      timeTillNextMilestone = useCountdown(fundraisingStartDate);
      return (
        <TextWrapper>
          <span className="topText">Fundraising starts in</span>
          <span className="daysLeft">
            {timeTillNextMilestone.timerDays}D{" "}
            {timeTillNextMilestone.timerHours}H{" "}
            {timeTillNextMilestone.timerMinutes}M{" "}
            {timeTillNextMilestone.timerSeconds}S
          </span>
        </TextWrapper>
      );
    case ProjectState.ONGOING_FUNDRAISER:
      timeTillNextMilestone = useCountdown(fundraisingEndDate);
      return (
        <TextWrapper>
          <span className="topText">Fundraiser ends in</span>
          <span className="daysLeft">
            {timeTillNextMilestone.timerDays}D{" "}
            {timeTillNextMilestone.timerHours}H{" "}
            {timeTillNextMilestone.timerMinutes}M{" "}
            {timeTillNextMilestone.timerSeconds}S
          </span>
        </TextWrapper>
      );

    case ProjectState.FAILED_FUNDRAISER:
      return (
        <TextWrapper suspended>
          <span className="topText">Fundraiser ends in</span>
          <span className="daysLeft"> Fundraiser failed to raise soft cap</span>
        </TextWrapper>
      );

    case ProjectState.FUNDRAISER_ENDED_NO_MILESTONES_ONGOING:
      timeTillNextMilestone = useCountdown(
        milestones[currentMilestone].startTime
      );
      return (
        <TextWrapper>
          <span className="topText">
            Fundraiser ended successfully. First milestone starts in
          </span>
          <span className="daysLeft">
            {timeTillNextMilestone.timerDays}D{" "}
            {timeTillNextMilestone.timerHours}H{" "}
            {timeTillNextMilestone.timerMinutes}M{" "}
            {timeTillNextMilestone.timerSeconds}S
          </span>
        </TextWrapper>
      );

    case ProjectState.MILESTONES_ONGOING_BEFORE_LAST:
      timeTillNextMilestone = useCountdown(
        milestones[currentMilestone + 1].startTime
      );
      return (
        <TextWrapper>
          <span className="topText">Next milestone starts in</span>
          <span className="daysLeft">
            {timeTillNextMilestone.timerDays}D{" "}
            {timeTillNextMilestone.timerHours}H{" "}
            {timeTillNextMilestone.timerMinutes}M{" "}
            {timeTillNextMilestone.timerSeconds}S
          </span>
        </TextWrapper>
      );
    case ProjectState.LAST_MILESTONE_ONGOING:
      timeTillNextMilestone = useCountdown(
        milestones[currentMilestone].endTime
      );
      return (
        <TextWrapper>
          <span className="topText">Project ends in</span>
          <span className="daysLeft">
            {timeTillNextMilestone.timerDays}D{" "}
            {timeTillNextMilestone.timerHours}H{" "}
            {timeTillNextMilestone.timerMinutes}M{" "}
            {timeTillNextMilestone.timerSeconds}S
          </span>
        </TextWrapper>
      );

    case ProjectState.TERMINATED_BY_VOTING:
      return (
        <TextWrapper suspended>
          <span className="topText">Next milestone starts in</span>
          <span className="daysLeft">Project suspended</span>
        </TextWrapper>
      );

    case ProjectState.TERMINATED_DUE_TO_INACTIVITY:
      return (
        <TextWrapper suspended>
          <span className="topText">Next milestone starts in</span>
          <span className="daysLeft">Project terminated</span>
        </TextWrapper>
      );
    case ProjectState.SUCCESSFULLY_ENDED:
      timeTillNextMilestone = useCountdown(
        milestones[currentMilestone].endTime,
        milestones[0].startTime
      );
      return (
        <TextWrapper>
          <span className="topText">Project completed in</span>
          <span className="daysLeft">
            {timeTillNextMilestone.timerDays}D{" "}
            {timeTillNextMilestone.timerHours}H{" "}
            {timeTillNextMilestone.timerMinutes}M{" "}
            {timeTillNextMilestone.timerSeconds}S
          </span>
        </TextWrapper>
      );
    case ProjectState.UNKNOWN:
      return <TextWrapper>Project state is unknown</TextWrapper>;

    default:
      return <TextWrapper>Project state is unknown</TextWrapper>;
  }
};

export default ProgressRoadmapTimer;
