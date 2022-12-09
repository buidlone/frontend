import styled, { css } from "styled-components";

interface Props {
  suspended?: boolean;
}

export const TextWrapper = styled.div<Props>`
  width: 100%;
  height: 10%;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  font-family: "IBM Plex Sans", sans-serif;
  color: #a5a5a5;
  opacity: 1;

  .topText {
    font-size: 0.75rem;
    font-weight: 400;
    font-family: "IBM Plex Sans", sans-serif;
    color: #a5a5a5;
    opacity: 1;
    margin-bottom: 0.2rem;
  }

  .daysLeft {
    font-size: 1.313rem;
    font-family: "Roboto", sans-serif;
    color: ${(props) => (props.suspended ? "#FFB100" : "#00c4ff")};
    opacity: 1;
  }
`;
