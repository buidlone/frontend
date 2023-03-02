import { useContext } from "react";
import { CheckMark } from "../../../components/progressRoadmap/styled";
import DemoMockDataContext from "../../context/demoMockDataContext";
import { InnerModalContent } from "../confirmationCard/styled";
import { ConfirmedIcon, InnerContainer, InnerContentWrapper } from "./styled";

interface IAfterProps {
  amount: number;
  feedback?: boolean;
}
const AfterInvestConfirmationContent = ({ amount, feedback }: IAfterProps) => {
  const {
    mockData: { currency },
  } = useContext(DemoMockDataContext);
  return (
    <InnerContainer>
      <ConfirmedIcon>
        <CheckMark />
      </ConfirmedIcon>
      <InnerContentWrapper>
        <InnerModalContent>
          You have successfully {feedback ? "refunded" : "invested"}
        </InnerModalContent>
        <InnerModalContent className="askToConfirm">
          {" "}
          {amount.toLocaleString("fr-FR")} {currency}
        </InnerModalContent>
      </InnerContentWrapper>
    </InnerContainer>
  );
};

export default AfterInvestConfirmationContent;
