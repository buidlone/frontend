import ProgressInfoBlock from "../progressInfoBlock";
import ProgressRoadmap from "../progressRoadmap";
import { ProgressBlockWrapper, ProgressContentWrapper } from "./styled";

interface IProgressSectionProps {
  wallets: String[];
  setIsShownStop: any;
  setIsShownWrong: any;
}

const ProgressSection = ({
  wallets,
  setIsShownStop,
  setIsShownWrong,
  ...props
}: IProgressSectionProps) => {
  return (
    <ProgressBlockWrapper>
      <ProgressContentWrapper>
        <ProgressRoadmap />
        <ProgressInfoBlock
          setIsShownWrong={setIsShownWrong}
          setIsShownStop={setIsShownStop}
          wallets={wallets}
        />
      </ProgressContentWrapper>
    </ProgressBlockWrapper>
  );
};

export default ProgressSection;
