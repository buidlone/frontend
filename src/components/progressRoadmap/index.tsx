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
  ScrollableContainer,
  MilestoneProgressWrapper,
  MProgressBar,
  DashedCircle,
  ScrollableContainerWrapper,
  PBWrapper,
  PBContainer,
} from "./styled";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Tooltip from "../tooltip";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { getMilestoneState } from "../../utils/getMilestoneState";
import { IMilestoneFundsAllocated } from "../../interfaces/ILoadedValues";
import ProgressRoadmapTimer from "../progressRoadmapTimer";
import useCountdown from "../../hooks/useCountdown";

import MilestoneFundsSection from "../milestoneFundsSection";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

interface IProgressRoadmap {
  milestoneFunds: IMilestoneFundsAllocated[];
}

const ProgressRoadmap = ({ milestoneFunds, ...props }: IProgressRoadmap) => {
  const { milestones, currency, projectState, currentMilestone } =
    useContext(LoadedValuesContext);

  const containerRef = React.createRef<HTMLElement>();
  const activeStageRef = React.createRef<HTMLElement>();

  const maxProjectDays = useCountdown(
    milestones[milestones.length - 1]?.endDate,
    milestones[0]?.startDate
  );
  const daysPassed = useCountdown(undefined, milestones[0]?.startDate, true);

  const maxDays = useCountdown(
    milestones[currentMilestone]?.endDate,
    milestones[currentMilestone]?.startDate
  );

  const currentDays = useCountdown(
    undefined,
    milestones[currentMilestone]?.startDate,
    true
  );
  const getFullProjectProgress = () => {
    let progress = 0;
    progress =
      (Number(daysPassed.timerDays) * 100) / Number(maxProjectDays.timerDays);

    return progress;
  };

  const getMilestoneProgress = () => {
    let progress = 0;
    progress =
      (Number(currentDays.timerDays) * 100) / Number(maxDays.timerDays);

    return progress;
  };

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
        <ScrollableContainerWrapper>
          <ScrollableContainer
            innerRef={containerRef}
            horizontal
            vertical={false}
          >
            <ProgressBar>
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
                  const suspended = getMilestoneState(
                    projectState,
                    currentMilestone,
                    milestone.id
                  ).suspended;

                  const itemProps =
                    active || suspended ? { ref: activeStageRef } : {};
                  return (
                    <MilestoneProgressWrapper key={milestone.id} {...itemProps}>
                      {/* <Tooltip milestonesArray={milestones}> */}
                      {/* <Tooltip
                        key={milestone.id}
                        text={"Information about milestone"}
                      > */}
                      <ProgressStep
                        stage={`M${milestone.id + 1}`}
                        completed={completed}
                        active={active}
                        suspended={suspended}
                        {...itemProps}
                      >
                        {completed && <CheckMark />}
                        {active && <DashedCircle />}
                      </ProgressStep>
                      {/* </Tooltip> */}
                      {milestone.id !==
                        milestones[milestones.length - 1].id && (
                        <MProgressBar>
                          <Progress
                            progress={
                              active
                                ? getMilestoneProgress()
                                : completed
                                ? 100
                                : 0
                            }
                          />
                        </MProgressBar>
                      )}
                    </MilestoneProgressWrapper>
                  );
                })}

              <PBContainer>
                <PBWrapper>
                  <CircularProgressbarWithChildren
                    value={
                      projectState === 512
                        ? 100
                        : // : currentMilestone ===
                        //   milestones[milestones.length - 1].id
                        projectState === 32 || projectState === 64
                        ? getFullProjectProgress()
                        : 0
                    }
                    strokeWidth={6}
                    styles={buildStyles({
                      strokeLinecap: "round",
                      pathTransitionDuration: 0.5,
                      pathColor: `#00C4FF`,
                      trailColor: "#1C2B3A",
                      backgroundColor: "#1C2B3A",
                    })}
                  >
                    {projectState === 512 ? (
                      <CheckMark className="lastMilestone" />
                    ) : (
                      <div className="lastMilestoneProgress">
                        {projectState === 32 || projectState === 64
                          ? getFullProjectProgress().toFixed(1)
                          : 0}
                        %
                      </div>
                    )}
                  </CircularProgressbarWithChildren>
                </PBWrapper>
              </PBContainer>
            </ProgressBar>

            <LockBar>
              {milestones &&
                milestones.map((milestone, index) => {
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
                  const suspended = getMilestoneState(
                    projectState,
                    currentMilestone,
                    milestone.id
                  ).suspended;

                  return milestoneFunds[index]?.totalFundsAllocated !==
                    undefined ? (
                    <>
                      <Tooltip
                        key={milestone.id}
                        index={index + 1}
                        fundsObject={milestoneFunds[index]}
                      >
                        <Lock
                          unlocked={completed || active}
                          active={active}
                          suspended={suspended}
                        >
                          {active && !suspended ? (
                            <Image
                              src={unlockedLock}
                              alt="unlocked lock"
                              height={15}
                            />
                          ) : completed ? (
                            <CheckMark />
                          ) : (
                            <Image
                              src={lockedLock}
                              alt="locked lock"
                              height={15}
                            />
                          )}
                        </Lock>
                      </Tooltip>
                    </>
                  ) : (
                    <Lock
                      unlocked={completed || active}
                      active={active}
                      suspended={suspended}
                    >
                      {completed || (active && !suspended) ? (
                        <Image
                          src={unlockedLock}
                          alt="unlocked lock"
                          height={15}
                        />
                      ) : (
                        <Image src={lockedLock} alt="locked lock" height={15} />
                      )}{" "}
                    </Lock>
                  );
                })}
            </LockBar>
          </ScrollableContainer>
          <MilestoneFundsSection milestoneFunds={milestoneFunds} />
        </ScrollableContainerWrapper>
        <ProgressRoadmapTimer />
      </ProgressRoadmapWrapper>
    </>
  );
};

export default ProgressRoadmap;
