import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  const handleClick = () => {
    web3Provider && setShowModal(true);
  };

  const handleConnectClick = async () => {
    if (connect) {
      const isConnected = await connect();
      console.log(isConnected);
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
            softCap={"34 000"}
            hardCap={"34 000"}
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
