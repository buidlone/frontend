import { Web3Provider } from "@ethersproject/providers";
import { useContext, useEffect, useState } from "react";
import { Container } from "../../../styles/Container";
import LoadedValuesContext from "../../context/loadedValuesContext";
import Web3Context from "../../context/web3Context";
import { countDecimals } from "../../utils/countDecimals";
import { getIndividualInvestedAmount } from "../../web3/getIndividualInvestedAmount";
import { getInvestorRewards } from "../../web3/getInvestorRewards";
import { getVotingPower } from "../../web3/getVotingPower";
import ProjectState, { StatusColor } from "../projectState";
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
  const { currency, tokenCurrency } = useContext(LoadedValuesContext);
  const { web3Provider, address } = useContext(Web3Context);
  const [
    totalIndividualInvestedToProject,
    setTotalIndividualInvestedToProject,
  ] = useState<string>("0.0000");
  const [votingPower, setVotingPower] = useState<number>(0);
  const [investorRewards, setInvestorRewards] = useState<string>("0.0000");

  useEffect(() => {
    if (Web3Provider && address) {
      getIndividualInvestedAmount(web3Provider, address).then((data: any) => {
        setTotalIndividualInvestedToProject(
          data?.totalAmountInvested == "0.0"
            ? "0.0000"
            : data.totalAmountInvested
        );
      });

      getInvestorRewards(web3Provider, address).then((data: any) => {
        setInvestorRewards(data == "0.0" ? "0.0000" : data);
      });

      getVotingPower(web3Provider, address).then((data: any) => {
        setVotingPower(data);
      });
    } else {
      setTotalIndividualInvestedToProject("0.0000");
      setInvestorRewards("0.0000");
    }
  }, [web3Provider]);

  return (
    <>
      <BackgroundBlur>
        <Container>
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
              href="https://meetings-eu1.hubspot.com/matas-v/"
            >
              <p>BOOK A DEMO</p>
            </DemoButton>
            <HeaderInline>
              <PersonalInfo className="investment">
                Your investment:{" "}
                {Number(totalIndividualInvestedToProject) >= 0.0001 &&
                countDecimals(totalIndividualInvestedToProject) <= 4
                  ? totalIndividualInvestedToProject
                  : Number(totalIndividualInvestedToProject) >= 0.0001 &&
                    countDecimals(totalIndividualInvestedToProject) > 4
                  ? `≈ ${Number(totalIndividualInvestedToProject).toFixed(4)}`
                  : Number(totalIndividualInvestedToProject) < 0.0001 &&
                    Number(totalIndividualInvestedToProject) > 0
                  ? "≈ 0.0001"
                  : "0.0000"}{" "}
                {currency.label}
              </PersonalInfo>
              <PersonalInfo className="reward">
                Your reward:{" "}
                {Number(investorRewards) >= 0.0001 &&
                countDecimals(investorRewards) <= 4
                  ? totalIndividualInvestedToProject
                  : Number(investorRewards) >= 0.0001 &&
                    countDecimals(investorRewards) > 4
                  ? `≈ ${Number(investorRewards).toFixed(4)}`
                  : Number(investorRewards) < 0.0001 &&
                    Number(investorRewards) > 0
                  ? "≈ 0.0001"
                  : "0.0000"}{" "}
                {tokenCurrency.label}
              </PersonalInfo>
              <PersonalInfo className="impact">
                Voting power: {votingPower ? votingPower : 0}%
              </PersonalInfo>
            </HeaderInline>
            <RoundSectionMobile>
              <Round statusColor={StatusColor}>
                <ProjectState />
              </Round>
            </RoundSectionMobile>
            <div className="lastLine">Project overview</div>
          </HeaderSection>
        </Container>
      </BackgroundBlur>
      <Divider />
      <Container>
        <RoundSection>
          <Round statusColor={StatusColor}>
            <ProjectState />
          </Round>
        </RoundSection>
      </Container>
    </>
  );
};

export default Buidl1Header;

