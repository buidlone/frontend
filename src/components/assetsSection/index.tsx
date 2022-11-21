import AboutBlock from "../aboutBlock";
import HistoryBlock from "../historyBlock";
import { ButtonsWrapper, StateButton, AboutSec } from "./styled";
import { useState } from "react";
import ActiveBlock from "../activeBlock";

const AssetsSection = ({
  setIsShownStop,
  setIsShownWrong,
  setIsShownInvest,
}: any) => {
  const [active, setActive] = useState("active");

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    active: string
  ) => {
    const buttons = document.querySelectorAll("StateButton");
    event.currentTarget.classList.add("selected");
    setActive(active);
  };

  return (
    <AboutSec>
      <ButtonsWrapper>
        <StateButton
          className={active == "active" ? "selected" : ""}
          onClick={(e) => handleClick(e, "active")}
        >
          Active
        </StateButton>
        {/* <StateButton
          className={active == "claimed" ? "selected" : ""}
          onClick={(e) => handleClick(e, "claimed")}
        >
          Claimed
        </StateButton>
        <StateButton
          className={active == "cancelled" ? "selected" : ""}
          onClick={(e) => handleClick(e, "cancelled")}
        >
          Cancelled
        </StateButton> */}
      </ButtonsWrapper>
      {active === "active" && (
        <ActiveBlock
          setIsShownStop={setIsShownStop}
          setIsShownWrong={setIsShownWrong}
          setIsShownInvest={setIsShownInvest}
        />
      )}
      {active === "claimed" && <AboutBlock />}
      {active === "cancelled" && <HistoryBlock />}
    </AboutSec>
  );
};

export default AssetsSection;
