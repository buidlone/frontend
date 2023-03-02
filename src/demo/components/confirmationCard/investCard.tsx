import { Dispatch, SetStateAction, useContext, useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { IModalProps } from "../../../interfaces/IModal";
import { RoundButton } from "../demoMessagesModal/styled";
import {
  BottomText,
  ConfirmationBottomContainer,
  ConfirmationModalCloseBtn,
  ConfirmationModalWrapper,
  InnerModal,
  InnerModalContent,
} from "./styled";
import DemoMockDataContext from "../../context/demoMockDataContext";
import AfterInvestConfirmationContent from "../afterConfirmationModalContent/afterInvestCard";

interface IConfirmModalProps extends IModalProps {
  amount: number;
  handleInvest: () => void;
  deficiency: number;
  setAmount: Dispatch<SetStateAction<number>>;
  setSum: Dispatch<SetStateAction<number>>;
}

const InvestConfiramationCard = ({
  onClose,
  amount,
  handleInvest,
  deficiency,
  setAmount,
  setSum,
}: IConfirmModalProps) => {
  let domNode: any = useClickOutside(() => {
    setAmount(0);
    setSum(0);
    onClose();
  });
  const {
    mockData: { currency },
  } = useContext(DemoMockDataContext);

  const [innerAfterConfirmation, setInnerAfterConfirmation] =
    useState<boolean>(false);

  const handleCancelClick = () => {
    setAmount(0);
    setSum(0);
    onClose();
  };
  const handleConfirmClick = () => {
    handleInvest();
    setInnerAfterConfirmation(true);
  };

  return (
    <ConfirmationModalWrapper ref={domNode}>
      <ConfirmationModalCloseBtn onClick={handleCancelClick} />
      <InnerModal>
        {!innerAfterConfirmation && (
          <InnerModalContent className="askToConfirm">
            {amount.toLocaleString("fr-FR")} {currency}
          </InnerModalContent>
        )}
        {innerAfterConfirmation && (
          <AfterInvestConfirmationContent amount={amount} />
        )}
      </InnerModal>
      {!innerAfterConfirmation && (
        <BottomText>{`Are you sure you want to fund this project? Process can’t be undone`}</BottomText>
      )}
      {innerAfterConfirmation &&
        (deficiency > 0 ? (
          <BottomText>
            You need to invest
            <span className="deficiency">
              {" "}
              {deficiency.toLocaleString("fr-FR")}{" "}
            </span>
            more to reach projects Soft Cap
          </BottomText>
        ) : (
          <BottomText>
            The project has reached its soft cap. Developing begins
          </BottomText>
        ))}

      {!innerAfterConfirmation && (
        <ConfirmationBottomContainer>
          <RoundButton onClick={handleCancelClick}>Cancel</RoundButton>
          <RoundButton className="filled" onClick={handleConfirmClick}>
            Confirm
          </RoundButton>
        </ConfirmationBottomContainer>
      )}
    </ConfirmationModalWrapper>
  );
};

export default InvestConfiramationCard;
