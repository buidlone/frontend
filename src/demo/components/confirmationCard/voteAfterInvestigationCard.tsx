import { useContext } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { IModalProps } from "../../../interfaces/IModal";

import {
  ConfirmationModalCloseBtn,
  ConfirmationModalWrapper,
  InnerModal,
  InnerModalContent,
  BottomText,
  TextContainer,
} from "./styled";

import DemoMockDataContext from "../../context/demoMockDataContext";

import {
  InnerContainer,
  InnerContentWrapper,
} from "../afterConfirmationModalContent/styled";

interface IConfirmModalProps extends IModalProps {}

const VoteAfterInvestigationCard = ({ onClose }: IConfirmModalProps) => {
  const {
    mockData: {
      userValues: { power },
    },
  } = useContext(DemoMockDataContext);

  let domNode: any = useClickOutside(() => {
    onClose();
  });

  return (
    <ConfirmationModalWrapper ref={domNode}>
      <ConfirmationModalCloseBtn onClick={onClose} />

      <InnerModal>
        <InnerContainer className="voting">
          <InnerContentWrapper>
            <InnerModalContent className="voting">40 %</InnerModalContent>
            <InnerModalContent className="voting smaller">
              Investors already voted to terminate the project.
            </InnerModalContent>
          </InnerContentWrapper>
        </InnerContainer>
      </InnerModal>
      <TextContainer>
        <BottomText>
          You have{" "}
          <span className="votingDeficiency">{Math.round(power)}%</span> voting
          power.
        </BottomText>
        <BottomText>
          Community need to reach <span className="votingDeficiency">51%</span>{" "}
          to stop funding
        </BottomText>
      </TextContainer>
    </ConfirmationModalWrapper>
  );
};

export default VoteAfterInvestigationCard;
