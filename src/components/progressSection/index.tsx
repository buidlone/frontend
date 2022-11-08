import ProgressInfoBlock from '../progressInfoBlock';

import ProgressRoadmap from '../progressRoadmap';

import { ProgressBlockWrapper, ProgressContentWrapper } from './styled';

interface IProgressSectionProps {
  wallets: String[];
}

const ProgressSection = ({ wallets, ...props }: IProgressSectionProps) => {
  return (
    <ProgressBlockWrapper>
      <ProgressContentWrapper>
        <ProgressRoadmap />
        <ProgressInfoBlock wallets={wallets}/>
      </ProgressContentWrapper>
    </ProgressBlockWrapper>
  );
};

export default ProgressSection;
