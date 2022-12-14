import styled from "styled-components";
import breakpoints from "../../../styles/constants";

export const FeatureTitle = styled.p`
  color: rgba(255, 255, 255, 1);
  text-align: center;
  font-size: 22px;
  margin: auto;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 300;
  @media screen and ${breakpoints.Device.mobile} {
    display: none;
  }
`;

export const FeatureTextWrapper = styled.div`
  margin-bottom: 3rem;
  opacity: 0.85;
`;

export const FeaturesSec = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (max-width: 1394px) {
    justify-content: center;
  }
`;

