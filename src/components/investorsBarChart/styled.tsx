import ScrollContainer from "react-indiana-drag-scroll";
import styled, { css, keyframes } from "styled-components";
import { BlockWrapper } from "../fundingBlock/styled";

interface Props {
  amount?: number;
}

export const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const BarChartBlock = styled(BlockWrapper)`
  width: 20%;
  min-width: 17.688rem;
  height: 18.688rem;
  background: #222235;
  border-radius: 27px;
  padding: 1rem 1.845rem;
`;

export const BarChartScroll = styled(ScrollContainer)`
  display: flex;
  overflow-y: hidden;
  position: relative;

  &::-webkit-scrollbar {
    height: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    background: #1d1e2e 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
  }

  &&::-webkit-scrollbar-thumb {
    background: #2e436c 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 4px;
    opacity: 1;
    width: 12.688rem;
  }
`;

export const BarChartColumn = styled.div<Props>`
  min-width: 0.313rem;
  height: 11.5rem;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  flex: 1;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 96%;
    height: ${(props) => props.amount}%;
    bottom: 0;
    transform: matrix(-1, 0, 0, -1, 0, 0);
    background: transparent
      linear-gradient(
        180deg,
        #00ffc4 0%,
        #00ffc4 10%,
        #2e436c 86%,
        #2e436c 100%
      )
      0% 0% no-repeat padding-box;
    opacity: 1;
  }
`;

export const InvHeader = styled.div`
  text-align: center;
  font-size: 14px;
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  color: rgba(0, 196, 255, 1);
  margin: 0 auto;
  margin-bottom: 1.528rem;
`;

export const InvFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 2%;
`;

export const InvFooterItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-family: "Barlow", sans-serif;
  font-weight: 300;

  .text {
    font-size: 12px;
    color: #d9d9d9;
  }

  .amount {
    font-size: 14px;
    color: #00ffc4;
  }
`;
