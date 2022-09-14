import { useState, KeyboardEvent, useContext } from "react";
import { InfoIcon, InlineWrapper } from "../timelineBlock/styled";
import Tooltip from "../tooltip";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  CalculationWrapper,
  CalculatorBlock,
  CalculatorContainer,
  SelectWrapper,
  VotingWrapper,
  InputField,
  SelectField,
  SliderWrapper,
  PBWrapper,
  IButton,
  PBContainer,
} from "./styled";
import Slider from "../slider";
import Modal from "../modal";
import InvestModal from "../investModal";

const options = [
  {
    value: "eth",
    label: (
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <span className="material-icons">attach_money</span>
        <span>ETH</span>
      </div>
    ),
  },
  {
    value: "eth",
    label: (
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <span className="material-icons">attach_money</span>
        <span>ETH</span>
      </div>
    ),
  },
  {
    value: "eth",
    label: (
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <span className="material-icons">attach_money</span>
        <span>ETH</span>
      </div>
    ),
  },
  {
    value: "eth",
    label: (
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <span className="material-icons">attach_money</span>
        <span>ETH</span>
      </div>
    ),
  },
  {
    value: "eth",
    label: (
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <span className="material-icons">attach_money</span>
        <span>ETH</span>
      </div>
    ),
  },
];

const min = 0;
const maxSum = 3400;
const maxTokens = 5000;

const Calculator = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState<number | null>(null);
  const [sum, setSum] = useState<number | null>(null);
  const [tokens, setTokens] = useState<number | null>(null);
  const [voting, setVoting] = useState<number | null>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (amount) {
        setSum(amount);
        setTokens(amount * 2);
        setVoting(Math.round((amount * 100) / maxSum));
      }
    }
  };

  const handleSumChange = (value: number) => {
    console.log(value);
    setSum(value);
    setAmount(value);
    setTokens(value * 2);
    setVoting(Math.round((value * 100) / maxSum));
  };

  const handleTokensChange = (value: number) => {
    console.log(value);
    setSum(value / 2);
    setAmount(Math.round(value / 2));
    setTokens(value);
    setVoting(Math.round(((value / 2) * 100) / maxSum));
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
              <InfoIcon />
            </Tooltip>
          </InlineWrapper>
          <SelectWrapper>
            <InputField
              type="number"
              name="amount"
              placeholder=""
              value={amount ? amount : undefined}
              onChange={(e) => setAmount(e.target.valueAsNumber)}
              onKeyDown={handleKeyDown}
            />
            <SelectField
              options={options}
              classNamePrefix="react-select"
              defaultValue={options[0]}
              isSearchable={false}
            />
          </SelectWrapper>
          <SliderWrapper>
            <div className="text">Invested Sum:</div>

            <Slider
              onChange={handleSumChange}
              min={min}
              max={maxSum}
              value={sum}
            />
          </SliderWrapper>
          <SliderWrapper>
            <div className="text">Project Tokens:</div>

            <Slider
              onChange={handleTokensChange}
              min={min}
              max={maxTokens}
              value={tokens}
              blue
            />
          </SliderWrapper>
          <SliderWrapper>
            <div className="text">Timeline:</div>

            <Slider
            //onChange={handleTokensChange}
            // min={0}
            //max={34000}
            //value={sum}
            />
          </SliderWrapper>
        </CalculationWrapper>
        <VotingWrapper>
          <div className="text">Voting Power:</div>
          <PBContainer>
            <PBWrapper>
              <CircularProgressbar
                value={voting ? voting : 0}
                text={`${voting ? voting : 0}%`}
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
                  text: {
                    fill: "#FFB100",
                    fontSize: "25px",
                    textShadow: "0px 0px 6px #FFB1008C",
                    fontFamily: `'Space Grotesk', sans-serif`,
                    fontWeight: "500",
                  },
                }}
              />
            </PBWrapper>
          </PBContainer>
          <IButton onClick={() => setShowModal(true)}>Invest</IButton>
          <Modal show={showModal}>
            <InvestModal onClose={() => setShowModal(false)} />
          </Modal>
        </VotingWrapper>
      </CalculatorContainer>
    </CalculatorBlock>
  );
};

export default Calculator;
