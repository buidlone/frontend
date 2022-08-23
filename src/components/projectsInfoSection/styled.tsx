import Image from 'next/image';
import styled, { css } from 'styled-components';

export const InfoSec = styled.section`
  display: flex;
  align-items: start;
  justify-content: center;
  padding-bottom: 120px;
  flex-wrap: wrap;
`;

export const TextWrapper = styled.div`
  margin-right: 40px;
  flex: 1;
  z-index: 10;
`;

export const ImgWrapper = styled.div`
  margin-top: 20px;
  margin-left: -70px;
  flex-shrink: 0;
  background: transparent
    radial-gradient(closest-side at 50% 50%, #00c4ff 0%, #00c4ff00 100%) 0% 0%
    no-repeat padding-box;
  mix-blend-mode: overlay;
  opacity: 0.2;
`;

export const Img = styled(Image)`
  opacity: 0.3;
  filter: drop-shadow(0 -6mm 4mm #4dc9ef);
`;

export const TopText = styled.p`
  font-size: 65px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
  opacity: 0.85;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
`;
export const MiddleText = styled.p`
  font-size: 24px;
  color: grey;
  margin-bottom: 10px;
  opacity: 0.85;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;

export const BottomText = styled.p`
  font-style: italic;
  font-size: 22px;
  color: rgba(0, 196, 255, 1);
  margin-top: 10px;
  opacity: 0.85;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
`;

export const Line = styled.div`
  border-bottom: 1px solid #00c4ff;
`;
