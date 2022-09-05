import styled, { css } from "styled-components";
import { BlockWrapper } from "../fundingBlock/styled";

export const FeatureTitle = styled.p`
  color: rgba(255, 255, 255, 1);
  text-align: center;
  font-size: 22px;
  margin: auto;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 300;
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

export const FeaturedProjectsBlockWrapper = styled(BlockWrapper)`
  height: 291px;
  width: 600px;
  padding: 50px;
  background: rgba(34, 34, 53, 1) 0% 0% no-repeat padding-box;
  opacity: 0.85;
  margin-bottom: 3%;
`;

export const ProjectName = styled.p`
  font-size: 30px;
  color: rgba(255, 255, 255, 1);
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 300;
  margin: 0;
`;
