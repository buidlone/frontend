import { useContext } from "react";
import logo from "../../../public/brandmark_blue.svg";
import LoadedValuesContext from "../../context/loadedValuesContext";
import FeaturedProjectInsights from "../featuredProjectInsights";
import { Spinner } from "../navbar/styled";
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
  const { projectState } = useContext(LoadedValuesContext);

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
        {projectState ? (
          <StateBubble statusColor={StatusColor({ projectState })} />
        ) : (
          <Spinner />
        )}
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
