import { useContext } from "react";
import { Container } from "../../../styles/Container";
import InvestorValuesContext from "../../context/investorContext";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { roundApprox } from "../../utils/roundValue";
import Disclaimer from "../disclaimer";
import { DesktopDisclaimerContainer } from "../disclaimer/styled";
import ProjectStateLabel, { StatusColor } from "../projectState";

import {
  HeaderInfo,
  HeaderLabel,
  HeaderInline,
  HeaderSection,
  Round,
  RoundSection,
  PersonalInfo,
  Divider,
  BackgroundBlur,
  RoundSectionMobile,
  DemoButton,
} from "./styled";

const Buidl1Header = () => {
  const { currency, tokenCurrency, projectState } =
    useContext(LoadedValuesContext);

  const {
    investorValues: { projectInvestments },
  } = useContext(InvestorValuesContext);

  return (
    <>
      <BackgroundBlur>
        <Container>
          <DesktopDisclaimerContainer>
            <Disclaimer hideMobile={true} />
          </DesktopDisclaimerContainer>
          <HeaderSection>
            <HeaderLabel>Buidl1 - LCF protocol</HeaderLabel>
            <HeaderInfo>
              In order to help investors choose and connect with upcoming
              projects - BUIDL1 has to build itself up and earn trust from new
              partnered projects. In order to achieve these goals, we aim to be
              transparent and provide reliable services, in hopes to create a
              prospering and supportive community.
            </HeaderInfo>
            <DemoButton
              target="_blank"
              href="https://calendly.com/buidl1/30min"
            >
              <p>BOOK A DEMO</p>
            </DemoButton>
            <HeaderInline>
              <PersonalInfo className="investment">
                Your investment:{" "}
                {projectInvestments
                  ? roundApprox(projectInvestments.totalInvestedAmount)
                  : "0.0000"}{" "}
                {currency.label}
              </PersonalInfo>
              <PersonalInfo className="reward">
                Your reward:{" "}
                {projectInvestments
                  ? roundApprox(projectInvestments.allocatedProjectTokens)
                  : "0.0000"}{" "}
                {tokenCurrency.label}
              </PersonalInfo>
              <PersonalInfo className="impact">
                Voting power:{" "}
                {projectInvestments ? projectInvestments.votingPower : 0} %
              </PersonalInfo>
            </HeaderInline>
            <RoundSectionMobile>
              <Round statusColor={StatusColor({ projectState })}>
                <ProjectStateLabel projectState={projectState} />
              </Round>
            </RoundSectionMobile>
            <div className="lastLine">Project overview</div>
          </HeaderSection>
        </Container>
      </BackgroundBlur>
      <Divider />
      <Container>
        <RoundSection>
          <Round statusColor={StatusColor({ projectState })}>
            <ProjectStateLabel projectState={projectState} />
          </Round>
        </RoundSection>
      </Container>
    </>
  );
};

export default Buidl1Header;
