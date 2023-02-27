import { useContext, useEffect, useRef, useState } from "react";
import InvestorValuesContext from "../context/investorContext";
import LoadedValuesContext from "../context/loadedValuesContext";
import Web3Context from "../context/web3Context";
import { ProjectState } from "../interfaces/enums/ProjectStateEnums";

const useIsStopAllowed = () => {
  const [isStopAllowed, setIsStopAllowed] = useState<boolean>(true);
  const { projectState, currentMilestone } = useContext(LoadedValuesContext);
  const { address } = useContext(Web3Context);
  const {
    investorValues: { projectInvestments },
  } = useContext(InvestorValuesContext);

  useEffect(() => {
    if (
      address &&
      projectInvestments &&
      projectInvestments.unusedActiveVotes[currentMilestone] &&
      (projectState !== ProjectState.MILESTONES_ONGOING_BEFORE_LAST ||
        projectState === ProjectState.MILESTONES_ONGOING_BEFORE_LAST)
    ) {
      setIsStopAllowed(true);
    }
    setIsStopAllowed(false);
  }, [address, projectInvestments?.unusedActiveVotes, projectState]);

  return isStopAllowed;
};

export default useIsStopAllowed;
