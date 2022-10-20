import { useContext } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import ProjectContext from "../../context/projectContext";
import useCountdown from "../../hooks/useCountdown";
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
  const { totalInvested, currency, milestones } =
    useContext(LoadedValuesContext);
  const { timerDays, timerHours, timerMinutes, timerSeconds, isExpired } =
    useCountdown(milestones[milestones.length - 1].endDate);

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
            <Data>
              {totalInvested} {currency.label}
            </Data>

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
              {currency.label}
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
            <Data>
              {totalInvested} {currency.label}
            </Data>

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
              {currency.label}
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
