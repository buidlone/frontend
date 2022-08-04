import {
  HorizontalLine,
  RoadmapBubble,
  TextAboveDashed,
  TextWhite,
  VerticalLine,
} from './styled';
import lock from '../../../public/lock_closed.svg';
import Image from 'next/image';

interface IFundingBlock {
  seed: string;
  softCap: string;
  hardCap: string;
}

export default function FundingRoadmap({
  seed,
  softCap,
  hardCap,
  ...props
}: IFundingBlock) {
  return (
    <>
      <HorizontalLine>
        <RoadmapBubble>
          <VerticalLine>
            <TextAboveDashed>Seed</TextAboveDashed>
            <TextWhite>{seed}</TextWhite>
          </VerticalLine>
        </RoadmapBubble>

        <RoadmapBubble>
          <VerticalLine>
            <TextAboveDashed>Soft Cap</TextAboveDashed>
            <TextWhite>{softCap}</TextWhite>
          </VerticalLine>
          <Image src={lock} alt='lock' height={'14px'} />
        </RoadmapBubble>
        <RoadmapBubble>
          <Image src={lock} alt='lock' height={'14px'} />
          <VerticalLine>
            <TextAboveDashed>Hard Cap</TextAboveDashed>
            <TextWhite>{hardCap}</TextWhite>
          </VerticalLine>
        </RoadmapBubble>
      </HorizontalLine>
    </>
  );
}
