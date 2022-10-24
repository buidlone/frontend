import { useState, useContext, useEffect } from "react";
import { InfoIcon, InlineWrapper } from "../timelineBlock/styled";
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
} from "./styled";
import Slider from "../slider";
import Modal from "../modal";
import InvestModal from "../investModal";
import ProjectContext from "../../context/projectContext";
import Web3Context from "../../context/web3Context";
import { isInvestingAllowed } from "../../web3/isInvestingAllowed";
import { toast } from "react-toastify";
import { getProjectState } from "../../utils/getProjectState";
import LoadedValuesContext from "../../context/loadedValuesContext";

const min = 0;
const minStep = 0.0000001;

const Calculator = () => {
  const project = useContext(ProjectContext);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);
  const [tokens, setTokens] = useState<number>(0);
  const [tokensPerMonth, setTokensPerMonth] = useState<number>(0);
  const [voting, setVoting] = useState<number>(0);
  const [tickets, setTickets] = useState<number>(0);
  const [maxMonths, setMaxMonths] = useState<number>(0);
  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const { web3Provider, connect } = useContext(Web3Context);
  const { projectState, totalInvested, hardCap, currency } =
    useContext(LoadedValuesContext);
  const [maxSum, setMaxSum] = useState(hardCap);

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

  const getMonths = (start: string, end: string) => {
    var startDate = new Date(start).getTime();
    var now = new Date().getTime();
    var endDate = new Date(end).getTime();

    var diff = (endDate - startDate) / 1000;
    diff /= 60 * 60 * 24 * 7 * 4;
    setMaxMonths(Math.abs(Math.round(diff)));

    var diffNow = (now - startDate) / 1000;
    diffNow /= 60 * 60 * 24 * 7 * 4;
    setCurrentMonth(Math.abs(Math.round(diffNow)));
  };

  useEffect(() => {
    project.end &&
      project.startDate &&
      getMonths(project.startDate, project.end);
  }, []);

  useEffect(() => {
    if (amount <= maxSum) {
      setSum(amount);
      setTokens(Number((amount * 2).toFixed(3)));
      setTokensPerMonth(Number(((amount * 2) / 12).toFixed(4)));
      setVoting(Math.round((amount * 100) / maxSum));
      setTickets(Number(amount.toFixed(3)));
    } else if (!amount) {
      setSum(0);
      setTokens(0);
      setTokensPerMonth(0);
      setVoting(0);
      setTickets(0);
    } else {
      setSum(maxSum);
      setTokens(Number((maxSum * 2).toFixed(3)));
      setTokensPerMonth(Number(((maxSum * 2) / 12).toFixed(4)));
      setVoting(Math.round((maxSum * 100) / maxSum));
      setTickets(Number(maxSum.toFixed(3)));
    }
  }, [amount]);

  const handleSumChange = (value: number) => {
    setAmount(value);
    setSum(value);
    setTokens(Number((value * 2).toFixed(3)));
    setTokensPerMonth(Number(((value * 2) / 12).toFixed(4)));
    setVoting(Math.round((value * 100) / maxSum));
    setTickets(Number(value.toFixed(3)));
  };

  return (
    <CalculatorBlock>
      <CalculatorContainer>
        <CalculationWrapper>
          <InlineWrapper>
            <div className="ctext">Calculator</div>
            <Tooltip
              text={
                "The results of your calculations are estimates based on information you provide and may not reflect actual results"
              }
            >
              <InfoIcon style={{ paddingLeft: "1px" }} />
            </Tooltip>
          </InlineWrapper>

          <SelectWrapper currency={currency.label}>
            <div className="blueText">Invested Sum:</div>
            <InputField
              type="number"
              name="amount"
              placeholder=""
              defaultValue={0}
              value={amount}
              onChange={(e) => setAmount(e.target.valueAsNumber)}
            />
          </SelectWrapper>

          <Slider
            value={sum}
            onChange={handleSumChange}
            min={min}
            max={maxSum}
            step={minStep}
          />

          <div className="blueText">Timeline:</div>

          <Slider
            //onChange={handleTokensChange}
            min={0}
            max={maxMonths}
            value={currentMonth}
            timeline
          />
        </CalculationWrapper>
        <VotingWrapper>
          <PBContainer>
            <PBWrapper>
              <CircularProgressbarWithChildren
                maxValue={Number(((maxSum * 2) / 12).toFixed(4))}
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
                {/*
          Width here needs to be (100 - 2 * strokeWidth)% 
          in order to fit exactly inside the outer progressbar.
        */}
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
                      {tokensPerMonth ? tokensPerMonth : 0}
                    </div>
                    <div className="smallBlue votingNumbers">(Per month)</div>
                    <div className="votingPercentage">
                      {" "}
                      {`${voting ? voting : 0}%`}
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </CircularProgressbarWithChildren>
            </PBWrapper>
            <VotingRow>
              <VotingItem>
                <div className="text">Project Tokens</div>
                <div className="tokens">{tokens ? tokens : 0} Tokens</div>
              </VotingItem>
              <VotingItem>
                <div className="text">Voting Power</div>
                <div className="tickets">{tickets ? tickets : 0} Tickets</div>
              </VotingItem>
            </VotingRow>

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
