import AboutSection from "../src/components/aboutSection";
import ProgressSection from "../src/components/progressSection";
import { FeaturesSec } from "../src/components/featuredProjectsSection/styled";
import FundingBlock from "../src/components/fundingBlock";
import { BgImage, Container, HideForMobile } from "../styles/Container";
import TimelineBlock from "../src/components/timelineBlock";
import FooterSection from "../src/components/footerSection";
import Calculator from "../src/components/calculator";
import InvestorsBarChart from "../src/components/investorsBarChart";
import React, { useContext, useState } from "react";
import LoadedValuesContext from "../src/context/loadedValuesContext";
import { Spinner, SpinnerText } from "../src/components/navbar/styled";
import StopStatus from "../src/components/statusNotification/stopStatus";
import WrongStatus from "../src/components/statusNotification/wrongStatus";
import InvestStatus from "../src/components/statusNotification/investStatus";
import Buidl1Header from "../src/components/buidl1Header";
import MobileFooter from "../src/components/mobileFooter";
import Head from "next/head";

const Buidl1 = () => {
  const loadedValuesState = useContext(LoadedValuesContext);
  const [isShownStop, setIsShownStop] = useState(false);
  const [isShownWrong, setIsShownWrong] = useState(false);
  const [isShownInvest, setIsShownInvest] = useState(false);
  console.log(loadedValuesState);
  

  return loadedValuesState.isDataLoaded ? (
    <>
      {isShownStop ? (
        <Container>
          <StopStatus setIsShownStop={setIsShownStop} />
        </Container>
      ) : isShownWrong ? (
        <Container>
          <WrongStatus setIsShownWrong={setIsShownWrong} />{" "}
        </Container>
      ) : isShownInvest ? (
        <Container>
          <InvestStatus setIsShownInvest={setIsShownInvest} />{" "}
        </Container>
      ) : (
        <>
          <BgImage isFixed />
          <Buidl1Header />
        </>
      )}
      <Head>
        <title>Buidl1</title>
      </Head>
      <Container>
        <HideForMobile>
          <FeaturesSec>
            <FundingBlock
              setIsShownInvest={setIsShownInvest}
              setIsShownWrong={setIsShownWrong}
            />
            <TimelineBlock />
          </FeaturesSec>
          <ProgressSection
            setIsShownStop={setIsShownStop}
            setIsShownWrong={setIsShownWrong}
          />
          <FeaturesSec>
            <Calculator />
            <InvestorsBarChart />
          </FeaturesSec>
        </HideForMobile>
        <AboutSection />
      </Container>
      <MobileFooter />

      <FooterSection />
    </>
  ) : (
    <>
      <Spinner />
      <SpinnerText>Grabbing extra minions...</SpinnerText>
    </>
  );
};

export default Buidl1;
