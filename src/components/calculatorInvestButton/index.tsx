import { useContext, useEffect } from "react";
import Web3Context from "../../context/web3Context";
import { IButton } from "../calculator/styled";

interface IButton {
  current: boolean | undefined;
  handleClick: any;
  handleConnectClick: any;
}
const CalculatorInvestButton = ({
  current,
  handleClick,
  handleConnectClick,
}: IButton) => {
  const { web3Provider } = useContext(Web3Context);

  useEffect(() => {
    console.log(current);
  }, [current]);

  return (
    <>
      {web3Provider ? (
        <>
          <IButton disabled={!current} onClick={handleClick}>
            Invest
          </IButton>
        </>
      ) : (
        <>
          <IButton onClick={handleConnectClick}>Invest</IButton>
        </>
      )}
    </>
  );
};

export default CalculatorInvestButton;
