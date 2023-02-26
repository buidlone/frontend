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

const DemoProjectInfoBlock = () => {
  const {
    mockData: {
      userValues: { investment, reward, power },
      currency,
      tokenCurrency,
    },
  } = useContext(DemoMockDataContext);

  const { tasks, currentTask } = useContext(DemoTaskContext);
  const projectState = tasks[currentTask].projectState;
  const statusColor = StatusColor({ projectState });

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
            <ProjectStateLabel projectState={projectState} />
          </DemoRound>
        </DemoRoundSection>
      </InsideBlockWrapper>
      <InlineRow>
        <DemoPersonalInfo>
          Your investment:{" "}
          <DemoPersonalValue className="investment">
            {investment ? investment.toLocaleString("fr-FR") : "0.0000"}{" "}
            {currency}
          </DemoPersonalValue>
        </DemoPersonalInfo>
        <DemoPersonalInfo>
          Your reward:{" "}
          <DemoPersonalValue className="reward">
            {" "}
            {reward ? reward.toLocaleString("fr-FR") : "0"} {tokenCurrency}
          </DemoPersonalValue>
        </DemoPersonalInfo>
        <DemoPersonalInfo>
          Your power:{" "}
          <DemoPersonalValue className="power">
            {" "}
            {power ? power.toFixed(2) : "0.00"} %
          </DemoPersonalValue>
        </DemoPersonalInfo>
      </InlineRow>
    </InfoBlockWrapper>
  );
};

export default DemoProjectInfoBlock;
