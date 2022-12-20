import { useState, useContext, useEffect, KeyboardEvent } from "react";
import { InlineWrapper } from "../timelineBlock/styled";
import Tooltip from "../tooltip";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  CalculationWrapper,
  CalculatorBlock,
  CalculatorContainer,
  SelectWrapper,
  VotingWrapper,
  InputField,
  PBWrapper,
  IButton,
  PBContainer,
  VotingRow,
  VotingItem,
  Positioning,
} from "./styled";
import Slider from "../slider";
import Modal from "../modal";
import InvestModal from "../investModal";
import Web3Context from "../../context/web3Context";
import { isInvestingAllowed } from "../../web3/isInvestingAllowed";
import { toast } from "react-toastify";
import { getProjectState } from "../../utils/getProjectState";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { getCalculatedVotingTokens } from "../../web3/getCalculatedVotingTokens";
import useCountdown from "../../hooks/useCountdown";
import { ethers } from "ethers";
import { getCalculatedProjectTokens } from "../../web3/getCalculatedProjectTokens";
import infoBubble from "../../../public/info_bubble.svg";
import infoBubbleWhite from "../../../public/info_bubble_white.svg";
import Image from "next/image";

const minStep = 0.0000001;

const Calculator = () => {
  const { web3Provider, connect } = useContext(Web3Context);
  const { totalInvested, hardCap, currency, milestones, projectState } =
    useContext(LoadedValuesContext);

  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState<string>("0");
  const [sum, setSum] = useState<string>("");
  const [tokens, setTokens] = useState<string>("");
  const [tokensPerMonth, setTokensPerMonth] = useState<number>(0);
  const [voting, setVoting] = useState<number>(0);
  const [tickets, setTickets] = useState<string>("");
  const [over, setOver] = useState(0);
  const maxDays = useCountdown(
    milestones[milestones.length - 1]?.endDate,
    milestones[0]?.startDate
  );
  const currentDays = useCountdown(undefined, milestones[0]?.startDate, true);

  const handleClick = () => {
    const isAllowed = isInvestingAllowed(projectState, hardCap, totalInvested);
    if (isAllowed) {
      web3Provider && setShowModal(true);
    } else {
      toast.info(getProjectState(projectState));
    }
  };

  const handleConnectClick = async () => {
    const isAllowed = isInvestingAllowed(projectState, hardCap, totalInvested);
    if (isAllowed) {
      if (connect) {
        const isConnected = await connect();
        typeof isConnected !== "boolean" && setShowModal(true);
      }
    } else {
      toast.info(getProjectState(projectState));
    }
  };

  const handleSumChange = (value: string) => {
    setSum(value.toString());
    setAmount(value.toString());
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.target.value.charAt(0) == "0" && e.target.value.length == 20)
      e.preventDefault();
  };

  const inputSumChange = async () => {
    const resultVoting = await getCalculatedVotingTokens(amount || "0");
    const resultTokens = await getCalculatedProjectTokens(amount || "0");

    if (resultVoting) {
      setTickets(
        resultVoting.votingTokensToMint.toString() != "0"
          ? ethers.utils.formatEther(resultVoting.votingTokensToMint)
          : "0"
      );

      const calculatedVotingTokens =
        resultVoting.calculatedVotingTokens.toNumber() / 100;

      setVoting(calculatedVotingTokens);
    }

    if (resultTokens) {
      setTokens(
        resultTokens.expectedTokensAllocation.toString() != "0"
          ? ethers.utils.formatEther(resultTokens.expectedTokensAllocation)
          : "0"
      );

      const calculatedProjectTokens =
        resultTokens.projectTokensPercentage.toNumber() / 100;

      setTokensPerMonth(calculatedProjectTokens);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (
        ethers.utils
          .parseEther(amount || "0")
          .add(totalInvested)
          .gt(hardCap)
      ) {
        setSum(ethers.utils.formatEther(hardCap.sub(totalInvested)));
        setAmount(ethers.utils.formatEther(hardCap.sub(totalInvested)));
        return;
      }
      setSum(amount);
      inputSumChange();
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [amount, totalInvested._hex]);

  return (
    <CalculatorBlock>
      <CalculatorContainer>
        <CalculationWrapper>
          <InlineWrapper>
            <div className="ctext">Calculator</div>
            <div onMouseOver={() => setOver(1)} onMouseOut={() => setOver(0)}>
              <Tooltip
                text={
                  "The results of your calculations are estimates based on information you provide and may not reflect actual results"
                }
              >
                <Image
                  src={over === 1 ? infoBubble : infoBubbleWhite}
                  alt="information"
                  height={"14px"}
                />
              </Tooltip>
            </div>
          </InlineWrapper>

          <SelectWrapper
            currency={
              currency.label
                .substring(0, currency.label.length - 1)
                .toLocaleLowerCase() +
              currency.label.slice(-1).toLocaleUpperCase()
            }
          >
            <div className="blueText">Invested Sum:</div>
            <InputField
              type="number"
              autoComplete="off"
              name="amount"
              placeholder=""
              defaultValue={"0"}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </SelectWrapper>

          <Slider
            value={sum}
            onChange={handleSumChange}
            min={"0"}
            max={ethers.utils.formatEther(hardCap)}
            step={minStep}
          />

          <div className="blueText">Timeline:</div>

          <Slider
            min={0}
            max={maxDays.timerDays}
            value={currentDays.timerDays}
            timeline
          />
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
                    value={voting ? voting : 0}
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
                      {`${
                        tokensPerMonth > 1
                          ? tokensPerMonth.toFixed(2)
                          : Number(tokens) > 0 && tokensPerMonth < 1
                          ? "<1.00"
                          : "0"
                      }%`}
                    </div>

                    <div className="votingPercentage">
                      {" "}
                      {`${
                        voting > 1
                          ? voting.toFixed(2)
                          : Number(tickets) > 0 && voting < 1
                          ? "<1.00"
                          : "0"
                      }%`}
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </CircularProgressbarWithChildren>
            </PBWrapper>
            <Positioning>
              <VotingRow>
                <VotingItem>
                  <div className="text">Rewards</div>
                  <div className="tokens">
                    {Number(tokens) >= 0.0001
                      ? Number(tokens).toFixed(4)
                      : Number(tokens) < 0.0001 && Number(tokens) > 0
                      ? "≈ 0.0001"
                      : "0"}{" "}
                    Tokens
                  </div>
                </VotingItem>
              </VotingRow>
              <VotingRow>
                <VotingItem>
                  <div className="text">Voting Power</div>
                  <div className="tickets">
                    {Number(tickets) >= 0.0001
                      ? Number(tickets).toFixed(4)
                      : Number(tickets) < 0.0001 && Number(tickets) > 0
                      ? "≈ 0.0001"
                      : "0"}{" "}
                    Tickets
                  </div>
                </VotingItem>
              </VotingRow>
            </Positioning>
            {web3Provider ? (
              <>
                <IButton onClick={handleClick}>Invest</IButton>
              </>
            ) : (
              <>
                <IButton onClick={handleConnectClick}>Invest</IButton>
              </>
            )}
            <Modal show={showModal}>
              <InvestModal onClose={() => setShowModal(false)} />
            </Modal>
          </PBContainer>
        </VotingWrapper>
      </CalculatorContainer>
    </CalculatorBlock>
  );
};

export default Calculator;
