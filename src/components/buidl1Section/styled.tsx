import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import breakpoints from "../../../styles/constants";

export const InfoCard = styled.div`
  background: #2e314d 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000029;
  border-radius: 13px;
  opacity: 1;
  flex-basis: 48.5%;
  min-height: 291px;
`;

export const Buidl1SectionWrapper = styled.div`
  background: #1f233c 0% 0% no-repeat padding-box;
  border-radius: 27px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 54px;
  margin-bottom: 100px;

  .longCard {
    flex-basis: 100%;
    min-height: 250px;

    & > div {
      padding-right: 0px;
    }
  }

  @media screen and (max-width: 1286px) {
    & > ${InfoCard} {
      max-width: 100%;
      flex-basis: 100%;
      justify-content: center;
      padding-right: 80px;

      @media screen and (${breakpoints.Device.mobile}) {
        padding-right: 0px;
      }
    }
  }

  @media screen and (${breakpoints.Device.mobile}) {
    padding: 0px;
    display: block;
    background: transparent;
    width: 100%;
    margin-bottom: 0px;
  }
`;

export const CarouselStyle = styled(Carousel)`
  height: 400px;
  .carousel .control-dots .dot {
    width: 13px;
    height: 13px;
  }

  .carousel.carousel-slider {
    height: 420px;
  }
`;

export const TextWrapper = styled.div`
  height: 80%;
  width: 90%;
  margin: 35px 50px;
  padding-right: 80px;

  @media screen and (${breakpoints.Device.mobile}) {
    padding: 20px !important;
    margin: 0;
    width: 100%;
  }
`;

export const Title = styled.text`
  display: inline-block;
  text-align: left;
  font-size: 28px;
  color: #ffffff;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  margin: 0;
  opacity: 1;

  @media screen and (${breakpoints.Device.mobile}) {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  display: block;
  text-align: left;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 20px;
  color: #d6d6d6;
  margin: 1.438rem auto;

  @media screen and (${breakpoints.Device.mobile}) {
    font-size: 16px;
    margin-bottom: 0px;
    margin-top: 0.5px;
  }
`;

export const AboutLink = styled.a`
  display: block;
  text-align: left;
  text-decoration: underline;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 20px;
  color: #00c4ff;
  opacity: 1;
  margin-bottom: 10px;
  cursor: pointer;
`;
