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
import { getVotingTokens } from "../../web3/getVotingTokens";
import Web3Context from "../../context/web3Context";
import LoadedValuesContext from "../../context/loadedValuesContext";

const ProgressInfoBlock = () => {
  const featuredProject = useContext(ProjectContext);
  const { timerDays, timerHours, timerMinutes, timerSeconds, isExpired } =
    useCountdown(featuredProject?.end);
  const { web3Provider, address } = useContext(Web3Context);
  const [votingTokensSupply, setVotingTokensSupply] = useState<
    number | undefined
  >(undefined);
  const [votingTokenBalance, setVotingTokenBalance] = useState<
    number | undefined
  >(undefined);
  const { totalInvested } = useContext(LoadedValuesContext);

  useEffect(() => {
    if (web3Provider && web3Provider?.network.chainId === 5) {
      getVotingTokens(web3Provider, address).then((data) => {
        setVotingTokensSupply(data?.votingTokensSupply);
        setVotingTokenBalance(data?.votingTokenBalance);
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
        <Data>{totalInvested} ETH</Data>

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

            {web3Provider &&
            votingTokenBalance !== undefined &&
            votingTokensSupply !== undefined ? (
              <>
                <div>Keys activated</div>
                <div>
                  {" "}
                  {votingTokenBalance} / {votingTokensSupply}
                </div>
                <Tooltip text={"Information about the keys"}>
                  <InfoIconKeys />
                </Tooltip>
              </>
            ) : (
              <div>Connect to Goerli testnet to view the keys</div>
            )}
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
