import Image from "next/image";
import logo from "../../../public/brandmark_blue.svg";
import FeaturedProjectInsights from "../featuredProjectInsights";
import {
  FeaturedProjectHeader,
  FeaturedProjectLogo,
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
          <Image src={logo} alt={"logo"} height={"32px"} width={"32px"} />
        </FeaturedProjectLogo>
        <FeaturedProjectName>Buidl1 - LCF protocol</FeaturedProjectName>
        <StateBubble active />
      </FeaturedProjectHeader>
      <FeaturedProjectInsights project={project}/>
    </FeaturedProjectsBlockWrapper>
  ) : (
    <FeaturedProjectsBlockWrapper>
      <FeaturedProjectHeader>
        <FeaturedProjectLogo>?</FeaturedProjectLogo>
        <FeaturedProjectName> Your project</FeaturedProjectName>
        <StateBubble />
      </FeaturedProjectHeader>
      <FeaturedProjectInsights project={project}/>
    </FeaturedProjectsBlockWrapper>
  );
};

export default FeaturedProject;
