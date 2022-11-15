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
        <TextWrapper>
          Project was canceled by the creator before the fundraiser started
        </TextWrapper>
      );
    case 2:
      timeTillNextMilestone = useCountdown(fundraisingStartDate);
      return (
        <TextWrapper>
          <text className="topText">Fundraising starts in</text>
          <text className="daysLeft">
            {timeTillNextMilestone.timerDays}D{" "}
            {timeTillNextMilestone.timerHours}H{" "}
            {timeTillNextMilestone.timerMinutes}M{" "}
            {timeTillNextMilestone.timerSeconds}S
          </text>
        </TextWrapper>
      );
    case 4:
      timeTillNextMilestone = useCountdown(fundraisingEndDate);
      return (
        <TextWrapper>
          <text className="topText">Fundraiser ends in</text>
          <text className="daysLeft">
            {timeTillNextMilestone.timerDays}D{" "}
            {timeTillNextMilestone.timerHours}H{" "}
            {timeTillNextMilestone.timerMinutes}M{" "}
            {timeTillNextMilestone.timerSeconds}S
          </text>
        </TextWrapper>
      );

    case 8:
      return <TextWrapper>Fundraiser failed to raise soft cap</TextWrapper>;

    case 16:
      timeTillNextMilestone = useCountdown(
        milestones[currentMilestone].startDate
      );
      return (
        <TextWrapper>
          <text className="topText">
            Fundraiser ended successfully. First milestone starts in
          </text>
          <text className="daysLeft">
            {timeTillNextMilestone.timerDays}D{" "}
            {timeTillNextMilestone.timerHours}H{" "}
            {timeTillNextMilestone.timerMinutes}M{" "}
            {timeTillNextMilestone.timerSeconds}S
          </text>
        </TextWrapper>
      );

    case 32:
      timeTillNextMilestone = useCountdown(
        milestones[currentMilestone + 1].startDate
      );
      return (
        <TextWrapper>
          <text className="topText">Next milestone starts in</text>
          <text className="daysLeft">
            {timeTillNextMilestone.timerDays}D{" "}
            {timeTillNextMilestone.timerHours}H{" "}
            {timeTillNextMilestone.timerMinutes}M{" "}
            {timeTillNextMilestone.timerSeconds}S
          </text>
        </TextWrapper>
      );
    case 64:
      timeTillNextMilestone = useCountdown(
        milestones[currentMilestone].endDate
      );
      return (
        <TextWrapper>
          <text className="topText">Project ends in</text>
          <text className="daysLeft">
            {timeTillNextMilestone.timerDays}D{" "}
            {timeTillNextMilestone.timerHours}H{" "}
            {timeTillNextMilestone.timerMinutes}M{" "}
            {timeTillNextMilestone.timerSeconds}S
          </text>
        </TextWrapper>
      );

    case 128:
      return <TextWrapper>Project was terminated by voting</TextWrapper>;

    case 256:
      return <TextWrapper>Project was terminated by gelato</TextWrapper>;
    case 512:
      return <TextWrapper>Project successfully ended</TextWrapper>;
    case 1024:
      return <TextWrapper>Project state is unknown</TextWrapper>;

    default:
      return <TextWrapper>Project state is unknown</TextWrapper>;
  }
};

export default ProgressRoadmapTimer;
