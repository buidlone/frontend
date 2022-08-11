import styled, { css } from 'styled-components';
import { DetailsCard } from '../progressInfoBlock/styled';

export const ProgressBlockWrapper = styled.div`
  background: #1f233c 0% 0% no-repeat padding-box;
  border-radius: 28px;
  opacity: 1;
`;

export const ProgressRoadmap = styled.div`
  width: 690px;
  height: 370px;
  margin: 28px;
  flex: 1;
`;

export const ProgressContentWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 45px 0;

  @media screen and (max-width: 991px) {
    & > ${ProgressRoadmap}, & > ${DetailsCard} {
      max-width: 100%;
      flex-basis: 100%;
      justify-content: center;
    }
  } ;
`;
