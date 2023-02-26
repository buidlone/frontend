import {
  ActiveBlockWrapper,
  Table,
  RoundImgWrapper,
  StatusBubble,
} from "./styled";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Web3Context from "../../context/web3Context";
import { StatusColor } from "../projectState";
import LoadedValuesContext from "../../context/loadedValuesContext";
import LogoBuidl from "../../../public/logoNew.svg";
import { AccordionButtonIcon } from "../accordionContent/styled";
import DetailedPortfolio from "../detailedPortfolio";
import { getVotingPower } from "../../web3/getVotingPower";
import InvestorValuesContext from "../../context/investorContext";
import { roundApprox } from "../../utils/roundValue";

const ActiveBlock = ({ setIsShownStop, setIsShownWrong }: any) => {
  const { currency, totalInvested, projectState } =
    useContext(LoadedValuesContext);
  const [showMore, setShowMore] = useState(false);
  const [votingPower, setVotingPower] = useState("0");
  const { web3Provider, address } = useContext(Web3Context);
  const statusColor = StatusColor({ projectState });
  const {
    investorValues: { projectInvestments },
  } = useContext(InvestorValuesContext);

  useEffect(() => {
    if (web3Provider && address) {
      getVotingPower(web3Provider, address).then((data: any) => {
        setVotingPower(data);
      });
    }
  }, [totalInvested._hex, web3Provider, address]);

  return (
    <ActiveBlockWrapper>
      <Table id="main" cellSpacing="0" className="colored">
        <thead>
          <tr className="none">
            <th>Project</th>
            <th>Launchpad</th>
            <th>Invested</th>
            <th>Voting power</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: "rgba(46, 49, 77, 0.1)" }}>
            <td className="blue bigger flex">
              <RoundImgWrapper>
                <StatusBubble color={statusColor && statusColor} />
                <Image
                  src={LogoBuidl}
                  alt="buidl logo"
                  width="20px"
                  height="20px"
                />
              </RoundImgWrapper>
              Buidl1 protocol
            </td>
            <td className="underlined blue bigger ">
              <a href="https://buidl.one/" target="_blank">
                buidl.one
              </a>
            </td>
            <td className="greenText bigger">
              {projectInvestments
                ? roundApprox(projectInvestments.totalInvestedAmount)
                : "0.0000"}{" "}
              {currency.label}
            </td>

            <td className="flexGap yellowText bigger">
              {votingPower ? votingPower : 0} %
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
