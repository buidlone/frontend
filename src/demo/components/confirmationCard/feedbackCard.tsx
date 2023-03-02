import { useContext } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { IModalProps } from "../../../interfaces/IModal";
import { RoundButton } from "../demoMessagesModal/styled";
import {
  BottomText,
  ConfirmationModalCloseBtn,
  ConfirmationModalWrapper,
  FeedBackBottomWrapper,
  InnerModal,
} from "./styled";
import DemoMockDataContext from "../../context/demoMockDataContext";
import AfterInvestConfirmationContent from "../afterConfirmationModalContent/afterInvestCard";

const FeedbackCard = ({ onClose }: IModalProps) => {
  let domNode: any = useClickOutside(() => {
    onClose();
  });
  const {
    mockData: { refund },
  } = useContext(DemoMockDataContext);

  const handleClick = () => {
    onClose();
    //TODO feedback
  };

  return (
    <ConfirmationModalWrapper ref={domNode}>
      <ConfirmationModalCloseBtn onClick={onClose} />
      <InnerModal>
        <AfterInvestConfirmationContent amount={refund} feedback />
      </InnerModal>
      <FeedBackBottomWrapper>
        <BottomText>
          Are we having fun yet? Please leave a note about your experience
        </BottomText>
        <RoundButton feedback className="filled" onClick={handleClick}>
          Interested?
        </RoundButton>
      </FeedBackBottomWrapper>
    </ConfirmationModalWrapper>
  );
};

export default FeedbackCard;
