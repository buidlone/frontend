import { useContext, useEffect, useState } from "react";
import Accordion from "../accordion";
import Web3Context from "../../context/web3Context";
import { isInvestingAllowed } from "../../web3/isInvestingAllowed";
import ProjectState, { StatusColor } from "../projectState";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { stopProject } from "../../web3/stopProject";
import { isStopAllowed } from "../../web3/isStopAllowed";
import UserInvesmentHistory from "../userInvestmentHistory";
import { StatusBubble, TableButton } from "../activeBlock/styled";
import { getVotedAgainst } from "../../web3/getVotedAgainst";
import { getAllocatedTokens } from "../../web3/getAllocatedTokens";
import { getUsedInvestments } from "../../web3/getUsedInvestments";
import { getIndividualInvestedAmount } from "../../web3/getIndividualInvestedAmount";

const items = [
  {
    name: "Investment details",
    content: <UserInvesmentHistory />,
  },
];

const DetailedPortfolio = ({ setIsShownStop, setIsShownWrong }: any) => {
  const {
    projectState,
    totalInvested,
    hardCap,
    milestones,
    currentMilestone,
    isMilestoneOngoing,
    tokenCurrency,
    currency,
  } = useContext(LoadedValuesContext);

  const [stopDisabled, setStopDisabled] = useState(true);

  const [votedAgainst, setVotedAgainst] = useState<number>(0);
  const [isAllowed, setIsAllowed] = useState(true);
  const [allocatedTokens, setAllocatedTokens] = useState<number>(0);
  const [usedInvestments, setUsedInvestments] = useState<number>(0);
  const [
    totalIndividualInvestedToProject,
    setTotalIndividualInvestedToProject,
  ] = useState(0);
  const { web3Provider, address } = useContext(Web3Context);
  let today = new Date();
  let milestonePercentage = 0;

  if (isMilestoneOngoing) {
    milestonePercentage = ((currentMilestone + 1) * 100) / milestones.length;
  } else {
    milestonePercentage = (currentMilestone * 100) / milestones.length;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      today = new Date();
      if (milestones[currentMilestone]) {
        getSeconds();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (web3Provider) {
      getIndividualInvestedAmount(web3Provider, address).then((data: any) => {
        setTotalIndividualInvestedToProject(data.totalAmountInvested);
      });
    }
  }, [totalInvested]);

  function getSeconds() {
    const milestoneStart = new Date(milestones[currentMilestone].startDate);
    const seconds = Math.abs(milestoneStart.getTime() - today.getTime()) / 1000;

    if (!isMilestoneOngoing) {
      setUsedInvestments(0);
    } else if (web3Provider) {
      getUsedInvestments(web3Provider, address, seconds).then((data: any) => {
        setUsedInvestments(data.toFixed(12));
      });
    }
  }

  const refundable = totalIndividualInvestedToProject - usedInvestments;

  const handleStop = async () => {
    if (web3Provider) {
      const stopped = await stopProject(web3Provider, address);
      if (stopped === true) {
        setIsShownStop(true);
      } else if (stopped === false) setIsShownWrong(true);
    }
  };

  useEffect(() => {
    setIsAllowed(isInvestingAllowed(projectState, hardCap, totalInvested));
    getVotedAgainst().then((data: any) => {
      setVotedAgainst(data);
    });
  }, []);

  useEffect(() => {
    isStopAllowed(projectState, currentMilestone, address, web3Provider).then(
      (data: any) => {
        setStopDisabled(data);
      }
    );
    if (web3Provider) {
      getAllocatedTokens(web3Provider, address).then((data: any) => {
        setAllocatedTokens(data);
      });

      setStopDisabled(false);
    } else {
      setStopDisabled(true);
    }
  }, [web3Provider, totalInvested._hex]);

  return (
    <>
      <tr>
        <td>
          <p>Status</p>
          <p className="greenText flex" style={{ gap: "10px" }}>
            {" "}
            <StatusBubble
              color={StatusColor}
              style={{ position: "unset" }}
            />{" "}
            <ProjectState />
          </p>
        </td>
        <td>
          <p>Reserved</p>
          <p className="blueText">
            {allocatedTokens >= 0.0001 && allocatedTokens <= 4
              ? allocatedTokens
              : allocatedTokens >= 0.0001 && allocatedTokens > 4
              ? `≈ ${Number(allocatedTokens).toFixed(4)} `
              : allocatedTokens < 0.0001 && allocatedTokens > 0
              ? "≈ 0.0001"
              : "0.0000"}{" "}
            {tokenCurrency.label}
          </p>
        </td>
        <td>
          <p>Refund if failed</p>
          <p className="blueText">
            {refundable === 0 ? refundable : `≈ ${refundable.toFixed(12)}`}{" "}
            {currency.label}
          </p>
        </td>
        <td>
          <TableButton disabled className="redeemBtn">
            Redeem funds
          </TableButton>
        </td>
      </tr>

      <tr>
        <td>
          <p>Completed</p>
          <p className="greenText">{milestonePercentage} %</p>
        </td>
        <td>
          <p>Used investments</p>
          <p className="greenText">
            {usedInvestments === 0
              ? usedInvestments
              : `≈ ${Number(usedInvestments).toFixed(12)}`}{" "}
            {currency.label}
          </p>
        </td>

        <td>
          <p>Voted against</p>
          <p className="yellowText">{votedAgainst} %</p>
        </td>

        <td>
          <TableButton
            disabled={stopDisabled}
            className="stopBtn"
            onClick={handleStop}
          >
            STOP cash flow
          </TableButton>
        </td>
      </tr>
      <tr className="smallerRow">
        <td colSpan={4} className="accordionTop">
          <Accordion items={items} />
        </td>
      </tr>
    </>
  );
};

export default DetailedPortfolio;

