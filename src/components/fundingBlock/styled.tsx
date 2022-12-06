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
  justify-content: flex-end;

  width: 100%;
  height: 100%;
  gap: 30%;
  padding-top: 22%;
  padding-bottom: 4%;
`;

export const Title = styled.text`
  color: rgb(255 255 255 / 50%);
  font-size: 12px;
  font-family: "IBM Plex Sans", sans-serif;
`;

export const StyledA = styled.a`
  color: #00ffc4;
  font-family: "IBM Plex Sans", sans-serif !important;
  font-size: 11px;
  text-decoration: underline;
  text-align: center;
`;

export const GreenButton = styled.button`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 200;
  width: 50%;
  height: 40px;
  color: white;
  text-align: center;
  font-size: 20px;
  transition: 9s ease-in;
  transform: translateX(0);
  cursor: pointer;
  background: transparent linear-gradient(167deg, #3aedc4 0%, #469898 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #00ffc4;
  border-radius: 12px;
  opacity: 1;
  margin-left: auto;

  &:hover {
    background: transparent linear-gradient(168deg, #3a8372 0%, #00ffc4 100%) 0%
      0% no-repeat padding-box;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
