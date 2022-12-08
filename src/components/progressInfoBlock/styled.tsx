import styled, { css } from "styled-components";
import { TableLink } from "../activeBlock/styled";
import { Property, Data, FlexItem1 } from "../detailsBlock/styled";
import { InfoIcon } from "../timelineBlock/styled";

interface isDisabled {
  disabled?: boolean;
}

export const DetailsCard = styled.div`
  display: block;
  background: #2e314d 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000029;
  border-radius: 10px;
  opacity: 1;
  width: 31.063rem;
  height: 368px;
  margin: 35px;
  margin-left: 25px;
  padding: 15px 30px;
  margin-top: 50px;

  .votes {
    color: #ffc400;
    opacity: 1 !important;
  }
`;
export const UpperBlock = styled.div`
  height: 70%;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  .centerItems {
    align-items: end;
  }
`;

export const DetailsInfoWrapper = styled(FlexItem1)`
  & > ${Property}, & > ${Data} {
    font-size: 14px;
    margin-top: 12px;
    margin-bottom: 12px;
    font-family: "barlow", sans-serif;
    opacity: 0.5;
  }
`;

export const GreyLine = styled.div`
  border-bottom: 2px solid #707070;
  opacity: 1;
  padding-top: 12px;
  opacity: 0.5;
`;

export const BottomPartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  margin: 5px auto;
`;

export const OrangeButton = styled.button<isDisabled>`
  background: #2e314d;
  border: 1px solid #ffb100;
  border-radius: 15px;
  opacity: 1;
  width: 35%;
  height: 1.9rem;

  font-size: 16px;
  font-family: "IBM Plex Sans", sans-serif;
  color: #ffb100;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  margin-left: auto;

  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const VotingWrapper = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: center;
  opacity: 1;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  color: #ffb100;
  font-size: 14px;
  gap: 0.5rem;

  .votingPower {
    font-weight: 600;
  }
`;

export const BottomBlock = styled.div`
  height: 30%;
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 35%;
`;

export const InlineBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  & > ${TableLink} {
    color: #00c4ff;
    font-size: 11px;
    font-weight: 400;
    margin-left: 0.5rem;
    padding-top: 0.3rem;
  }
`;
