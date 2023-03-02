import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import { DemoProjectLogo } from "../demoProjectInfoBlock/styled";

export const ChatScrollContainer = styled(ScrollContainer)`
  margin-bottom: 1.5rem;
  width: 100%;
  height: 22.701rem;
  overflow: auto !important;
`;

export const ChatWindow = styled.div`
  padding-top: 18rem;
  width: 100%;
  padding-left: 1.224rem;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

export const MessageContainer = styled.div`
  width: 100%;
  min-height: 3.375rem;
  display: flex;
  flex-direction: row;
  gap: 0.813rem;
`;

export const UserLogo = styled(DemoProjectLogo)`
  width: 3.375rem;
  height: 3.375rem;
  background-color: #0d0b1a;
  flex-shrink: 0;
`;

export const MessageContent = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
`;

export const MessageDetails = styled.div`
  text-align: left;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #9b9898;

  .owner {
    color: #00c4ff;
  }

  .investor {
    color: #00ffc4;
  }
`;

export const MessageText = styled.div`
  height: 100%;
  text-align: left;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #f0eded;
`;
