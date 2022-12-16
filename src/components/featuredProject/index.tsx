import Image from "next/image";
import logo from "../../../public/brandmark_blue.svg";
import FeaturedProjectInsights from "../featuredProjectInsights";
import { StatusColor } from "../projectState";
import {
  FeaturedProjectHeader,
  FeaturedProjectLogo,
  FeaturedProjectLogoInner,
  FeaturedProjectName,
  FeaturedProjectsBlockWrapper,
  StateBubble,
} from "./styled";

interface IFeaturedProject {
  project: string;
}

const FeaturedProject = ({ project, ...props }: IFeaturedProject) => {
  return project == "Buidl1" ? (
    <FeaturedProjectsBlockWrapper>
      <FeaturedProjectHeader>
        <FeaturedProjectLogo>
          <FeaturedProjectLogoInner
            src={logo}
            alt={"logo"}
            height={"32px"}
            width={"32px"}
          />
        </FeaturedProjectLogo>
        <FeaturedProjectName>Buidl1 - LCF protocol</FeaturedProjectName>
        <StateBubble statusColor={StatusColor} />
      </FeaturedProjectHeader>
      <FeaturedProjectInsights project={project} />
    </FeaturedProjectsBlockWrapper>
  ) : (
    <FeaturedProjectsBlockWrapper>
      <FeaturedProjectHeader>
        <FeaturedProjectLogo>?</FeaturedProjectLogo>
        <FeaturedProjectName> Your project</FeaturedProjectName>
        <StateBubble statusColor={"#FFC400"} />
      </FeaturedProjectHeader>
      <FeaturedProjectInsights project={project} />
    </FeaturedProjectsBlockWrapper>
  );
};

export default FeaturedProject;
