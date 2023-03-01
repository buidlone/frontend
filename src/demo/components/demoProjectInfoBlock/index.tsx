import { DemoPersonalInfo, DemoPersonalValue } from "../demoHeader/styled";
import {
  DemoProjectDetails,
  DemoProjectLogo,
  DemoProjectLogoInner,
  DemoRound,
  DemoRoundSection,
  InfoBlockWrapper,
  InlineRow,
  InsideBlockWrapper,
} from "./styled";
import logo from "../../../../public/demo_logo.png";
import { useContext, useEffect, useRef, useState } from "react";
import DemoMockDataContext from "../../context/demoMockDataContext";
import ProjectStateLabel, {
  StatusColor,
} from "../../../components/projectState";
import DemoTaskContext from "../../context/demoTaskContext";

import { CurrentTask } from "../../../interfaces/enums/DemoTaskEnums";
import useRealTimeFlow from "../../hooks/useRealTimeFlow";

const DemoProjectInfoBlock = () => {
  const {
    mockData,
    mockData: {
      userValues,
      userValues: { investment, reward, power },
      currency,
      tokenCurrency,
    },
    setMockData,
  } = useContext(DemoMockDataContext);

  const { tasks, currentTask, completedTasks } = useContext(DemoTaskContext);
  const projectState = tasks[currentTask].projectState;
  const statusColor = StatusColor({ projectState });
  const active =
    completedTasks.includes(CurrentTask.INVEST) &&
    !completedTasks.includes(CurrentTask.REVIEW);

  //TODO: bug in voting chat modal
  //useRealTimeFlow();
 
  

  return (
    <InfoBlockWrapper>
      <InsideBlockWrapper>
        <DemoProjectLogo>
          <DemoProjectLogoInner
            src={logo}
            alt={"logo"}
            height={"77px"}
            width={"77px"}
          />
        </DemoProjectLogo>
        <DemoProjectDetails>
          <p className="label">Project:</p>
          <p className="name">LMB Lord Enterprises</p>
          <p className="details">
            {`LMB Lord Enterprises is a cutting-edge and visionary company at the
            forefront of innovation. We’re here to disrupt the industry and
            revolutionize the world of business.`}
          </p>
        </DemoProjectDetails>
        <DemoRoundSection>
          <DemoRound statusColor={statusColor}>
            <ProjectStateLabel projectState={projectState} isDemoEnv />
          </DemoRound>
        </DemoRoundSection>
      </InsideBlockWrapper>
      <InlineRow>
        <DemoPersonalInfo className="investment" active={active}>
          Your investment:{" "}
          <DemoPersonalValue>
            {investment ? investment.toLocaleString("fr-FR") : "0.0000"}{" "}
            {currency}
          </DemoPersonalValue>
        </DemoPersonalInfo>
        <DemoPersonalInfo className="reward" active={active}>
          Your reward:{" "}
          <DemoPersonalValue>
            {" "}
            {reward ? reward.toLocaleString("fr-FR") : "0"} {tokenCurrency}
          </DemoPersonalValue>
        </DemoPersonalInfo>
        <DemoPersonalInfo className="power" active={active}>
          Your power:{" "}
          <DemoPersonalValue>
            {" "}
            {power ? power.toFixed(2) : "0.00"} %
          </DemoPersonalValue>
        </DemoPersonalInfo>
      </InlineRow>
    </InfoBlockWrapper>
  );
};

export default DemoProjectInfoBlock;
