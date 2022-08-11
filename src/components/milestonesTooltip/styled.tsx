import styled, { css } from 'styled-components';

export const Tooltip = styled.div`
  visibility: hidden;
  width: 300px;
  background-color: #2e436c;
  box-shadow: 0px 0px 10px #00000029;

  text-align: left;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 9999 !important;
  bottom: 150%;
  left: 50%;
  margin-left: -150px;
  white-space: normal;

  font-size: 14px;
  color: #fff;
  font-family: 'barlow', sans-serif;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: #2e436c transparent transparent transparent;
  }
`;
