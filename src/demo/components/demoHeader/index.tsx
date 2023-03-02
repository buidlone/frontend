import Link from "next/link";
import { useContext } from "react";
import { Container } from "../../../../styles/Container";
import { Divider } from "../../../components/buidl1Header/styled";
import { CurrentTask } from "../../../interfaces/enums/DemoTaskEnums";
import DemoMockDataContext from "../../context/demoMockDataContext";
import DemoStateContext from "../../context/demoStateContext";
import DemoTaskContext from "../../context/demoTaskContext";
import useRealTimeFlow from "../../hooks/useRealTimeFlow";
import DemoEnvironment from "../demoEnvironment.tsx";
import { RoundButton } from "../demoMessagesModal/styled";
import {
  BottomInline,
  DemoBackgroundBlur,
  DemoHeaderSection,
  DemoHeaderText,
  DemoPersonalInfo,
  DemoPersonalValue,
  ExitLink,
  Wallet,
} from "./styled";

const DemoHeader = () => {
  const { setIsDemo } = useContext(DemoStateContext);
  const {
    mockData: {
      userValues: { balance },
      currency,
      tokenCurrency,
    },
  } = useContext(DemoMockDataContext);
  const { completedTasks } = useContext(DemoTaskContext);
  const { newRewards } = useRealTimeFlow();

  return (
    <>
      <DemoBackgroundBlur>
        <Container>
          <DemoHeaderSection>
            <Link href="/" passHref>
              <ExitLink
                onClick={() => setIsDemo(false)}
              >{`< Exit Demo`}</ExitLink>
            </Link>

            <DemoHeaderText>
              Complete 4 steps to become a buiDLer legend
            </DemoHeaderText>
            <DemoEnvironment />
            <BottomInline>
              <DemoPersonalInfo className="balance">
                <>
                  <Wallet className="material-icons">wallet</Wallet>
                  Your balance:{" "}
                  <DemoPersonalValue className="balance">
                    {balance.toLocaleString("fr-FR")} {currency}{" "}
                    {[
                      CurrentTask.INVEST,
                      CurrentTask.INVESTIGATE,
                      CurrentTask.EVACUATE,
                    ].every((value) => completedTasks.includes(value)) &&
                      "REFUNDED"}
                  </DemoPersonalValue>
                </>
              </DemoPersonalInfo>
              {completedTasks.includes(CurrentTask.EVACUATE) && (
                <>
                  <DemoPersonalInfo className="reward" active>
                    Your reward:
                    <DemoPersonalValue className="reward bigger" active>
                      {" "}
                      {newRewards.toFixed(4)} {tokenCurrency}
                    </DemoPersonalValue>
                  </DemoPersonalInfo>
                  <RoundButton feedback className="filled">
                    Interested?
                  </RoundButton>
                </>
              )}
            </BottomInline>
          </DemoHeaderSection>
        </Container>
      </DemoBackgroundBlur>
      <Divider />
    </>
  );
};

export default DemoHeader;
