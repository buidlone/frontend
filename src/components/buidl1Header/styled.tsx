import styled, { css } from "styled-components";

export const BackgroundBlur = styled.div`
  background-image: url("/header_blur.png");
  background-size: 103% 100%;
  background-repeat: no-repeat;
`;

export const Divider = styled.div`
  height: 1px;
  border-bottom: 1px solid #00c4ff;
`;
export const HeaderSection = styled.div`
  width: 100%;
  padding-left: 0.2%;
  padding-bottom: 0.457rem;
  height: 26.188rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: default;
  position: relative;

  color: #f0f0f0;

  .lastLine {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    padding-top: 5.5%;
  }
`;
export const HeaderLabel = styled.div`
  padding-top: 5%;
  text-align: left;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  font-size: 52px;
  margin-bottom: 0.8rem;
  margin-left: -2.6px;
`;
export const HeaderInfo = styled.div`
  text-align: left;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  max-width: 744px;
  margin-bottom: 1.7rem;
`;

export const HeaderInline = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.015rem;
`;

export const PersonalInfo = styled.div`
  border: 1px solid;
  border-radius: 20px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  font-size: 1.188rem;
  padding: 0.3rem 1.3rem;

  &.investment {
    border-color: #3aedc4;
    color: #3aedc4;
  }

  &.reward {
    border-color: #00c4ff;
    color: #00c4ff;
  }

  &.impact {
    border-color: #ffc400;
    color: #ffc400;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const RoundSection = styled.div`
  cursor: default;
  width: 100%;
  height: 4.5rem;
  background: #13131d 0% 0% no-repeat padding-box;
  color: black;
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
`;

export const Round = styled.div`
  margin-left: 2rem;
  font-size: 19px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  color: #3aedc4;
  text-align: left;
  white-space: nowrap;
  position: relative;

  &:before {
    content: "";
    background: #3aedc4 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 6px #3aedc4;
    opacity: 1;
    border-radius: 50%;
    right: calc(100% + 0.9rem);
    top: 21%;
    width: 0.85rem;
    height: 0.85rem;
    position: absolute;
  }
`;
