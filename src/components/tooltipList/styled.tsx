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

  .funds {
    font-size: 14px;
    &::marker {
      content: "";
      font-weight: 700;
      font-family: "Barlow", sans-serif;
      font-size: 13px;
      opacity: 0.5;
    }
  }
`;
