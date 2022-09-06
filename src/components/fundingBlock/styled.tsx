import styled, { css } from "styled-components";

export const BlockWrapper = styled.div`
  background: #202337;
  border-radius: 20px;
  height: 23.5rem;
  width: 49%;
  min-width: 39.063rem;
  padding: 30px;
  position: relative;
`;
export const FContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20%;
`;

export const Title = styled.text`
  color: rgb(255 255 255 / 50%);
  font-size: 12px;
  font-family: "IBM Plex" sans-serif;
`;

export const StyledA = styled.a`
  color: #00ffc4;
  font-size: 14px;
  text-decoration: underline;
  text-align: center;
  bottom: -30px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

export const GreenButton = styled.button`
  width: 55%;
  height: 40px;
  color: white;
  text-align: center;
  font-size: 20px;
  transition: 9s ease-in;
  transform: translateX(0);
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  background: transparent linear-gradient(120deg, #00ffc4 0%, #008062 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #00ffc4;
  border-radius: 12px;
  opacity: 1;

  &:hover {
    background: transparent linear-gradient(168deg, #3a8372 0%, #00ffc4 100%) 0%
      0% no-repeat padding-box;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
