import { Property, Data } from "../detailsBlock/styled";
import {
  BottomBlock,
  DetailsCard,
  DetailsInfoWrapper,
  GreyLine,
  InlineBlock,
  OrangeButton,
  VotingWrapper,
} from "./styled";
import Image from "next/image";
import infoBubble from "../../../public/info_bubble.svg";
import infoBubbleWhite from "../../../public/info_bubble_white.svg";
import DiscordImg from "../../../public/DiscordSmall.png";
import OrangeLock from "../../../public/yellow_lock.svg";
import { TableLink } from "../activeBlock/styled";
import { useContext, useEffect, useState } from "react";
import ProjectContext from "../../context/projectContext";
import useCountdown from "../../hooks/useCountdown";
import Tooltip from "../tooltip";
import Web3Context from "../../context/web3Context";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { stopProject } from "../../web3/stopProject";
import { isStopAllowed } from "../../web3/isStopAllowed";
import { IInvestorsProps } from "../../interfaces/ICommonProps";
import { ethers } from "ethers";
import { getVotingPower } from "../../web3/getVotingPower";
import { getVotedAgainst } from "../../web3/getVotedAgainst";

const ProgressInfoBlock = ({
  wallets,
  setIsShownStop,
  setIsShownWrong,
  ...props
}: IInvestorsProps) => {
  const { web3Provider, address } = useContext(Web3Context);
  const [votingPower, setVotingPower] = useState(0);
  const {
    totalInvested,
    currency,
    milestones,
    currentMilestone,
    projectState,
    isMilestoneOngoing,
    tokensReserved,
    tokenCurrency,
    fundsUsedByCreator,
  } = useContext(LoadedValuesContext);
  const { timerDays, timerHours, timerMinutes, timerSeconds, isExpired } =
    useCountdown(milestones[milestones.length - 1].endDate);
  const [votedAgainst, setVotedAgainst] = useState<number | undefined>(0);
  const [stopDisabled, setStopDisabled] = useState(false);
  const [over, setOver] = useState(0);

  useEffect(() => {
    isStopAllowed(projectState, currentMilestone, address, web3Provider).then(
      (data: any) => {
        setStopDisabled(data);
      }
    );
    if (web3Provider) {
      setStopDisabled(false);
    } else {
      setStopDisabled(true);
    }
  }, [web3Provider, totalInvested._hex]);

  const handleStop = async () => {
    if (web3Provider) {
      const stopped = await stopProject(web3Provider, address);
      if (stopped === true) {
        setIsShownStop(true);
      } else if (stopped === false) setIsShownWrong(true);
    }
  };

  useEffect(() => {
    getVotedAgainst().then((data: any) => {
      setVotedAgainst(data);
    });
    if (web3Provider) {
      getVotingPower(web3Provider, address).then((data: any) => {
        setVotingPower(data);
      });
    }
  }, [totalInvested._hex]);

  return (
    <DetailsCard>
      <DetailsInfoWrapper>
        <Property>Raised</Property>
        <Property>Milestones completed</Property>
        <Property>Participants</Property>
        <Property>Funds used</Property>
        <Property>Tokens reserved</Property>
        <Property>Voted against</Property>
        <Property>Project timeline</Property>
      </DetailsInfoWrapper>

      <DetailsInfoWrapper>
        <Data>
          {ethers.utils.formatEther(totalInvested)} {currency.label}
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
          {fundsUsedByCreator.replace(/,/g, " ")} {currency.label}
        </Data>

        <Data>
          {tokensReserved.replace(/,/g, " ")} {tokenCurrency.label}
        </Data>

        <Data className="votes">{votedAgainst}%</Data>

        <Data>
          {timerDays}D {timerHours}H {timerMinutes}M {timerSeconds}S
        </Data>
      </DetailsInfoWrapper>

      <GreyLine />
      <BottomBlock>
        <InlineBlock>
          <VotingWrapper>
            <Image
              src={OrangeLock}
              alt={"Locked lock"}
              height={"20px"}
              width={"20px"}
            />

            <div>
              Your word has{" "}
              <span className="votingPower">
                {votingPower ? votingPower : 0}%
              </span>{" "}
              power
            </div>

            <div onMouseOver={() => setOver(1)} onMouseOut={() => setOver(0)}>
              <Tooltip
                text={`Voting power represents how much your vote have impact in stoping the funding process. If 51% investors votes to "STOP cash flow", investments will refunded and project will be terminated irreversible`}
              >
                <Image
                  src={over === 1 ? infoBubble : infoBubbleWhite}
                  alt="information"
                  height={"18px"}
                  width={"18px"}
                />
              </Tooltip>
            </div>
          </VotingWrapper>
          <OrangeButton disabled={stopDisabled} onClick={handleStop}>
            STOP cash flow
          </OrangeButton>
        </InlineBlock>
        <InlineBlock>
          <Image
            src={DiscordImg}
            alt={"Discord logo"}
            height={"26px"}
            width={"26px"}
          />
          <TableLink
            href="https://discord.com/channels/998519974714941480/998519974714941483"
            target="_blank"
          >
            Project discussion
          </TableLink>
        </InlineBlock>
      </BottomBlock>
    </DetailsCard>
  );
};

export default ProgressInfoBlock;

