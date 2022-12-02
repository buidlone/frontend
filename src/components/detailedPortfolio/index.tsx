
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Accordion from "../accordion";
import Web3Context from "../../context/web3Context";
import { getIndividualInvestedAmount } from "../../web3/getIndividualInvestedAmount";
import { isInvestingAllowed } from "../../web3/isInvestingAllowed";
import ProjectState, { StatusColor } from "../projectState";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { stopProject } from "../../web3/stopProject";
import { isStopAllowed } from "../../web3/isStopAllowed";
import LogoBuidl from "../../../public/logoNew.svg";
import { AccordionButtonIcon } from "../accordionContent/styled";
import UserInvesmentHistory from "../userInvestmentHistory";
import { StatusBubble, TableButton } from "../activeBlock/styled";

const items = [
    {
        name: "Investment details",
        content: <UserInvesmentHistory />,
    },
];

const DetailedPortfolio = ({
    setIsShownStop,
    setIsShownWrong,
}: any) => {
    const {
        projectState,
        totalInvested,
        hardCap,
        milestones,
        currentMilestone,
    } = useContext(LoadedValuesContext);
    const [stopDisabled, setStopDisabled] = useState(false);
    const [isAllowed, setIsAllowed] = useState(true);
    const milestonePercentage = currentMilestone * 100 / milestones.length;

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
        setStopDisabled(
            isStopAllowed(projectState, currentMilestone, address, web3Provider)
        );
    }, []);

    useEffect(() => {
        if (web3Provider) {
            setStopDisabled(false);
        } else {
            setStopDisabled(true);
        }
    }, [web3Provider]);

    return (
        <>
            <tr>
                <td>
                    <p>Status</p>
                    <p className="greenText flex" style={{ gap: "10px" }}>
                        {" "}
                        <StatusBubble color={StatusColor} style={{ position: "unset" }} />  <ProjectState />
                    </p>
                </td>
                <td>
                    <p>Received / Reserved</p>
                    <p className="blueText">34 000 BDL / 15 000 BDL</p>
                </td>
                <td>
                    <p>Refund if failed</p>
                    <p className="blueText">50 000 000 BDL</p>
                </td>
                <td>
                    <TableButton disabled className="redeemBtn">Redeem funds</TableButton>
                </td>
            </tr>

            <tr>
                <td>
                    <p>Completed</p>
                    <p className="greenText">{milestonePercentage} %</p>
                </td>
                <td>
                    <p>Used investments</p>
                    <p className="greenText">544 USDT</p>
                </td>

                <td>
                    <p>Voted against</p>
                    <p className="greenText">544 USDT</p>
                </td>



                <td>
                    <TableButton
                        disabled={stopDisabled}
                        className="stopBtn"
                        onClick={handleStop}
                    >
                        STOP
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