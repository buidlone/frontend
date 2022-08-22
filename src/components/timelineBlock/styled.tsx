import styled, { css } from 'styled-components';

export const TopWrapper = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 3px 0 5px;

  .buttons {
    gap: 1rem;
    margin-right: 5px;
  }
`;

export const SizeBubble = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3px;
  background: #00c4ff 0% 0% no-repeat padding-box;
`;

export const XButton = styled.button`
  background: #2e436c;
  width: 25.97px;
  height: 25.57px;
  border: none;
  border-radius: 50%;
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  opacity: 1;
  text-align: center;
  font-size: 15px;
  cursor: pointer;

  &:focus,
  &:hover {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
    background: #00c4ff;
  }
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 5rem;

  .centerItems {
    align-items: end;
  }
`;

export const BottomPartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 7px;
  margin-left: 10px;
  font-family: 'Barlow', sans-serif;
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

export const InlineWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  opacity: 1;
  font-family: 'Barlow', sans-serif;
  color: #dbdbdb;
  font-size: 12px;
  gap: 0.5rem;
`;
