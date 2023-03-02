import { useContext } from "react";
import { CheckMark } from "../../../components/progressRoadmap/styled";
import { CurrentTask } from "../../../interfaces/enums/DemoTaskEnums";
import DemoMockDataContext from "../../context/demoMockDataContext";
import DemoTaskContext from "../../context/demoTaskContext";
import { InnerModalContent } from "../confirmationCard/styled";
import { ConfirmedIcon, InnerContainer, InnerContentWrapper } from "./styled";

const AfterVoteConfirmationContent = () => {
  const {
    mockData: {
      userValues: { power },
    },
  } = useContext(DemoMockDataContext);

  const { completedTasks } = useContext(DemoTaskContext);
  const communityHasVoted = completedTasks.includes(CurrentTask.INVESTIGATE);
  const votedPower = power + 40;

  return (
    <InnerContainer className="voting">
      <InnerContentWrapper>
        <InnerModalContent className="voting">
          <ConfirmedIcon className="voting">
            <CheckMark />
          </ConfirmedIcon>
          {communityHasVoted ? Math.round(votedPower) : Math.round(power)} %
        </InnerModalContent>
        <InnerModalContent className="voting smaller">
          {communityHasVoted
            ? "Investors voted to terminate the project."
            : "You voted to stop funding the project."}
        </InnerModalContent>
      </InnerContentWrapper>
    </InnerContainer>
  );
};

export default AfterVoteConfirmationContent;
