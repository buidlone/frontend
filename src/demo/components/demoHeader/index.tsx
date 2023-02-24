import Link from "next/link";
import { useContext } from "react";
import { Container } from "../../../../styles/Container";
import { Divider } from "../../../components/buidl1Header/styled";
import DemoMockDataContext from "../../context/demoMockDataContext";
import DemoStateContext from "../../context/demoStateContext";
import DemoEnvironment from "../demoEnvironment.tsx";

import {
  DemoBackgroundBlur,
  DemoHeaderSection,
  DemoHeaderText,
  DemoPersonalInfo,
  DemoPersonalValue,
  ExitLink,
} from "./styled";

const DemoHeader = () => {
  const { setIsDemo } = useContext(DemoStateContext);
  const {
    mockData: {
      userValues: { balance },
      currency,
    },
  } = useContext(DemoMockDataContext);

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
            <DemoPersonalInfo className="balance">
              Your balance:{" "}
              <DemoPersonalValue className="balance">
                {balance.toLocaleString("fr-FR")} {currency}
              </DemoPersonalValue>
            </DemoPersonalInfo>
          </DemoHeaderSection>
        </Container>
      </DemoBackgroundBlur>
      <Divider />
    </>
  );
};

export default DemoHeader;
