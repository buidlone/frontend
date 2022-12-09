import { useContext } from "react";
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
} from "./styled";
import Image from "next/image";
import { TableLink } from "../activeBlock/styled";
import Link from "next/link";
import { ethers } from "ethers";
import useCountdown from "../../hooks/useCountdown";
import ProgressInsights from "../progressInsights";

interface IFeaturedProject {
  project: string;
}

const FeaturedProjectInsights = ({ project, ...props }: IFeaturedProject) => {
  const router = useRouter();
  const { softCap, hardCap, currency, milestones } =
    useContext(LoadedValuesContext);
  const projectDays = useCountdown(
    milestones[milestones.length - 1]?.endDate,
    milestones[0]?.startDate
  );
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu dui id
        felis tempor fringilla vel at lacus. Nunc velit ante, pharetra vel justo
        non, auctor impLorem ipsum ….. vel at lacus. Nunc velerdiet sem. Sed vel
        purus vehicula,
      </DescriptionSection>
      <BottomSection>
        <LinkWrapper>
          <Image
            src={DiscordImg}
            alt={"Discord logo"}
            height={"26px"}
            width={"26px"}
          />
          <TableLink>Project discussion</TableLink>
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
        <LinkButton>Contact us</LinkButton>
      </BottomSection>
    </ProjectInfoWrapper>
  );
};

export default FeaturedProjectInsights;
