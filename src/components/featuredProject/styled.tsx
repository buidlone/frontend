import styled, { css } from "styled-components";
import { BlockWrapper } from "../fundingBlock/styled";

interface Props {
  active?: boolean;
}

export const FeaturedProjectsBlockWrapper = styled(BlockWrapper)`
  height: 29.125rem;
  width: 35%;
  padding: 1.1rem;
  background: rgba(34, 34, 53, 1) 0% 0% no-repeat padding-box;
  opacity: 0.85;
  margin-bottom: 35%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const StateBubble = styled.div<Props>`
  ${(props) => {
    if (props.active) {
      return `
      background: #29F7DF 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 10px #FFED89;
        
      `;
    } else {
      return `
      background: #FFC400 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 10px #FFC400;
      `;
    }
  }}

  opacity: 1;
  border-radius: 50%;
  width: 0.938rem;
  height: 0.938rem;
`;

export const FeaturedProjectLogo = styled.div`
  width: 4.375rem;
  height: 4.375rem;
  background-color: #13131d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 196, 255, 0.85);
  font-size: 26px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
`;
export const FeaturedProjectHeader = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  gap: 1.375rem;

  & > ${StateBubble} {
    margin-left: auto;
    margin-top: 1%;
    margin-right: 1%;
    align-self: flex-start;
  }
`;

export const FeaturedProjectName = styled.div`
  font-size: 24px;
  color: rgba(255, 255, 255, 1);
  font-family: "space Grotesk", sans-serif;
  font-weight: 400;
`;


