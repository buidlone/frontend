import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Buidl1SectionWrapper,
  InfoCard,
  Text,
  TextWrapper,
  Title,
  AboutLink,
  CarouselStyle,
} from "./styled";

const Buidl1Section = () => {
  return (
    <Buidl1SectionWrapper>
      <InfoCard className="longCard">
        <TextWrapper>
          <Title>Buidl 1</Title>
          <Text>
            With experience from previous startups and other various projects,
            Buidl1 became the primary goal to set a standard for a user friendly
            and technologically sound solution for launchpads. We are the first
            to implement Linear Cash Flow (a blockchain protocol that mitigates
            investment risk and stabilizes project funding) while pursuing
            reliability in smart contracts that vet projects before they receive
            any funding. <br />
            Our young team of passionate developers is constantly working on
            improvements and further project development - excited and burning
            to share their knowledge with you. <br />
            <b>Buidl on!</b>
          </Text>
        </TextWrapper>
      </InfoCard>
      <InfoCard>
        <TextWrapper>
          <Title>About Us</Title>
          <Text>
            To simply put it - we are a protocol and launchpad that secures
            invested capital in web3 projects. Read more on:
          </Text>
          <AboutLink target="_blank" href="https://docs.buidl.one/">
            WhitePaper
          </AboutLink>
          <AboutLink target="_blank" href="https://buidl.one/">
            www.buidl.com
          </AboutLink>
          <AboutLink target="_blank" href="https://www.superhow.com/">
            superhow.com
          </AboutLink>
        </TextWrapper>
      </InfoCard>
      <InfoCard>
        <TextWrapper>
          <Title>Mission</Title>
          <Text>
            We strive to provide a voice to credible and promising new projects
            on our platform, while maintaining a transparent and reliable
            exchange with future investors.
          </Text>
        </TextWrapper>
      </InfoCard>
    </Buidl1SectionWrapper>
  );
};

export default Buidl1Section;

