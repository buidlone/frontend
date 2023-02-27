import { useContext, useEffect } from "react";
import Web3Context from "../../context/web3Context";

import { TopText, BottomText, InfoSec, Line, DemoButton } from "./styled";

interface Iheader {
  text?: string;
  mainText?: string;
  moto?: string;
}

export default function ProjectsInfoSection({
  text,
  mainText,
  moto,
  ...props
}: Iheader) {
  const { web3Provider, address } = useContext(Web3Context);

  return (
    <InfoSec>
      <TopText>{text}</TopText>

      <Line />
      {web3Provider && address ? (
        <div style={{ height: "43px", display: "block" }} />
      ) : (
        <BottomText className="hideOnMobile">
          CONNECT YOUR WALLET TO GET STARTED
        </BottomText>
      )}
      <DemoButton target="_blank" href="https://calendly.com/buidl1/30min">
        <p>Book a Demo</p>
      </DemoButton>
      <BottomText className="hideOnDesktop">
        CONNECT YOUR WALLET ON DESKTOP VERSION TO GET STARTED
      </BottomText>
    </InfoSec>
  );
}
