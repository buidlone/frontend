import styled from "styled-components";
import { DemoProjectLogo } from "../demoProjectInfoBlock/styled";

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

export const VoteButton = styled.button`
  background: transparent;
  border: 1px solid #ffc400;
  border-radius: 17px;
  opacity: 1;
  width: 10.563rem;
  height: 2.063rem;
  font-size: 16px;
  font-family: "Space Grotesk", sans-serif;
  color: #ffbc0d;
  font-weight: 400;
  cursor: pointer;

  &.filled {
    color: #000000;
    background: #ffbc0d;
    border: none;
  }
`;
