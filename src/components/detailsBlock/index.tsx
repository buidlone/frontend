import { Web3Provider } from "@ethersproject/providers";
import { useContext, useEffect, useState } from "react";
import ProjectContext from "../../context/projectContext";
import Web3Context from "../../context/web3Context";
import useCountdown from "../../hooks/useCountdown";
import { getTotalInvested } from "../../web3/getTotalInvested";
import {
  FlexItem,
  Property,
  Data,
  FlexItem1,
  DetailsBlockWrapper,
  DetailsContentWrapper,
} from "./styled";

export const featuredProject = {
  raised: "1245 ETH",
  milestones: "12/32",
  participants: "234 wallets",
  funds: "23452/324234 USDT",
  tokens: "4 000 000 DPP",
  end: "23D 03H 30M 23S",
};

const DetailsBlock = () => {
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
    <DetailsBlockWrapper>
      <DetailsContentWrapper>
        <FlexItem>
          <FlexItem1>
            <Property className="bigger">Raised</Property>
            <Property className="medium">Milestones completed</Property>
            <Property className="medium">Participants</Property>
            <Property>Funds released</Property>
            <Property>Tokens reserved</Property>
            <Property>Project ends in</Property>
          </FlexItem1>
          <FlexItem1>
            <Data>{totalRaised} ETH</Data>

            <Data>
              {featuredProject?.milestonesCompleted}/
              {featuredProject?.milestones}
            </Data>

            <Data>{featuredProject?.participants} wallets</Data>

            <Data className="medium">
              {featuredProject?.fundsReleased
                ?.toLocaleString()
                .replace(/,/g, " ")}{" "}
              / {featuredProject?.funds?.toLocaleString().replace(/,/g, " ")}{" "}
              USDT
            </Data>

            <Data className="smaller">
              {featuredProject?.tokensReserved
                ?.toLocaleString()
                .replace(/,/g, " ")}{" "}
              DPP
            </Data>

            <Data className="blue smaller">
              {timerDays}D {timerHours}H {timerMinutes}M {timerSeconds}S
            </Data>
          </FlexItem1>
        </FlexItem>

        <FlexItem>
          <FlexItem1>
            <Property className="bigger">Raised</Property>
            <Property className="medium">Milestones completed</Property>
            <Property className="medium">Participants</Property>
            <Property>Funds released</Property>
            <Property>Tokens reserved</Property>
            <Property>Project ends in</Property>
          </FlexItem1>
          <FlexItem1>
            <Data>{totalRaised} ETH</Data>

            <Data>
              {featuredProject?.milestonesCompleted}/
              {featuredProject?.milestones}
            </Data>

            <Data>{featuredProject?.participants} wallets</Data>

            <Data className="medium">
              {featuredProject?.fundsReleased
                ?.toLocaleString()
                .replace(/,/g, " ")}{" "}
              / {featuredProject?.funds?.toLocaleString().replace(/,/g, " ")}{" "}
              USDT
            </Data>

            <Data className="smaller">
              {featuredProject?.tokensReserved
                ?.toLocaleString()
                .replace(/,/g, " ")}{" "}
              DPP
            </Data>

            <Data className="blue smaller">
              {timerDays}D {timerHours}H {timerMinutes}M {timerSeconds}S
            </Data>
          </FlexItem1>
        </FlexItem>
      </DetailsContentWrapper>
    </DetailsBlockWrapper>
  );
};

export default DetailsBlock;
