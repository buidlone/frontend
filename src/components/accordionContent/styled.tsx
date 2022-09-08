import styled, { css, keyframes } from "styled-components";

interface Props {
  itemName?: any;
  isActive?: boolean;
}

export const AccordionContainer = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: inherit;
  border-radius: inherit;
`;

export const AccordionButton = styled.div`
  border-color: transparent;
  background: none;
  white-space: wrap;
  padding: 1rem 1rem;
  font-size: 14px;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  color: #858ec7;
  opacity: 1;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: left;
`;

export const AccordionButtonIcon = styled.span<Props>`
  transform: rotate(${(props) => (props?.isActive ? -180 : 0)}deg);
  transition: all 0.2s;
`;

export const AccordionSeparator = styled.div`
  width: 100%;
  height: 0px;
  border: 0.05px solid #0e0f19;
  opacity: 0.7;
`;

export const Inner = styled.div`
  position: absolute;
  padding: 1 rem;
  color: white;
  width: 100%;
`;

export const Content = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  overflow: visible;
  position: relative;
  width: 100%;
  height: ${(props) => {
    const inner = document.getElementById(props.itemName);
    return `${props.isActive && inner ? inner.clientHeight : 0}px`;
  }};

  transition: height 0.35s ease-out;
`;
