import { useContext, useState } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import DiscordImg from "../../../public/DiscordSmall.png";
import { useRouter } from "next/router";

import {
  BottomSection,
  DescriptionSection,
  LinkButton,
  LinkWrapper,
  NumbersInsights,
  NumbersSection,
  ProjectInfoWrapper,
  WhitepaperLink,
} from "./styled";
import Image from "next/image";
import { TableLink } from "../activeBlock/styled";
import Link from "next/link";
import { ethers } from "ethers";
import useCountdown from "../../hooks/useCountdown";
import ProgressInsights from "../progressInsights";
import Modal from "../modal";
import DemoModal from "../../demo/components/demoModal";
import { HideForMobile } from "../../../styles/Container";

interface IFeaturedProject {
  project: string;
}

const FeaturedProjectInsights = ({ project, ...props }: IFeaturedProject) => {
  const router = useRouter();
  const { softCap, hardCap, currency, milestones } =
    useContext(LoadedValuesContext);
  const projectDays = useCountdown(
    milestones[milestones.length - 1]?.endTime,
    milestones[0]?.startTime
  );

  const [showModal, setShowModal] = useState(false);

  return project == "Buidl1" ? (
    <ProjectInfoWrapper>
      <NumbersInsights>
        <NumbersSection>
          <div className="names">Soft / Hard</div>
          <div className="names">Timeline</div>
        </NumbersSection>
        <NumbersSection>
          <div className="numbers">
            {ethers.utils.formatEther(softCap.amount)} -{" "}
            {ethers.utils.formatEther(hardCap)} {currency.label}
          </div>
          <div className="numbers">
            {projectDays.timerDays ? projectDays.timerDays : 0} days
          </div>
        </NumbersSection>
      </NumbersInsights>
      <ProgressInsights />
      <DescriptionSection>
        To simply put it - we are a protocol and launchpad that secures invested
        capital in web3 projects. Read more on{" "}
        <WhitepaperLink target="_blank" href="https://docs.buidl.one/">
          Whitepaper
        </WhitepaperLink>
        .
      </DescriptionSection>
      <BottomSection>
        <LinkWrapper>
          <Image
            src={DiscordImg}
            alt={"Discord logo"}
            height={"26px"}
            width={"26px"}
          />
          <TableLink
            href="https://discord.com/channels/998519974714941480/998519974714941483"
            target="_blank"
          >
            Project discussion
          </TableLink>
        </LinkWrapper>

        <Link href="/buidl1" passHref>
          <LinkButton className={router.pathname == "/buidl1" ? "active" : ""}>
            View
          </LinkButton>
        </Link>
      </BottomSection>
    </ProjectInfoWrapper>
  ) : (
    <ProjectInfoWrapper>
      {" "}
      <DescriptionSection className="newProject">
        This could be us but you playin
      </DescriptionSection>
      <BottomSection>
        <LinkButton href="mailto:info@buidl.one" target="_blank">
          Contact us
        </LinkButton>
        <HideForMobile>
          <LinkButton onClick={() => setShowModal(true)} className="demo">
            Play Demo mode
          </LinkButton>
        </HideForMobile>
        <Modal show={showModal}>
          <DemoModal onClose={() => setShowModal(false)} />
        </Modal>
      </BottomSection>
    </ProjectInfoWrapper>
  );
};

export default FeaturedProjectInsights;
