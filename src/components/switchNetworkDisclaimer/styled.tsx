import styled, { css } from "styled-components";

export const SwitchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13.563rem;
  height: 1.4rem;
  border-radius: 6px;
  background: transparent;
  color: white;
  border: 1px solid white;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms ease-in;
  transform: translateX(0);
  font-family: "Barlow", sans-serif;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #00c4ff;
    border: 1px solid #00c4ff;
  }
`;
