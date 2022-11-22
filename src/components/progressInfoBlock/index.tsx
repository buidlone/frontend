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
import { stopProject } from "../../web3/stopProject";
import { isStopAllowed } from "../../web3/isStopAllowed";
import { IInvestorsProps } from "../../interfaces/ICommonProps";

const ProgressInfoBlock = ({
  wallets,
  setIsShownStop,
  setIsShownWrong,
  ...props
}: IInvestorsProps) => {
  const featuredProject = useContext(ProjectContext);

  const { web3Provider, address } = useContext(Web3Context);
  const [votingTokensSupply, setVotingTokensSupply] = useState<
    number | undefined
  >(undefined);
  const [votingTokenBalance, setVotingTokenBalance] = useState<
    number | undefined
  >(undefined);
  const {
    totalInvested,
    currency,
    milestones,
    currentMilestone,
    projectState,
  } = useContext(LoadedValuesContext);
  const { timerDays, timerHours, timerMinutes, timerSeconds, isExpired } =
    useCountdown(milestones[milestones.length - 1].endDate);
  const [stopDisabled, setStopDisabled] = useState(false);

  useEffect(() => {
    if (web3Provider && web3Provider?.network.chainId === 5) {
      getVotingTokens(web3Provider, address).then((data) => {
        setVotingTokensSupply(data?.votingTokensSupply);
        setVotingTokenBalance(data?.votingTokenBalance);
      });
    }
  }, [web3Provider, totalInvested]);

  useEffect(() => {
    setStopDisabled(
      isStopAllowed(projectState, currentMilestone, address, web3Provider)
    );
    if (web3Provider) {
      setStopDisabled(false);
    } else {
      setStopDisabled(true);
    }
  }, [web3Provider]);

  const handleStop = async () => {
    if (web3Provider) {
      const stopped = await stopProject(web3Provider, address);
      if (stopped === true) {
        setIsShownStop(true);
      } else if (stopped === false) setIsShownWrong(true);
    }
  };

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
        <Data>
          {totalInvested} {currency.label}
        </Data>

        <Data>
          {currentMilestone}/{milestones.length}
        </Data>

        <Data>
          {" "}
          {wallets[0] !== "" ? wallets?.length : 0}{" "}
          {wallets?.length === 1 && wallets[0] !== "" ? "wallet" : "wallets"}
        </Data>

        <Data>
          {featuredProject?.fundsReleased?.toLocaleString().replace(/,/g, " ")}{" "}
          / {featuredProject?.funds?.toLocaleString().replace(/,/g, " ")}{" "}
          {currency.label}
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
          <OrangeButton disabled={stopDisabled} onClick={handleStop}>
            STOP
          </OrangeButton>
          <TableLink>Trust us? Try burning the ticket</TableLink>
        </BottomPartWrapper>
      </BottomWrapper>
    </DetailsCard>
  );
};

export default ProgressInfoBlock;
