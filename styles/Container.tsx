import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  isFixed?: boolean;
}

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 3rem; // 50px
  position: relative;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const BgImage = styled.div<Props>`
  ${(props) => {
    if (props.isFixed) {
      return `
      position: absolute;
      z-index: 2;
      top: -35.75rem;
      max-width: 1400px;
      width: 100%;
      height: 1028px;
      background: transparent radial-gradient(closest-side at 50% 50%, #009DFF 0%, #0076FF00 100%) 0% 0% no-repeat padding-box;
      mix-blend-mode: color;
      opacity: 0.1;
      `;
    } else {
      return `
      position: absolute;
      z-index: 2;
      top: -23.75rem;
      max-width: 1400px;
      width: 100%;
      height: 664px;
      background: transparent
      radial-gradient(closest-side at 50% 50%, #00c4ff 0%, #00c4ff00 100%) 0% 0%
      no-repeat padding-box;
      mix-blend-mode: overlay;
      opacity: 0.2;
      `;
    }
  }};
`;
