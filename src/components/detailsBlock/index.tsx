import {
  DetailsTable,
  FlexItem,
  Property,
  Data,
  FlexItem1,
  FlexItem2,
} from './styled';

export const featuredProject = {
  raised: '1245 ETH',
  milestones: '12/32',
  participants: '234 wallets',
  funds: '23452/324234 USDT',
  tokens: '4 000 000 DPP',
  end: '23D 03H 30M 23S',
};

const DetailsBlock = () => {
  return (
    <DetailsTable>
      <FlexItem>
        <FlexItem1>
          <Property className='bigger'>Raised</Property>
          <Property className='medium'>Milestones completed</Property>
          <Property className='medium'>Participants</Property>
          <Property>Funds raised</Property>
          <Property>Tokens reserved</Property>
          <Property>Project ends in</Property>
        </FlexItem1>
        <FlexItem2>
          <Data>{featuredProject.raised}</Data>

          <Data>{featuredProject.milestones}</Data>

          <Data>{featuredProject.participants}</Data>

          <Data className='medium'>{featuredProject.funds}</Data>

          <Data className='smaller'>{featuredProject.tokens}</Data>

          <Data className='blue smaller'>{featuredProject.end}</Data>
        </FlexItem2>
      </FlexItem>

      <FlexItem>
        <FlexItem1>
          <Property className='bigger'>Raised</Property>
          <Property className='medium'>Milestones completed</Property>
          <Property className='medium'>Participants</Property>
          <Property>Funds raised</Property>
          <Property>Tokens reserved</Property>
          <Property>Project ends in</Property>
        </FlexItem1>
        <FlexItem2>
          <Data>{featuredProject.raised}</Data>

          <Data>{featuredProject.milestones}</Data>

          <Data>{featuredProject.participants}</Data>

          <Data className='medium'>{featuredProject.funds}</Data>

          <Data className='smaller'>{featuredProject.tokens}</Data>

          <Data className='blue smaller'>{featuredProject.end}</Data>
        </FlexItem2>
      </FlexItem>
    </DetailsTable>
  );
};

export default DetailsBlock;
