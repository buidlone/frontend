import { useContext, useEffect, useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { IModalProps } from "../../../interfaces/IModal";
import { RoundButton } from "../demoMessagesModal/styled";
import {
  ConfirmationBottomContainer,
  ConfirmationModalCloseBtn,
  ConfirmationModalWrapper,
  InnerModal,
  InnerModalContent,
  BottomText,
  VotesContainer,
  VotesInline,
  TextContainer,
} from "./styled";

import DemoMockDataContext from "../../context/demoMockDataContext";
import AfterVoteConfirmationContent from "../afterConfirmationModalContent/afterVoteCard";
import { CurrentTask } from "../../../interfaces/enums/DemoTaskEnums";
import DemoTaskContext from "../../context/demoTaskContext";

interface IConfirmModalProps extends IModalProps {}

const VoteConfiramationCard = ({ onClose }: IConfirmModalProps) => {
  const { completedTasks, setTasks, tasks } = useContext(DemoTaskContext);
  const {
    mockData,
    mockData: {
      userValues,
      userValues: { power, voted },
    },
    setMockData,
  } = useContext(DemoMockDataContext);

  const communityVotes = completedTasks.includes(CurrentTask.INVESTIGATE)
    ? 40
    : 0;

  const handleStop = () => {
    setTasks(
      tasks.map((task) => {
        return { ...task, projectState: 8 };
      })
    );
  };

  let domNode: any = useClickOutside(() => {
    onClose();
  });

  const handleCancelClick = () => {
    onClose();
  };

  const handleConfirmClick = () => {
    if (completedTasks.includes(CurrentTask.INVESTIGATE)) {
      setMockData({ ...mockData, userValues: { ...userValues, voted: true } });
      handleStop();
    } else {
      setMockData({ ...mockData, userValues: { ...userValues, voted: true } });
    }
  };

  useEffect(() => {
    if (completedTasks.includes(CurrentTask.INVESTIGATE) && voted) {
      handleStop();
    }
  }, [voted]);

  return (
    <ConfirmationModalWrapper ref={domNode}>
      <ConfirmationModalCloseBtn onClick={handleCancelClick} />

      <InnerModal>
        {!voted && (
          <InnerModalContent>
            <VotesInline>
              <VotesContainer>
                <span>{Math.round(power)} %</span>
                <span className="belowText">Your impact</span>
              </VotesContainer>
              <VotesContainer className="currentVotes">
                <span className="currentVotes">{communityVotes} %</span>
                <span className="belowText">Current community vote</span>
              </VotesContainer>
            </VotesInline>

            <BottomText className="voting">{`You are going to vote to stop funging the project. This action can’t be undone`}</BottomText>
          </InnerModalContent>
        )}
        {voted && <AfterVoteConfirmationContent />}
      </InnerModal>
      {voted &&
        (communityVotes ? (
          <BottomText>
            Congratulation, community have decided to stop the project
          </BottomText>
        ) : (
          <TextContainer>
            <BottomText>
              Community need to reach
              <span className="votingDeficiency">51%</span> to stop funding.
            </BottomText>
            <BottomText>More votes are needed.</BottomText>
          </TextContainer>
        ))}

      {!voted && (
        <ConfirmationBottomContainer style={{ paddingTop: "0.5rem" }}>
          <RoundButton vote onClick={handleCancelClick}>
            Cancel
          </RoundButton>
          <RoundButton vote className="filled" onClick={handleConfirmClick}>
            Confirm
          </RoundButton>
        </ConfirmationBottomContainer>
      )}
    </ConfirmationModalWrapper>
  );
};

export default VoteConfiramationCard;
