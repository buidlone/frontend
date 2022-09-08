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

const items = [
  {
    name: "Your detailed project token stream",
    content: <TokenStreamTable assets />,
  },
];

const ActiveBlock = () => {
  const featuredProject = useContext(ProjectContext);
  const [showValue, setShowValue] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowValue(!showValue);
    }, 1000);

    return () => clearInterval(interval);
  }, [showValue]);

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
            {showValue ? (
              <>
                <td className="green">1245ETH</td>{" "}
                <td className="blue">125/5000 DPP</td>
                <td className="orange bigger">5%</td>
              </>
            ) : (
              <>
                <td className="green">12ETH</td>{" "}
                <td className="blue">125 DPP</td>
                <td className="orange bigger">5</td>
              </>
            )}

            <td className="green smaller">Ongoing</td>
          </tr>
          <tr>
            <td />
            <td />
            {showValue ? (
              <>
                {" "}
                <td>Invested</td>
                <td>Tokens collected</td>{" "}
              </>
            ) : (
              <>
                <td>In use</td>
                <td>Tokens claimed</td>
              </>
            )}

            <td />
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
          <TableButton className="invBtn" onClick={() => setShowModal(true)}>
            Invest
          </TableButton>
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
