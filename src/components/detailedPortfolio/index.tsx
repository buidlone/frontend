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
import { roundApprox } from "../../utils/roundValue";
import ProjectStateLabel from "../projectState";
import InvestorValuesContext from "../../context/investorContext";
import useRealTimeInvestments from "../../hooks/useUsedInvestments";


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
    tokenCurrency,
    currency,
  } = useContext(LoadedValuesContext);

  const [stopDisabled, setStopDisabled] = useState(true);
  const [votedAgainst, setVotedAgainst] = useState<number>(0);
  const [isAllowed, setIsAllowed] = useState(true);
  const {
    investorValues: { projectInvestments },
  } = useContext(InvestorValuesContext);

  const { usedInvestments, refund } = useRealTimeInvestments();

  const { web3Provider, address } = useContext(Web3Context);
  const statusColor = StatusColor();
  let milestonePercentage = (currentMilestone * 100) / milestones.length;

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
      setStopDisabled(false);
    } else {
      setStopDisabled(true);
    }
  }, [web3Provider, totalInvested._hex]);

  return (
    <>
      <tr>
        <td>
          <span>Status</span>
          <div className="greenText flex" style={{ gap: "10px" }}>
            {" "}
            <StatusBubble
              color={statusColor && statusColor}
              style={{ position: "unset" }}
            />{" "}
            <ProjectStateLabel />
          </div>
        </td>
        <td>
          <p>Reserved</p>
          <p className="blueText">
            {projectInvestments
              ? roundApprox(projectInvestments.allocatedProjectTokens)
              : "0.0000"}{" "}
            {tokenCurrency.label}
          </p>
        </td>
        <td>
          <p>Refund if failed</p>
          <p className="blueText">
            {!!refund
              ? `≈ ${Number(refund).toFixed(12)}`
              : projectInvestments?.totalInvestedAmount
              ? projectInvestments?.totalInvestedAmount
              : "0.0000"}{" "}
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
          <p className="greenText">
            {milestonePercentage && milestonePercentage !== Infinity
              ? milestonePercentage
              : 0}{" "}
            %
          </p>
        </td>
        <td>
          <p>Used investments</p>
          <p className="greenText">
            {!!usedInvestments
              ? `≈ ${Number(usedInvestments).toFixed(12)}`
              : "0.0000"}{" "}
            {currency.label}
          </p>
        </td>

        <td>
          <p>Voted against</p>
          <p className="yellowText">{votedAgainst ? votedAgainst : 0} %</p>
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
