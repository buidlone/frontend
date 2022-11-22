import { useState } from "react";
import AssetsSection from "../src/components/assetsSection";
import { AssetsHeader } from "../src/components/assetsSection/styled";
import InvestStatus from "../src/components/statusNotification/investStatus";
import StopStatus from "../src/components/statusNotification/stopStatus";
import WrongStatus from "../src/components/statusNotification/wrongStatus";
import { Container, BgImage } from "../styles/Container";

const Assets = () => {
  const [isShownStop, setIsShownStop] = useState(false);
  const [isShownWrong, setIsShownWrong] = useState(false);
  const [isShownInvest, setIsShownInvest] = useState(false);

  return (
    <>
      {!isShownStop || !isShownWrong || (!isShownInvest && <BgImage isFixed />)}
      <Container>
        {isShownStop ? (
          <StopStatus setIsShownStop={setIsShownStop} />
        ) : isShownWrong ? (
          <WrongStatus setIsShownWrong={setIsShownWrong} />
        ) : isShownInvest ? (
          <InvestStatus setIsShownInvest={setIsShownInvest} />
        ) : (
          <>
            <AssetsHeader>My portfolio</AssetsHeader>
          </>
        )}

        <AssetsSection
          setIsShownStop={setIsShownStop}
          setIsShownWrong={setIsShownWrong}
          setIsShownInvest={setIsShownInvest}
        />
      </Container>
    </>
  );
};

export default Assets;
