import AboutBlock from '../aboutBlock';
import HistoryBlock from '../historyBlock';
import { ButtonsWrapper, StateButton, AboutSec } from './styled';
import { useState } from 'react';
import ActiveBlock from '../activeBlock';

const AssetsSection = () => {
  const [active, setActive] = useState('active');

  return (
    <AboutSec>
      <ButtonsWrapper>
        <StateButton autoFocus onClick={() => setActive('active')}>Active</StateButton>
        <StateButton onClick={() => setActive('claimed')}>Claimed</StateButton>
        <StateButton onClick={() => setActive('cancelled')}>
          Cancelled
        </StateButton>
      </ButtonsWrapper>
      {active === 'active' && <ActiveBlock/>}
      {active === 'claimed' && <AboutBlock />}
      {active === 'cancelled' && <HistoryBlock />}
    </AboutSec>
  );
};

export default AssetsSection;
