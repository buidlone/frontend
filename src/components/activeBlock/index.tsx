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
import ProjectContext from "../../context/projectContext";
import TokenStreamTable from "../tokenStreamTable";
import Accordion from "../accordion";
import { InlineWrapper } from "../timelineBlock/styled";
import InvestModal from "../investModal";
import Modal from "../modal";
import Web3Context from "../../context/web3Context";
import { isInvestingAllowed } from "../../web3/isInvestingAllowed";
import { toast } from "react-toastify";
import ProjectState from "../projectState";

const items = [
  {
    name: "Your detailed project token stream",
    content: <TokenStreamTable assets />,
  },
];

const ActiveBlock = () => {
  const featuredProject = useContext(ProjectContext);

  const [flip1, setFlip1] = useState(true);
  const [flip2, setFlip2] = useState(true);
  const [flip3, setFlip3] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const { web3Provider, connect } = useContext(Web3Context);

  const handleClick = async () => {
    const isAllowed = await isInvestingAllowed();
    if (isAllowed) {
      web3Provider && setShowModal(true);
    } else {
      toast.info("Investing period is over");
    }
  };

  const handleConnectClick = async () => {
    const isAllowed = await isInvestingAllowed();
    if (isAllowed) {
      if (connect) {
        const isConnected = await connect();
        typeof isConnected !== "boolean" && setShowModal(true);
      }
    } else {
      toast.info("Investing period is over");
    }
  };

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
          <th>Stage</th>
          <th>Funds</th>
          <th>Project tokens</th>
          <th>Voting</th>
          <th>State</th>
        </thead>
        <tbody>
          <tr>
            <td className="underlined blue bigger">Buidl1</td>
            <td className="white bigger">1/60</td>
            <td
              onMouseOver={showFunds}
              onMouseOut={showFunds}
              className="green flippable"
            >
              {flip1 ? "1245ETH" : "12ETH"}{" "}
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
