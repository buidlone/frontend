import { Property, Data } from "../detailsBlock/styled";
import {
  BottomPartWrapper,
  BottomWrapper,
  DetailsCard,
  DetailsInfoWrapper,
  GreyLine,
  InfoIconKeys,
  KeysWrapper,
  OrangeButton,
} from "./styled";
import Image from "next/image";
import DiscordImg from "../../../public/DiscordSmall.png";
import OrangeLock from "../../../public/OrangeLock.svg";
import { TableLink } from "../activeBlock/styled";
import { useContext, useEffect, useState } from "react";
import ProjectContext from "../../context/projectContext";
import useCountdown from "../../hooks/useCountdown";
import Tooltip from "../tooltip";
import Web3Context from "../../context/web3Context";
import { Web3Provider } from "@ethersproject/providers";
import { getTotalInvested } from "../../web3/getTotalInvested";

const ProgressInfoBlock = () => {
  const featuredProject = useContext(ProjectContext);
  const { timerDays, timerHours, timerMinutes, timerSeconds, isExpired } =
    useCountdown(featuredProject?.end);
  const { web3Provider, address } = useContext(Web3Context);
  const [totalRaised, setTotalRaised] = useState<String | undefined>(undefined);

  useEffect(() => {
    if (Web3Provider) {
      getTotalInvested(web3Provider, address).then((data) => {
        setTotalRaised(data?.totalInvested);
      });
    }
  }, [web3Provider]);

  return (
    <DetailsCard>
      <DetailsInfoWrapper>
        <Property>Raised</Property>
        <Property>Milestones completed</Property>
        <Property>Participants</Property>
        <Property>Funds released</Property>
        <Property>Tokens reserved</Property>
        <Property>Project ends in</Property>
      </DetailsInfoWrapper>

      <DetailsInfoWrapper>
        <Data>{totalRaised} ETH</Data>

        <Data>
          {featuredProject?.milestonesCompleted}/{featuredProject?.milestones}
        </Data>

        <Data>{featuredProject?.participants} wallets</Data>

        <Data>
          {featuredProject?.fundsReleased?.toLocaleString().replace(/,/g, " ")}{" "}
          / {featuredProject?.funds?.toLocaleString().replace(/,/g, " ")} USDT
        </Data>

        <Data>
          {featuredProject?.tokensReserved?.toLocaleString().replace(/,/g, " ")}{" "}
          DPP
        </Data>

        <Data>
          {timerDays}D {timerHours}H {timerMinutes}M {timerSeconds}S
        </Data>
      </DetailsInfoWrapper>
      <GreyLine />
      <BottomWrapper>
        <BottomPartWrapper>
          <KeysWrapper>
            <Image
              src={OrangeLock}
              alt={"Locked lock"}
              height={"26px"}
              width={"26px"}
            />
            <div>Keys activated</div>
            <div> 0 / 1223</div>

            <Tooltip text={"Information about the keys"}>
              <InfoIconKeys />
            </Tooltip>
          </KeysWrapper>
          <KeysWrapper>
            <Image
              src={DiscordImg}
              alt={"Discord logo"}
              height={"26px"}
              width={"26px"}
            />
            <TableLink>Project discussion</TableLink>
          </KeysWrapper>
        </BottomPartWrapper>
        <BottomPartWrapper className="centerItems">
          <OrangeButton>STOP</OrangeButton>
          <TableLink>Trust us? Try burning the ticket</TableLink>
        </BottomPartWrapper>
      </BottomWrapper>
    </DetailsCard>
  );
};

export default ProgressInfoBlock;
