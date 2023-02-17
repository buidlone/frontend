import { ethers } from "ethers";
import { useContext } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { useInvestors } from "../../hooks/useInvestmentHistory";
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

const DetailsBlock = () => {
  const {
    currency,
    milestones,
    currentMilestone,
    hardCap,

    tokenCurrency,
  } = useContext(LoadedValuesContext);
  const { wallets } = useInvestors();

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
              {currentMilestone}/{milestones.length}
            </Data>

            <Data>
              {wallets} {wallets === 1 ? "wallet" : "wallets"}
            </Data>

            <Data>
              {ethers.utils.formatEther(hardCap)} {currency.label}
            </Data>

            <Data className="medium">{milestones[0].startTime}</Data>

            <Data className="smaller">
              {milestones[milestones.length - 1].endTime}
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
