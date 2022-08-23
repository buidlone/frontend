import AboutSection from '../src/components/aboutSection';
import ProgressSection from '../src/components/progressSection';
import { FeaturesSec } from '../src/components/featuredProjectsSection/styled';
import FundingBlock from '../src/components/fundingBlock';
import ProjectHeader from '../src/components/projectHeader';
import { BgImage, Container } from '../styles/Container';

const Buidl1 = () => {
  return (
    <Container>
      <BgImage isFixed />
      <ProjectHeader
        text={'Project 1 - BUIDL 1 - Self raising capital'}
        stage={'STAGE 1'}
      />
      <FeaturesSec>
        <FundingBlock />
        <FundingBlock />
      </FeaturesSec>
      <ProgressSection />
      <AboutSection />
    </Container>
  );
};

export default Buidl1;
