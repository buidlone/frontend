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

  let milestonePercentage = 0;

  if (isMilestoneOngoing) {
    milestonePercentage = ((currentMilestone + 1) * 100) / milestones.length;
  } else {
    milestonePercentage = (currentMilestone * 100) / milestones.length;
  }

  useEffect(() => {
    if (milestones[currentMilestone]) {
      getSeconds();
    }
  }, [milestones[currentMilestone]]);

  function getSeconds() {
    const milestoneStart = new Date(milestones[currentMilestone].startDate);
    const today = new Date();

    const seconds = Math.abs(milestoneStart.getTime() - today.getTime()) / 1000;
    if (web3Provider) {
      getUsedInvestments(web3Provider, address, seconds).then((data: any) => {
        setUsedInvestments(Number(data.toFixed(10)));
      });

      getIndividualInvestedAmount(web3Provider, address).then((data: any) => {
        setTotalIndividualInvestedToProject(data.totalAmountInvested);
      });
    }
  }

  const refundable = totalIndividualInvestedToProject - usedInvestments;

  const { web3Provider, address } = useContext(Web3Context);

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
            {allocatedTokens} {tokenCurrency.label}
          </p>
        </td>
        <td>
          <p>Refund if failed</p>
          <p className="blueText">
            {refundable} {currency.label}
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
            {usedInvestments} {currency.label}
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

