import { HideForDesktop, HideForMobile } from "../../../styles/Container";
import { DisclaimerWrapper } from "./styled";

const Disclaimer = ({ hideMobile }: any) => {
  if (hideMobile) {
    return (
      <HideForMobile>
        <DisclaimerWrapper>
          &#9888; This page is not yet working for mainnet. This is just a
          representation of future functionality for mainnet.
        </DisclaimerWrapper>
      </HideForMobile>
    );
  } else {
    return (
      <HideForDesktop>
        <DisclaimerWrapper>
          &#9888; This page is not yet working for mainnet. This is just a
          representation of future functionality for mainnet.
        </DisclaimerWrapper>
      </HideForDesktop>
    );
  }
};

export default Disclaimer;

