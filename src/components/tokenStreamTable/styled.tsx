import styled, { css, keyframes } from "styled-components";

interface Props {
  assets?: boolean;
}

export const Table = styled.table<Props>`
  width: 100%;
  border-collapse: collapse;
  position: relative;

  td,
  th {
    padding: ${(props) => (props.assets ? "1.768rem 2.516rem" : "26px 0px")};
    border: none;
    text-align: center;
    font-family: "Barlow", sans-serif;
    font-weight: 300;
  }

 tr {
   border-top: 1px solid rgba(0, 196, 255, 0.2);
 }

 td {
   padding: 10px;
 }

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

  ${(props) =>
    !props.assets &&
    css`
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
    `}
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

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2.688rem;
  padding: 1.768rem 2.516rem;
`;

export const InvButton = styled.button`
  border-color: transparent;
  background: none;
  white-space: wrap;

  font-size: 16px;
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  color: rgba(0, 255, 196, 1);
  outline: none;
  text-decoration: underline;
  cursor: pointer;
  overflow: hidden;

  &:focus,
  &:hover {
    /* color: #ffffff;
    border-bottom: 0.2px solid #ffffff; */
  }
`;
