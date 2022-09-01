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
import React, { useContext, useEffect, useRef } from "react";
import ProjectContext from "../../context/projectContext";
import useCountdown from "../../hooks/useCountdown";
import Tooltip from "../tooltip";
import ScrollContainer from "react-indiana-drag-scroll";

const ProgressRoadmap = () => {
  const project = useContext(ProjectContext);
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
            <Progress progress={6} />
            <ProgressStep
              stage={"Seed"}
              completed={project?.seed?.isCollected}
              active
            >
              {project?.seed?.isCollected && <CheckMark />}
            </ProgressStep>
            <ProgressStep
              stage={"Funding"}
              completed={project?.softCap?.isReached}
              active
            >
              {project.softCap?.isReached && <CheckMark />}
              {project?.seed?.isCollected && !project.softCap?.isReached && (
                <DashedCircle />
              )}
            </ProgressStep>
            {project &&
              project?.stages?.map((stage) => {
                const itemProps = stage.active ? { ref: activeStageRef } : {};
                return (
                  <Tooltip milestonesArray={stage?.milestones}>
                    <ProgressStep
                      key={stage.id}
                      stage={stage.name}
                      completed={stage.isCompleted}
                      active={stage.active}
                      {...itemProps}
                    >
                      {stage.isCompleted && <CheckMark />}
                      {stage.active && <DashedCircle />}
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
              unlocked={
                project?.seed?.isCollected && project?.softCap?.isReached
              }
              active={
                project?.seed?.isCollected && !project?.softCap?.isReached
              }
            >
              {(() => {
                if (project?.softCap?.isReached) {
                  return <CheckMark />;
                } else if (
                  project?.seed?.isCollected &&
                  !project?.softCap?.isReached
                ) {
                  return <DashedCircle />;
                } else {
                  return (
                    <Image src={lockedLock} alt="locked lock" height={15} />
                  );
                }
              })()}
            </Lock>

            {project &&
              project?.stages?.map((stage) => (
                <Tooltip text={"Information about funds"}>
                  <Lock
                    unlocked={stage.isCompleted || stage.active}
                    active={stage.active}
                  >
                    {stage.isCompleted || stage.active ? (
                      <Image
                        src={unlockedLock}
                        alt="unlocked lock"
                        height={15}
                      />
                    ) : (
                      <Image src={lockedLock} alt="locked lock" height={15} />
                    )}
                    {stage.active && (
                      <Funds>
                        {project.fundsReleased
                          ?.toLocaleString()
                          .replace(/,/g, " ")}
                      </Funds>
                    )}
                  </Lock>
                </Tooltip>
              ))}
          </LockBar>
        </ScrollableContainer>
        <BottomWrapper>
          <text className="topText">Next phase starts in</text>
          <text className="daysLeft">
            {timerDays
              ? `${timerDays}D ${timerHours}H ${timerMinutes}M ${timerSeconds}S`
              : `After reaching soft cap`}
          </text>
        </BottomWrapper>
      </ProgressRoadmapWrapper>
    </>
  );
};

export default ProgressRoadmap;
