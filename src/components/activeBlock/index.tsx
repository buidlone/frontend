import {
  ActiveBlockWrapper,
  Table,
  RoundImgWrapper,
  StatusBubble,
} from "./styled";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Web3Context from "../../context/web3Context";
import { getIndividualInvestedAmount } from "../../web3/getIndividualInvestedAmount";
import { StatusColor } from "../projectState";
import LoadedValuesContext from "../../context/loadedValuesContext";
import LogoBuidl from "../../../public/logoNew.svg";
import { AccordionButtonIcon } from "../accordionContent/styled";
import DetailedPortfolio from "../detailedPortfolio";
import { getVotingPower } from "../../web3/getVotingPower";

const ActiveBlock = ({ setIsShownStop, setIsShownWrong }: any) => {
  const [
    totalIndividualInvestedToProject,
    setTotalIndividualInvestedToProject,
  ] = useState(0);
  const { currency } = useContext(LoadedValuesContext);
  const [showMore, setShowMore] = useState(false);
  const [votingPower, setVotingPower] = useState("0");
  const { web3Provider, address } = useContext(Web3Context);

  useEffect(() => {
    if (web3Provider) {
      getIndividualInvestedAmount(web3Provider, address).then((data: any) => {
        setTotalIndividualInvestedToProject(data.totalAmountInvested);
      });
      getVotingPower(web3Provider, address).then((data: any) => {
        setVotingPower(data);
      });
    } else {
      setTotalIndividualInvestedToProject(0);
    }
  });

  return (
    <ActiveBlockWrapper>
      <Table id="main" cellSpacing="0" className="colored">
        <thead>
          <th>Project</th>
          <th>Launchpad</th>
          <th>Invested</th>
          <th>Voting power</th>
        </thead>
        <tbody>
          <tr style={{ background: "rgba(46, 49, 77, 0.1)" }}>
            <td className="underlined blue bigger flex">
              <RoundImgWrapper>
                <StatusBubble color={StatusColor} />
                <Image
                  src={LogoBuidl}
                  alt="buidl logo"
                  width="20px"
                  height="20px"
                />
              </RoundImgWrapper>
              Buidl1 protocol
            </td>
            <td className="underlined blue bigger ">buidl.one</td>
            <td className="greenText bigger">
              {totalIndividualInvestedToProject} {currency.label}
            </td>

            <td className="flexGap yellowText bigger">
              {votingPower} %
              <AccordionButtonIcon
                style={{
                  color: "white",
                  right: "20px",
                  position: "absolute",
                  top: "35px",
                }}
                onClick={() => setShowMore(!showMore)}
                isActive={showMore}
                className="material-icons"
              >
                expand_more
              </AccordionButtonIcon>
            </td>
          </tr>

          {showMore && (
            <DetailedPortfolio
              setIsShownStop={setIsShownStop}
              setIsShownWrong={setIsShownWrong}
            />
          )}
        </tbody>
      </Table>
    </ActiveBlockWrapper>
  );
};

export default ActiveBlock;
