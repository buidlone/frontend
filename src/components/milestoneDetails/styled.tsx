import styled, { css, keyframes } from "styled-components";

export const MilestoneDetailsWrapper = styled.div`
  width: 100;
  position: absolute;
  bottom: calc(100% + 0.2rem);
  width: 100%;
  height: 168px;
  display: flex;
  flex-direction: column;
  padding: 2.8% 8.1% 4% 8.1%;
  font-family: "Barlow", sans-serif;

  .taskTitle {
    color: rgba(0, 196, 255, 0.77);
    font-size: 12px;
    font-weight: 600;
    padding-bottom: 4.5%;
  }

  .description {
    color: rgba(0, 196, 255, 1);
    font-size: 11px;
    overflow-y: auto;
    z-index: 1;

    ::-webkit-scrollbar {
      width: 0 !important;
    }
  }
`;

export const InlineRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  .stage {
    color: rgba(227, 227, 227, 0.77);
    font-size: 11px;
  }

  .date {
    color: rgba(0, 196, 255, 1);
    font-size: 10px;
  }
`;
