import styled from "styled-components";
import { CheckMark } from "../../../components/progressRoadmap/styled";

export const InnerContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  height: 16.871rem;
  justify-content: center;
  align-items: center;

  &.voting {
    height: 14.246rem;
  }
`;

export const ConfirmedIcon = styled.div`
  background: #3aedc4 0% 0% no-repeat padding-box;
  height: 5.5rem;
  width: 5.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & > ${CheckMark} {
    width: 3.006rem;
    height: 1.964rem;
    top: 38%;
    left: 40%;
    border-left: 6px solid #2e314d;
    border-bottom: 6px solid #2e314d;
  }

  &.voting {
    background: #ffb100;
  }
`;

export const InnerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
