import {
  TimelineBar,
  TimelineStep,
  TProgress,
  VerticalLine,
  Bubble,
  DateStep,
  DateBar,
  TimelineContainer,
} from './styled';
import lock from '../../../public/lock_closed.svg';
import Image from 'next/image';

const TimelineGraph = () => {
  return (
    <TimelineContainer>
      <TimelineBar>
        <VerticalLine date='22/ 03' />
        <TProgress progress={6} date='22/ 01'/>

        <TimelineStep stage={'Funding Soft Cap'} current>
          <Bubble date='22/ 06'>
            <Image src={lock} alt='locked lock' height={'14px'} />
          </Bubble>
        </TimelineStep>

        <TimelineStep stage={'Stage 1'} />
        <TimelineStep stage={'Stage 2'} />
        <TimelineStep stage={'Stage 3'} />
        <TimelineStep stage={'Stage 4'} />
        <TimelineStep stage={'Stage 5'} />
        <TimelineStep stage={'Stage 6'} />
      </TimelineBar>
      <DateBar>
        <DateStep date='2 mo' />
        <DateStep date='3 mo' />
        <DateStep date='3 mo' />
        <DateStep date='4 mo' />
        <DateStep date='3 mo' />
        <DateStep date='3 mo' />
      </DateBar>
    </TimelineContainer>
  );
};

export default TimelineGraph;
