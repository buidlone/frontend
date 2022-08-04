import AboutBlock from "../aboutBlock";
import HistoryBlock from "../historyBlock";

import { useState } from "react";
import DetailsBlock from "../detailsBlock";
import { AboutSec, ButtonsWrapper, AboutButton } from "./styled";

const AboutSection = () => {
  const [active, setActive] = useState("details");
  // comment
  return (
    <AboutSec>
      <ButtonsWrapper>
        <AboutButton onClick={() => setActive("details")}>
          IDO Details
        </AboutButton>
        <AboutButton onClick={() => setActive("about")}>
          About the project
        </AboutButton>
        <AboutButton onClick={() => setActive("history")}>History</AboutButton>
      </ButtonsWrapper>
      {active === "details" && <DetailsBlock />}
      {active === "about" && <AboutBlock />}
      {active === "history" && <HistoryBlock />}
    </AboutSec>
  );
};

export default AboutSection;
