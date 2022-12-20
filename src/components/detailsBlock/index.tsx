import { ethers } from "ethers";
import { useContext } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import useCountdown from "../../hooks/useCountdown";
import { IInvestorsProps } from "../../interfaces/ICommonProps";
import {
  FlexItem,
  Property,
  Data,
  FlexItem1,
  DetailsBlockWrapper,
  DetailsContentWrapper,
  MobileDivider,
} from "./styled";

const DetailsBlock = ({ wallets, ...props }: IInvestorsProps) => {
  const {
    currency,
    milestones,
    currentMilestone,
    hardCap,
    isMilestoneOngoing,
    tokenCurrency,
  } = useContext(LoadedValuesContext);
  const { timerDays, timerHours, timerMinutes, timerSeconds } = useCountdown(
    milestones[milestones.length - 1].endDate
  );

  return (
    <DetailsBlockWrapper>
      <DetailsContentWrapper>
        <FlexItem>
          <FlexItem1>
            <Property className="bigger">Project State</Property>
            <Property className="medium">Milestones completed</Property>
            <Property className="medium">Participants</Property>
            <Property>Hard cap</Property>
            <Property>Project start</Property>
            <Property>Project ends</Property>
          </FlexItem1>
          <FlexItem1>
            <Data>Seed</Data>
            <Data>
              {isMilestoneOngoing ? (
                <>
                  {currentMilestone + 1}/{milestones.length}{" "}
                </>
              ) : (
                <>
                  {currentMilestone}/{milestones.length}{" "}
                </>
              )}
            </Data>

            <Data>
              {wallets[0] !== "" ? wallets?.length : 0}{" "}
              {wallets?.length === 1 && wallets[0] !== ""
                ? "wallet"
                : "wallets"}
            </Data>

            <Data>
              {ethers.utils.formatEther(hardCap)} {currency.label}
            </Data>

            <Data className="medium">{milestones[0].startDate}</Data>

            <Data className="smaller">
              {/* {timerDays}D {timerHours}H {timerMinutes}M {timerSeconds}S */}
              {milestones[9].endDate}
            </Data>
          </FlexItem1>
        </FlexItem>
        <MobileDivider />
        <FlexItem>
          <FlexItem1>
            <Property className="bigger">Token name</Property>
            <Property className="medium">Ticker</Property>
            <Property>Network</Property>
            <Property>Initial circulating supply</Property>
            <Property>Total token supply</Property>
            <Property>Token price</Property>
          </FlexItem1>
          <FlexItem1>
            <Data>{tokenCurrency.name}</Data>

            <Data>{tokenCurrency.label}</Data>

            <Data>Goerli Testnet</Data>

            <Data className="medium">53.20 %</Data>

            <Data className="smaller">150 000 000</Data>

            <Data className="smaller">-</Data>
          </FlexItem1>
        </FlexItem>
      </DetailsContentWrapper>
    </DetailsBlockWrapper>
  );
};

export default DetailsBlock;

