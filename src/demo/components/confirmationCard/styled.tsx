import styled from "styled-components";
import { MessagesModalCloseBtn } from "../demoMessagesModal/styled";

export const ConfirmationModalCloseBtn = styled(MessagesModalCloseBtn)`
  top: -5%;
`;

export const ConfirmationModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 38.544rem;
  width: 100%;
  gap: 0.838rem;
  min-height: 12.995rem;
  z-index: 9999;
  position: relative;
  background: #1f233c;
  border-radius: 20px;
  padding: 1.323rem 1.375rem;
  flex-shrink: 1;
  align-items: center;
  flex-grow: 1;
`;

export const InnerModal = styled.div`
  background: #2e314d 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #080b1277;
  border-radius: 20px;
  min-height: 12.995rem;
  max-height: 16.871rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
`;

export const InnerModalContent = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Space Grotesk", sans-serif;
  font-size: 17px;
  font-weight: 500;
  color: #3aedc4;

  &.askToConfirm {
    text-align: center;
    font-family: "Space Grotesk", sans-serif;
    font-size: 58px;
    font-weight: 500;
    color: #3aedc4;
  }

  &.voting {
    font-family: "Space Grotesk", sans-serif;
    font-size: 69px;
    font-weight: 500;
    color: rgba(255, 177, 0, 1);
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 0.5rem;
  }

  &.smaller {
    font-size: 17px;
    font-weight: 300;
  }
`;

export const BottomText = styled.div`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #f0f0f0;
  min-height: 2rem;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  & > span {
    &.deficiency {
      padding: 0 0.3rem;
      color: #00ffc4;
    }

    &.votingDeficiency {
      padding: 0 0.3rem;
      color: rgba(255, 177, 0, 1);
    }
  }

  &.voting {
    font-size: 17px;
    padding: 0 6rem 1.301rem 6rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ConfirmationBottomContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 0.5rem;
`;

export const VotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Space Grotesk";
  font-size: 60px;
  color: rgba(255, 177, 0, 1);
  text-align: center;

  .currentVotes {
    color: rgba(255, 177, 0, 0.42);
  }

  .belowText {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 12px;
    color: rgba(255, 177, 0, 1);
  }
`;
export const VotesInline = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 1.813rem;
  margin-top: 2.938rem;
`;

export const FeedBackBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding-bottom: 1.3rem;
`;
