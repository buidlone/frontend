import { BlockWrapper, Title } from '../fundingBlock/styled';
import { Line } from '../projectsInfoSection/styled';

import {
  BottomPartWrapper,
  BottomWrapper,
  InfoIcon,
  InlineWrapper,
  TopWrapper,
  XButton,
} from './styled';
import TimelineGraph from '../timelineGraph';
import Tooltip from '../tooltip';

const TimelineBlock = () => {
  return (
    <BlockWrapper>
      <TopWrapper>
        <Title>Timeline</Title>
        <InlineWrapper className='buttons'>
          <XButton autoFocus>X1</XButton>
          <XButton>X2</XButton>
        </InlineWrapper>
      </TopWrapper>

      <TimelineGraph />
      <Line />
      <BottomWrapper>
        <BottomPartWrapper>
          <InlineWrapper>
            <div className='period'>Soft cap reservation period</div>
            <Tooltip text={'Information about the soft cap reservation period'}>
              <InfoIcon />
            </Tooltip>
          </InlineWrapper>
          <div className='dateNum'>2022 01 - 2022 06</div>
        </BottomPartWrapper>
        <BottomPartWrapper>
          <div>Project period</div>
          <div className='dateWords'>Aprx 1,5 year after reaching Soft cap</div>
        </BottomPartWrapper>
      </BottomWrapper>
    </BlockWrapper>
  );
};

export default TimelineBlock;
