import FundingRoadmap from "../fundingRoadmap";
import {
  BlockWrapper,
  BottomWrapper,
  GreenButton,
  StyledA,
  Title,
} from "./styled";

export default function FundingBlock() {
  return (
    <>
      <BlockWrapper>
        <Title>Funding</Title>
        <div
          style={{ display: "block", marginTop: "22%", marginBottom: "auto" }}
        >
          <FundingRoadmap
            seed={"34 000"}
            softCap={"34 000"}
            hardCap={"34 000"}
          />
        </div>
        <BottomWrapper>
          <GreenButton>Invest</GreenButton> <br />
          <StyledA>Learn about ROI and how it works</StyledA>
        </BottomWrapper>
      </BlockWrapper>
    </>
  );
}
