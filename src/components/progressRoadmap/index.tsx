import lockedLock from '../../../public/LockedLock.svg';
import unlockedLock from '../../../public/UnlockedLock.svg';
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
} from './styled';
import Image from 'next/image';
import MilestonesTooltip from '../milestonesTooltip';
import { useContext } from 'react';
import ProjectContext from '../../context/projectContext';
import useCountdown from '../../hooks/useCountdown';
import ScrollContainer from 'react-indiana-drag-scroll';

const ProgressRoadmap = () => {
  const project = useContext(ProjectContext);
  const { timerDays, timerHours, timerMinutes, timerSeconds, isExpired } =
    useCountdown(project?.stages?.find((stage) => stage.active)?.endDate);

  return (
    <>
      <ProgressRoadmapWrapper>
        <Title>Progress</Title>

        <ScrollContainer
          horizontal
          vertical={false}
          style={{ minHeight: '320px', marginLeft: '1.5rem' }}
        >
          <ProgressBar>
            <Progress progress={2.7} />
            {project &&
              project?.stages?.map((stage) => (
                <ProgressStep
                  key={stage.id}
                  stage={stage.name}
                  completed={stage.isCompleted}
                  active={stage.active}
                >
                  {stage.isCompleted && <CheckMark />}
                  {stage.active && (
                    <MilestonesTooltip milestonesArray={stage?.milestones} />
                  )}
                </ProgressStep>
              ))}
          </ProgressBar>

          <LockBar>
            {project &&
              project?.stages?.map((stage) => (
                <Lock
                  unlocked={stage.isCompleted || stage.active}
                  active={stage.active}
                >
                  {stage.isCompleted || stage.active ? (
                    <Image src={unlockedLock} alt='unlocked lock' height={15} />
                  ) : (
                    <Image src={lockedLock} alt='locked lock' height={15} />
                  )}
                  {stage.active && (
                    <Funds>
                      {project.fundsReleased
                        ?.toLocaleString()
                        .replace(/,/g, ' ')}
                    </Funds>
                  )}
                </Lock>
              ))}
          </LockBar>
        </ScrollContainer>
        <BottomWrapper>
          <text className='topText'>Next stage in</text>
          <text className='daysLeft'>
            {timerDays}D {timerHours}H {timerMinutes}M {timerSeconds}S
          </text>
        </BottomWrapper>
      </ProgressRoadmapWrapper>
    </>
  );
};

export default ProgressRoadmap;
