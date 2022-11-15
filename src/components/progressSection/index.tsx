import { useContext, useEffect, useState } from 'react';
import LoadedValuesContext from '../../context/loadedValuesContext';
import { IMilestoneFundsAllocated } from '../../interfaces/ILoadedValues';
import { calculateFundsAllocation } from '../../web3/calculateFundsAllocation';
import ProgressInfoBlock from '../progressInfoBlock';

import ProgressRoadmap from '../progressRoadmap';

import { ProgressBlockWrapper, ProgressContentWrapper } from './styled';

interface IProgressSectionProps {
  wallets: String[];
  
}

const ProgressSection = ({ wallets, ...props }: IProgressSectionProps) => {
  const loadedValuesState = useContext(LoadedValuesContext)
  const [milestoneFundsAllocated, setMilestoneFundsAllocated] = useState<
  IMilestoneFundsAllocated[]
>([
  {
    streamAllocated: "",
    seedAllocated: "",
    totalFundsAllocated: "",
  },
]);

useEffect(() => {
  let result = calculateFundsAllocation(
    loadedValuesState.milestones,
    loadedValuesState.milestonesInvestmentsListForFormula,
    loadedValuesState.percentageDivider
  );
  result && setMilestoneFundsAllocated(result);

}, [])

  return (
    <ProgressBlockWrapper>
      <ProgressContentWrapper>
        <ProgressRoadmap milestoneFunds={milestoneFundsAllocated} />
        <ProgressInfoBlock wallets={wallets}/>
      </ProgressContentWrapper>
    </ProgressBlockWrapper>
  );
};

export default ProgressSection;
