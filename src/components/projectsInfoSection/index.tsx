import { useContext, useEffect } from "react";
import Web3Context from "../../context/web3Context";
import { TopText, BottomText, InfoSec, Line } from "./styled";

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
        <div style={{ height: "44.6px", display: "block" }} />
      ) : (
        <BottomText className="hideOnMobile">
          CONNECT YOUR WALLET TO GET STARTED
        </BottomText>
      )}

      <BottomText className="hideOnDesktop">
        CONNECT YOUR WALLET ON DESKTOP VERSION TO GET STARTED
      </BottomText>
    </InfoSec>
  );
}
