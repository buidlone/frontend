import AboutSection from "../src/components/aboutSection";
import ProgressSection from "../src/components/progressSection";
import { FeaturesSec } from "../src/components/featuredProjectsSection/styled";
import FundingBlock from "../src/components/fundingBlock";
import { BgImage, Container, HideForMobile } from "../styles/Container";
import TimelineBlock from "../src/components/timelineBlock";
import FooterSection from "../src/components/footerSection";
import Calculator from "../src/components/calculator";
import InvestorsBarChart from "../src/components/investorsBarChart";
import React, { useContext, useEffect, useState } from "react";
import LoadedValuesContext from "../src/context/loadedValuesContext";
import { Spinner } from "../src/components/navbar/styled";
import { getAllInvestments } from "../src/web3/getAllInvestments";
import StopStatus from "../src/components/statusNotification/stopStatus";
import WrongStatus from "../src/components/statusNotification/wrongStatus";
import InvestStatus from "../src/components/statusNotification/investStatus";
import Buidl1Header from "../src/components/buidl1Header";
import MobileFooter from "../src/components/mobileFooter";

const Buidl1 = () => {
  const loadedValuesState = useContext(LoadedValuesContext);
  const [wallets, setWallets] = useState<String[]>([""]);
  const [isShownStop, setIsShownStop] = useState(false);
  const [isShownWrong, setIsShownWrong] = useState(false);
  const [isShownInvest, setIsShownInvest] = useState(false);

  useEffect(() => {
    getAllInvestments().then((data: any) =>
      loadedValuesState.setAllInvestors((prev) => data.allInvestments)
    );
  }, [loadedValuesState.totalInvested._hex]);

  useEffect(() => {
    const uniqueInv = [
      ...Array.from(
        new Set(loadedValuesState?.allInvestors.map((item) => item.caller))
      ),
    ];
    setWallets((prev) => uniqueInv);
  }, [loadedValuesState.allInvestors]);

  return loadedValuesState.fundraisingStartDate !== "" ? (
    <>
      {!isShownStop || !isShownWrong || !isShownInvest ? (
        <BgImage isFixed />
      ) : (
        ""
      )}

      {/* <InvestStatus /> */}

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
        <Buidl1Header />
      )}

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
            wallets={wallets}
          />
          <FeaturesSec>
            <Calculator />
            <InvestorsBarChart wallets={wallets} />
          </FeaturesSec>
        </HideForMobile>
        <AboutSection wallets={wallets} />
      </Container>
      <MobileFooter />

      <FooterSection />
    </>
  ) : (
    <Spinner />
  );
};

export default Buidl1;

