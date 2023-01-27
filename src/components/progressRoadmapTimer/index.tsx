import { useContext, useEffect } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import useCountdown from "../../hooks/useCountdown";
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
    case 1:
      return (
        <TextWrapper suspended>
          <span className="topText">Fundraising starts in</span>
          <span className="daysLeft">
            {" "}
            Project was canceled by the creator before the fundraiser started
          </span>
        </TextWrapper>
      );
    case 2:
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
    case 4:
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

    case 8:
      return (
        <TextWrapper suspended>
          <span className="topText">Fundraiser ends in</span>
          <span className="daysLeft"> Fundraiser failed to raise soft cap</span>
        </TextWrapper>
      );

    case 16:
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

    case 32:
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
    case 64:
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

    case 128:
      return (
        <TextWrapper suspended>
          <span className="topText">Next milestone starts in</span>
          <span className="daysLeft">Project suspended</span>
        </TextWrapper>
      );

    case 256:
      return (
        <TextWrapper suspended>
          <span className="topText">Next milestone starts in</span>
          <span className="daysLeft">Project terminated</span>
        </TextWrapper>
      );
    case 512:
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
    case 1024:
      return <TextWrapper>Project state is unknown</TextWrapper>;

    default:
      return <TextWrapper>Project state is unknown</TextWrapper>;
  }
};

export default ProgressRoadmapTimer;
