import AboutBlock from '../AboutBlock';
import HistoryBlock from '../HistoryBlock';
import DetailsBlock from '../DetailsBlock';
import { ButtonsWrapper, AboutButton, AboutSec } from './styled';
import { useState } from 'react';

const AboutSection = () => {

  const [active, setActive] = useState("details");

  return (
    <AboutSec>
      <ButtonsWrapper>
        <AboutButton onClick={() => setActive("details")}>IDO Details</AboutButton>
        <AboutButton onClick={() => setActive("about")}>About the project</AboutButton>
        <AboutButton onClick={() => setActive("history")}>History</AboutButton>
      </ButtonsWrapper>
      {active === "details" && <DetailsBlock />}
      {active === "about" && <AboutBlock />}
      {active === "history" && <HistoryBlock />}
    </AboutSec>
  );
};

export default AboutSection;
