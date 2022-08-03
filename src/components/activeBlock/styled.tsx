import styled, { css } from 'styled-components';

export const ActiveTable = styled.table`
  opacity: 0.7;
  border-collapse: collapse;
  border: transparent 1px solid;
  width: 100%;
  border-radius: 23px;
  height: 100%;
  background: #2e314d 0% 0% no-repeat padding-box;
  cursor: default;

  .firstRow {
    border-bottom: 1px solid #ffffff;
  }

  .secondRow {
    background: #373b5f 0% 0% no-repeat padding-box;
  }
  .thirdRow {
    height: 117px;
  }

  .bigger {
    font-size: 21px;
  }

  .medium {
    font-size: 19px;
  }

  .smaller {
    font-size: 18px;
  }

  .blue {
    color: #00c4ff;
    opacity: 1;
  }

  .green {
    color: #00ffc4;
  }

  .underlined {
    text-decoration: underline;
  }

  .invBtn {
    background: transparent linear-gradient(170deg, #00ffc4 0%, #3a8372 100%) 0%
      0% no-repeat padding-box;
    border: 1px solid #00ffc4;
    border-radius: 12px;
    font-family: 'Barlow', sans-serif;
    color: #ffffff;

    &:hover {
      background: transparent linear-gradient(168deg, #3a8372 0%, #00ffc4 100%)
        0% 0% no-repeat padding-box;
    }
  }

  .insBtn {
    background: #2e314d 0% 0% no-repeat padding-box;
    border: 1px solid #00c4ff;
    border-radius: 10px;
    color: #00c4ff;
    font-family: 'Space Grotesk', sans-serif;
  }
`;

export const FlexRow1 = styled.tr``;

export const BottomButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 1.5rem;
`;

export const Data = styled.td`
  color: #ffffff;
  font-family: 'Barlow', sans-serif;
  font-size: 20px;
  text-align: left;
  opacity: 1;
  text-align: left;
  padding: 25px;
`;

export const TableButton = styled.button`
  width: 199px;
  height: 40px;
  opacity: 1;
  font-size: 18px;
  text-align: center;
  font-size: 20px;
  transition: 9s ease-in;
  transform: translateX(0);
  cursor: pointer;
  
`;

export const TableLink = styled.a`
  color: #d6d6d6;
  font-size: 11px;
  text-decoration: underline;
  text-align: left;
  font-family: 'IBM Plex', sans-serif;
  opacity: 1;
`;
