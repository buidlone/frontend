import styled, { css, keyframes } from "styled-components";
import Select from "react-select";
import Image from "next/image";

interface Props {
  isActive?: boolean;
  disabled?: boolean;
}

export const IModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  & > div {
    padding-top: 3.5px;
    font-family: "Barlow", sans-serif;
    font-weight: 300;
    text-decoration: underline 1px;
    color: rgba(0, 196, 255, 1);
    font-size: 21px;
    pointer-events: none;
  }
`;

export const CloseButton = styled.button`
  background: #1d2647;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 50%;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  cursor: pointer;

  &::after,
  &::before {
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 52%;
    width: 4px;
    height: 18px;
    background-color: #363e7e;

    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: top left;
    content: "";
  }

  &::after {
    transform: rotate(-45deg) translate(-50%, -50%);
  }
`;

export const IModalForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OutputField = styled.div`
  height: 40px;
  box-shadow: inset 0px 3px 6px #0000009f;
  border: 1px solid #111217;
  border-radius: 8px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 11px;
  text-align: left;
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  font-size: 21px;
  color: rgba(255, 255, 255, 0.5);
  cursor: default;

  .first {
    margin-right: auto;
  }

  .BDL1 {
    font-weight: 600;
    color: rgba(0, 196, 255, 0.5);
    font-size: 17px;
  }

  .voting1 {
    color: rgba(213, 213, 213, 0.5);
  }
  .voting2 {
    color: rgba(255, 177, 0, 1);
  }

  .voting1,
  .voting2 {
    text-align: left;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-size: 14px;
    padding-left: 2px;
  }
`;
export const InputField = styled.input`
  height: 2.5rem;
  background: #0e0f1a 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px #0000009f;
  border: none;
  border-radius: 8px;
  opacity: 1;
  outline: none;
  position: relative;
  padding-left: 1rem;

  &,
  &::placeholder {
    text-align: left;
    font-family: "Barlow", sans-serif;
    font-weight: 300;
    font-size: 21px;
    letter-spacing: 0px;
    color: #00ffc4;
    opacity: 1;
  }
`;
export const IModalFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .bottomText {
    text-align: left;
    font-size: 14px;
    font-family: "Barlow", sans-serif;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
  }
`;
export const IModalInputSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2.5rem 0rem 0.6rem 0rem;
  gap: 4rem;

  & > ${IModalFieldWrapper} {
    max-width: 23rem;
    width: 100%;
  }
`;

export const CurrencyInline = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 400;
  font-family: "Barlow", sans-serif;
  position: relative;

  .error {
    color: rgba(255, 0, 0, 1);
  }
`;

export const BalanceBtn = styled.div`
  white-space: nowrap;
  cursor: default;
  gap: 0.5rem;
  display: flex;
  text-align: left;
  position: absolute;
  right: 0%;
  top: -5%;
`;
export const MaxBalanceBtn = styled.button`
  max-width: 2rem;
  width: 100%;
  font-size: 13px;
  font-weight: 300;
  font-family: "Barlow", sans-serif !important;
  flex: 1;
  height: 20px;
  background: transparent;
  border: 1px solid rgba(0, 255, 196, 0.8);
  border-radius: 12px;
  opacity: 1;
  padding-left: 3.5px;
  text-align: center;
  transform: translateX(0);
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: #00ffc4;
  }
`;

export const InputLabel = styled.label`
  text-align: left;
  font-size: 14px;
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  padding-bottom: 0.375rem;
`;

export const SelectField = styled(Select)`
  width: 6.188rem;
  height: 2.5rem;
  position: absolute;
  top: -48%;
  left: 71%;

  .react-select__control {
    background: #1a1d38;
    box-shadow: 0px 3px 6px #000000a3;
    border-radius: 8px;
    border-color: #1a1d38;
    opacity: 1;
    width: 100%;
    height: 100%;

    &:hover {
      border-color: #1a1d38;
    }
  }

  .react-select__indicator-separator {
    background-color: #1a1d38;
  }

  .react-select__indicator {
    padding-left: 0;
    opacity: 0.6;
  }
  .react-select__menu {
    background: #1a1d38;
    box-shadow: 0px 3px 6px #000000a3;
    border-radius: 8px;
    border-color: #1a1d38;
  }
  .react-select__option {
    color: rgba(255, 255, 255, 0.5);
    font-size: 19px;
    background-color: #1a1d38;

    &:hover,
    &:active {
      background-color: #1a1d38;
      color: rgba(255, 255, 255, 1);
    }
  }
  .react-select__single-value {
    color: rgba(255, 255, 255, 0.5);
    font-size: 19px;
    background-color: #1a1d38;
  }
  .react-select__value-container {
    padding-right: 0;
  }
`;

export const ProceedButton = styled.button<Props>`
  max-width: 20rem;
  width: 100%;
  min-width: 14rem;
  flex: 1;
  height: 40px;
  background: transparent linear-gradient(165deg, #00ffc4 0%, #3a8372 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #00ffc4;
  border-radius: 12px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};

  color: white;
  text-align: center;
  font-size: 20px;
  transform: translateX(0);
  cursor: pointer;
  padding: 0 1rem 0 4rem;
  text-align: center;
  font-size: 18px;
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  letter-spacing: 0px;
  color: rgba(255, 255, 255, 1);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: transparent linear-gradient(168deg, #3a8372 0%, #00ffc4 100%) 0%
      0% no-repeat padding-box;
  }
  .arrow {
    font-size: 2rem;
  }
  .wait {
    height: 32px;
    background: transparent linear-gradient(165deg, #00ffc4 0%, #3a8372 100%) 0%
      0% no-repeat padding-box;
  }
`;
export const CheckboxLabel = styled.label`
  cursor: pointer;
  display: flex;
  text-align: left;
  align-items: center;
  font-size: 14px;
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  cursor: default;

  &::before {
    content: "";
    min-width: 1.25rem;
    height: 1.25rem;
    border-radius: 4px;
    margin-right: 0.688rem;
    border: 0.05em solid black;
  }
`;

export const Checkbox = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > ${CheckboxLabel}::before, ${Checkbox}:hover + ${CheckboxLabel}::before {
    background-color: #0e0f1a;
  }

  ${Checkbox}:hover + ${CheckboxLabel}::before {
    box-shadow: 0 0 15px black;
  }

  ${Checkbox}:checked + ${CheckboxLabel}::before {
    background-color: #00ffc4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    content: "✓   ";
    color: black;
  }
`;

export const BottomPartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Barlow", sans-serif;
  color: #dbdbdb;
  font-size: 12px;

  .dateNum {
    color: #00ffc4;
  }

  .dateWords {
    color: #00c4ff;
  }
  .period {
    color: #c7c7c7;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const IModalFormConfirmSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 0rem 0.6rem 0rem;
  gap: 4rem;

  & > ${ItemWrapper} {
    max-width: 23rem;
    width: 100%;
  }
`;

export const IModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(31, 35, 60, 0.58);
  box-shadow: 0px 0px 12px #00000093;
  flex-wrap: wrap;
  max-width: 77.063rem;
  width: 100%;
  min-height: 23.75rem;
  border-radius: 28px;
  z-index: 9999;
  position: relative;
  padding: 2.813rem 3.125rem;
  margin: 0 8.438rem;

  @media screen and (max-width: 1210px) {
    width: 30.813rem;
    padding: 2.813rem 5rem;
    align-items: center;
    ${IModalInputSectionWrapper}, ${IModalFormConfirmSection} {
      flex-direction: column;
      gap: 2rem;
    }

    ${IModalFormConfirmSection} {
      padding-top: 3rem;
    }

    ${SelectField} {
      top: -3.63rem;
    }

    ${ProceedButton} {
      margin-left: 0;
      padding: 0 1rem 0 1rem;
    }
  }
`;

export const ErrorMsg = styled.span`
  color: rgba(255, 0, 0, 1);
  position: absolute;
  bottom: 140%;
  font-size: 14px;
  font-weight: 400;
  font-family: "Barlow", sans-serif;
`;
