import styled, { css } from 'styled-components';

export const AboutButton = styled.button`
  border-color: transparent;
  background: none;
  white-space: wrap;
  padding: 10px 20px;
  font-size: 18px;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  color: #c1c1c1;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:focus,
  &:hover {
    color: #ffffff;
    border-bottom: 0.2px solid #ffffff;
  }
`;

export const ButtonsWrapper = styled.div`
  margin: 90px 0 30px 0;

  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  padding-right: 2rem; ;
`;

export const AboutSec = styled.section`
  display: flex;
  align-items: start;
  justify-content: center;
  padding-bottom: 100px;
  flex-wrap: wrap;
`;
