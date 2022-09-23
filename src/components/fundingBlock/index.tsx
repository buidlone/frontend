import { useContext, useState } from "react";
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
  const { web3Provider } = useContext(Web3Context);

  const handleClick = () => {
    web3Provider?.network.chainId === 1 || web3Provider?.network.chainId === 5
      ? setShowModal(true)
      : toast.error(
          "Please connect to Your wallet and choose Ethereum Mainnet or Goerli Testnet network"
        );
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
            <GreenButton onClick={handleClick}>Invest</GreenButton> <br />
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
