import { BgImage, Container } from '../styles/Container';
import ProjectsInfoSection from '../src/components/projectsInfoSection';
import FeaturedProjectsSection from '../src/components/featuredProjectsSection';

const Projects = () => {
  return (
    <Container>
      <BgImage />
      <ProjectsInfoSection
        text={'Yep. Buidl1 also needs to be build'}
        mainText={
          'In order to help investors choose and connect with upcoming projects - BUIDL1 has to build itself up and earn trust from new partnered projects. In order to achieve these goals, we aim to be transparent and provide reliable services, in hopes to create a prospering and supportive community.'
        }
        moto={
          'Thank you for your support and understanding, BUIDL1 depends on you - fellow builders!'
        }
      />
      <FeaturedProjectsSection />
    </Container>
  );
};

export default Projects;
