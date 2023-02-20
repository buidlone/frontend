import { BgImage, Container, HideForMobile } from "../styles/Container";
import ProjectsInfoSection from "../src/components/projectsInfoSection";
import FeaturedProjectsSection from "../src/components/featuredProjectsSection";
import FooterSection from "../src/components/footerSection";
import Disclaimer from "../src/components/disclaimer";
import Head from "next/head";
import { DesktopDisclaimerContainer } from "../src/components/disclaimer/styled";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Buidl1 | Home</title>
      </Head>

      <BgImage isFixed />

      <Container>
        <DesktopDisclaimerContainer>
          <Disclaimer hideMobile={true} />
        </DesktopDisclaimerContainer>
        <ProjectsInfoSection text={"Yes. Buidl1 also needs to be built"} />
        <Disclaimer hideMobile={false} />
        <FeaturedProjectsSection />
      </Container>

      <FooterSection />
    </>
  );
};

export default Projects;
