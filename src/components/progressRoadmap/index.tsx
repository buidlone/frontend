import lockedLock from "../../../public/LockedLock.svg";
import unlockedLock from "../../../public/UnlockedLock.svg";
import {
  CheckMark,
  Progress,
  ProgressBar,
  ProgressRoadmapWrapper,
  ProgressStep,
  Title,
  LockBar,
  Lock,
  BottomWrapper,
  Funds,
  ScrollableContainer,
  DashedCircle,
} from "./styled";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import ProjectContext from "../../context/projectContext";
import useCountdown from "../../hooks/useCountdown";
import Tooltip from "../tooltip";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { getMilestoneState } from "../../utils/getMilestoneState";

const ProgressRoadmap = () => {
  const project = useContext(ProjectContext);
  const {
    softCap,
    milestones,
    projectState,
    currentMilestone,
    fundraisingEndDate,
  } = useContext(LoadedValuesContext);
  const containerRef = React.createRef<HTMLElement>();
  const activeStageRef = React.createRef<HTMLElement>();

  let timeTillNextMilestone = useCountdown(
    projectState === 32 || projectState === 64
      ? milestones[currentMilestone + 1].startDate
      : fundraisingEndDate
  );

  useEffect(() => {
    if (
      containerRef &&
      containerRef.current &&
      activeStageRef &&
      activeStageRef.current
    ) {
      containerRef.current.scrollTo({
        left:
          activeStageRef.current.offsetLeft -
          containerRef.current.offsetWidth / 2.6,

        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <ProgressRoadmapWrapper>
        <Title>Project progress</Title>

        <ScrollableContainer
          innerRef={containerRef}
          horizontal
          vertical={false}
        >
          <ProgressBar>
            <Progress progress={11} />
            <ProgressStep
              stage={"Seed"}
              completed={project?.seed?.isCollected}
              active
            >
              {project?.seed?.isCollected && <CheckMark />}
            </ProgressStep>
            <ProgressStep
              stage={"Funding"}
              completed={softCap?.isReached}
              active
            >
              {softCap?.isReached && projectState === 16 && <CheckMark />}
              {project?.seed?.isCollected && projectState === 4 && (
                <DashedCircle />
              )}
            </ProgressStep>
            {milestones &&
              milestones.map((milestone) => {
                const completed = getMilestoneState(
                  projectState,
                  currentMilestone,
                  milestone.id
                ).completed;
                const active = getMilestoneState(
                  projectState,
                  currentMilestone,
                  milestone.id
                ).active;

                const itemProps = active ? { ref: activeStageRef } : {};
                return (
                  // <Tooltip milestonesArray={milestones}>
                  <Tooltip
                    key={milestone.id}
                    text={"Information about milestone"}
                  >
                    <ProgressStep
                      stage={`Milestone ${milestone.id + 1}`}
                      completed={completed}
                      active={active}
                      {...itemProps}
                    >
                      {completed && <CheckMark />}
                      {active && <DashedCircle />}
                    </ProgressStep>
                  </Tooltip>
                );
              })}
          </ProgressBar>

          <LockBar>
            <Lock
              unlocked={project?.seed?.isCollected}
              active={!project?.seed?.isCollected}
            >
              {project?.seed?.isCollected ? (
                <CheckMark />
              ) : (
                <Image src={lockedLock} alt="locked lock" height={15} />
              )}
            </Lock>
            <Lock
              unlocked={project?.seed?.isCollected && softCap?.isReached}
              active={project?.seed?.isCollected && projectState === 4}
            >
              {(() => {
                if (
                  projectState === 32 ||
                  projectState === 64 ||
                  projectState === 16
                ) {
                  return <CheckMark />;
                } else if (project?.seed?.isCollected && projectState === 4) {
                  return (
                    <Image src={unlockedLock} alt="unlocked lock" height={15} />
                  );
                } else {
                  return (
                    <Image src={lockedLock} alt="locked lock" height={15} />
                  );
                }
              })()}
            </Lock>

            {milestones &&
              milestones.map((milestone) => {
                const completed = getMilestoneState(
                  projectState,
                  currentMilestone,
                  milestone.id
                ).completed;
                const active = getMilestoneState(
                  projectState,
                  currentMilestone,
                  milestone.id
                ).active;

                return (
                  <Tooltip key={milestone.id} text={"Information about funds"}>
                    <Lock unlocked={completed || active} active={active}>
                      {completed || active ? (
                        <Image
                          src={unlockedLock}
                          alt="unlocked lock"
                          height={15}
                        />
                      ) : (
                        <Image src={lockedLock} alt="locked lock" height={15} />
                      )}
                      {milestone.id === currentMilestone && (
                        <Funds>
                          {project.fundsReleased
                            ?.toLocaleString()
                            .replace(/,/g, " ")}
                        </Funds>
                      )}
                    </Lock>
                  </Tooltip>
                );
              })}
          </LockBar>
        </ScrollableContainer>
        <BottomWrapper>
          <text className="topText">Next phase starts in</text>
          <text className="daysLeft">
            {softCap?.isReached
              ? `${timeTillNextMilestone.timerDays}D ${timeTillNextMilestone.timerHours}H ${timeTillNextMilestone.timerMinutes}M ${timeTillNextMilestone.timerSeconds}S`
              : `After reaching soft cap`}
          </text>
        </BottomWrapper>
      </ProgressRoadmapWrapper>
    </>
  );
};

export default ProgressRoadmap;
