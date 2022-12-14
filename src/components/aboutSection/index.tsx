import HistoryBlock from "../historyBlock";
import { useState } from "react";
import DetailsBlock from "../detailsBlock";
import { AboutSec, ButtonsWrapper, AboutButton } from "./styled";
import Buidl1Section from "../buidl1Section";
import { IInvestorsProps } from "../../interfaces/ICommonProps";
import { HideForMobile } from "../../../styles/Container";

const AboutSection = ({ wallets, ...props }: IInvestorsProps) => {
  const [active, setActive] = useState("details");

  return (
    <AboutSec>
      <ButtonsWrapper>
        <AboutButton
          className={active == "details" ? "selected" : ""}
          onClick={() => setActive("details")}
        >
          IDO Details
        </AboutButton>
        <AboutButton
          className={active == "about" ? "selected" : ""}
          onClick={() => setActive("about")}
        >
          About the project
        </AboutButton>
        <HideForMobile>
          <AboutButton
            className={active == "history" ? "selected" : ""}
            onClick={() => setActive("history")}
          >
            History
          </AboutButton>
        </HideForMobile>
      </ButtonsWrapper>
      {active === "details" && <DetailsBlock wallets={wallets} />}
      {active === "about" && <Buidl1Section />}
      {active === "history" && <HistoryBlock />}
    </AboutSec>
  );
};

export default AboutSection;

