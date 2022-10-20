import {
  TableButton,
  TableLink,
  ActiveBlockWrapper,
  Table,
  Footer,
  ButtonsWrapper,
} from "./styled";
import DiscordImg from "../../../public/DiscordSmall.png";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import TokenStreamTable from "../tokenStreamTable";
import Accordion from "../accordion";
import { InlineWrapper } from "../timelineBlock/styled";
import InvestModal from "../investModal";
import Modal from "../modal";
import Web3Context from "../../context/web3Context";
import { getIndividualInvestedAmount } from "../../web3/getIndividualInvestedAmount";
import { isInvestingAllowed } from "../../web3/isInvestingAllowed";
import { toast } from "react-toastify";
import ProjectState from "../projectState";
import { getProjectState } from "../../utils/getProjectState";
import LoadedValuesContext from "../../context/loadedValuesContext";

const items = [
  {
    name: "Your detailed project token stream",
    content: <TokenStreamTable assets />,
  },
];

const ActiveBlock = () => {
  const [
    totalIndividualInvestedToProject,
    setTotalIndividualInvestedToProject,
  ] = useState(0);
  const [flip1, setFlip1] = useState(true);
  const [flip2, setFlip2] = useState(true);
  const [flip3, setFlip3] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const {
    projectState,
    totalInvested,
    hardCap,
    currency,
    milestones,
    currentMilestone,
  } = useContext(LoadedValuesContext);

  const { web3Provider, connect, address } = useContext(Web3Context);


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

  useEffect(() => {
    if (web3Provider) {
      getIndividualInvestedAmount(web3Provider, address).then((data: any) => {
        setTotalIndividualInvestedToProject(data.totalAmountInvested);
      });
    } else {
      setTotalIndividualInvestedToProject(0);
    }
  });


  const showFunds = () => {
    setFlip1(!flip1);
  };
  const showTokens = () => {
    setFlip2(!flip2);
  };
  const showVoting = () => {
    setFlip3(!flip3);
  };

  return (
    <ActiveBlockWrapper>
      <Table>
        <thead>
          <th className="bigger">Project</th>
          <th>Milestone</th>
          <th>Funds</th>
          <th>Project tokens</th>
          <th>Voting</th>
          <th>State</th>
        </thead>
        <tbody>
          <tr>
            <td className="underlined blue bigger">Buidl1</td>
            <td className="white bigger">
              {currentMilestone}/{milestones.length}
            </td>
            <td
              onMouseOver={showFunds}
              onMouseOut={showFunds}
              className="green flippable"
            >
              {flip1
                ? `${totalIndividualInvestedToProject} ${currency.label}`
                : `0 ${currency.label}`}
            </td>
            <td
              onMouseOver={showTokens}
              onMouseOut={showTokens}
              className="blue flippable"
            >
              {flip2 ? "125/5000 DPP" : "125 DPP"}
            </td>
            <td
              onMouseOver={showVoting}
              onMouseOut={showVoting}
              className="orange bigger flippable"
            >
              {flip3 ? "5%" : "500 tickets"}
            </td>
            <td>
              <ProjectState />
            </td>
          </tr>
          <tr>
            <td />
            <td />
            <td>{flip1 ? "Invested" : "In use"}</td>
            <td>{flip2 ? "Tokens collected" : "Tokens claimed"}</td> <td />
            <td />
          </tr>
        </tbody>
      </Table>
      <Footer>
        <ButtonsWrapper>
          <InlineWrapper>
            <Image
              src={DiscordImg}
              alt="discord logo"
              height={"26px"}
              width={"26px"}
            />
            <TableLink>Project discussion</TableLink>
          </InlineWrapper>

          <TableButton className="stopBtn">STOP</TableButton>
          <TableButton className="claimBtn">Claim tokens</TableButton>
          {web3Provider ? (
            <>
              <TableButton className="invBtn" onClick={handleClick}>
                Invest
              </TableButton>
            </>
          ) : (
            <>
              <TableButton className="invBtn" onClick={handleConnectClick}>
                Invest
              </TableButton>{" "}
            </>
          )}

          <Modal show={showModal}>
            <InvestModal onClose={() => setShowModal(false)} />
          </Modal>
        </ButtonsWrapper>
        <Accordion items={items} />
      </Footer>
    </ActiveBlockWrapper>
  );
};

export default ActiveBlock;
