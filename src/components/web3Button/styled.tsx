import styled, { css } from "styled-components";

export const ConnectWalletBtn = styled.button`
  width: 13.563rem;
  height: 2.3rem;
  border-radius: 18px;
  background: transparent;
  color: #00c4ff;
  border: 1px solid #00c4ff;
  text-align: center;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 250ms ease-in;
  transform: translateX(0);
  font-family: "Barlow", sans-serif;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
    border: 1px solid white;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 0.85rem;
  }
`;
