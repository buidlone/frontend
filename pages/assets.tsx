import Head from "next/head";
import { useState } from "react";
import AssetsSection from "../src/components/assetsSection";
import { AssetsHeader } from "../src/components/assetsSection/styled";
import Disclaimer from "../src/components/disclaimer";
import { DesktopDisclaimerContainer } from "../src/components/disclaimer/styled";
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
      <Head>
        <title>Buidl1 | Portfolio</title>
      </Head>
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
            <DesktopDisclaimerContainer>
              <Disclaimer hideMobile={true} />
            </DesktopDisclaimerContainer>
            <AssetsHeader>Portfolio</AssetsHeader>
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

