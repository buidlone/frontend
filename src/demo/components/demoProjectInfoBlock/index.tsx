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
import { useContext } from "react";
import DemoMockDataContext from "../../context/demoMockDataContext";
import ProjectStateLabel, {
  StatusColor,
} from "../../../components/projectState";
import DemoTaskContext from "../../context/demoTaskContext";

import { CurrentTask } from "../../../interfaces/enums/DemoTaskEnums";
import useRealTimeFlow from "../../hooks/useRealTimeFlow";
import { ProjectState } from "../../../interfaces/enums/ProjectStateEnums";

const DemoProjectInfoBlock = () => {
  const {
    mockData: {
      userValues: { investment, reward, power },
      currency,
      tokenCurrency,
    },
  } = useContext(DemoMockDataContext);

  const { tasks, currentTask, completedTasks } = useContext(DemoTaskContext);
  const projectState = tasks[currentTask].projectState;
  const statusColor = StatusColor({ projectState });
  const active =
    completedTasks.includes(CurrentTask.INVEST) &&
    projectState !== ProjectState.TERMINATED_BY_VOTING;

  const [newInvestment, newReward] = useRealTimeFlow();

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
          <DemoPersonalValue className="investment" active={active}>
            {investment ? investment.toLocaleString("fr-FR") : "0.0000"}{" "}
            {currency}
          </DemoPersonalValue>
        </DemoPersonalInfo>
        <DemoPersonalInfo className="reward" active={active}>
          Your reward:{" "}
          <DemoPersonalValue className="reward" active={active}>
            {" "}
            {reward ? reward.toLocaleString("fr-FR") : "0"} {tokenCurrency}
          </DemoPersonalValue>
        </DemoPersonalInfo>
        <DemoPersonalInfo className="power" active={active}>
          Your power:{" "}
          <DemoPersonalValue className="power" active={active}>
            {" "}
            {power ? power.toFixed(2) : "0.00"} %
          </DemoPersonalValue>
        </DemoPersonalInfo>
      </InlineRow>
    </InfoBlockWrapper>
  );
};

export default DemoProjectInfoBlock;
