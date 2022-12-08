import { Web3Provider } from "@ethersproject/providers";
import { useContext, useEffect, useState } from "react";
import { Container } from "../../../styles/Container";
import LoadedValuesContext from "../../context/loadedValuesContext";
import Web3Context from "../../context/web3Context";
import { getIndividualInvestedAmount } from "../../web3/getIndividualInvestedAmount";
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
} from "./styled";

const Buidl1Header = () => {
  const { currency } = useContext(LoadedValuesContext);
  const { web3Provider, address } = useContext(Web3Context);
  const [
    totalIndividualInvestedToProject,
    setTotalIndividualInvestedToProject,
  ] = useState<string>("0.0000");

  useEffect(() => {
    if (Web3Provider && address) {
      getIndividualInvestedAmount(web3Provider, address).then((data: any) => {
        setTotalIndividualInvestedToProject(
          data?.totalAmountInvested == "0.0"
            ? "0.0000"
            : data.totalAmountInvested
        );
      });
    } else {
      setTotalIndividualInvestedToProject("0.0000");
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
            <HeaderInline>
              <PersonalInfo className="investment">
                Your investment: {totalIndividualInvestedToProject}{" "}
                {currency.label}
              </PersonalInfo>
              <PersonalInfo className="reward">
                Your reward: 0.0000 {currency.label}
              </PersonalInfo>
              <PersonalInfo className="impact">Your impact 0.00 %</PersonalInfo>
            </HeaderInline>
            <div className="lastLine">Project overview</div>
          </HeaderSection>
        </Container>
      </BackgroundBlur>
      <Divider />
      <Container>
        <RoundSection>
          <Round>Active - Private Round</Round>
        </RoundSection>
      </Container>
    </>
  );
};

export default Buidl1Header;
