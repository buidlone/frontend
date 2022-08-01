import { Container } from '../styles/Container';
import ProjectsInfoSection from '../src/components/projectsInfoSection';
import FeaturedProjectsSection from '../src/components/featuredProjectsSection';

const Projects = () => {
  return (
    <Container>
      <ProjectsInfoSection
        text={'Yep. Buidl1 also needs to be build'}
        mainText={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
        }
        moto={
          'We use our own platform to raise capital. If we can’t trust ourselfs- no one can. That’s how we going to enable Builders to build and investors to trust'
        }
      />
      <FeaturedProjectsSection />
    </Container>
  );
};

export default Projects;
