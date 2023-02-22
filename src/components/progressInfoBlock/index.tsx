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
import { useContext, useState } from "react";
import useCountdown from "../../hooks/useCountdown";
import Tooltip from "../tooltip";
import Web3Context from "../../context/web3Context";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { stopProject } from "../../web3/stopProject";
import { IInvestorsProps } from "../../interfaces/ICommonProps";
import { ethers } from "ethers";
import { roundPrecise } from "../../utils/roundValue";
import { useInvestors } from "../../hooks/useInvestmentHistory";
import InvestorValuesContext from "../../context/investorContext";
import useIsStopAllowed from "../../hooks/useIsStopAllowed";

const ProgressInfoBlock = ({
  setIsShownStop,
  setIsShownWrong,
  ...props
}: IInvestorsProps) => {
  const { web3Provider, address } = useContext(Web3Context);

  const {
    totalInvested,
    currency,
    milestones,
    currentMilestone,
    tokensReserved,
    tokenCurrency,
    fundsUsedByCreator,
    totalPercentageAgainst,
  } = useContext(LoadedValuesContext);
  const { timerDays, timerHours, timerMinutes, timerSeconds, isExpired } =
    useCountdown(milestones[milestones.length - 1].endTime);
  const isStopAllowed = useIsStopAllowed();
  const [over, setOver] = useState(0);
  const { wallets } = useInvestors();
  const {
    investorValues: { projectInvestments },
  } = useContext(InvestorValuesContext);

  const handleStop = async () => {
    if (web3Provider && projectInvestments) {
      const stopped = await stopProject(
        web3Provider,
        address,
        projectInvestments.unusedActiveVotes[currentMilestone]
      );
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
        <Property>Voted against</Property>
        <Property>Project timeline</Property>
      </DetailsInfoWrapper>

      <DetailsInfoWrapper>
        <Data>
          {roundPrecise(ethers.utils.formatEther(totalInvested)).replace(
            /,/g,
            " "
          )}{" "}
          {currency.label}
        </Data>

        <Data>
          {currentMilestone}/{milestones.length}
        </Data>

        <Data>
          {wallets} {wallets === 1 ? "wallet" : "wallets"}
        </Data>

        <Data>
          {roundPrecise(fundsUsedByCreator).replace(/,/g, " ")} {currency.label}
        </Data>

        <Data>
          {roundPrecise(ethers.utils.formatEther(tokensReserved)).replace(
            /,/g,
            " "
          )}{" "}
          {tokenCurrency.label}
        </Data>

        <Data className="votes">
          {totalPercentageAgainst ? Math.round(totalPercentageAgainst) : 0}%
        </Data>

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
                {projectInvestments ? projectInvestments.votingPower : 0}%
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
          <OrangeButton disabled={!isStopAllowed} onClick={handleStop}>
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
