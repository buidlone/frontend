import { GreenButton, StyledA } from '../fundingBlock/styled';
import {
  ActiveTable,
  FlexRow1,
  Data,
  BottomButtonsWrapper,
  TableButton,
  TableLink,
} from './styled';
import DiscordImg from '../../../public/DiscordSmall.png';
import Image from 'next/image';

export const featuredProject = {
  project: 'Buidl1',
  invested: '1245 ETH',
  collected: '125 DPP',
  claimed: '65 DPP',
  reserved: '6585 DPP',
  state: 'Ongoing',
  ends: '96D 32H 43M 21S',
};

const ActiveBlock = () => {
  return (
    <ActiveTable>
      <FlexRow1 className='firstRow'>
        <Data className='bigger'>Project</Data>
        <Data>Invested</Data>
        <Data>Tokens collected</Data>
        <Data>Claimed</Data>
        <Data>Reserved</Data>
        <Data>State</Data>
      </FlexRow1>
      <FlexRow1 className='secondRow'>
        <Data className='underlined blue bigger'>{featuredProject.project}</Data>
        <Data className='green'>{featuredProject.invested}</Data>
        <Data>{featuredProject.collected}</Data>
        <Data className='bigger'>{featuredProject.claimed}</Data>
        <Data className='bigger'>{featuredProject.reserved}</Data>
        <Data className='green smaller'>{featuredProject.state}</Data>
      </FlexRow1>
      <FlexRow1 className="thirdRow">
        <Data className='blue bigger'>Project ends in:</Data>
        <Data className='blue bigger'>{featuredProject.ends}</Data>
        <Data colSpan={4}>
          <BottomButtonsWrapper>
            <Image src={DiscordImg} height={'26px'} width={'26px'}></Image>
            <TableLink>Project discussion</TableLink>
            <TableButton className='invBtn'>Invest</TableButton>
            <TableButton className='insBtn'>Inspect</TableButton>
          </BottomButtonsWrapper>
        </Data>
      </FlexRow1>
    </ActiveTable>
  );
};

export default ActiveBlock;
