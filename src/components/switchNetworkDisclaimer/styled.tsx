import styled, { css } from "styled-components";

export const SwitchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.813rem;
  height: 1.875rem;
  background: transparent;
  color: white;
  border: 1px solid white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: all 250ms ease-in;
  transform: translateX(0);
  font-family: "Space Grotesk", sans-serif;
  box-shadow: 0px 0px 2px #ffffff;
  border: 1px solid #ffffff;
  border-radius: 22px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
    background: rgba(244, 244, 244, 0.37) 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 2px #ffffff;
    border: none;
    border-radius: 22px;
  }
`;
