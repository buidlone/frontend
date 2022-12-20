import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { useWatch, Control } from "react-hook-form";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { getCalculatedProjectTokens } from "../../web3/getCalculatedProjectTokens";
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
  const { totalInvested, hardCap, tokenCurrency } =
    useContext(LoadedValuesContext);
  const amount = useWatch({
    control,
    name: "amount",
    defaultValue: "",
  });

  const [tokens, setTokens] = useState<string>("");
  const [voting, setVoting] = useState<number>(0);
  const [tickets, setTickets] = useState<string>("");

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

      setVoting(
        calculatedVotingTokens > 1
          ? Math.round(calculatedVotingTokens)
          : Number(calculatedVotingTokens.toFixed(2))
      );
    }

    if (resultTokens) {
      setTokens(
        resultTokens.expectedTokensAllocation.toString() != "0"
          ? ethers.utils.formatEther(resultTokens.expectedTokensAllocation)
          : "0"
      );

      const calculatedProjectTokens =
        resultTokens.projectTokensPercentage.toNumber() / 100;
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
        setTokens("0");
        setVoting(0);
        setTickets("0");
        return;
      }

      inputSumChange();
    }, 100);

    return () => clearTimeout(delayDebounceFn);
  }, [amount]);

  return (
    <>
      <IModalFieldWrapper>
        <InputLabel>You will receive (overall thru project)</InputLabel>
        <OutputField>
          <div>
            {Number(tokens) >= 0.0001
              ? Number(tokens).toFixed(4)
              : Number(tokens) < 0.0001 && Number(tokens) > 0
              ? "≈ 0.0001"
              : "0"}
          </div>
          <div className="BDL1">{tokenCurrency.label}</div>
        </OutputField>
        <div className="bottomText">Project token</div>
      </IModalFieldWrapper>

      <IModalFieldWrapper>
        <InputLabel>You will receive</InputLabel>
        <OutputField>
          <div className="first">
            {Number(tickets) >= 0.0001
              ? Number(tickets).toFixed(4)
              : Number(tickets) < 0.0001 && Number(tickets) > 0
              ? "≈ 0.0001"
              : "0"}
          </div>
          <div className="voting1">approx.</div>
          <div className="voting2">{voting} %</div>
        </OutputField>

        <div className="bottomText tickets">
          Voting tickets. Project voting power{" "}
        </div>
      </IModalFieldWrapper>
    </>
  );
};
export default CalculatedInvestValues;
