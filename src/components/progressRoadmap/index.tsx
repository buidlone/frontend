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
  Funds,
  ScrollableContainer,
  DashedCircle,
} from "./styled";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import ProjectContext from "../../context/projectContext";
import Tooltip from "../tooltip";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { getMilestoneState } from "../../utils/getMilestoneState";
import ProgressRoadmapTimer from "../../progressRoadmapTimer";

const ProgressRoadmap = () => {
  const project = useContext(ProjectContext);
  const {
    seedFundingLimit,
    totalInvested,
    softCap,
    milestones,
    projectState,
    currentMilestone,
  } = useContext(LoadedValuesContext);
  const containerRef = React.createRef<HTMLElement>();
  const activeStageRef = React.createRef<HTMLElement>();

  const [isSeedReached, setIsSeedReached] = useState(false);

  useEffect(() => {
    seedFundingLimit <= totalInvested
      ? setIsSeedReached(true)
      : setIsSeedReached(false);

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
  }, [totalInvested]);

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
            <Progress progress={20} />
            <ProgressStep stage={"Seed"} completed={isSeedReached} active>
              {isSeedReached ? <CheckMark /> : <DashedCircle />}
            </ProgressStep>
            <ProgressStep
              stage={"Funding"}
              completed={softCap?.isReached}
              active
            >
              {softCap?.isReached &&
                (projectState === 16 || projectState === 32) && <CheckMark />}
              {isSeedReached && projectState === 4 && <DashedCircle />}
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
            <Lock unlocked={isSeedReached} active={!isSeedReached}>
              {isSeedReached ? (
                <CheckMark />
              ) : (
                <Image src={lockedLock} alt="locked lock" height={15} />
              )}
            </Lock>
            <Lock
              unlocked={isSeedReached && softCap?.isReached}
              active={isSeedReached && projectState === 4}
            >
              {(() => {
                if (
                  projectState === 32 ||
                  projectState === 64 ||
                  projectState === 16
                ) {
                  return <CheckMark />;
                } else if (isSeedReached && projectState === 4) {
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
        <ProgressRoadmapTimer />
      </ProgressRoadmapWrapper>
    </>
  );
};

export default ProgressRoadmap;
