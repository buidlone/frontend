import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useContext } from "react";
import { LinkButton } from "../../../components/featuredProjectInsights/styled";
import DemoStateContext from "../../context/demoStateContext";
import {
  BottomSection,
  Button,
  DModalWrapper,
  Header,
  MiddleSection,
  MiddleSectionContent,
  StepBubble,
  StepList,
  StepListItem,
  Text,
} from "./styled";

interface IDemoProps {
  onClose(): void;
}

const DemoModal = ({ onClose }: IDemoProps) => {
  const { setIsDemo } = useContext(DemoStateContext);
  const router = useRouter();

  const closeDemo = () => {
    onClose();
    setIsDemo(false);
  };

  const launchDemo = () => {
    setIsDemo(true);
    router.push("/demo");
  };

  return (
    <DModalWrapper>
      <Header>Hello traveler</Header>
      <MiddleSection>
        <MiddleSectionContent>
          <Text>You are about to enter demo mode</Text>
          <Text>
            In 4 <span className="orange">easy</span> steps you will become a
            true <span className="blue">BUIDLER legend</span>
          </Text>
          <StepList>
            <StepListItem>
              <StepBubble />
              <Text>Invest</Text>
            </StepListItem>
            <StepListItem>
              <StepBubble />
              <Text>Inspect</Text>
            </StepListItem>
            <StepListItem>
              <StepBubble />
              <Text>Refund</Text>
            </StepListItem>
            <StepListItem>
              <StepBubble />
              <Text>Rate and review</Text>
            </StepListItem>
          </StepList>
        </MiddleSectionContent>
        <MiddleSectionContent>
          <Text className="grey">3-5 minutes</Text>
        </MiddleSectionContent>
      </MiddleSection>
      <BottomSection>
        <Button className="back" onClick={closeDemo}>
          Back to safety
        </Button>
        <Button className="start" onClick={launchDemo}>
          Start your adventure
        </Button>
        {/* <Link href="/demo" passHref>
          <LinkButton>View</LinkButton>
        </Link> */}
      </BottomSection>
    </DModalWrapper>
  );
};

export default DemoModal;
