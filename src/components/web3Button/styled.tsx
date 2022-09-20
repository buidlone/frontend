import styled, { css } from "styled-components";

export const ConnectWalletBtn = styled.button`
  width: 12.5rem;
  height: 40px;
  border-radius: 20px;
  background: transparent;
  color: #00c4ff;
  border: 1px solid #00c4ff;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  transition: all 250ms ease-in;
  transform: translateX(0);

  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
    border: 1px solid white;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;