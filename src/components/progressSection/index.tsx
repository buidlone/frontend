import { IInvestorsProps } from "../../interfaces/ICommonProps";
import ProgressInfoBlock from "../progressInfoBlock";
import ProgressRoadmap from "../progressRoadmap";
import { ProgressBlockWrapper, ProgressContentWrapper } from "./styled";

const ProgressSection = ({
  wallets,
  setIsShownStop,
  setIsShownWrong,
  ...props
}: IInvestorsProps) => {
  return (
    <ProgressBlockWrapper>
      <ProgressContentWrapper>
        <ProgressRoadmap />
        <ProgressInfoBlock
          setIsShownStop={setIsShownStop}
          setIsShownWrong={setIsShownWrong}
          wallets={wallets}
        />
      </ProgressContentWrapper>
    </ProgressBlockWrapper>
  );
};

export default ProgressSection;
