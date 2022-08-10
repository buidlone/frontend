import ProgressInfoBlock from '../progressInfoBlock';

import ProgressRoadmap from '../progressRoadmap';

import { ProgressBlockWrapper, ProgressContentWrapper } from './styled';

const ProgressSection = () => {
  return (
    <ProgressBlockWrapper>
      <ProgressContentWrapper>
        <ProgressRoadmap />
        <ProgressInfoBlock />
      </ProgressContentWrapper>
    </ProgressBlockWrapper>
  );
};

export default ProgressSection;
