import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 3rem; // 50px
  position: relative;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const BgImage = styled.div`
  position: absolute;
  z-index: 2;
  top: -380px;
  left: 123px;
  width: 1194px;
  height: 664px;
  background: transparent
    radial-gradient(closest-side at 50% 50%, #00c4ff 0%, #00c4ff00 100%) 0% 0%
    no-repeat padding-box;
  mix-blend-mode: overlay;
  opacity: 0.2;
`;
