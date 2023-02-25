import Image from "next/image";
import {
  CalculationWrapper,
  CalculatorBlock,
  CalculatorContainer,
  InputField,
  PBContainer,
  PBWrapper,
  Positioning,
  SelectWrapper,
  VotingItem,
  VotingRow,
  VotingWrapper,
} from "../../../components/calculator/styled";
import { InlineWrapper } from "../../../components/timelineBlock/styled";
import Tooltip from "../../../components/tooltip";
import infoBubbleWhite from "../../../../public/info_bubble_white.svg";
import Slider from "../../../components/slider";
import { KeyboardEvent, useContext, useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { GreenButton } from "../../../components/fundingBlock/styled";
import {
  DemoBalance,
  DemoCalculatorBlock,
  DemoGreenButton,
  DemoInputField,
  DemoSelectWrapper,
  MaxButton,
} from "./styled";
import DemoMockDataContext from "../../context/demoMockDataContext";
import DemoTaskContext from "../../context/demoTaskContext";

const DemoCalculator = () => {
  const [amount, setAmount] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);
  const [tokens, setTokens] = useState<number>(0);
  const [tokensPerMonth, setTokensPerMonth] = useState<number>(0);
  const [votingPower, setVotingPower] = useState<number>(0);
  const [tickets, setTickets] = useState<number>(0);

  const {
    mockData,
    mockData: {
      userValues,
      userValues: { balance, investment, reward, power },
      currency,
      maxInvestment,
      maxPower,
      maxReward,
      softCap,
      totalInvested,
      investors,
    },
    setMockData,
  } = useContext(DemoMockDataContext);

  const { currentTask, setCurrentTask } = useContext(DemoTaskContext);

  const calculatePowerAndTokens = () => {
    const calcVotingPower = (amount * maxPower) / maxInvestment;
    const calcTokens = (amount * maxReward) / maxInvestment;
    const calcTokensPerMonth = calcTokens / 10000;
    const calcTickets = calcVotingPower * 1000;

    setTokens(calcTokens);
    setVotingPower(calcVotingPower);
    setTickets(calcTickets);
    setTokensPerMonth(calcTokensPerMonth);
  };

  const handleSumChange = (value: number) => {
    setSum(value);
    setAmount(value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.valueAsNumber > balance
      ? setAmount(balance)
      : setAmount(e.target.valueAsNumber);
    setSum(e.target.valueAsNumber);
  };

  const handleInvestClick = () => {
    const newTotalInvested = totalInvested + amount;
    setMockData({
      ...mockData,
      userValues: {
        ...userValues,
        balance: balance - amount,
        investment: investment + amount,
        reward: reward + tokens,
        power: power + votingPower,
      },
      investors: [...investors, amount],
      totalInvested: newTotalInvested,
      softCap: {
        ...softCap,
        isReached:
          newTotalInvested > softCap.amount ||
          newTotalInvested === softCap.amount
            ? true
            : false,
      },
    });
    setAmount(0);
    setSum(0);
  };

  const handleMaxClick = () => {
    setSum(balance);
    setAmount(balance);
  };

  useEffect(() => {
    calculatePowerAndTokens();
  }, [amount]);

  useEffect(() => {
    if (softCap.isReached && currentTask === 0) {
      setCurrentTask(1);
    }
  }, [softCap.isReached]);

  return (
    <DemoCalculatorBlock>
      <CalculatorContainer>
        <CalculationWrapper>
          <InlineWrapper>
            <div className="ctext">Calculator</div>

            <Tooltip
              text={
                "The results of your calculations are estimates based on information you provide and may not reflect actual results"
              }
            >
              <Image src={infoBubbleWhite} alt="information" height={"14px"} />
            </Tooltip>
          </InlineWrapper>

          <DemoSelectWrapper currency={currency}>
            <div className="blueText">Invested Sum:</div>
            <DemoInputField
              type="number"
              autoComplete="off"
              name="amount"
              value={amount}
              onChange={handleAmountChange}
            />

            <MaxButton onClick={handleMaxClick}>Max</MaxButton>
            <DemoBalance>
              Your balance: {balance.toLocaleString("fr-FR")} {currency}
            </DemoBalance>
          </DemoSelectWrapper>

          <Slider
            value={sum}
            onChange={handleSumChange}
            min={0}
            max={balance}
            step={1}
          />
          <DemoGreenButton
            onClick={handleInvestClick}
            className={!amount ? "disabled" : ""}
            disabled={!amount}
          >
            Invest
          </DemoGreenButton>
        </CalculationWrapper>
        <VotingWrapper>
          <PBContainer>
            <PBWrapper>
              <CircularProgressbarWithChildren
                value={tokensPerMonth ? tokensPerMonth : 0}
                counterClockwise
                styles={{
                  path: {
                    stroke: `#1EB5FF`,
                    strokeWidth: "0.4rem",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                  },
                  trail: {
                    stroke: "#2B3453",
                    strokeWidth: "0.4rem",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                }}
              >
                <div style={{ width: "84%" }}>
                  <CircularProgressbarWithChildren
                    value={votingPower ? votingPower : 0}
                    counterClockwise
                    styles={{
                      path: {
                        stroke: `rgba(255, 177, 0, 1)`,
                        strokeWidth: "0.4rem",
                        transition: "stroke-dashoffset 0.5s ease 0s",
                      },
                      trail: {
                        stroke: "#2B3453",
                        strokeWidth: "0.4rem",
                        strokeLinecap: "butt",
                        transform: "rotate(0.25turn)",
                        transformOrigin: "center center",
                      },
                    }}
                  >
                    <div className="votingNumbers">
                      {tokensPerMonth ? tokensPerMonth.toFixed(2) : 0}%
                    </div>

                    <div className="votingPercentage">
                      {votingPower ? votingPower.toFixed(2) : 0}%
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </CircularProgressbarWithChildren>
            </PBWrapper>
            <Positioning>
              <VotingRow>
                <VotingItem>
                  <div className="text">Project Tokens</div>
                  <div className="tokens">
                    {tokens ? Math.round(tokens) : 0} Tokens
                  </div>
                </VotingItem>
              </VotingRow>
              <VotingRow>
                <VotingItem>
                  <div className="text">Voting Power</div>
                  <div className="tickets">
                    {tickets ? Math.round(tickets) : 0} Tickets
                  </div>
                </VotingItem>
              </VotingRow>
            </Positioning>
          </PBContainer>
        </VotingWrapper>
      </CalculatorContainer>
    </DemoCalculatorBlock>
  );
};

export default DemoCalculator;
