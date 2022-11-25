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
  MilestoneProgressWrapper,
  MProgressBar,
  DashedCircle,
} from "./styled";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Tooltip from "../tooltip";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { getMilestoneState } from "../../utils/getMilestoneState";
import { IMilestoneFundsAllocated } from "../../interfaces/ILoadedValues";
import ProgressRoadmapTimer from "../progressRoadmapTimer";
import useCountdown from "../../hooks/useCountdown";

interface IProgressRoadmap {
  milestoneFunds: IMilestoneFundsAllocated[];
}

const ProgressRoadmap = ({ milestoneFunds, ...props }: IProgressRoadmap) => {
  const { milestones, currentMilestone, projectState } =
    useContext(LoadedValuesContext);

  const containerRef = React.createRef<HTMLElement>();
  const activeStageRef = React.createRef<HTMLElement>();

  const maxDays = useCountdown(
    milestones[currentMilestone]?.endDate,
    milestones[currentMilestone]?.startDate
  );

  const currentDays = useCountdown(
    undefined,
    milestones[currentMilestone]?.startDate,
    true
  );

  
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

                const itemProps = active ? { ref: activeStageRef } : {};
                return (
                  <MilestoneProgressWrapper key={milestone.id} {...itemProps}>
                    {/* <Tooltip milestonesArray={milestones}> */}
                    <Tooltip
                      key={milestone.id}
                      text={"Information about milestone"}
                    >
                      <ProgressStep
                        stage={`M${milestone.id + 1}`}
                        completed={completed}
                        active={active}
                        {...itemProps}
                      >
                        {completed && <CheckMark />}
                        {active && <DashedCircle />}
                      </ProgressStep>
                    </Tooltip>

                    <MProgressBar>
                      <Progress
                        progress={
                          active ? getMilestoneProgress() : completed ? 100 : 0
                        }
                      />
                    </MProgressBar>
                  </MilestoneProgressWrapper>
                );
              })}
            {projectState === 512 ? (
              <ProgressStep completed>
                <CheckMark />
              </ProgressStep>
            ) : (
              <ProgressStep stage=""></ProgressStep>
            )}
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

                return milestoneFunds[index]?.totalFundsAllocated !==
                  undefined ? (
                  <>
                    <Tooltip
                      key={milestone.id}
                      fundsObject={milestoneFunds[index]}
                    >
                      <Lock unlocked={completed || active} active={active}>
                        {completed || active ? (
                          <Image
                            src={unlockedLock}
                            alt="unlocked lock"
                            height={15}
                          />
                        ) : (
                          <Image
                            src={lockedLock}
                            alt="locked lock"
                            height={15}
                          />
                        )}
                        {milestone.id == currentMilestone &&
                          projectState !== 512 && (
                            <Funds>
                              {Number(
                                milestoneFunds[index]?.totalFundsAllocated
                              )
                                .toFixed(4)
                                .toString()
                                .replace(/,/g, " ")}
                            </Funds>
                          )}
                      </Lock>
                    </Tooltip>
                  </>
                ) : (
                  <Lock unlocked={completed || active} active={active}>
                    {completed || active ? (
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

            {projectState === 512 ? (
              <Lock unlocked completed>
                <CheckMark />
              </Lock>
            ) : (
              <Lock>
                <Image src={lockedLock} alt="locked lock" height={15} />
              </Lock>
            )}
          </LockBar>
        </ScrollableContainer>
        <ProgressRoadmapTimer />
      </ProgressRoadmapWrapper>
    </>
  );
};

export default ProgressRoadmap;
