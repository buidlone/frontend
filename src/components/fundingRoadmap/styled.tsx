import styled, { css } from 'styled-components';

interface Props {
  progress?: number;
  funds?: number;
}

export const FProgress = styled.div<Props>`
  background-color: #00ffc4 !important;
  left: 0;
  position: relative;
  //max-width: 100%;
  width: ${(props) => props.progress}% !important;
  transition: 0.3s;
  opacity: 1 !important;

  &:after {
    content: '${(props) => props.funds}';
    position: absolute;
    font-size: 0.625rem;
    font-family: 'Barlow', sans-serif;
    color: #e2e2e2;
    top: 300%;
    white-space: nowrap;
  }
`;
export const FundsBar = styled.div`
  width: 100%;
  height: 7px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  &:before,
  & > ${FProgress} {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 7px;
    width: 100%;
    background-color: #00c4ff8f;
    opacity: 0.5;
    //margin-left: 0.09rem;
  }
`;

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
  z-index: -1;
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
  z-index: 2;
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
