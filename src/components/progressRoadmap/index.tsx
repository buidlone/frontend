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

const ProgressRoadmap = () => {
  const featuredProject = useContext(ProjectContext);
  const { timerDays, timerHours, timerMinutes, timerSeconds, isExpired } =
    useCountdown('2022-09-01');

  return (
    <ProgressRoadmapWrapper>
      <Title>Progress</Title>
      <ProgressBar>
        <Progress progress={35} />

        <ProgressStep completed stage={'Stage 1'}>
          <CheckMark />
        </ProgressStep>
        <ProgressStep active stage={'Stage 2'}>
          <MilestonesTooltip />
        </ProgressStep>
        <ProgressStep stage={'Stage 3'}></ProgressStep>
        <ProgressStep stage={'Stage 4'}></ProgressStep>
        <ProgressStep stage={'Stage 5'}></ProgressStep>
      </ProgressBar>

      <LockBar>
        <Lock unlocked>
          <Image src={unlockedLock} height={15} />
        </Lock>
        <Lock unlocked active fundsReleased={2345}>
          <Image src={unlockedLock} height={15} />
          <Funds>
            {featuredProject?.fundsReleased
              ?.toLocaleString()
              .replace(/,/g, ' ')}
          </Funds>
        </Lock>
        <Lock>
          <Image src={lockedLock} height={15} />
        </Lock>
        <Lock>
          <Image src={lockedLock} height={15} />
        </Lock>
        <Lock>
          <Image src={lockedLock} height={15} />
        </Lock>
      </LockBar>
      <BottomWrapper>
        <text className='topText'>Next stage in</text>
        <text className='daysLeft'>
          {timerDays}D {timerHours}H {timerMinutes}M {timerSeconds}S
        </text>
      </BottomWrapper>
    </ProgressRoadmapWrapper>
  );
};

export default ProgressRoadmap;
