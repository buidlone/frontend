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
import { useContext } from 'react';
import ProjectContext from '../../context/projectContext';
import useCountdown from '../../hooks/useCountdown';

const ActiveBlock = () => {
  const featuredProject = useContext(ProjectContext);
  const { timerDays, timerHours, timerMinutes, timerSeconds, isExpired } =
    useCountdown(featuredProject?.end);

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
        <Data className='underlined blue bigger'>{featuredProject?.name}</Data>
        <Data className='green'>{featuredProject?.invested} ETH</Data>
        <Data>{featuredProject?.collected} DPP</Data>
        <Data className='bigger'>{featuredProject?.claimed} DPP</Data>
        <Data className='bigger'>{featuredProject?.reserved} DPP</Data>
        <Data className='green smaller'>{featuredProject?.state} </Data>
      </FlexRow1>
      <FlexRow1 className='thirdRow'>
        <Data className='blue bigger'>Project ends in:</Data>
        <Data className='blue bigger' style={{ fontFamily: 'monospace' }}>
          {timerDays}D {timerHours}H {timerMinutes}M {timerSeconds}S
        </Data>
        <Data colSpan={4}>
          <BottomButtonsWrapper>
            <Image
              src={DiscordImg}
              alt='discord logo'
              height={'26px'}
              width={'26px'}
            />
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
