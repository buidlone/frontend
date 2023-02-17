import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { useWatch, Control } from "react-hook-form";
import LoadedValuesContext from "../../context/loadedValuesContext";
import Web3Context from "../../context/web3Context";
import { roundApprox } from "../../utils/roundValue";
import { getCalculatedVotingTokens } from "../../web3/getCalculatedVotingTokens";
import { InputTypes } from "../investModal";
import {
  IModalFieldWrapper,
  InputLabel,
  OutputField,
} from "../investModal/styled";

const CalculatedInvestValues = ({
  control,
}: {
  control: Control<InputTypes>;
}) => {
  const {
    totalInvested,
    hardCap,
    tokenCurrency,
    softCap,
    softCapMultiplier,
    hardCapMultiplier,
    maximumWeightDivisor,
    tokensReserved,
    supplyCap,
  } = useContext(LoadedValuesContext);
  const { web3Provider, chainId, address } = useContext(Web3Context);
  const amount = useWatch({
    control,
    name: "amount",
    defaultValue: "",
  });

  const [tokens, setTokens] = useState<string>("");
  const [maxVotingPower, setMaxVotingPower] = useState<number>(0);
  const [tickets, setTickets] = useState<string>("");

  const inputSumChange = () => {
    const result = getCalculatedVotingTokens(
      ethers.utils.parseEther(amount || "0"),
      softCap.amount,
      hardCap,
      totalInvested,
      softCapMultiplier,
      hardCapMultiplier,
      maximumWeightDivisor,
      tokensReserved,
      supplyCap
    );

    if (result) {
      setTickets(
        result.votingTickets.toString() != "0"
          ? ethers.utils.formatEther(result.votingTickets)
          : "0"
      );

      const calculatedMaxVotingPower = result.maxVotingPower.toNumber() / 100;
      const calculatedMinVotingPower = result.minVotingPower.toNumber() / 100;

      setMaxVotingPower(
        calculatedMaxVotingPower > 1
          ? Math.round(calculatedMaxVotingPower)
          : Number(calculatedMaxVotingPower.toFixed(2))
      );

      setTokens(
        result.expectedTokenAllocation.toString() != "0"
          ? ethers.utils.formatEther(result.expectedTokenAllocation)
          : "0"
      );
    }
  };

  useEffect(() => {
    if (web3Provider && chainId) {
      if (chainId === 5) {
        const delayDebounceFn = setTimeout(() => {
          if (
            ethers.utils
              .parseEther(amount || "0")
              .add(totalInvested)
              .gt(hardCap)
          ) {
            setTokens("0");
            setMaxVotingPower(0);
            setTickets("0");
            return;
          }

          inputSumChange();
        }, 100);

        return () => clearTimeout(delayDebounceFn);
      } else {
      }
    }
  }, [amount]);

  return (
    <>
      <IModalFieldWrapper>
        <InputLabel>You will receive (overall thru project)</InputLabel>
        <OutputField>
          <div>{roundApprox(tokens)}</div>
          <div className="BDL1">{tokenCurrency.label}</div>
        </OutputField>
        <div className="bottomText">Project token</div>
      </IModalFieldWrapper>

      <IModalFieldWrapper>
        <InputLabel>You will receive</InputLabel>
        <OutputField>
          <div className="first">{roundApprox(tickets)}</div>
          <div className="voting1">approx.</div>
          <div className="voting2">{maxVotingPower} %</div>
        </OutputField>

        <div className="bottomText tickets">
          Voting tickets. Project voting power{" "}
        </div>
      </IModalFieldWrapper>
    </>
  );
};
export default CalculatedInvestValues;
