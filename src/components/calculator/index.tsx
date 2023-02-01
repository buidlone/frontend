import React, { useState, useContext, useEffect, KeyboardEvent } from "react";
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
  PBContainer,
  VotingRow,
  VotingItem,
  Positioning,
} from "./styled";
import Slider from "../slider";
import Modal from "../modal";
import InvestModal from "../investModal";

import { isInvestingAllowed } from "../../web3/isInvestingAllowed";
import { toast } from "react-toastify";
import { getProjectState } from "../../utils/getProjectState";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { getCalculatedVotingTokens } from "../../web3/getCalculatedVotingTokens";
import { ethers } from "ethers";
import infoBubble from "../../../public/info_bubble.svg";
import infoBubbleWhite from "../../../public/info_bubble_white.svg";
import Image from "next/image";
import { roundApprox } from "../../utils/roundValue";
import TimelineSlider from "../timelineSlider";
import CalculatorInvestButton from "../calculatorInvestButton";
import Web3Context from "../../context/web3Context";

const minStep = 0.0000000000000000001;

const Calculator = () => {
  const { web3Provider, login } = useContext(Web3Context);
  const { totalInvested, hardCap, currency, projectState, softCap } =
    useContext(LoadedValuesContext);

  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState<string>("0");
  const [sum, setSum] = useState<string>("");
  const [tokens, setTokens] = useState<string>("");
  const [tokensPerMonth, setTokensPerMonth] = useState<number>(0);
  const [minVotingPower, setMinVotingPower] = useState<number>(0);
  const [maxVotingPower, setMaxVotingPower] = useState<number>(0);
  const [tickets, setTickets] = useState<string>("");
  const [over, setOver] = useState(0);
  const [current, setCurrent] = useState<boolean>(true);
  const [timelineValue, setTimelineValue] = useState(
    ethers.utils.formatEther(hardCap.sub(totalInvested))
  );
  const [markerValue, setMarkerValue] = useState(
    ethers.utils.formatEther(hardCap.sub(totalInvested))
  );
  const [maxAmount, setMaxAmount] = useState(
    ethers.utils.formatEther(hardCap.sub(totalInvested))
  );

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
      if (login) {
        const isConnected = await login();
        typeof isConnected !== "boolean" && setShowModal(true);
      }
    } else {
      toast.info(getProjectState(projectState));
    }
  };

  const handleTimelineChange = (value: string) => {
    if (Number(value).toFixed(3) === Number(markerValue).toFixed(3)) {
      setTimelineValue(markerValue);
      setMaxAmount(
        ethers.utils.formatEther(
          hardCap.sub(ethers.utils.parseEther(markerValue))
        )
      );
      setCurrent(true);
    } else {
      setTimelineValue(value.toString());
      setMaxAmount(
        ethers.utils.formatEther(
          hardCap.sub(ethers.utils.parseEther(value.toString()))
        )
      );
      setCurrent(value.toString() === markerValue ? true : false);
    }
  };

  const handleMarkerClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    handleTimelineChange(markerValue);
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
    const result = await getCalculatedVotingTokens(
      ethers.utils.parseEther(amount || "0"),
      softCap.amount,
      hardCap,
      ethers.utils.parseEther(timelineValue)
    );

    if (result) {
      setTickets(
        result.votingTickets.toString() != "0"
          ? ethers.utils.formatEther(result.votingTickets)
          : "0"
      );

      const calculatedMaxVotingPower = result.maxVotingPower.toNumber() / 100;

      setMaxVotingPower(calculatedMaxVotingPower);

      const calculatedMinVotingPower = result.minVotingPower.toNumber() / 100;

      setMinVotingPower(calculatedMinVotingPower);

      setTokens(
        result.expectedTokenAllocation.toString() != "0"
          ? ethers.utils.formatEther(result.expectedTokenAllocation)
          : "0"
      );

      const calculatedProjectTokens =
        result.expectedTokenAllocationPercentage.toNumber() / 100;

      setTokensPerMonth(calculatedProjectTokens);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (
        ethers.utils
          .parseEther(amount || "0")
          .add(ethers.utils.parseEther(timelineValue))
          .gt(hardCap)
      ) {
        setSum(
          ethers.utils.formatEther(
            hardCap.sub(ethers.utils.parseEther(timelineValue))
          )
        );
        setAmount(
          ethers.utils.formatEther(
            hardCap.sub(ethers.utils.parseEther(timelineValue))
          )
        );
        return;
      }
      setSum(amount);
      inputSumChange();
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [amount, timelineValue, totalInvested._hex]);

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
              //defaultValue={"0"}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </SelectWrapper>

          <Slider
            value={sum}
            onChange={handleSumChange}
            min={0}
            max={Number(maxAmount)}
            step={minStep}
          />

          <div className="blueText">Timeline:</div>

          <TimelineSlider
            value={timelineValue}
            onChange={handleTimelineChange}
            markerValue={markerValue}
            step={minStep}
            handleMarkerClick={handleMarkerClick}
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
                    value={maxVotingPower ? maxVotingPower : 0}
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
                      {maxVotingPower > 1 ? (
                        <>
                          <span className="sign">≤</span>

                          <span>{maxVotingPower.toFixed(2)}</span>
                        </>
                      ) : Number(tickets) > 0 && maxVotingPower < 1 ? (
                        "<1.00"
                      ) : (
                        "0"
                      )}
                      %
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
                    {roundApprox(tokens) == "0.0000"
                      ? "0"
                      : roundApprox(tokens)}{" "}
                    Tokens
                  </div>
                </VotingItem>
              </VotingRow>
              <VotingRow>
                <VotingItem>
                  <div className="text">Voting Power</div>
                  <div className="tickets">
                    {roundApprox(tickets) == "0.0000"
                      ? "0"
                      : roundApprox(tickets)}{" "}
                    Tickets
                  </div>
                </VotingItem>
              </VotingRow>
            </Positioning>
            <CalculatorInvestButton
              current={current}
              handleClick={handleClick}
              handleConnectClick={handleConnectClick}
            />
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
