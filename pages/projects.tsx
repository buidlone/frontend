import { BgImage, Container } from "../styles/Container";
import ProjectsInfoSection from "../src/components/projectsInfoSection";
import FeaturedProjectsSection from "../src/components/featuredProjectsSection";

import FooterSection from "../src/components/footerSection";
import MobileFooter from "../src/components/mobileFooter";

const Projects = () => {
  return (
    <>
      <BgImage isFixed />
      <Container>
        <ProjectsInfoSection text={"Yes. Buidl1 also needs to be build"} />
        <FeaturedProjectsSection />
      </Container>
      <MobileFooter />
      <FooterSection />
    </>
  );
};

export default Projects;

