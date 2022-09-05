import styled, { css, keyframes } from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  position: relative;

  td,
  th {
    padding: 26px 0px;
    border: none;
    text-align: center;
    font-family: "Barlow", sans-serif;
    font-weight: 300;
  }

  th,
  .phase {
    color: rgba(0, 196, 255, 0.5);
    font-family: "Barlow", sans-serif;
    font-weight: 300;
    font-size: 14px;
  }

  .fund {
    color: #00ffc4;

    font-size: 16px;
  }

  .token {
    color: #00c4ff;
    font-size: 16px;
  }

  /*Responsive*/
  @media screen and (max-width: 1210px) {
    thead {
      display: none;
    }

    &,
    tbody,
    tr,
    td {
      display: block;
      width: 100%;
    }

    tr {
      margin-bottom: 15px;
    }

    td {
      text-align: right;
      padding-left: 50%;
      position: relative;

      &::before {
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: 50%;
        font-family: "Barlow", sans-serif;
        font-weight: 300;
        color: rgba(0, 196, 255, 0.5);
        font-family: "Barlow", sans-serif;
        font-weight: 300;
        font-size: 14px;
        text-align: left;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 4rem;

  a {
    text-decoration: underline;
    font-size: 14px;
    font-family: "Barlow", sans-serif;
    font-weight: 300;
    color: rgba(133, 142, 199, 1);
    text-align: center;
  }
`;
