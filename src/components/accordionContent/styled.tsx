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

export const AccordionBorder = styled.div<Props>`
width: ${(props) => (props?.isActive ? '100%' : '20%')};
height: 1px;
background: #00C4FF;
display: block;
margin-left: auto;
margin-right: auto;
transition: 1s;
opacity: ${(props) => (props?.isActive ? '1' : '0.5')};
`;

export const AccordionButton = styled.div<Props>`
  background: none;
  white-space: wrap;
  padding: 0.5rem 0.5rem;
  font-size: 14px;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  color: #00C4FF;
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
  opacity: ${(props) => (props?.isActive ? '1' : '0.5')};
`;

export const AccordionButtonIcon = styled.span<Props>`
  transform: rotate(${(props) => (props?.isActive ? -180 : 0)}deg);
  transition: all 0.2s;
  cursor: pointer;
`;

export const AccordionSeparator = styled.div`
  width: 100%;
  height: 0px;
  opacity: 0.7;
`;

export const Inner = styled.div`
  position: absolute;
  // padding: 0px 50px;
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
