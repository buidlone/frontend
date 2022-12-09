import { BigNumber, ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";

import {
  FProgress,
  FProgressWrapper,
  FundsBar,
  FundsWrapper,
  SoftCapIndicator,
  HardCapIndicator
} from "./styled";

const ProgressInsights = () => {
  const { softCap, hardCap, totalInvested, currency } =
    useContext(LoadedValuesContext);

  const [progress, setProgress] = useState<number>(0);

  const [softCapPosition, setSoftCapPosition] = useState<number>(0);

  useEffect(() => {
    if (softCap.amount.toString() !== "0" && hardCap.toString() !== "0") {
      setProgress(
        totalInvested.mul(BigNumber.from(100)).div(hardCap).toNumber()
      );
      setSoftCapPosition(
        softCap.amount.mul(BigNumber.from(100)).div(hardCap).toNumber()
      );
    }
  }, [totalInvested._hex]);

  return (
    <FProgressWrapper>
      <FundsBar>
        <SoftCapIndicator softCapPosition={softCapPosition} />
        <HardCapIndicator />
        <FProgress progress={progress ? progress : 0} />
      </FundsBar>
      <FundsWrapper>
        <div className="total">
          {" "}
          {ethers.utils.formatEther(totalInvested).replace(/,/g, " ")}{" "}
          {currency.label}
        </div>
        <div className="required">
          {ethers.utils.formatEther(hardCap).replace(/,/g, " ")}{" "}
          {currency.label}
        </div>
      </FundsWrapper>
    </FProgressWrapper>
  );
};

export default ProgressInsights;
