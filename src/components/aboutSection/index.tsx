import HistoryBlock from "../historyBlock";
import { useState } from "react";
import DetailsBlock from "../detailsBlock";
import { AboutSec, ButtonsWrapper, AboutButton } from "./styled";
import Buidl1Section from "../buidl1Section";

const AboutSection = () => {
  const [active, setActive] = useState("details");

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
      {active === "about" && <Buidl1Section />}
      {active === "history" && <HistoryBlock />}
    </AboutSec>
  );
};

export default AboutSection;
