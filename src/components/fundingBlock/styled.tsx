import styled, { css } from "styled-components";

export const BlockWrapper = styled.div`
  background: #202337;
  border-radius: 20px;
  height: 359px;
  width: 625px;
  padding: 30px;
  position: relative;
`;

export const Title = styled.text`
  color: rgb(255 255 255 / 50%);
  font-size: 16px;
`;

export const StyledA = styled.a`
  color: #00ffc4;
  font-size: 14px;
  text-decoration: underline;
  text-align: center;
  position: absolute;
  bottom: -30px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

export const GreenButton = styled.button`
  background: transparent linear-gradient(168deg, #00ffc4 0%, #3a8372 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #00ffc4;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  color: white;
  text-align: center;
  font-size: 20px;
  transition: 9s ease-in;
  transform: translateX(0);
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  &:hover {
    background: transparent linear-gradient(168deg, #3a8372 0%, #00ffc4 100%) 0%
      0% no-repeat padding-box;
  }
`;

export const BottomWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;
