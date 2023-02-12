import ProgressInfoBlock from "../progressInfoBlock";
import ProgressRoadmap from "../progressRoadmap";
import { ProgressBlockWrapper, ProgressContentWrapper } from "./styled";

interface IProgressSectionProps {
  setIsShownStop: any;
  setIsShownWrong: any;
}

const ProgressSection = ({
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
        />
      </ProgressContentWrapper>
    </ProgressBlockWrapper>
  );
};

export default ProgressSection;
