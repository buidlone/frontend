import { ButtonsWrapper, AboutSec } from "./styled";
import ActiveBlock from "../activeBlock";

const AssetsSection = ({
  setIsShownStop,
  setIsShownWrong,
  setIsShownInvest,
}: any) => {

  return (
    <AboutSec>
      <ButtonsWrapper>
      </ButtonsWrapper>
        <ActiveBlock
          setIsShownStop={setIsShownStop}
          setIsShownWrong={setIsShownWrong}
          setIsShownInvest={setIsShownInvest}
        />
    </AboutSec>
  );
};

export default AssetsSection;
