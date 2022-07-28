import styled, { css } from "styled-components";

export const HorizontalLine = styled.div`
  width: 100%;
  height: 7px;
  background: #00ffc4;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const VerticalLine = styled.div`
  height: 80px;
  width: 1px;
  background: transparent;
  border-left: 2px dashed rgb(255 255 255 / 50%);
  position: absolute;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const RoadmapBubble = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f1f9ff;
  border: 1px solid #157fc1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3px;
`;

export const TextAboveDashed = styled.text`
  position: relative;
  color: rgb(255 255 255 / 50%);
  font-size: 16px;
  top: -40px;
  width: 90px;
  left: -45px;
  position: absolute;
  text-align: center;
`;

export const TextWhite = styled.text`
  position: relative;
  color: #e5e3ff;
  font-size: 16px;
  width: 90px;
  left: -45px;
  top: -20px;
  position: absolute;
  text-align: center;
`;
