import AboutSection from "../src/components/aboutSection";
import ProgressSection from "../src/components/progressSection";
import { FeaturesSec } from "../src/components/featuredProjectsSection/styled";
import FundingBlock from "../src/components/fundingBlock";
import ProjectHeader from "../src/components/projectHeader";
import { BgImage, Container } from "../styles/Container";
import TimelineBlock from "../src/components/timelineBlock";
import FooterSection from "../src/components/footerSection";
import Image from "next/image";
import BuidlLogo from "../public/BuidlLogo2x.png";
import { LogoWrapper } from "../src/components/projectHeader/styled";
import Calculator from "../src/components/calculator";
import InvestorsBarChart from "../src/components/investorsBarChart";
import React, { useContext, useEffect, useState } from "react";
import LoadedValuesContext from "../src/context/loadedValuesContext";
import { Spinner } from "../src/components/navbar/styled";
import { getAllInvestments } from "../src/web3/getAllInvestments";

const Buidl1 = () => {
  const loadedValuesState = useContext(LoadedValuesContext);
  const [wallets, setWallets] = useState<String[]>([""]);
  

  useEffect(() => {
    getAllInvestments().then((data: any) =>
      loadedValuesState.setAllInvestors((prev) => data.allInvestments)
    );
  }, [loadedValuesState.totalInvested]);

  useEffect(() => {
    const uniqueInv = [
      ...Array.from(
        new Set(loadedValuesState.allInvestors.map((item) => item.caller))
      ),
    ];
    setWallets((prev) => uniqueInv);
  }, [loadedValuesState.allInvestors]);

  return loadedValuesState.fundraisingStartDate !== "" ? (
    <>
      <BgImage isFixed />
      <Container>
        <LogoWrapper>
          <Image src={BuidlLogo} />
        </LogoWrapper>
        <ProjectHeader
          text={"Project 1 - BUIDL 1 - Self raising capital"}
          stage={"STAGE 1"}
        />
        <FeaturesSec>
          <FundingBlock />
          <TimelineBlock />
        </FeaturesSec>
        <ProgressSection wallets={wallets} />
        <FeaturesSec>
          <Calculator />
          <InvestorsBarChart wallets={wallets} />
        </FeaturesSec>
        <AboutSection wallets={wallets} />
      </Container>

      <FooterSection />
    </>
  ) : (
    <Spinner />
  );
};

export default Buidl1;
