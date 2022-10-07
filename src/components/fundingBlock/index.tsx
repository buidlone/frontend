import React, { useContext, useState } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import Web3Context from "../../context/web3Context";
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

export default function FundingBlock() {
  const [showModal, setShowModal] = useState(false);
  const { web3Provider, connect } = useContext(Web3Context);
  const { hardCap } = useContext(LoadedValuesContext);
  const { softCap } = useContext(LoadedValuesContext);
  const { totalInvested } = useContext(LoadedValuesContext);

  const handleClick = () => {
    web3Provider && setShowModal(true);
  };

  const handleConnectClick = async () => {
    if (connect) {
      const isConnected = await connect();
      typeof isConnected !== "boolean" && setShowModal(true);
    }
  };

  return (
    <>
      <BlockWrapper>
        <Title>Funding</Title>
        <FContainer>
          <FundingRoadmap
            seed={"34 000"}
            hardCap={hardCap}
            softCap={softCap}
            totalInvested={totalInvested}
          />
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

            <Modal show={showModal}>
              <InvestModal onClose={() => setShowModal(false)} />
            </Modal>
            <StyledA>Learn about ROI and how it works</StyledA>
          </BottomWrapper>
        </FContainer>
      </BlockWrapper>
    </>
  );
}
