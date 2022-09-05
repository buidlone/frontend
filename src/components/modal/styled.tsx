import styled, { css, keyframes } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10%;
  overflow-y: scroll;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.4);
  background-size: cover;
  -webkit-backdrop-filter: blur(41px);
  backdrop-filter: blur(41px);
  padding-bottom: 10%;
`;
