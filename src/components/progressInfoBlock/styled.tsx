import styled, { css } from "styled-components";
import { Property, Data, FlexItem1 } from "../detailsBlock/styled";
import { InfoIcon } from "../timelineBlock/styled";

interface isDisabled {
  disabled?: boolean;
}

export const DetailsCard = styled.div`
  display: block;
  background: #2e314d 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000029;
  border-radius: 13px;
  opacity: 1;
  width: 520px;
  height: 368px;
  margin: 35px;
  margin-left: 25px;
  padding: 15px 30px;
  margin-top: 50px;
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
    margin-top: 16px;
    margin-bottom: 17px;
    font-family: "barlow", sans-serif;
    opacity: 0.5;
  }
`;

export const GreyLine = styled.div`
  border-bottom: 2px solid #707070;
  opacity: 1;
  padding-top: 16px;
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
  background: #2e314d 0% 0% no-repeat padding-box;
  border: 1px solid #f68503;
  border-radius: 10px;
  opacity: 1;
  width: 80%;
  height: 40px;
  color: #f68503;
  font-size: 16px;
  font-family: "Space Grotesk", sans-serif;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

export const KeysWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  opacity: 1;
  font-family: "Space Grotesk", sans-serif;
  color: #f68503;
  font-size: 13px;
  gap: 0.5rem;
`;

export const InfoIconKeys = styled(InfoIcon)`
  width: 17px;
  height: 17px;
  padding: 0.7px 1px 0 0;

  &::after {
    font-size: 13px;
  }
`;
