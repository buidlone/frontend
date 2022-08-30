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
  DashedRound,
} from "./styled";
import Image from "next/image";
import MilestonesTooltip from "../milestonesTooltip";
import { useContext } from "react";
import ProjectContext from "../../context/projectContext";
import useCountdown from "../../hooks/useCountdown";
import Tooltip from "../tooltip";

import ScrollContainer from "react-indiana-drag-scroll";

const ProgressRoadmap = () => {
  const project = useContext(ProjectContext);
  const { timerDays, timerHours, timerMinutes, timerSeconds, isExpired } =
    useCountdown(project?.stages?.find((stage) => stage.active)?.endDate);

  return (
    <>
      <ProgressRoadmapWrapper>
        <Title>Project progress</Title>

        <ScrollableContainer horizontal vertical={false}>
          <ProgressBar>
            <Progress progress={2.7} />
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
                <DashedRound />
              )}
            </ProgressStep>
            {project &&
              project?.stages?.map((stage) => (
                <Tooltip milestonesArray={stage?.milestones}>
                  <ProgressStep
                    key={stage.id}
                    stage={stage.name}
                    completed={stage.isCompleted}
                    active={stage.active}
                  >
                    {stage.isCompleted && <CheckMark />}
                  </ProgressStep>
                </Tooltip>
              ))}
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
                !project?.softCap?.isReached && project?.seed?.isCollected
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
                  return <DashedRound />;
                } else {
                  return (
                    <Image src={lockedLock} alt="locked lock" height={15} />
                  );
                }
              })()}
            </Lock>

            {project &&
              project?.stages?.map((stage) => (
                <Lock
                  unlocked={stage.isCompleted || stage.active}
                  active={stage.active}
                >
                  {stage.isCompleted || stage.active ? (
                    <Image src={unlockedLock} alt="unlocked lock" height={15} />
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
