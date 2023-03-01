import styled from "styled-components";

import { CloseButton } from "../../../components/investModal/styled";
import { DemoProjectLogo } from "../demoProjectInfoBlock/styled";

interface Props {
  vote?: boolean;
  feedback?: boolean;
}

export const MessagesModalCloseBtn = styled(CloseButton)`
  background: #161e3b 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  left: 96%;
  top: -3%;

  &::after,
  &::before {
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 18px;
    background-color: #363e7e;
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: top left;
    content: "";
  }
  &::after {
    transform: rotate(-45deg) translate(-50%, -50%);
  }
`;

export const DMessagesModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 48.563rem;
  width: 100%;
  min-height: 29.563rem;
  z-index: 9999;
  position: relative;
  background: #0d0b1a;
  box-shadow: 0px 0px 20px #000000dd;
  border-radius: 20px;
  margin: 0rem 3rem;
  flex-shrink: 1;
`;

export const LogoSectionWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 11.313rem;
  padding: 2.875rem 2.875rem 0rem 2.688rem;
`;

export const DemoMessagesProjectLogo = styled(DemoProjectLogo)`
  width: 5.75rem;
  height: 5.75rem;
  background: #221f36 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #00c4ff;
`;

export const ChatSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #2e314d;
  box-shadow: 0px 0px 10px #00000029;
  border-radius: 0px 20px 20px 0px;
  width: 37.25rem;
  padding: 0.938rem 2.938rem 0rem 1.276rem;
`;
export const BottomSection = styled.div`
  display: flex;
  height: 3.924rem;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 0.5rem;
`;

export const RoundButton = styled.button<Props>`
  background: transparent;
  border: ${(props) =>
    props.vote ? "1px solid #ffc400" : "1px solid #3AEDC4"};
  border-radius: 17px;
  opacity: 1;
  width: ${(props) => (props.feedback ? "14.938rem" : "10.563rem")};
  height: ${(props) => (props.feedback ? "2.5rem" : "2.063rem")};
  font-size: ${(props) => (props.feedback ? "18px" : "16px")};
  font-family: ${(props) =>
    props.feedback
      ? `"IBM Plex Sans", sans-serif`
      : `"Space Grotesk", sans-serif`};

  color: ${(props) => (props.vote ? "#ffbc0d" : "#3AEDC4")};
  font-weight: 500;
  cursor: pointer;

  &.filled {
    color: #000000;
    background: #ffbc0d;
    background: ${(props) =>
      props.vote ? "#ffbc0d" : props.feedback ? "#19E6B7" : "#3AEDC4"};
    border: none;
    box-shadow: ${(props) =>
      props.feedback ? "0px 0px 15px #00FFC4" : "none"};
  }
`;
