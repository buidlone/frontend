import { BlockWrapper, Title } from '../fundingBlock/styled';
import { Line } from '../projectsInfoSection/styled';
import DiscordImg from '../../../public/DiscordSmall.png';

import {
  BottomPartWrapper,
  BottomWrapper,
  InlineWrapper,
  TopWrapper,
  XButton,
} from './styled';
import Image from 'next/image';
import TimelineGraph from '../timelineGraph';

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
            <Image
              src={DiscordImg}
              alt='discord logo'
              height={'14.44px'}
              width={'14.33px'}
            />
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
