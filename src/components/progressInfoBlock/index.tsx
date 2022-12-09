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

const ProgressInfoBlock = ({
  wallets,
  setIsShownStop,
  setIsShownWrong,
  ...props
}: IInvestorsProps) => {
  const featuredProject = useContext(ProjectContext);

  const { web3Provider, address } = useContext(Web3Context);

  // TODO: get voting power
  const [votingPower, setVotingPower] = useState(0);
  // TODO: get totalFundsForCuttingVotes
  const [totalFundsForCuttingVotes, setTotalFundsForCuttingVotes] = useState(0);
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
  const [over, setOver] = useState(0);

  useEffect(() => {
    if (web3Provider && web3Provider?.network.chainId === 5) {
      // TODO: get voting power
      // TODO: get totalFundsForCuttingVotes
      setVotingPower(15);
      setTotalFundsForCuttingVotes(7);
    } else {
      setVotingPower(0);
      setTotalFundsForCuttingVotes(0);
    }
  }, [web3Provider, totalInvested._hex]);

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
        <Property>Funds used</Property>
        <Property>Tokens reserved</Property>
        <Property>Total votes for cutting funds</Property>
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
          {featuredProject?.fundsReleased?.toLocaleString().replace(/,/g, " ")}{" "}
          / {featuredProject?.funds?.toLocaleString().replace(/,/g, " ")}{" "}
          {currency.label}
        </Data>

        <Data>
          {featuredProject?.tokensReserved?.toLocaleString().replace(/,/g, " ")}{" "}
          DPP
        </Data>

        <Data className="votes">{totalFundsForCuttingVotes}%</Data>

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
              Your word have <span className="votingPower">{votingPower}%</span>{" "}
              impact
            </div>

            <div onMouseOver={() => setOver(1)} onMouseOut={() => setOver(0)}>
              <Tooltip nowrap text={"Information about voting"}>
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
          <TableLink>Project discussion</TableLink>
        </InlineBlock>
      </BottomBlock>
    </DetailsCard>
  );
};

export default ProgressInfoBlock;
