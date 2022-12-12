import styled, { css } from "styled-components";

export const List = styled.ul`
  padding-inline-start: 20px;
  padding-inline-end: 25px;
  margin: 5px 0px;
  overflow-wrap: break-word;

  & > li:not(:last-child) {
    margin-bottom: 5px;
  }

  .completed {
    &::marker {
      content: "✓   ";
      color: rgba(0, 255, 196, 0.8);
      font-weight: 700;
      font-family: "Barlow", sans-serif;
      font-size: 13px;
      opacity: 0.5;
    }
  }

  .uncompleted {
    &::marker {
      content: "-    ";
      color: rgba(255, 255, 255, 0.5);
      font-weight: 700;
      font-family: "Barlow", sans-serif;
      font-size: 14px;
    }
  }

  /* .funds {
    font-size: 14px;
    &::marker {
      content: "";
      font-weight: 700;
      font-family: "Barlow", sans-serif;
      font-size: 13px;
      opacity: 0.5;
    }
  } */
`;
export const TooltipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;

  gap: 0.9rem;
  position: relative;

  .title {
    color: #00c4ff;
    font-family: "Barlow", sans-serif;
    font-size: 17px;
  }
`;

export const InfoBlock = styled.div`
  align-self: flex-start;
  width: 50%;
`;
export const InlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-between;

  .label {
    color: #f0f0f0;
    font-family: "Barlow", sans-serif;
    font-size: 12px;
  }

  .funds {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 15px;
    color: #00ffc4;
    white-space: nowrap;
  }

  .surplus {
    padding-top: 2%;
    width: 50%;
    padding-right: 5px;
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 10px;
    color: rgba(0, 255, 196, 0.5);
    white-space: nowrap;
  }
`;
