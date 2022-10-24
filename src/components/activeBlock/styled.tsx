import styled, { css } from "styled-components";
import { InlineWrapper } from "../timelineBlock/styled";

interface isDisabled {
  disabled?: boolean;
}

export const TableLink = styled.a`
  color: rgba(214, 214, 214, 1);
  font-size: 11px;
  text-decoration: underline;
  text-align: left;
  font-family: "IBM Plex Sans", sans-serif;
`;

export const TableButton = styled.button<isDisabled>`
  max-width: 11.408rem;
  width: 100%;
  height: 2.5rem;
  opacity: 1;
  font-size: 18px;
  text-align: center;
  font-size: 16px;
  transition: 9s ease-in;
  transform: translateX(0);
  cursor: pointer;
  border-radius: 10px;
  background: #2e314d 0% 0% no-repeat padding-box;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

export const ActiveBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 16.75rem;
  background-color: rgba(46, 49, 77, 0.5);
  border-radius: 23px;
  z-index: 9999;
  position: relative;

  .bigger {
    font-size: 21px;
  }

  .medium {
    font-size: 19px;
  }

  .smaller {
    font-size: 18px;
  }

  .white {
    color: rgba(255, 255, 255, 1);
  }

  .blue {
    color: rgba(0, 196, 255, 1);
  }

  .green {
    color: rgba(0, 255, 196, 1);
  }

  .orange {
    color: rgba(255, 137, 0, 1);
  }

  .underlined {
    text-decoration: underline;
  }

  .invBtn {
    background: transparent linear-gradient(170deg, #00ffc4 0%, #3a8372 100%) 0%
      0% no-repeat padding-box;
    border: 1px solid #00ffc4;
    border-radius: 12px;
    font-size: 18px;
    color: rgba(255, 255, 255, 1);

    &:hover {
      background: transparent linear-gradient(168deg, #3a8372 0%, #00ffc4 100%)
        0% 0% no-repeat padding-box;
    }
  }

  .claimBtn {
    border: 1px solid rgba(0, 196, 255, 1);
    color: rgba(0, 196, 255, 1);
  }

  .stopBtn {
    border: 1px solid rgba(255, 137, 0, 1);
    color: rgba(255, 137, 0, 1);
  }
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  position: relative;
  cursor: default;

  td,
  th {
    padding: 1.625rem 2.516rem 1.1rem 2.516rem;
    border: none;
    text-align: left;
    font-family: "Barlow", sans-serif;
    font-weight: 300;
    position: relative;
    color: #ffffff;
    font-size: 20px;

    .tokenSpan {
      right: -3%;
    }
  }
  th {
    border-bottom: 1px solid rgba(230, 230, 230, 0.3);
    padding-bottom: 1.1rem;
  }
  tr {
    background-color: rgba(46, 49, 77, 0.5);
  }

  tr:nth-child(1) td {
    padding: 1.625rem 2.516rem 0rem 2.516rem;
    white-space: nowrap;
  }

  tr:nth-child(2) td {
    padding: 0rem 2.516rem 0.5rem 2.516rem;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    white-space: nowrap;
  }

  td {
    &.flippable:hover {
      transition-delay: 10s;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 4.5rem;

  padding: 26px 2.516rem;
  position: relative;
  flex-shrink: 1;

  ${InlineWrapper} {
    position: absolute;
    left: 3%;

    @media screen and (max-width: 1100px) {
      top: 85%;
      left: 0%;
      padding: inherit;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  background: inherit;

  .thefront {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: inherit;
  }

  .theback {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: inherit;
    transform: rotateY(180deg);
  }
`;
