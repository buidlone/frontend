import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { HideForDesktop, HideForMobile } from "../../../styles/Container";
import LoadedValuesContext from "../../context/loadedValuesContext";
import Web3Context from "../../context/web3Context";
import { getProjectState } from "../../utils/getProjectState";
import { isInvestingAllowed } from "../../web3/isInvestingAllowed";
import FundingRoadmap from "../fundingRoadmap";
import InvestModal from "../investModal";
import Modal from "../modal";
import {
  BlockWrapper,
  BottomWrapper,
  FContainer,
  GreenButton,
  StyledA,
  Title,
} from "./styled";

export default function FundingBlock({
  setIsShownInvest,
  setIsShownWrong,
}: any) {
  const [showModal, setShowModal] = useState(false);
  const { web3Provider, connect } = useContext(Web3Context);
  const { projectState, totalInvested, hardCap } =
    useContext(LoadedValuesContext);

  const handleClick = () => {
    const isAllowed = isInvestingAllowed(projectState, hardCap, totalInvested);
    if (isAllowed) {
      web3Provider && setShowModal(true);
    } else {
      toast.info(getProjectState(projectState));
    }
  };

  const handleConnectClick = async () => {
    const isAllowed = isInvestingAllowed(projectState, hardCap, totalInvested);
    if (isAllowed) {
      if (connect) {
        const isConnected = await connect();
        typeof isConnected !== "boolean" && setShowModal(true);
      }
    } else {
      toast.info(getProjectState(projectState));
    }
  };

  return (
    <>
      <BlockWrapper>
        <Title>Funding</Title>
        <FContainer>
          <FundingRoadmap />
          <HideForMobile>
            <BottomWrapper>
              <StyledA
                href="https://docs.buidl.one/whitepaper/how-it-works"
                target="_blank"
              >
                Learn about Investment process
              </StyledA>
              {web3Provider ? (
                <>
                  <GreenButton onClick={handleClick}>Invest</GreenButton> <br />
                </>
              ) : (
                <>
                  <GreenButton onClick={handleConnectClick}>Invest</GreenButton>{" "}
                  <br />
                </>
              )}

              <Modal show={showModal}>
                <InvestModal
                  setIsShownInvest={setIsShownInvest}
                  setIsShownWrong={setIsShownWrong}
                  onClose={() => setShowModal(false)}
                />
              </Modal>
            </BottomWrapper>
          </HideForMobile>

          <HideForDesktop>
            <BottomWrapper>
              {web3Provider ? (
                <>
                  <GreenButton onClick={handleClick}>Invest</GreenButton> <br />
                </>
              ) : (
                <>
                  <GreenButton onClick={handleConnectClick}>Invest</GreenButton>{" "}
                  <br />
                </>
              )}

              <StyledA
                href="https://docs.buidl.one/whitepaper/how-it-works"
                target="_blank"
              >
                Learn about Investment process
              </StyledA>
            </BottomWrapper>
          </HideForDesktop>
        </FContainer>
      </BlockWrapper>
    </>
  );
}

