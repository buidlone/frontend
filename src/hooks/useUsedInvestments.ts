import { BigNumber, ethers } from "ethers";
import { useContext, useEffect, useRef, useState } from "react";
import InvestorValuesContext from "../context/investorContext";
import LoadedValuesContext from "../context/loadedValuesContext";

const useRealTimeInvestments = () => {
  const {
    investorValues: { projectInvestments },
  } = useContext(InvestorValuesContext);
  const { milestones, currentMilestone, isMilestoneOngoing } =
    useContext(LoadedValuesContext);
  const [usedInvestments, setUsedInvestments] = useState<string>("");
  const [refund, setRefund] = useState<string>("");

  let interval = useRef<number | undefined | ReturnType<typeof setInterval>>(
    undefined
  );

  const startTimer = () => {
    const milestoneStartTime = new Date(
      milestones[currentMilestone].startTime
    ).getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const secondsFromMilestoneStart = BigNumber.from(
        Math.floor((now - milestoneStartTime) / 1000)
      );

      const invFlowRate = BigNumber.from(
        projectInvestments?.investmentFlowrates[currentMilestone]
      );

      const invUsed = BigNumber.from(
        projectInvestments?.investmentUsed[currentMilestone - 1] || 0
      );

      const realTimeAmount = secondsFromMilestoneStart
        .mul(invFlowRate)
        .add(invUsed);

      setUsedInvestments(ethers.utils.formatEther(realTimeAmount));
      setRefund(
        ethers.utils.formatEther(
          ethers.utils
            .parseEther(projectInvestments!.totalInvestedAmount)
            .sub(realTimeAmount)
        )
      );
    }, 1000);
  };

  useEffect(() => {
    if (isMilestoneOngoing && projectInvestments) {
      startTimer();
    } else {
      setUsedInvestments("");
      setRefund("");
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [isMilestoneOngoing, projectInvestments]);

  return { usedInvestments, refund };
};
export default useRealTimeInvestments;
