import { ReactElement, useContext } from "react";
import { FeaturesSec } from "../src/components/featuredProjectsSection/styled";
import DemoCalculator from "../src/demo/components/demoCalculator";
import { DemoFeaturesSec } from "../src/demo/components/demoEnvironment.tsx/styled";
import DemoFundingBlock from "../src/demo/components/demoFundingBlock";
import DemoHeader from "../src/demo/components/demoHeader";
import DemoInvestorsBarchart from "../src/demo/components/demoInvestorsBarChart";
import DemoProgressSection from "../src/demo/components/demoProgressSection";
import DemoProjectInfoBlock from "../src/demo/components/demoProjectInfoBlock";
import DemoTimelineBlock from "../src/demo/components/demoTimelineBlock";
import { DemoMockDataContextProdvider } from "../src/demo/context/demoMockDataContext";
import { DemoTaskContextProdvider } from "../src/demo/context/demoTaskContext";
import { useTaskChange } from "../src/demo/hooks/useTaskChange";
import { BgImage, Container, HideForMobile } from "../styles/Container";

import { NextPageWithLayout } from "./_app";

const DemoPage: NextPageWithLayout = () => {
  useTaskChange();
  return (
    <HideForMobile>
      <BgImage isFixed />
      <DemoHeader />
      <Container>
        <DemoFeaturesSec>
          <DemoProjectInfoBlock />
        </DemoFeaturesSec>
        <DemoFeaturesSec>
          <DemoCalculator />
          <DemoInvestorsBarchart />
        </DemoFeaturesSec>
        <DemoFeaturesSec>
          <DemoFundingBlock />
          <DemoTimelineBlock />
        </DemoFeaturesSec>
        <DemoFeaturesSec className="last">
          <DemoProgressSection />
        </DemoFeaturesSec>
      </Container>
    </HideForMobile>
  );
};

export default DemoPage;

DemoPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <DemoMockDataContextProdvider>
        <DemoTaskContextProdvider>{page}</DemoTaskContextProdvider>
      </DemoMockDataContextProdvider>
    </>
  );
};
