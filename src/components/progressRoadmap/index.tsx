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
  const { softCap, milestones, projectState, currentMilestone } =
    useContext(LoadedValuesContext);
  const { timerDays, timerHours, timerMinutes, timerSeconds, isExpired } =
    useCountdown(project?.stages?.find((stage) => stage.active)?.endDate);

  const containerRef = React.createRef<HTMLElement>();
  const activeStageRef = React.createRef<HTMLElement>();

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
            <Progress progress={39} />
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
              {softCap?.isReached && <CheckMark />}
              {project?.seed?.isCollected && !softCap?.isReached && (
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
              active={project?.seed?.isCollected && !softCap?.isReached}
            >
              {(() => {
                if (softCap?.isReached) {
                  return <CheckMark />;
                } else if (project?.seed?.isCollected && !softCap?.isReached) {
                  return (
                    <Image src={unlockedLock} alt="unlocked lock" height={15} />
                  );
                  // <DashedCircle />;
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
              ? `${timerDays}D ${timerHours}H ${timerMinutes}M ${timerSeconds}S`
              : `After reaching soft cap`}
          </text>
        </BottomWrapper>
      </ProgressRoadmapWrapper>
    </>
  );
};

export default ProgressRoadmap;
