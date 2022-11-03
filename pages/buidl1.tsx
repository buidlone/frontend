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
import { useContext, useState } from "react";
import LoadedValuesContext from "../src/context/loadedValuesContext";
import { Spinner } from "../src/components/navbar/styled";

const Buidl1 = () => {
  const loadedValuesState = useContext(LoadedValuesContext);

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
        <ProgressSection />
        <FeaturesSec>
          <Calculator />
          <InvestorsBarChart />
        </FeaturesSec>
        <AboutSection />
      </Container>

      <FooterSection />
    </>
  ) : (
    <Spinner />
  );
};

export default Buidl1;
