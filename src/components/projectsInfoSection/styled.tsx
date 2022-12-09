import styled, { css } from "styled-components";

export const InfoSec = styled.section`
  display: flex;
  align-items: start;
  padding-top: 6rem;
  justify-content: flex-start;
  padding-bottom: 8rem;
  flex-wrap: wrap;

  flex-direction: column;
  width: 100%;
  gap: 0.65rem;
`;

export const TopText = styled.div`
  width: 50%;
  font-size: 61px;
  color: rgba(255, 255, 255, 1);
  opacity: 0.85;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
`;

export const BottomText = styled.div`
  margin-top: 1.3rem;
  margin-left: 1.4rem;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: rgba(0, 196, 255, 0.85);
  text-align: left;
  white-space: nowrap;
  position: relative;
  text-decoration: underline;

  &:before {
    content: "";
    background: #ffc400 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #ffed89;
    opacity: 1;
    border-radius: 50%;
    right: calc(100% + 0.4rem);
    top: 21%;
    width: 0.85rem;
    height: 0.85rem;
    position: absolute;
  }
`;

export const Line = styled.div`
  width: 55%;
  height: 1px;
  border-bottom: 1px solid #00c4ff;
`;
