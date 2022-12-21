import { BgImage, Container, HideForMobile } from "../styles/Container";
import ProjectsInfoSection from "../src/components/projectsInfoSection";
import FeaturedProjectsSection from "../src/components/featuredProjectsSection";

import FooterSection from "../src/components/footerSection";
import MobileFooter from "../src/components/mobileFooter";
import Disclaimer from "../src/components/disclaimer";

const Projects = () => {
  return (
    <>
      <div style={{ marginTop: "-27px" }}>
        <Disclaimer hideMobile={true} />
      </div>

      <BgImage isFixed />

      <Container>
        <ProjectsInfoSection text={"Yes. Buidl1 also needs to be built"} />
        <Disclaimer hideMobile={false} />
        <FeaturedProjectsSection />
      </Container>

      <FooterSection />
    </>
  );
};

export default Projects;

