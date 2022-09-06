import { useState } from "react";
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
            <GreenButton onClick={() => setShowModal(true)}>Invest</GreenButton>{" "}
            <br />
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
