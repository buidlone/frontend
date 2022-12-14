import styled, { css } from "styled-components";

interface Props {
  active?: boolean;
  suspended?: boolean;
}

export const FundsSection = styled.div`
  cursor: default;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.7rem;
  margin-bottom: 1rem;
  gap: 0.281rem;
`;

export const MilestonePlaceholder = styled.div<Props>`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => (props.suspended ? "#FFB100" : "#00c4ff")};
`;

export const FundsBubble = styled.div<Props>`
  ${(props) => {
    if (props.active) {
      return `
        background: #FFB100;
        opacity: 1;
        box-shadow: 0px 0px 10px #FFED89;
        
      `;
    } else {
      return `
        background: #FFB100;
        opacity: 0.45;
    
      `;
    }
  }};
  border-radius: 50%;
  width: 0.438rem;
  height: 0.438rem;
`;

export const FundsPlaceholder = styled.div<Props>`
  font-size: 14px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  color: ${(props) => (props.suspended ? "#FFB100" : "#3aedc4")};
  text-align: left;
  white-space: nowrap;
`;
